var typ={
  makeArray:A,
  type:function(o){
    if(o===U||o===N)return typeof o
    return O(o).constructor.name.toLowerCase()||typeof o
  },
  isArray:function(o){return I(o,[])},
  isNumeric:function(o){return !I(o,[])&&o-parseFloat(o)+1>=0},
  isFunction:function(o){return I(o,Function)},
  isWindow:function(o){return I(o,W)},
  isEmptyObject:function(o){return o==={}},
  isPlanObject:function(o){return I(o,{})},
  isA:I
}

var msc={
  globalEval:function(c){
    var s=D.createElement('script')
    s.text=c
    D.head.appendChild(s).parentNode.removeChild(s)
  }
}
