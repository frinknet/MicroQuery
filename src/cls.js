// class handing functions
var cls={
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

