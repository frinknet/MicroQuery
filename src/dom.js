// node handing functions
var dom={
  data:function(n,d,s){
    this.each(function(){
      if(d!==U){
        this.data=this.data||[]
        this.data[n]=d
      }else if(s===U){
        s=this.data[n]
      }
    });

    return d?this:s
  },
  attr:function(n,d,s){
    this.each(function(){
      if(d!==U){
        this.setAttribute(n,d)
      }else if(s===U){
        s=this.getAttribute(n)
      }
    });

    return d?this:s
  },
  html:'innerHTML',
  text:'innerText',
  val:'value'
}

$.each(dom,function(n,f){
  if(typeof f==='string')dom[n]=function(d,s){
    this.each(function(){
      if(d!==U){
        this[f]=d
      }else if(s===U){
        s=this[f]
      }
    });

    return d?this:s
  }
})
