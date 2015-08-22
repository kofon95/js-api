"use strict"

// if ("Promise" in window === false)
  window.Promise =

function(executor){
  var ok = null;
  var args;
  this.resolve = function(){
    ok = true;
    args = arguments;
    runQueue(thenArr);
  };
  this.reject = function(){
    ok = false;
    args = arguments;
    runQueue(catchArr);
  };


  var thenArr = [];
  this.then = function(f){
    if (ok === true){
      f.apply(this, args);
    } else if (ok === null) {
      thenArr.push(f);
    }
    return this;
  }

  var catchArr = [];
  this.catch = function(f){
    if (ok === false){
      f.apply(this, args);
    } else if (ok === null) {
      catchArr.push(f);
    }
    return this;
  }

  this.chain = function(f){
    if (ok !== null){
      f.apply(this, args);
    } else {
      thenArr.push(f);
      catchArr.push(f);
    }
    return this;
  }

  executor(this.resolve, this.reject);

  function runQueue(fns){
    for (var i = 0; i < fns.length; ++i)
      fns[i].apply(this, args);
  }
};