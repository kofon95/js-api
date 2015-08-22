"use strict"

if ("Promise" in window === false)
  window.Promise =

function(executor){
  var ok = null;
  var parameter;
  this.resolve = function(e){
    ok = true;
    parameter = e;
    runQueue(thenArr);
  };
  this.reject = function(e){
    ok = false;
    parameter = e;
    runQueue(catchArr);
  };


  var thenArr = [];
  this.then = function(f){
    if (ok === true){
      f(parameter);
    } else if (ok === null) {
      thenArr.push(f);
    }
    return this;
  }

  var catchArr = [];
  this.catch = function(f){
    if (ok === false){
      f(parameter);
    } else if (ok === null) {
      catchArr.push(f);
    }
    return this;
  }

  this.chain = function(f){
    if (ok !== null){
      f(parameter);
    } else {
      thenArr.push(f);
      catchArr.push(f);
    }
    return this;
  }

  executor(this.resolve, this.reject);

  function runQueue(fns){
    for (var i = 0; i < fns.length; ++i)
      fns[i](parameter);
  }
};