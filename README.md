# React-add-tools
这个tools是完全用于展示react和平时练习写的，实际的使用需要把app.js放到服务器去渲染，否则首屏渲染速度会非常慢

##demo1
>demo1是做的一个类似于搜索输入框的，输入关键词后会查找相应提示，因为只是为了练习和展示react的使用，这里面并不包括任何的ajax，数据时硬编码进去的也没有进行匹配，你可以使用jq或者native的方式来重写

##demo2
>demo2是一个类似于百度首页里面用于图片展示的一个小组件，这里的代码还是比较复杂的，因为没有使用任何的css，包括所有的鼠标操作都是以html事件来完成的，这里适用于展示react中父子组件的数据交互，因为react中数据是单向的，因而需要用一个回调函数来返回子组件数据

##demo3
>demo3是一个简易的listview的实现，每点击一次最后的添加字符串就会增加新的ListItem，这里使用了外部的css，可以看出比demo2的代码量减少了不少，这里的item是不会动态的调整的会一直添加到state中，之后会改进

##demo4
>简单的一个webapp上面常见的按钮盘面，使用了css3动画