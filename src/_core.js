/*©2015 FRINKnet - MIT license*/
//D=document
//W=window
//A=Array
//R=RegExp
//F=false
//N=null
//O=Object
//T=true
//C='call'
//P='prototype'
//U=undefined
(function(D,W,A,R,F,T,O,N,C,P,U){
"use strict"

//Selector List
//s=css selector/array/node/nodelist/htmlstring
//j=context
//l=node list
var sel=function(s,j,l){
  // set context if non-existent
  j=j&&j.nodeName?j:D.documentElement||D.body

  // find proper base list
  switch(T){
    case !!s._sel:
      return s
    case s instanceof A:
      l=$.map(s,sel)

      break
    case s===W:
    case s===D:
    case !!s.nodeName:
      // proper nodes get directly selected
      l=[s]
      break
    case /<\w+[^>]*>/.test(s):
      l=D.createElement(P)
      l.innerHTML=s
      l=l.childNodes
      break
    default:
      l=j.querySelectorAll(s)
  }

  // force initialization of list
  l=[].slice.apply(l)||[]
  l._sel=[s,j]

  return l
}

//MicroQuery Instances
//s=css selector
//j=context
//l=node list
W.$=function(s,j,l){
  if(typeof s==='function')
    return D.addEventListener('DOMContentLoaded',s,F);

  return $.extend(sel(s,j),$.fn)
}

//Extend Object
//o=object
//l=list object extention
//--
//f=function in list
$.extend=function(o,l,f){
  if(l===N)
    return $.extend(this,o)

  if(f){
    for(var x in arguments)o=$.extend(o,arguments[x])

    return o
  }

  for(f in l)switch(typeof l[f]) {
    case 'function':
    case 'object':
    case 'string':
    case 'number':
    case 'array':
      o[f]=l[f]
  }

  return o
}

$.each=function(a,f){
  if(a instanceof A){
    for(var i=0;i<a.length;++i)f[C](a[i],i,a[i])
  }else{
    for(var i in a)f[C](a[i],i,a[i])
  }

  return a
}

$.map=function(a,f,v,l){
  l=[]

  if(a instanceof A){
    for(var i=0;i<a.length;++i)if((v=f[C](a[i],a[i],i))!==N)l.push(v)
  }else{
    for(var i in a)if((v=f[C](a[i],a[i],i))!==N)l.push(v)
  }

  return l?[].concat.apply([],l):l
}

//add extension
$.fn={
  find:function(s,l){
    l=[]

    this.each(function(){
      l.push(sel(s,this))
    })

    return $([].concat.apply([],l))
  },
  clone:function(){
    l=[]

    this.each(function(){
      l.push(this.cloneNode(T))
    })

    return $([].concat.apply([],l))
  }
}

$.each($,function(n,f){
  $.fn[n]=function(o,n){
    f(this,o)

    return this
  }
})
})(document,window,Array,RegExp,false,true,Object,null,'call','prototype')