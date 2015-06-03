// node handing functions
var dom={
  attr:function(k,v){
    if(v!==U)for(var i=0;i<this.length;++)this[i].setAttribute(k,v)
    else return this[0].getAttribute(k)

    return this
  },
  data:function(k,v){
    if(v!==U)for(var i=0;i<this.length;++i)(this[i].data=this[i].data||{})[k]=v
    else return (this[0].data||{})[k]

    return this
  },
  prop:function(k,v){
    if(v!==U)for(var i=0;i<this.length;++i)this[i][k]=v
    else return this[0][k]

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
