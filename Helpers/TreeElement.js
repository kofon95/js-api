var TreeElement = function(elem){
  this.getElem = function(){ return elem; }
  this.where = function(predicate){
    _allElems = []
    rec(elem, predicate);
    return _allElems;
  };
  
  var _allElems;
  function rec(findElem, predicate){
    var children = findElem.children;
    var len = children.length;

    for (var i = 0; i < len; ++i){
      var child = children[i];
      if (predicate(child, i)){
        _allElems.push(child);
      }
      rec(child, predicate);
    }
  }
}