var Fn=Function
//MicroQuery Instances
//s=css selector
//j=context
//l=node list
W.$=function(s,j,l){
  if(I(s,Fn)&&j===U)return D.addEventListener('DOMContentLoaded',s,F);

  return $.extend(L(s,j),$.fn)
}

//Extend Object
//o=object
//l=list object extention
//--
//f=function in list
$.extend=function(o,l,d){
  var i=1,a=arguments
  if(I(l,U))return $.extend(this,o)
  if(!I(d,U))for(;i<a.length;++i)o=$.extend(o,a[i])
  else for(i in l)o[i]=l[i]

  return o
}

$.each=function(a,f){
  var i=0

  if(I(a,[]))for(;i<a.length;++i)C(a[i],f,i,a[i])
  else for(i in a)C(a[i],f,i,a[i])

  return a
}

$.map=function(a,f){
  var i=0,l=[],v

  if(I(a,[]))for(;i<a.length;++i)if((v=C(a[i],f,a[i],i))!==N)l.push(v)
  else for(i in a)if((v=C(a[i],f,a[i],i))!==N)l.push(v)

  return l
}

//add extension
$.fn={
  find:function(s){
    var x,l=[]

    for(x in this)l.push(L(s,this[x]))

    return $(C([],[].concat,l))
  },
  clone:function(){
    var x,l=[]

    for(x in this)l.push(this[x].cloneNode(T))

    return $(C([],[].concat,l))
  },
  get:function(i){
    return $(this[i]||U);
  },
  on:function(v,s,f){
    return B(this,v,s,f)
  },
  one:function(v,s,f){
    return B(this,v,s,f,T)
  },
  off:function(v,s,f){
    return B(this,v,s,f,F)
  },
  trigger:function(v){
    return B(this,v)
  }
}

$.each($,function(i,f){
  $.fn[i]=function(){
    C(this,f,arguments)

    return this
  }
})

$.type=function(o){
  return o===U||o===N?typeof o:O(o).constructor.name||typeof o
}
