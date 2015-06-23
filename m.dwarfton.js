/*2015 FRINKnet - MIT license*/
"use strict"

var DWARFTON=1.3,

//Document
D=document,
//Window
W=window,
//Arrayize
// o=object
// a=array
A=function(o,a){
  return [].slice.call(a=o!==U?a!==U?arguments:I(o,'',N,T,1)?[o]:o:[])
},
//Remote
R=function(){/*xhr Retrieve*/},
//False
F=false,
//True
T=true,
//Objectify
// o=object
O=function(o){
  var a=arguments,
  i=a.length,
  o=Object(o),
  x

  while(--i)for(x in O(a[i]))o[x]=a[i][x]

  return o
},
//Null
N=null,

//List
//s=selector
//p=parent
L=function(s,p){
  var l;

  p=p&&p.nodeName?p:D.documentElement

  switch(T){
    case s===U:
      break
    case !!s._sel:
      return s
    case I(s,[]):
      l=[].concat.apply([],s.map(L))
      break
    case I(s,W,D):
    case !!s.nodeName:
      l=[s]
      break
    case /<\w+[^>]*>/.test(s):
      l=D.createElement('p')
      l.innerHTML=s
      l=l.childNodes
      break
    case !!p.nodeName:
      l=p.querySelectorAll(s)
  }

  l=A(l)
  l._sel=[s,p]
  l.constructor=L

  return l
},
//Interogate
//o..=objects
I=function(o){
  var a=arguments,
  i=a.length,
  c='constructor',
  t=typeof o

  if(i==1)return o===N?'null':t=='object'?(c=O(o)[c])!=Object?c.name:t:t
  else while(--i)if(o===(t=a[i])||(o||o===""||o===F||o===0)&&(t||t===""||t===F||t===0)&&((o=O(o))[c]==O(t)[c]||o[c]==t))return T

  return F
},
//Bind
//l=list of elements
//v=event names
//s=selector for children
//f=function to trigger
//m=fire once
B=function(l,v,s,f,m){
  if(I(f,T,U))return B(l,v,N,s,f)

  l=L(l)

  if(v.split(" ").length>1) v.split(" ").forEach(function(v){
    B(l,v,s,f,m)
  })
  else if(f===N)l.forEach(function(n,e){
    if(D.createEvent){
      e=D.createEvent('HTMLEvents')

      e.initEvent(v,T,T)
      e.eventName=v
      n.dispatchEvent(e)
    }else{
      e=D.createEventObject()

      e.eventType=v
      e.eventName=v
      n.fireEvent("on"+v,e)
    }
  })
  else l.forEach(function(n,i){
    var x=function(f,i){
      if(n._evt||n._evt[v])for(i in n._evt[v])if(n._evt[v][i][0]===f){
        n.removeEventListener(v,n._evt[v][i][1])

        delete n._evt[v][i]
      }
    },

    z=function(e){
      var t=this,
      p=L(s?s:t,t===W?D:s?t:t),
      //fire parent
      y=function(t){
        if(p.indexOf(t)>-1){
          if(m===T)x(f)
          return f.call(t,e)
        }

        if(!t.parentNode)return
        return y(t.parentNode)
      }

      return y(e.srcElement)
    }

    if(m===F)return x(f)

    n._evt=n._evt||{}
    n._evt[v]=n._evt[v]||[]
    n._evt[v].push([f,z])

    n.addEventListener(v,z,F)
  })

  return l
},
S=function(t,k,v){
  var l=W.localStorage,
  s=W.sessionStorage,
  j=JSON,
  r,
  x=function(s,t){
    var n=D.createElement(s)

    n.innerText=t

    return D.head.appendChild(n)
  }

  if(t=='session')r=s?v==U?s.getItem(k):s.setItem(k,v):U
  else if(t=='local')r=l?v==U?l.getItem(k):l.setItem(k,v):U
  else if(t=='json')r=I(k,"")?j.parse(k):j.stringify(k)
  else if(t=='run')r=x('script',k)
  else if(t=='css')r=x('style',k)
  else if(t=='cookie')r=U
  else r=S('local',t,k)

  return r
},

C=function(o,f){
  var a=[].slice.call(arguments,2)

  return f.apply(o,a.length>1?a:[].slice.call(a[0]))
},
P=function(o,a){
  var p='prototype',
  o=Object(o)

  return (a)?o[p]=P(a):o[p]||o.constructor[p]
},
U//=undefined

