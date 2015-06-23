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
