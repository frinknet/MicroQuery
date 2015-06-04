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