//----- Shorteners
//Call
//Prototype
//Undefined
//
//----- Essentials
//Document
//Window
//Arrayize
//Remote
//False
//True
//Objectify
//Null
//
//----- Auxilary
//List
//Iterogate
//Bind
//Store
//
//
//
//Storage(type,key,value,options)
//  -cookie
//
//Remote(method,url,data,function,headers)
//
//TODO:
//- XHR needs to be mored from cue
/*©2015 FRINKnet - MIT license*/
(function(){
//// _core ////
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

//// scroll ////
// scroll
var scroll={
  //x=x axis
  //y=y axis
  //d=durration
  //h=easing
  //j=callback
  //--
  //t=target
  //--
  //scrollTo(x,y,duration,easing,callback)
  //scrollTo(node,duration,easing,callback)
  scrollTo:function(x,y,d,h,j,t){
    if(isNaN(x)){
      t=x
      j=h
      h=d
      d=y
    }else{
      t=[x,y]
    }

    //Easing
    //x=percent complete
    //t=elapese time
    //b=begining value
    //c=completion value
    //d=durration
    h=h||function(x,t,b,c,d){
      return (t/=d/2)<1?c/2*t*t*t+b:c/2*((t-=2)*t*t+2)+b
    }
    d=d||200

    //i=index
    //n=node
    //--
    //z=animation
    return this.each(function(i,n,z){
      var s,
      sT=n.scrollTop,
      sL=n.scrollLeft

      if(!I(t,[])){
        t=$(t,n)

        if(!t)return

        t=t[0].getBoundingClientRect()
        t=[t.left,t.top]
      }else{
        t=[
          t[0]==0?0:t[0]-sL,
          t[1]==0?0:t[1]-sT
        ];
      }

      z=function(t){
        //make sure we are scrolling
        if(!n._scroll)return

        s=s||t
        t=t-s>d?d:t-s

        var x=t/d,
        f1=n.scrollWidth,
        f2=n.scrollHeight,
        e1=n._scroll[0],
        e2=n._scroll[1],
        b1=n._scroll[2],
        b2=n._scroll[3],
        c1=b1+e1<f1?e1:f1-b1,
        c2=b2+e2<f2?e2:f2-b2

        n.scrollLeft=h(x,t,b1,c1,d)
        n.scrollTop=h(x,t,b2,c2,d)

        console.log([n.scrollLeft,n.scrollTop])

        if(t<d){
          requestAnimationFrame(z)
        }else{
          delete n._srcoll

          if(j)C(n,j,i,n)
        }
      }

      n._scroll=[
        t[0],
        t[1],
        sL,
        sT
      ]

      requestAnimationFrame(z)
    })
  },
  scrollStop:function(){
    return this.each(function(i,n){
      delete n._srcoll
    })
  },
  //d=durration
  //h=easing
  //j=callback
  //--
  //scrollFocus(duration,easing,callback)
  scrollFocus:function(d,h,j){
    return this.each(function(i,o){
      var p=o.parentNode;

      if(p!=D.documentElement)$(p).scrollTo(o,d,h,function(){
        o.focus()

        if(j)C(o,j,i,o)
      });
    })
  },
  //d=durration
  //c=class
  //h=easing
  //j=callback
  //--
  //scrollParent(duration,class,easing,callback)
  scrollClass:function(c,d,h,j){
    this.parent().children().removeClass(c);
    this.scrollParent(d,h,function(i,n){
        $(n).addClass(c)
        C(n,j,i,n);
    });
  }
}

//// types ////
var types={}

$.extend({
  isArray:function(o){return I(o,[])},
  isNumeric:function(o){return !I(o,[])&&o-parseFloat(o)+1>=0},
  isFunction:function(o){return I(o,Function)},
  isWindow:function(o){return I(o,W)},
  isEmptyObject:function(o){return o==={}},
  isPlanObject:function(o){return I(o,{})},
});

//// dom ////
// node handing functions
var dom={
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

//// nodes ////
var nodes={
  find:function(s){
    var n=this,
    x=n.length,
    l=[]

    while(x--)l.push($(s,n[x]))

    return $([].concat.apply([],l))
  },
  clone:function(){
    var n=this,
    x=n.length,
    l=[]

    while(x--)l.push(n[x].cloneNode(T))

    return $([].concat.apply([],l))
  },
  parent:function(){
    var n=this,
    p='parentNode',
    x=n.length,
    l=[]

    while(x--)if(n[x][p])l.push(n[x][p])

    return $(l)
  },
  children:function(){
    var n=this,
    c='children',
    x=n.length,
    l=[]

    while(x--)if(n[x][c])l.push(n[x][c])

    return $([].concat.apply(l))
  },
  detach:function(s,n,c){
    n=this
    c=$(C)
    (s?n.find(s):n).each(function(){
      $(this).appendTo(c)
    })

    return $(c[0].childNodes)
  },
  remove:function(s){
    this.detach(s)

    return this;
  }
}

$.each({
  after:function(n,a){
    this.parentNode.insertBefore(n.length>1?a.cloneNode(T):a,this.nextSibling)
  },
  prepend:function(n,a){
    this.insertBefore(n.length>1?a.cloneNode(T):a,this.firstChild)
  },
  before:function(n,a){
    this.parentNode.insertBefore(n.length>1?a.cloneNode(T):a,this)
  },
  append:function(n,a){
    this.appendChild(n.length>1?a.cloneNode(T):a);
  }
},function(i,f){
  nodes[i]=function(){
    var n=this

    $([].concat.apply([],arguments)).each(function(i,a){
      n.each(function(){
        C(this,f,n,a)
      })
    })

    return n
  }
})

$.each('after prepend before append'.split(' '),function(i,o){
  nodes[i%2?o+'To':'insert'+(i?'Before':'After')]=function(v){
    $(v)[o](this)

    return this
  }
})

//// classes ////
// class handing functions
var classes={
  hasClass:function(c){
    for(var i=0;i<this.length;++i)if(this[i].className.indexOf(c)>-1)return T

    return F
  },
  addClass:function(c){
    return this.each(function(l,n){
      l=n.className

      if(l.indexOf(c)===-1)n.className=(l+' '+c).trim()
    })
  },
  removeClass:function(c){
    return this.each(function(l,n){
      l=n.className

      if(l.indexOf(c)>-1)n.className=l.split(c).join(' ').trim()
    })
  },
  toggleClass:function(c,s){
    return ((s===U?this.hasClass(c):s)==F)?this.removeClass(c):this.addClass(c)
  }
}


//// misc ////
var misc={
  globalEval:function(c){
    var s=D.createElement('script')
    s.text=c
    D.head.appendChild(s).parentNode.removeChild(s)
  }
}



})()
