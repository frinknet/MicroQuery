W.$=function(s,j,l){
  return I(s,Function)&&j===U?D.addEventListener('DOMContentLoaded',s,F):O(L(s,j),$.fn)
}

$.extend=function(){
  return C(U,O,arguments)
}

$.each=function(a,f){
  var l=A(a),
  i=l.length

  while(i--)f.call(l[i],i,l[i])

  return a
}

$.map=function(a,f){
  return A(a).map(function(n,i){f(i,n)})
}

//add extension
$.fn={
  extend:function(){
    C(U,O,arguments.unshift(this))

    return this
  },
  each:function(f){
    return $.each(this,f)
  },
  map:function(f){
    return $.map(this,f)
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
  },
  attr:function(k,v){
    var a=this,
    i=a.length

    if(v!=U)while(--i)a[i].setAttribute(k,v)
    else return a[0].getAttribute(k)

    return a
  },
  data:function(k,v){
    var a=this,
    i=a.length

    if(v!=U)
      while(--i)(a[i].data=a[i].data||{})[k]=v
    else return (a[0].data||{})[k]

    return a
  },
  prop:function(k,v){
    var a=this,
    i=a.length

    if(v!=U)while(--i)a[i][k]=v
    else return a[0][k]

    return this
  },
  html:function(v){
    return this.prop('innerHTML',v)
  },
  text:function(v){
    return this.prop('innerText',v)
  },
  val:function(v){
    return this.prop('value',v)
  },
}

$.makeArray=A
$.isA=I
$.type=I
