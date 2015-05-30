// delete nodes
var del={
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
