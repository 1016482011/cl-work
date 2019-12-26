const data = [
  {
    time: "",
    children: [
      {
        text: ""
      }
    ]
  },
  {
    time: "2016-12-29",
    children: [
      {
        imgs: ["20161229.jpg"],
        text: "搞了八小时，终于学会了git入门了╭(°A°`)╮"
      }
    ]
  },
  {
    time: "2016-12-03",
    children: [
      {
        imgs: ["20161203.jpg"],
        text:
          "书浏览了一遍，目前来说没什么用场，这个WebGL是将浏览器3D的知识，对于目前的我来说感觉也是鸡肋，看了再说"
      }
    ]
  },
  {
    time: "2016-12-02",
    children: [
      {
        imgs: ["20161202.jpg"],
        text: "SEE里的一个php例子,和js的面向对象一比，好像js的歪的不止一点"
      }
    ]
  },
  {
    time: "2016-12-01",
    children: [
      {
        imgs: ["2016120102.jpg"],
        text: "从后台推送消息，没有ajax，没有刷新，感觉对服务器压力略大"
      },
      {
        imgs: ["2016120101.jpg"],
        text: "学校图书馆这方面的书好像也多了起来了嘛"
      }
    ]
  },
  {
    time: "2016-11-30",
    children: [
      {
        text:
          "现在终于完全明白js的单线程执行模式了，只会用到设备的一个内核，在执行js代码时，会从上至下的执行所有代码(有回调和异步会被挂起)，然后再执行队列里的异步函数和回调"
      },
      {
        text:
          "原来网页中的好多类似于输入一个指令后触发一连串的动作用延迟对象来做比单纯的用on来绑定事件容易也高效的多，确实学到了"
      },
      {
        text:
          "js异步编程看了一半，主要讲的回调函数，其中包括了jquery中的promise和deferred对象的讲解，这两个东西看jquery文档一直不是很懂，不清楚在哪里用，刚好填补了这方面的空白"
      }
    ]
  },
  {
    time: "2016-11-28",
    children: [
      {
        imgs: ["20161128.jpg"],
        text: "函数式编程的作者推荐的，买了再说"
      },
      {
        text:
          "函数式编程的柯里化技术确实实用，将一个复杂的功能用一个个简单的函数进行拼凑，感觉这种编程模式必须要掌握"
      },
      {
        text:
          "函数式编程主要特征是高阶函数，具体的是以一个函数作为参数，以一个函数作为返回结果，对于框架设计来说挺实用，各高阶函数可以自由嵌套形成一个新的函数"
      },
      {
        text:
          "看了一部分函数式编程，对数据处理十分适合，页面对象的处理还是面向对象编程比较好"
      }
    ]
  },
  {
    time: "2016-11-18",
    children: [
      {
        text: "es6新特性快速上手，这个版本如果成为主流的话将改成以往的编程方式",
        link: [
          {
            label:
              "https://note.youdao.com/ynoteshare1/mobile.html?id=da22c6367d1a1c2b4b71fedb8b0be084&type=notebook&from=timeline",
            link:
              "https://note.youdao.com/ynoteshare1/mobile.html?id=da22c6367d1a1c2b4b71fedb8b0be084&type=notebook&from=timeline"
          }
        ]
      }
    ]
  },
  {
    time: "2016-11-12",
    children: [
      {
        imgs: ["2016111206.jpg", "2016111207.jpg"],
        text: "班级团日活动做的个小页面，针对移动端做了自适应"
      },
      {
        imgs: ["2016111203.jpg", "2016111204.jpg", "2016111205.jpg"],
        text: "这段时间做的公司网页"
      },
      {
        imgs: ["2016111201.jpg", "2016111202.jpg"],
        text:
          "跟着ps教程做完第一个小玩意，过程不是很难啊，就是菜单太多了，根本找不到"
      }
    ]
  },
  {
    time: "2016-10-14",
    children: [
      {
        text: "TCP IP看了80%了，不过感觉不到在哪里能用到😂"
      }
    ]
  },
  {
    time: "2016-10-12",
    children: [
      {
        text:
          "js文件有可能的话想重新构造一下，做成类似thinkphp的命名空间，创建一个namespace.js文件，创建一个全局变量namespace，其他js文件如与其同层，则其命名空间为namespace.文件名，如不同层，如在其同层文件夹lib下，其命名空间为namespace.lib.文件名"
      },
      {
        imgs: ["20161012.jpg"],
        text: "终于完成这个日历弹窗，可能会有bug，基本花了有10来个小时了"
      }
    ]
  },
  {
    time: "2016-09-29",
    children: [
      {
        imgs: ["2016092901.jpg", "2016092902.jpg", "2016092903.jpg"],
        text:
          "浏览器数据库终于摸索会了，不过只有较新的浏览器支持，可以按之前的想法来了"
      },
      {
        text:
          "有个美好的想法，将记事本做成离线应用，即在支持离线存储和本地数据库的浏览器上将数据用indexedDB存入本地，同时在服务器上也做个备份，不支持这些h5的直接存入服务器，然而昨天看了大半天的indexeddb，没看懂"
      }
    ]
  },
  {
    time: "2016-09-27",
    children: [
      {
        imgs: ["2016092704.jpg"],
        text: "学习永无止境"
      },
      {
        imgs: ["2016092701.jpg", "2016092702.jpg", "2016092703.jpg"],
        text:
          "这几天玩掉了不少时间，也同别人谈了不少，重新制定了学习计划。刚完成了一个纯js实现的模态框对象，运用了适配器模式，实例调用只需几行代码即可，生成之后的模态框移动端自适应"
      }
    ]
  },
  {
    time: "2016-09-23",
    children: [
      {
        imgs: ["2016092301.jpg", "2016092302.jpg", "2016092303.jpg"],
        text:
          "目前自己想出来的编程模式，在所有页面开头加载一个namespace的命名空间文件，用于定义一个全局对象和公共常用函数，将页面不同区块的js以单个文件存放，类似于AMD的模块模式，模块js文件由三部分组成，生成对象，初始化操作，绑定事件，其中生成的对象都存于之前声明的全局变量下，以嵌套命名法来定义变量并暴露对外函数，以var来定义私有变量"
      }
    ]
  },
  {
    time: "2016-09-22",
    children: [
      {
        imgs: ["20160922.jpg"],
        text: "又一张页面完成，纯css页面确实轻松"
      }
    ]
  },
  {
    time: "2016-09-21",
    children: [
      {
        imgs: ["2016092102.jpg"],
        text: "一期工程结束了，可以看点其他的了"
      },
      {
        text:
          "滚动条的已知bug全都修复了，加上昨天的用了近十个小时了，代码不多，算的好多，用了三张草稿纸，还好数学功底还不错(๑• . •๑)"
      },
      {
        imgs: ["2016092101.jpg"],
        text: "一个滚动条，搞个半死，目前大致可用了，不过有些地方还有些bug"
      }
    ]
  },
  {
    time: "2016-09-20",
    children: [
      {
        imgs: ["20160920.jpg"],
        text: "侧边的滑动条是个大问题，需要自己模拟浏览器做个"
      }
    ]
  },
  {
    time: "2016-09-17",
    children: [
      {
        imgs: ["20160917.jpg"],
        text: "日历搞半天"
      }
    ]
  },
  {
    time: "2016-09-15",
    children: [
      {
        imgs: ["20160915.jpg"],
        text: "中秋干一天，头疼"
      }
    ]
  },
  {
    time: "2016-09-13",
    children: [
      {
        text:
          "从零架构一个框架对于我这样基础薄，没经验，只有一个人来说可以说是天方夜谭，之前的想法显得有点幼稚，基础知识和实践才是我现在需要的"
      },
      {
        text:
          "这个数据缓存系统的章节把数据结构发挥的淋离尽致，现在我终于发现了我的基础是有多薄弱，算法，正则，数学，数据结构"
      },
      {
        text:
          "细节备忘，DOM操作占据了95％的能耗，在用js设置样式之前，先使用jquery的detach将元素移出DOM树，最后将操作过后的元素插入显示"
      },
      {
        imgs: ["20160913.jpg"],
        text:
          "感觉最近学的东西有点多，值此中秋国庆佳节，决定做个记事本好好消化一下"
      },
      {
        text:
          "选择器引擎这章全程懵逼，动不动就是整页的搜索排序算法，感觉这个和搜索引擎差不多"
      }
    ]
  },
  {
    time: "2016-09-11",
    children: [
      {
        imgs: ["2019091102.jpg"],
        text:
          "这个周末终于把语言模块和正则基础应用学完了，这框架的语言模块字符拓展一堆正则，数组拓展一堆算法，下面这个数组拓展研究了一个小时才搞懂(ಥ_ಥ)"
      },
      {
        imgs: ["2019091101.jpg"],
        text: "洗牌算法，第一次感受到算法的存在和强大和看不懂的懵逼"
      }
    ]
  },
  {
    time: "2016-09-09",
    children: [
      {
        imgs: ["20160909.jpg"],
        text:
          "将代码用AMD模块化后，引入js文件变成这种格式了，之前好像在哪见过..下面开始语言模块的学习，不过处理字符语需要大量的正则，这周末先把正则搞定了"
      }
    ]
  },
  {
    time: "2016-09-08",
    children: [
      {
        imgs: ["2016090802.jpg"],
        text:
          "从下午到现在8小时终于学完了框架设计第一章😂，下面开始AMD的学习，不过在这之前还要先去学一下js的模块化工具requirejs"
      },
      {
        text: "jquery的完整代码真的就是一本教科书，研究了一下午，受益匪浅"
      },
      {
        imgs: ["2016090801.jpg"],
        text:
          "有了面向对象和设计模式基础，通过框架设计的讲解，在读懂jquery的基础上建立自己的框架，感觉之前通宵研究thinkphp的热情又回来了"
      }
    ]
  },
  {
    time: "2016-09-04",
    children: [
      {
        text:
          "感觉需要冷静一下，现在面向对象解决了，不过解藕也就是设计模式上不行，原生js也不行，做起来效率太低了，下一步把常用的操作指令用js进行封装作为重点，等书到了把这块解决了"
      },
      {
        imgs: ["2016090401.jpg", "2016090402.jpg"],
        text:
          "原生代码写起来有点无语，实现一个按顺序攻击指令，代码量轻松过300行，不过对面向对象和设计模式的理解有加深了一步，对数据结构和算法也有了初步深入的理解"
      }
    ]
  },
  {
    time: "2016-09-02",
    children: [
      {
        imgs: ["2016090202.jpg"],
        text: "js中栈的实现，这下是也同时彻底明白构造函数了"
      },
      {
        imgs: ["20160902.jpg"],
        text:
          "做个攻击指令好费脑子，犀牛书和面向对象书直接来回翻，感觉才稍微搞懂一点类，工厂函数和构造函数"
      }
    ]
  },
  {
    time: "2016-09-01",
    children: [
      {
        imgs: ["20160901.jpg"],
        text:
          "目前的想法是设置一个人的原型，让各职业对象继承人的原型，然后根据不同玩家实例化对象，比如这里人拥有attack方法，实例化的对象直接调用，另外原来异常要自己手动抛出的"
      }
    ]
  },
  {
    time: "2016-08-31",
    children: [
      {
        imgs: ["20160831.jpg"],
        text: "面向对象，和之前完全不一样的编写风格，好不适应啊"
      }
    ]
  },
  {
    time: "2016-08-29",
    children: [
      {
        text: "MVC＜MVP＜MVVM，或许MVC不是主流了"
      }
    ]
  },
  {
    time: "2016-08-28",
    children: [
      {
        text:
          "无意间我已经在用最强大的设计模式--观察者模式了，虽然不太正式(ಥ_ಥ)"
      }
    ]
  },
  {
    time: "2016-08-21",
    children: [
      {
        text: "终于明白什么才是模块化了，之前的理解只对了一小半(ಥ_ಥ)"
      },
      {
        text:
          "设计模式是面向对象的，提供间接解决问题方案和代码结构优化的，最恶心的是设计模式种类繁多，单书上就20多种，一个项目可能要用多种设计模式，而且用错了可能造成反模式，个别情况还需要自己修改拓展模式，看来每个半年这东西玩不熟了"
      }
    ]
  },
  {
    time: "2016-08-20",
    children: [
      {
        text:
          "单书上《JavaScript设计模式》讲的继承模式就12种了，具体选用要看设计模式，这两本书买的简直绝配！"
      },
      {
        text:
          "面向对象基本看完了，总的来说我之前写的代码只要局部改动，因为面向对象做出来的基本是抽象工具方法，而我之前用的就是jquery写好的工具方法"
      }
    ]
  },
  {
    time: "2016-08-19",
    children: [
      {
        text: "这个数据结构和算法是基于nodejs讲解的，没面向对象理解方便了"
      },
      {
        text:
          "终于把js的面向对象的对象，类，继承，封装，多态差不多有点明白了，这玩意和正统面向对象相比确实奇葩"
      },
      {
        text: "书看了一半，原来大部分的情况我都遇到过😂"
      },
      {
        text:
          "看了书《JavaScript面向对象编程》才真正明白了闭包的概念，之前理解的只是其中的一部分，单凭这点这书买的值"
      }
    ]
  },
  {
    time: "2016-08-15",
    children: [
      {
        text: "这四本不吃饭也要买",
        imgs: [
          "2016081501.jpg",
          "2016081502.jpg",
          "2016081503.jpg",
          "2016081504.jpg"
        ]
      }
    ]
  },
  {
    time: "2016-08-14",
    children: [
      {
        imgs: ["2016081402.jpg"],
        text: "希望今天下午能够掌握面向对象"
      },
      {
        imgs: ["2016081401.jpg"],
        text: "评论板块准备收工"
      },
      {
        text:
          "昨天搞了了半小时以为cookie挂了的问题，原来是代码结束时英文的;写成了中文的; ，有点无语"
      }
    ]
  },
  {
    time: "2016-08-13",
    children: [
      {
        text:
          "做了一整天的评论板块，结果一上传发现cookie管理挂了，实在烦，真想直接简单粗暴的try catch解决问题"
      },
      {
        text: "正则是我前进的一大难题啊"
      }
    ]
  },
  {
    time: "2016-08-12",
    children: [
      {
        text: "完成登录操作，细节没追究，先这样吧"
      }
    ]
  },
  {
    time: "2016-08-11",
    children: [
      {
        text: "两天连续作业，终于邮箱注册接近尾声，有点受不了，大脑要放空一下"
      }
    ]
  },
  {
    time: "2016-08-08",
    children: [
      {
        imgs: ["20160808.jpg"],
        text: "主界面先随意暂时这样了"
      }
    ]
  },
  {
    time: "2016-08-07",
    children: [
      {
        imgs: ["20160807.jpg"],
        text: "新增页内导航，以及翻页功能"
      }
    ]
  },
  {
    time: "2016-08-06",
    children: [
      {
        imgs: ["20160806.jpg"],
        text:
          "今天修复了一堆bug，特别是历史管理方面，另外更改了菜单部分设计，更简更强大"
      },
      {
        text:
          "内容刚完成，导航菜单又来了，之前导航的菜单设计不能满足现在的页面设计了，又要重做了"
      }
    ]
  },
  {
    time: "2016-08-05",
    children: [
      {
        imgs: ["20160805.jpg"],
        text: "整改完成"
      }
    ]
  },
  {
    time: "2016-08-04",
    children: [
      {
        text:
          "行走在崩溃的边缘，谁能告诉我这个内容用正则到底怎么切啊，各大社区问了没人理我啊"
      }
    ]
  },
  {
    time: "2016-08-03",
    children: [
      {
        imgs: ["2016080302.jpg"],
        text:
          "接下来的内容更刺激，如何把下面的ajax回调的内容用js处理成上面的实际显示样式，感觉快不行了"
      },
      {
        imgs: ["2016080301.jpg"],
        text:
          "历史管理和缓存完成了，不过善后工作依然繁重，一个单击事件用了一百行代码，急需整合"
      },
      {
        text:
          "var reg = /.*&page=([^&]*)&?.*/;十来行js实现的东西，用正则就剩这一行了"
      }
    ]
  },
  {
    time: "2016-08-02",
    children: [
      {
        text:
          "重做之后立马遇到了ajax和历史记录管理结合使用的技术难题，这是实现缓存的关键所在"
      },
      {
        imgs: ["20160802.jpg"],
        text: "看了这个之后，感觉又要一波重做"
      }
    ]
  },
  {
    time: "2016-08-01",
    children: [
      {
        imgs: ["20160801.jpg"],
        text: "完善ing..."
      }
    ]
  },
  {
    time: "2016-07-31",
    children: [
      {
        imgs: ["2016073103.jpg"],
        text: "ajax请求等待时转的小菊花搞得累死"
      },
      {
        imgs: ["2016073101.jpg", "2016073102.jpg"],
        text:
          "大致的工作已经完成了，源代码里内容这部分是空的，页面完全由ajax加载得到，这也就是为什么看云内容代码为空。剩下的都是一些小的性能体验的优化，想什么进度条显示什么的，这连续几天高强度作业，心累"
      }
    ]
  },
  {
    time: "2016-07-30",
    children: [
      {
        imgs: ["2016073001.jpg", "2016073002.jpg", "2016073003.jpg"],
        text: "模板终于完成了"
      }
    ]
  },
  {
    time: "2016-07-28",
    children: [
      {
        imgs: ["20160728.jpg"],
        text: "没有bootstrap做起来反而更轻松了"
      }
    ]
  },
  {
    time: "2016-07-26",
    children: [
      {
        imgs: ["20160726.jpg"],
        text: "龟速前进中，技术写好一段代码真不容易"
      }
    ]
  },
  {
    time: "2016-07-25",
    children: [
      {
        imgs: ["20160725.jpg"],
        text: "花了十几个小时就是为了这一段代码"
      },
      {
        text:
          "面向过程，面向对象开发，今天做一个插件遇到这个问题，貌似以后的路还很长"
      }
    ]
  },
  {
    time: "2016-07-24",
    children: [
      {
        imgs: ["2016072401.jpg", "2016072402.jpg"],
        text: "导航栏部分新旧对比"
      }
    ]
  },
  {
    time: "2016-07-23",
    children: [
      {
        imgs: ["20160723.jpg"],
        text:
          "有了第一次的经验，在原来的基础上改了很多代码的构成，完全就是在做一个新的..."
      }
    ]
  },
  {
    time: "2016-07-22",
    children: [
      {
        text:
          "重新书写js代码，真正做到模块化，简单来说即把实现选项卡的代码用一个function包裹作为一个大的函数，皮肤设置包裹成一个函数，把这些功能全部分开，最后在开头统一进行加载"
      },
      {
        text: "js代码写法，函数用var来定义，最后作为参数传入操作方法"
      },
      {
        text: "初看了web界面这本书之后，应用和网页的主要区别在于网页是否刷新"
      }
    ]
  },
  {
    time: "2016-07-21",
    children: [
      {
        text: "完全重新开始做之前的阅读应用，有点方"
      },
      {
        text:
          "普通事件只能对当时存在的元素有效，如果需要新生成的元素也能响应事件应当使用实时事件"
      },
      {
        text:
          "注册监听事件，通过事件对象处理事件，最后注销事件，通过命名空间来使代码模块化。这些知识正是我现在急需的，今天不睡觉也要看完"
      }
    ]
  },
  {
    time: "2016-07-20",
    children: [
      {
        text: "js指南这80块真的是超值的不行，不是网上的东西能比的"
      },
      {
        text:
          "遇到问题去看书果然是没错的，看云的本地缓存应该可以用ajax实现，创建一个不可见的iframe框架来接受ajax从后台得到的完整网页文档，然后通过编辑输出到主页面，一个从后台取3个"
      }
    ]
  },
  {
    time: "2016-07-15",
    children: [
      {
        imgs: ["20160715.jpg"],
        text: "动态的生成了页面，和我开始要的静态页面有点差别，还需努力"
      }
    ]
  },
  {
    time: "2016-07-14",
    children: [
      { text: "仔细思考了一下，thinkphp关联模型可以解决我的需求，之前的白" },
      {
        text:
          "下了个php手册，内容好多，看的有点膨胀。下了个mysql手册，内容好难，看的一脸懵逼"
      },
      {
        imgs: ["20160714.jpg"],
        text: "缺乏一个好的数据库设计，后台做起来好累"
      }
    ]
  },
  {
    time: "2016-07-13",
    children: [
      {
        imgs: ["20160713.jpg"],
        text: "数据库设计好了，模板完成了，终于到最后的内容填充了"
      }
    ]
  },
  {
    time: "2016-07-12",
    children: [
      {
        text: "数据库设计的三大范式，先按这个来吧"
      }
    ]
  },
  {
    time: "2016-07-11",
    children: [
      {
        text:
          "迈出的第一步难题是，数据库怎么设计，有点懵逼，感觉我这个应用并不简单，感觉需要看点数据库的书"
      },
      {
        text: "前端工作告一段落，虽然还有点瑕疵，先放着，php工作搞起"
      },
      {
        imgs: ["2016071101.jpg", "2016071102.jpg", "2016071103.jpg"],
        text: "选项卡完成，一直与皮肤的js冲突，终于协调好了"
      }
    ]
  },
  {
    time: "2016-07-10",
    children: [
      {
        imgs: ["2016071001.jpg", "2016071002.jpg", "2016071003.jpg"],
        text: "皮肤成就已达成"
      }
    ]
  },
  {
    time: "2016-07-09",
    children: [
      {
        imgs: ["2016070901.jpg", "2016070902.jpg"],
        text:
          "3点40了，毫无睡意😳，选项卡不用bootstrap的，自己做了个，添加了改变字体大小的功能和护眼模式，不过怎么改都没法完美还原成默认样式，好方"
      }
    ]
  },
  {
    time: "2016-07-07",
    children: [
      {
        imgs: ["2016070701.jpg", "2016070702.jpg", "2016070703.jpg"],
        text: "前端部分完成了，如果没有未知bug的话就算是比较完美的了"
      }
    ]
  },
  {
    time: "2016-07-06",
    children: [
      {
        imgs: ["2016070602.jpg", "2016070603.jpg"],
        text: "移动端显示操作基本完成，不过操作上还有进步的地方"
      },
      {
        imgs: ["2016070601.jpg"],
        text: "复刻程度高的我都害怕"
      }
    ]
  },
  {
    time: "2016-07-05",
    children: [
      {
        imgs: ["20160705.jpg"],
        text:
          "折叠菜单栏，窗口大小自适应都完成了，pc端差不多完美实现了，移动端依然头大，为移动端再做一个页面不太现实，只能css上想想办法了"
      }
    ]
  },
  {
    time: "2016-07-01",
    children: [
      {
        imgs: ["2016070102.jpg", "2016070103.jpg"],
        text:
          "大致方案只能想到这么多，主页面用于显示，管理员页面查看数据库内容，并可以进行增删改查"
      },
      {
        imgs: ["2016070101.jpg"],
        text: `手册说这么加载资源，我试了一万遍都不行，最后改成{css href="../public/static/css/style.css" /}才成功加载，而且换个模块又不行了，感觉我要回到thinkphp3.2了，这东西还是等他稳定了，出个完整无误的手册在用😒`
      }
    ]
  },
  {
    time: "2016-06-29",
    children: [
      {
        text:
          "今天做好了开工的准备工作，连接好了数据库，做好了模板，弄懂了thinkphp5的基本操作，就差一个好的页面怎么排版了"
      }
    ]
  },
  {
    time: "2016-06-28",
    children: [
      {
        imgs: ["20160628.jpg"],
        text: "5果然不一样，安装搞了半天"
      }
    ]
  },
  {
    time: "2016-06-27",
    children: [
      {
        imgs: ["20160627.jpg"],
        text:
          "期待已久的thinkphp5.0稳定版来了，我的新网站就决定用它了，较3.23改动巨大，今天考完英语就先学起来"
      }
    ]
  },
  {
    time: "2016-06-26",
    children: [
      {
        imgs: ["20160626.jpg"],
        text:
          "还剩130页看完客户端的js，是时候着手建一个可管理的完整的网站了，先建个个人多功能网站"
      }
    ]
  },
  {
    time: "2016-06-25",
    children: [
      {
        text: "无意中又了解了jsonp跨域数据传输，虽然还没实验成功过"
      }
    ]
  },
  {
    time: "2016-06-24",
    children: [
      {
        text: "果然看客户端的js这一部分就轻松了好多，前端时间的学习还是有点效果"
      },
      {
        text:
          "原来我之前学的是客户端js的一小部分，而js语言核心是一点没碰，这第九章的类和模块真的好难理解"
      }
    ]
  },
  {
    time: "2016-06-07",
    children: [
      {
        imgs: ["20160607.jpg"]
      }
    ]
  },
  {
    time: "2016-06-05",
    children: [
      {
        text:
          "书看到现在终于知道什么是对象，什么是属性以及他们的特性等，半年了，终于知道了我学的是什么一种语言"
      }
    ]
  },
  {
    time: "2016-06-04",
    children: [
      {
        text: "a=1,b=(a++)+a的值为三，细节莫名的容易忽略"
      }
    ]
  },
  {
    time: "2016-06-03",
    children: [
      {
        text:
          "在javaScript真实运行环境中，0.3-0.2=0.09999999999999998😱，这js指南确实详细"
      }
    ]
  },
  {
    time: "2016-05-31",
    children: [
      {
        imgs: ["20160531.jpg"],
        text: "《JavaScript从入门到住院已买》"
      }
    ]
  },
  {
    time: "2016-05-30",
    children: [
      {
        text:
          "这本专门讲如何提高手机网页性能和触摸事件的应用，对现在的我还是难以理解。看完这本书的最大感触就是js学的太肤浅，移动开发真的和pc不一样，需要系统的学习",
        link: [
          {
            label: "HTML5触摸界面设计与开发",
            link:
              "https://note.youdao.com/ynoteshare1/mobile.html?id=da22c6367d1a1c2b4b71fedb8b0be084&type=notebook&from=timeline"
          }
        ]
      }
    ]
  },
  {
    time: "2016-05-29",
    children: [
      {
        imgs: ["20160529.jpg"],
        text: "每次去图书馆都有新发现😄"
      },
      {
        text: "看完这本书，对bootstrap的实现原理总算是有了初步了解",
        link: [
          {
            label: "HTML5与CSS3设计模式",
            link:
              "https://note.youdao.com/ynoteshare1/mobile.html?id=489b4c183f1acd0cbfdba9d60ce2f07b&type=notebook&from=timeline"
          }
        ]
      }
    ]
  },
  {
    time: "2016-05-26",
    children: [
      {
        text: `转-目前做前端这块的大致有三种人： 
        1. 本来是做后端的，顺带着做一些前端，以 jQuery  为主，能实现大部分简单前端效果。 
        2. 以切图和静态 html 制作为主，加上部分 javascript. 
        3. js 和 html 都做且对 js 有较深入的了解，知道后端工作机制并能很好地进行协作。 
        第一种大部分公司都有，对于不是很复杂的应用基本也够用了，第二种多在一些外包项目型公司，这两种都不算难找。第三类多呆在大公司里面或者一些产品型的公司，近年来的需求旺盛，且把这类型的叫做泛前端，这种前端对掌握技术的广度要求较高，既要专注于前端也要懂后端知识，目前还没有针对性强的学科，多是从学校里出来后自学的，所以就不好找。`
      }
    ]
  },
  {
    time: "2016-05-13",
    children: [
      {
        text:
          "一本看完了，然而并没有学完，一个地理位置，要用到谷歌地图接口，一个webSocket和html5高级应用开发，要用到nodejs。html5的内容真的是不多却难",
        link: [
          {
            label: "html5敏捷实践",
            link:
              "https://note.youdao.com/ynoteshare1/mobile.html?id=8b8e64b9ab8655c389bd8e1f40e466d6&type=notebook&from=timeline"
          }
        ]
      },
      {
        imgs: ["2016051301.jpg", "2016051302.jpg"],
        text:
          "为了提高看书的效率，我只能拿出大招了，记笔记不手打了，用有道云笔记的文档扫描了"
      }
    ]
  },
  {
    time: "2016-05-12",
    children: [
      {
        imgs: [
          "2016051202.jpg",
          "2016051203.jpg",
          "2016051204.jpg",
          "2016051205.jpg"
        ],
        text: "图书馆发现的新书，快速消灭，没时间了"
      },
      {
        imgs: ["2016051201.jpg"],
        text: "果然看原版文档比什么教程都好用"
      },
      {
        text:
          "Mozilla,全称Mozilla基金会，是为支持和领导开源的Mozilla项目而设立的一个非营利组织。。拥有一个称作Mozilla公司的子公司，雇佣了一些Mozilla开发人员并协调Mozilla Firefox网页浏览器以及Mozilla Thunderbird电子邮件客户端的发行版"
      },
      {
        text:
          "一个完整的 JavaScript 实现是由以下 3 个不同部分组成的：核心（ECMAScript）,文档对象模型（DOM）,浏览器对象模型（BOM）.按顺序慢慢学"
      }
    ]
  },
  {
    time: "2016-05-11",
    children: [
      {
        imgs: ["20160511.jpg"],
        text:
          "ECMAScript是一种由Ecma国际通过ECMA-262标准化的脚本程序设计语言。它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展。"
      },
      {
        text:
          "实现js异步编程的四种方式。1.回调函数，2.事件监听器，3.订阅/发布，4.promises对象。专治各种页面假死"
      },
      {
        code: `每日一学，js回调函数，简单的说明
function a(callback) 
{    
   alert("主函数函数a！"); 
   callback(); 
} 
function b(){ 
alert("回调函数b"); 
} 
function test() 
{ 
    a(b); 
}
这里b就是回调函数，js中函数是用function创建的对象，可以作为参数传递`
      }
    ]
  },
  {
    time: "2016-05-10",
    children: [
      {
        text: `jquery中的$("#id")与document.getElementById("id")是有区别的，alert($('#box'))得到的是[object Object] alert(document.getElementByIdx_x('box'))得到的是[object HTMLDivElement] alert($('#box')[0])或alert($('#box').get(0))得到的是[object HTMLDivElement]，因此document.getElementByIdx_x('box')等同于$('#box')[0]或$('#box').get(0)。jqery得到的是一个对象数组`
      },
      {
        text:
          "今日小知识，js闭包，主要特性，1.函数嵌套函数2.函数内部可以引用外部的参数和变量3.参数和变量不会被垃圾回收机制回收"
      },
      {
        imgs: ["20160510.jpg"],
        text:
          "终于完工了，最后一个视频只在下方添加了个字幕，其他效果做起来太费时间了。现在感觉现在我css好强啊，基本掌握响应式布局的技巧了(全班合唱的视频，开口惨不忍睹"
      }
    ]
  },
  {
    time: "2016-05-09",
    children: [
      {
        text:
          "内联元素和其他元素都在一行上，元素的高度、宽度、行高及顶部和底部边距不可设置，元素的宽度就是它包含的文字或图片的宽度，不可改变。(<span>、<a>、<label>、<input>、 <img>、 <strong> 和<em>)    块级元素，每个块级元素都从新的一行开始，并且其后的元素也另起一行。元素的高度、宽度、行高以及顶和底边距都可设置。元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。(<div>、 <p>、<h1>、<form>、<ul> 和 <li>)"
      },
      {
        text:
          "`inline`内部元素的宽高`+padding`。不单独占一行，其它元素会紧跟其后。而块对象`block`是可以设置宽高的，但是它的实际宽高是本身宽高`+padding`。`block`要单独占一行。inline-block既具有block的宽高特性又具有inline的同行元素特性。"
      },
      {
        imgs: ["20160509.jpg"],
        text: "html5规范·"
      }
    ]
  },
  {
    time: "2016-05-08",
    children: [
      {
        imgs: ["20160508.jpg"],
        text: "第三板块的基调差不多完成"
      }
    ]
  },
  {
    time: "2016-05-05",
    children: [
      {
        imgs: ["2016050502.jpg", "2016050503.jpg"],
        text:
          "canvas功能如此强大，不过就我目前浏览过的网页鲜有使用这项技术的，有点奇怪"
      },
      {
        imgs: ["2016050501.jpg"],
        text: "学了canvas，才知道初中数学是多么的实用"
      }
    ]
  },
  {
    time: "2016-05-03",
    children: [
      {
        imgs: ["20160503.jpg"],
        text: "是时候深入学习一波了"
      }
    ]
  },
  {
    time: "2016-05-02",
    children: [
      {
        imgs: ["20160502.jpg"],
        text: "总算结束了"
      }
    ]
  },
  {
    time: "2016-05-01",
    children: [
      {
        imgs: ["20160501.jpg"]
      }
    ]
  },
  {
    time: "2016-04-30",
    children: [
      {
        imgs: ["2016043001.jpg", "2016043002.jpg"],
        text: "五一假期，然而工作才刚刚开始"
      }
    ]
  },
  {
    time: "2016-04-25",
    children: [
      {
        text:
          "jquery UI 非企业级开发强大的一笔，有了这个我还要bootstrap和layer有何用😂"
      },
      {
        imgs: ["2016042501.jpg", "2016042502.jpg"],
        text:
          "还记的当初学js学的第一个效果就是拖动图片，现在的h5已经将这个效果作为了一个标准接入，亏我当时费那么多时间"
      }
    ]
  },
  {
    time: "2016-04-24",
    children: [
      {
        imgs: ["2016042403.jpg"],
        text: "直播的核心技术好像也不知不觉就学会了，将视频用canvas实时绘制"
      },
      {
        imgs: ["2016042401.jpg", "2016042402.jpg"],
        text: "简易的静态实时弹幕完成"
      }
    ]
  },
  {
    time: "2016-04-21",
    children: [
      {
        text:
          "我用node webkit把html包装了一下，英语课演讲时，老师到现在还以为我是用ppt做的😂"
      }
    ]
  },
  {
    time: "2016-04-18",
    children: [
      {
        text:
          "能把一个纯静态的网页封装成exe文件，自带浏览器引擎运行多好，这样就不怕浏览器兼容问题了"
      }
    ]
  },
  {
    time: "2016-04-14",
    children: [
      {
        text:
          "html5视频这一块我还是一个空白，看来这个周末又是一个不眠之夜，只能恶补一下了"
      },
      {
        imgs: ["20160414.jpg"],
        text: "接活了，要忙起来了"
      },
      {
        text:
          "上次的关于文章和标签的对应问题总算解决了，增加一个关联表，对应文章id和标签id的关系，关于显示文章里已删的的标签，解决方法是删除标签时并不是真删，而是加个在表里加个active，0是失效1是激活，删除将其值改为0。过程中最关键的是多对多表的读取与显示及存储，花了不少时间做这三步。这差不多现阶段最后一次研究php了"
      }
    ]
  },
  {
    time: "2016-04-12",
    children: [{ text: "原本准备学前端的，为何我学了这么多php，看不懂自己啊" }]
  },
  {
    time: "2016-04-11",
    children: [
      {
        imgs: [
          "2016041101.jpg",
          "2016041102.jpg",
          "2016041103.jpg",
          "2016041104.jpg",
          "2016041105.jpg",
          "2016041106.jpg",
          "2016041107.jpg",
          "2016041108.jpg",
          "2016041109.jpg"
        ],
        text:
          "终于将原网站用thinkphp重新做了一遍，几乎是完全将html与php分离开来了，更加规范，而且安全细节基本上都做到位了，现在ajax也玩的开始上道了。结果是文件夹突然变成了5M..."
      }
    ]
  },
  {
    time: "2016-04-08",
    children: [
      {
        imgs: [
          "2016040801.jpg",
          "2016040802.jpg",
          "2016040803.jpg",
          "2016040804.jpg"
        ],
        text: "静态页面已全部导入框架，安心睡个好觉"
      }
    ]
  },
  {
    time: "2016-04-06",
    children: [
      {
        text: "thinkphp框架果然强悍，是时候用起来了"
      }
    ]
  },
  {
    time: "2016-04-03",
    children: [
      {
        imgs: ["2016040304.jpg", "2016040305.jpg", "2016040306.jpg"],
        text:
          "查看，编辑，删除已做完，现在基本功能已经全部完成，可以使用了，下面就是润色了。"
      },
      {
        imgs: ["2016040301.jpg", "2016040302.jpg", "2016040303.jpg"],
        text: "细节做一做，安心解决下个难题"
      },
      {
        text: "http://layer.layui.com/   layer-强到爆炸的弹出层"
      }
    ]
  },
  {
    time: "2016-04-02",
    children: [
      {
        imgs: ["20160402.jpg"],
        text:
          "终于把标签部分全都完成了，这个过程真的是爽的不行，单个标签就用到了不少html,bootstrap,jquery,ajax,php,mysql里的东西，这写代码只能基本靠查手册，混合语言编码确实烦，经常记了这个的忘了那个的"
      }
    ]
  },
  {
    time: "2016-04-01",
    children: [
      {
        imgs: ["20160401.jpg"],
        text:
          "做完这个标签我再也不会认为看上去简单网站容易做了，这个小小的标签折腾死我了"
      }
    ]
  },
  {
    time: "2016-03-31",
    children: [
      {
        text: "做着做着又卡住了，数据库知识出现了短板，我真的想静静"
      }
    ]
  },
  {
    time: "2016-03-29",
    children: [
      {
        imgs: ["2016032902.jpg"],
        text:
          "今天听学长一说，才发现我现在需要的不是各种技术，而是最基本的编码规范！！！现在我要把主要的方向放在怎么写出规范上了"
      },
      {
        text:
          "HTML5通常包含的一些标准: SVG  ,  CSS3  ,  WebGL  ,  Web Workers  ,  Web Storage  ,  Web SQL Database  ,  Web Sockets  ,  Geolocation  ,  Microdata  ,  Device API  ,  File API"
      },
      {
        imgs: ["2016032901.jpg"],
        text:
          "寒假就把ajax挂在嘴上，今天终于用上了，点击 + 后。页面无刷新的将html5提交数据库并在下方显示，用过之后才明白ajax的强大"
      }
    ]
  },
  {
    time: "2016-03-26",
    children: [
      {
        imgs: ["2016032604.jpg"],
        text: "破解版get"
      },
      {
        imgs: ["2016032601.jpg", "2016032602.jpg", "2016032603.jpg"],
        text: "换波书看看"
      }
    ]
  },
  {
    time: "2016-03-25",
    children: [
      {
        imgs: ["2016032502.jpg"],
        text: "又一张，除了添加图片其他功能都完成啦"
      },
      {
        imgs: ["2016032501.jpg"],
        text: "果然第一周的css没白花功夫，就算是动态数据样式也基本没问题了"
      }
    ]
  },
  {
    time: "2016-03-24",
    children: [
      {
        imgs: ["2016032403.jpg"],
        text:
          "第一页的大致功能完成了，不过这样式布局目前还没找到好的方法，php动态输出的数据没法想静态网页任意布局，感觉我又要滚回去学习动站布局了"
      },
      {
        imgs: ["2016032401.jpg", "2016032402.jpg"],
        text: "继续完成我的简陋不安全的记事本"
      }
    ]
  },
  {
    time: "2016-03-18",
    children: [
      {
        imgs: ["2016031801.jpg", "2016031802.jpg", "2016031803.jpg"],
        text: "学会了发送和接收消息，再做记事本基本不成问题了"
      }
    ]
  },
  {
    time: "2016-03-15",
    children: [
      {
        imgs: [
          "2016031501.jpg",
          "2016031502.jpg",
          "2016031503.jpg",
          "2016031504.jpg",
          "2016031505.jpg"
        ],
        text: "从注册到激活，登录，个人中心，分页完成了，然而才学了三分之一"
      }
    ]
  },
  {
    time: "2016-03-11",
    children: [
      {
        imgs: ["2016031101.jpg", "2016031102.jpg", "2016031103.jpg"],
        text: "一星期了，才学到将注册表单写入数据库"
      }
    ]
  },
  {
    time: "2016-03-02",
    children: [
      {
        imgs: ["20160302.jpg"],
        text:
          "实现了ajax输出页面，不过手机排版根本不能看，只能日后为手机专门做一个样式表"
      }
    ]
  },
  {
    time: "2016-02-29",
    children: [
      {
        imgs: ["2016022904.jpg"],
        text: "好像有点感觉了"
      },
      {
        imgs: ["2016022903.jpg"],
        text: "只有点图像的边框才有反应，这游戏好难"
      },
      {
        imgs: ["2016022901.jpg", "2016022902.jpg"],
        text: "同样都是手机浏览器，显示样式怎么就辣么大呢"
      }
    ]
  },
  {
    time: "2016-02-20",
    children: [
      {
        imgs: ["2016022006.jpg"],
        text:
          "做到最后我发现30+行代码就能解决所有问题，根本不需要计算！真不知道是该哭还是笑"
      },
      {
        imgs: [
          "2016022001.jpg",
          "2016022002.jpg",
          "2016022003.jpg",
          "2016022004.jpg",
          "2016022005.jpg"
        ],
        text: "全是数学逻辑的移动导航，脑子要爆炸了（最后一张样图）"
      }
    ]
  },
  {
    time: "2016-02-18",
    children: [
      {
        imgs: ["20160118.jpg"],
        text: "这有毒的五月终于搞定了，要吐血了"
      }
    ]
  },
  {
    time: "2016-02-17",
    children: [
      {
        imgs: ["20160117.jpg"],
        text: "日历功能实现了，不过刚发现手机排版有些问题！简直不科学。"
      }
    ]
  }
];

export default data;
