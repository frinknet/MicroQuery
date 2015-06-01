// insert nodes
var ins={
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
}

$.each(ins,function(i,f){
  ins[i]=function(){
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
  ins[i%2?o+'To':'insert'+(i?'Before':'After')]=function(v){
    $(v)[o](this)

    return this
  }
})
