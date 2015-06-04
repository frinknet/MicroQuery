var msc={
  globalEval:function(c){
    var s=D.createElement('script')
    s.text=c
    D.head.appendChild(s).parentNode.removeChild(s)
  }
}
