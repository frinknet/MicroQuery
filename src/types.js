var types={}

$.extend({
  isArray:function(o){return I(o,[])},
  isNumeric:function(o){return !I(o,[])&&o-parseFloat(o)+1>=0},
  isFunction:function(o){return I(o,Function)},
  isWindow:function(o){return I(o,W)},
  isEmptyObject:function(o){return o==={}},
  isPlanObject:function(o){return I(o,{})},
});
