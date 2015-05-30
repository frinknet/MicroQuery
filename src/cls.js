// class handing functions
var cls={
  hasClass:function(c,r){
    r=F

    this.each(function(){
      if(this.className.indexOf(c)>-1)r=T
    })

    return r
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
    if((s===U?this.hasClass(c):s)==F)return this.removeClass(c)

    return this.addClass(c)
  }
}

