//event handling functions
var evt={
  //Trigger Event
  //v=event name
  //d=data
  //--
  //e=event oject
  trigger:function(v,d,e){
    //Trigger for all nodes
    //n=node
    return this.each(function(n){
      if(D.createEvent){
        e=D.createEvent('HTMLEvents')

        e.initEvent(name,T,T)
        e.eventName=v
        n.dispatchEvent(e)
      }else{
        e=D.createEventObject()

        e.eventType=v
        e.eventName=v
        n.fireEvent("on"+e.eventType,e)
      }
    })
  },
  //Listen for event
  //v=event name
  //s=filter selector
  //f=function
  //m=manage calls
  //--
  //b=called boolean
  //z=internal function
  on:function(v,s,f,m,b){
    if(!f)return this.on(v,N,s,f)

    b=F

    return this.each(function(l,n){
      //e=event object
      //--
      //h=handlerNode
      //p=posibilities
      var z=function(e,h,p,x){
        //TODO we really should remove fired events
        if(m&&b)return

        // Traverses from mouseEvent.srcElement and up to this(where the event handler is attached).
        // On each node it checks to see if the node is part of the matched elements.
        h=this
        p=sel(s?s:h,h===W?D:s?h:D)
        x=function(n){
          if(n===h)return

          if(p.indexOf(n)>-1){
            b=T

            if(m)$(n).off(v,f)

            f[C](n,e)
          }

          if(!n.parentNode)return

          x(n.parentNode)
        }

        x(e.srcElement)
      }

      n._evt=n._evt||{}
      n._evt[v]=n._evt[v]||[]
      n._evt[v].push({
        orig: f,
        mine: z
      })

      n.addEventListener(v,z,F)
    })
  },
  //Attach One Event
  //l=list of nodes
  //v=event name
  //s=filter selector
  //f=function
  one:function(v,s,f){
    return this.on(v,s,f,1)
  },
  //Detatch Event
  //v=event name
  //s=filter selector
  //f=function
  off:function(v,f){
    return this.each(function(n){
      n=this

      switch(T){
        case !n._evt:
        case !n._evt[v]:
          return
      }

      n._evt[v]=n._evt[e].filter(function(a){
        if (a.orig!==f)
          return T

        n.removeEventListener(e,a.mine)

        return F
      })
    })
  }
}

