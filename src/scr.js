// scroll
var scr={
  //x=x axis
  //y=y axis
  //d=durration
  //h=easing
  //j=callback
  //--
  //t=target
  //--
  //scrollTo(x,y,duration,easing)
  //scrollTo(node,duration,easing)
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
      if((t/=d/2)<1)return c/2*t*t*t+b
      return c/2*((t-=2)*t*t+2)+b
    }

    //i=index
    //n=node
    //--
    //z=animation
    this.each(function(i,n,s,z){
      if(!(t instanceof A)){
        t=$(t,n)

        if(!t)return

        t=t[0].getBoundingClientRect()
        t=[t.top,t.left]
      }

      n._scroll=[t[0],t[1],n.scrollTop,n.scrollLeft]

      z=function(t){
        //make sure we are scrolling
        if(!n._scroll)return

        s=s||t
        t=t-s

        var x=t/d,
        f1=n.scrollHeight,
        f2=n.scrollWeigth,
        e1=n._scroll[0],
        e2=n._scroll[1],
        b1=n._scroll[2],
        b2=n._scroll[3],
        c1=b1+e1<f1?e1:f1-b1,
        c2=b2+e2<f2?e2:f2-b2

        n.scrollTop=h(x,t,b1,c1,d)
        n.scrollLeft=h(x,t,b2,c2,d)

        if(t<d){
          requestAnimationFrame(z)
        }else{
          delete n._srcoll

          if(j)j[C](n,i,n)
        }
      }

      requestAnimationFrame(z)
    })
  },
  scrollStop:function(){
    this.each(function(i,n){
      delete n._srcoll
    })
  }
}