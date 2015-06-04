var nod={
  'parent':function(){
    var x,r=[]

    for(x in this)r=r+[this[x].parentNode]

    return $(r)
  },
  'children':function(){
    var x,r=[]

    for(x in this)r=r+this[x].children

    return $(r)
  }
}

