

前端入门html5+css3



## 学习HTML5

2021.1.2

### day01

------



![image-20210102163311030](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210102163311030.png)

### 1.网页

```
1.什么是网页？

2.什么是HTML？

3.网页的形成？
```

#### 1.1什么是网页

​	**网站**是展示特定内容相关的网页集合。

​	**网页**是网站中的一个“页”，通常是HTML格式的文件，通过浏览器阅读。

​	**网页是构成网站的基本元素**，通常由图片、文字、视频、声音等**元素**构成，通过html语言创建，常以.htm或.html后缀结尾，因此又将其称为**HTML文件**。

#### 1.2什么是HTML

​	html不是编程语言，而是一种标记语言。

​	**HTML**指的是**超文本标记语言**，是描述网页的一种语言。

**所谓超文本，有两层含义：**

1.可以添加图片、声音、动画、多媒体等内容（超越文本限制）

2.可以从一个文件跳转到另一个文件，与世界各地主机的文件连接（超级链接文本即超文本）

<img src="jietu.png">

<img src="">最简单的网页。

#### 1.3网页的形成

​	网页由网页元素组成，利用html标签描述这些元素，然后浏览器解析显示给用户。

前端人员开发代码--->浏览器显示代码（解析、渲染）--->生成最后的Web页面

#### 1.4网页总结

回答上面三个问题。

1.网页是由图片、声音、文字、视频等元素组成的，是一个html文件。

2.HTML是超文本标记语言，用来制作网页的一门语言，由各类标签组成，如图片标签、连接标签....

3.网页的形成：由前端人员编写HTML文件，用浏览器打开，显示网页。



### 2.常用浏览器

网页时通过浏览器来展示的，主要了解浏览器的两点：主要的浏览器与浏览器内核。

​	国际常用浏览器有IE（微软旗下还有Edge）、火狐、谷歌（必备）、Safari（苹果自带的）、Opera五大浏览器。

​	**浏览器内核**

浏览器内核（渲染引擎）：负责读取网页内容，整理讯息，计算网页的显示方式并显示页面。

| 浏览器       | 内核    | 备注                                               |
| ------------ | ------- | -------------------------------------------------- |
| IE           | Trident | IE、猎豹安全、360极速浏览器、 百度浏览器           |
| firefox      | Gecko   | 火狐浏览器内核                                     |
| Safari       | Webkit  | 苹果浏览器内核                                     |
| chrome/Opera | Blink   | chrome / opera浏览器内核。Blink 其实是WebKit的分支 |

国内一般浏览器会采用Webkit、Blink内核，如UC、QQ、搜狗。

### <u>3.Web标准</u>（重点）

#### 3.1什么是Web标准

Web标准是由W3C组织和其他标准化组织制定的**一系列标准的集合**。W3C（万维网联盟）是国际最著名的标准化组织。

#### 3.2为什么需要Web标准

​	由于浏览器不同，它们所显示的页面或排版不同，如默认字体不同，字体大小不同等，给用户体验不是很好。因此需要Web标准让不同的开发人员写出的页面更标准、更统一，除此之外，还有以下优点：

1.让Web的发展前景更广阔

2.内容能被更广泛的设备访问

3.更容易被搜索引擎搜索

4.降低网站流量费用

5.便于网站维护

6.提高页面浏览速度



#### 3.2<u>Web标准的构成</u>

主要包括**结构（structure）、表现（presentation）和行为（Behavior）**三个方面。

| 标准 | 说明                                                         |
| ---- | ------------------------------------------------------------ |
| 结构 | 结构用于对**网页元素**进行整理和分类，现阶段主要学的是HTML。只有网页元素，比较乱、糟。 |
| 表现 | 表现用于设置网页元素的版式、颜色、大小等**外观样式**，主要指的是CSS。如设置文字字体、颜色、大小等，是结构更清晰、美观。 |
| 行为 | 行为是指网页模型的定义及**交互**的编写，现阶段主要学的是Javascript。让静态的网页变动态，如列表显示、图片轮播等。 |

Web标准提出的最佳体验方案：**结构、样式、行为相分离**，即将**结构写到HTML文件中，表现写到CSS文件中，行为写到Javascript文件中。**

形象理解：**结构**类似身体（裸奔的小鸟），**表现**类似外观（有美丽羽毛的小鸟），**行为**类似行为动作（会飞的小鸟）。三者中结构最重要。

![image-20210102200213386](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210102200213386.png)



### 4.HTML标签

#### 4.1HTML语法规范

##### 4.1.1基本语法概述

1.HTML标签是**由尖括号包围的关键词**，如</html>

2.HTML标签**通常成对出现**，如<html></html>，称成双标签。其中，<html>是开始标签，</html>是结束标签。

3.有些特殊的标签必须是单个标签（极少情况），如&lt;br />或&lt;br>（反斜杠可加可不加），称为单标签

##### 4.1.2标签关系

双标签关系可以分为：**包含关系和并列关系**。

包含关系形如父子，又称父子关系，如下方title是儿子，head是父亲。

```
<head>
	<title></title>
</head>
```

并列关系形如兄弟，如下方head与body是兄弟。

```
<head></head>

<body></body>
```

#### 4.2HTML基本结构标签

##### 4.2.1第一个HTML网页

每个网页都会有一个基本的结构标签（又称骨架标签），页面内容在这些基本标签上书写。HTML页面也成为HTML文档。

```html
<html>
<head>
    <title>我的第一个页面</title>
</head>
<body>
	对于不可控的事情，我们要保持乐观；对于可控的事情，我们要保持谨慎。
</body>
</html>
```
| 标签名          | 定义       | 说明                                                 |
| --------------- | ---------- | ---------------------------------------------------- |
| <html></html>   | HTML标签   | 页面中最大的标签，我们称为根标签。                   |
| <head></head>   | 文档的头部 | 注意在head标签中，我们必须设置的标签是title          |
| <title></title> | 文档的标题 | 让页面拥有一个属于自己的网页标题                     |
| <body></body>   | 文档的主体 | 元素包含文档的所有内容，页面内容基本都是放到body里面 |

head部分:

![image-20210102202227515](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210102202227515.png)

title部分，文档标题:

![image-20210102202255961](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210102202255961.png)

body标签:

![image-20210102203323420](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210102203323420.png)

**HTML文档的后缀名必须是.html或.htm,**，浏览器的作用是读取HTML文档，并以网页的形式显示它们。

##### 4.2.2基本结构标签总结

骨架结构需牢记。



#### 4.3开发工具

Visual Studio Code（VSCode）

##### 4.3.1vscode的使用

1.新建文件（ctrl+N）

2.**先保存后编写**，保存时注意文件**后缀名改为.html**

3.Ctrl+加号键，Ctrl+减号键 可以放大缩小视图

4.生成页面骨架结构快捷键：!（英文）+tab键

5.**保存后右键选择open in default browser运行**或快捷键Alt+B。

![image-20210102223016169](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210102223016169.png)

![image-20210102223029193](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210102223029193.png)

##### 4.3.2vscode插件安装

​	在拓展中搜索插件名称进行安装。

推荐安装的插件:

![image-20210103103114310](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103103114310.png)

注意：JS-CSS-HTML这个插件很不好用，不要安装；插件安装后安装完毕后需重启才能使用。

根据第一个案例分析其中的代码。

##### 4.3.3文档类型声明标签

&lt;!DOCTYPE>文档类型声明，作用是告诉浏览器使用哪种HTML版本来显示网页。

```html
<!DOCTYPE html>
```

这句代码意思是：**当前页面采取的是HTML5版本**来显示网页。

**注意：**

1.&lt;!DOCTYPE>声明位于文档的最前面的位置，处于&lt;html>标签之前。

2.&lt;!DOCTYPE>不是一个HTML标签，就是文档类型的声明标签。

3.&lt;html>中的标签都是HTML标签。

##### 4.3.4lang语言种类

```
<html lang="en">
```

用来定义当前文档显示的语言

1.en定义语言为英语，即定义英文网页

2.zh-CN定义为中文，即定义中文网页

在定义为en的文档也可以显示中文，定义为zh-CN的文档也可以显示英文。

这个属性对于浏览器和搜索引擎（百度、谷歌等）有一定作用，如提供页面翻译功能。

##### 4.3.5字符集

字符集（cha set）是多个字符的集合，以便计算机能够识别和存储各种文字。

在&lt;head>标签内，可以通过**&lt;meta>**标签的**charset**属性来规定HTML文档应该使用哪种字符编码。

```
<meta charset="UTF-8">
```

charset常用的值有：GB2312、GBK和UTF-8，其中**UTF-8又称为万国码**，基本包含了所有国家需要用到的字符。

**注意：上面语法是必须要写的代码，否则可能会引起乱码的情况。一般情况下，统一使用“UTF-8”编码，尽量统一写成标准的“UTF-8”，不要写成“utf8”和“UFT8”。**

##### **4.3.6**总结

1.以上三个代码vscode自动生成，基本不需要我们自己重写。

2.&lt;!DOCTYPE html>文档类型声明标签，告诉浏览器这个页面采取html5版本来显示页面。

3.&lt;html lang="en">告诉浏览器或搜索引擎，这是一个英文网站，本页面采取英文来显示。

4.&lt;meta charset="**UTF-8**">必须写，采用UFT-8来保存文字，若不写则可能乱码。



#### 4.4HTML常用标签

##### 4.4.1标签语义

​	学习标签的重点是**记住每个标签的语义，即标签的含义**，即这个标签是用来干嘛的。

​	**<u>根据标签的语义，在合适的地方添加一个最为合理的标签，使得页面结构更为清晰。</u>**

![image-20210103111650634](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103111650634.png)

如上图，添加标题和段落标签使得结构更清晰。

##### <u>4.4.2**标题标签**&lt;h1>-h6></u>

​	HTML提供了6个等级的网页标题，即h1-h6，h是head（标题、头部）的缩写。

**标签语义：**作为标题使用，1-6根据重要性递减。

特点：

1.加了标题的文字会变的更粗，字号也会依次变大。

2.一个标题独占一行。

如：

```html
<body>
    <h1>我是标题</h1>
    <h2>标题一共六级</h2>
    <h3>文字加粗一行显</h3>
    <h4>由大到小依次减</h4>
    <h5>从重到轻随之变</h5>
    <h6>具体效果刷新见</h6>
</body>
```

![image-20210103112844821](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103112844821.png)

##### 4.4.3<u>段落和换行标签</u>

######  4.4.3.1段落标签

​	**&lt;p>标签用于定义段落**，它可以将整个网页分为若干个段落。（p是paragraph的缩写，意为段落）。

​	**标签语义**：把HTML文档分割为若干个段落。

特点：

1.文本在一个段落中会根据浏览器窗口的大小自动换行。

2.段落和段落之间<u>保有空隙</u>。

如：

```html
<body>
    <p>超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。</p>
<p>您可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。</p>
<p>在本教程中，您将学习如何使用 HTML 来创建站点。</p>
<p>HTML 很容易学习！相信您能很快学会它！</p>
</body>
```

![image-20210103135847434](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103135847434.png)



###### 4.4.3.2换行标签

​	在HTML中，一个段落中的文字会从左到右依次排列，直到浏览器窗口的右端，然后才自动换行，如果希望某段文本**强制换行显示，可以使用换行标签&lt;br** />（中间可不加空格）(br是break的缩写，意为打断、换行)

​	**标签语义**：强制换行

特点：

1.该标签是个单标签。

2.该标签只是简单地开始新的一行，与段落不同，段落之间会插入一些垂直的间距。（**间距**，具体可看下图）。

如：

```
 <p>超文本标记语言（英语：HyperText Markup Language，简称：HTML）<br />是一种用于创建网页的标准标记语言。</p>
```

![image-20210103140823438](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103140823438.png)



##### 4.4.4体育新闻案例

​	**VSCode快捷键：alt+Z自动换行**

```html
<body>
    <h1>天问一号飞行里程突破4亿公里</h1>
<h4>今年将进入环火轨道着陆火星</h4>
<p>发布时间：2021-01-03 14:10 <br />星期日来源：法治日报——法制网</p>
    <p>法治日报全媒体记者 陈丽平 通讯员 杨璐</p>

<p>截至1月3日6时,天问一号探测器已经在轨飞行163天,飞行里程突破4亿公里,距离地球约1.3亿公里,距离火星约830万公里。探测器姿态稳定,按计划将在一个多月后实施近火制动,进入环火轨道,准备着陆火星。</p>

<p>天问一号任务是我国独立开展行星际探测的第一步,将通过一次发射实现对火星的“绕、着、巡”,即火星环绕、火星着陆、火面巡视。天问一号探测器总重约5吨,由环绕器和着陆巡视器组成,着陆巡视器主要包括进入舱和火星车。目前,环绕器已完成第三次在轨自检,各系统工作正常。</p>

<p>责任编辑：冀春雨</p>
```

![image-20210103142455305](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103142455305.png)



##### 4.4.5文本格式化标签

文字设置**粗体**、*斜体*或<u>下划线</u>等效果。

标签语义：突出重要性，比普通文字更重要。

| 语义   | 标签                       | 说明                         |
| ------ | -------------------------- | ---------------------------- |
| 加粗   | <strong></strong>或<b></b> | 更推荐第一个标签，语义更强烈 |
| 倾斜   | <em></em>或<i></i>         | 同上                         |
| 删除线 | <del></del>或<s></s>       | 同上                         |
| 下划线 | <ins></ins>或<u></u>       | 同上                         |

<u>重点记住**加粗**和*倾斜*。</u>

如：

```html
<body>
    我是<strong>加粗</strong>文字。
    我是<b>加粗</b>文字。
    我是<em>倾斜</em>文字。
    我是<i>倾斜</i>文字。
    我是<del>删除</del>文字。
    我是<s>删除</s>文字。
    我是<ins>下划线</ins>
    我是<u>下划线</u>

</body>
```



![image-20210103150617995](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103150617995.png)



##### 4.4.6&lt;div>和&lt;span>标签

​	&lt;div>和&lt;span>是没有语义的，它们就是一个盒子，用来装内容的。div是division的缩写，意为分割、分区。span意为跨度、跨距。

特点：

1.&lt;div>标签用来布局，但一行只能放一个&lt;div>，大盒子。

2.&lt;span>标签用来布局，一行可以放多个&lt;span>，小盒子。

如：

```html
<body>
    <div>我是div标签为一个人单独占一行</div>123
    <div>我是div标签为一个人单独占一行</div>
    <span>百度</span>
    <span>新浪</span>
    <span>搜狐</span>

</body>
```

![image-20210103150506170](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103150506170.png)

又如：

![image-20210103145016168](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103145016168.png)

京东官网页面上，一个大盒子套了三个小盒子，小盒子内又可再套。

##### <u>4.4.7图像标签和路径</u>

###### 4.4.7.1图像标签

&lt;img>标签用于定义HTML页面中的图像。img是image的缩写，意为图像。

例：&lt;img src="图像URL"**/>**(一般单标签结尾的/)

**src**是&lt;img>标签的**必须属性**，用于**指定图像文件的路径和文件名**。(包括后缀名)

所谓属性：简单理解就是属于这个图像标签的特性。



**首先**需要**将图像和HTML放入同一个文件**中。

图像标签的其他属性：

| 属性      | 属性值   | 说明                               |
| --------- | -------- | ---------------------------------- |
| src       | 图片路径 | 必须属性                           |
| **alt**   | 文本     | 替换文本，图像不能显示时显示的文字 |
| **title** | 文本     | 提示文本，鼠标放在图像上显示的文字 |
| width     | 像素     | 设置图像的宽度                     |
| height    | 像素     | 设置图像的高度                     |
| border    | 像素     | 设置图像的边框粗细                 |

其中，width和height一般设置其中的一个就行，图像会同比例进行缩放。

boder一般使用CSS进行设置，而不用html，边框的颜色圆框等属性等CSS设置。

图像标签属性注意点：

1）图像标签可以拥有多个属性，但必须写在标签名的后面。

2）属性之间不分先后顺序，标签名与属性、属性与属性之间均**以空格分开**

3）属性采用键值对的格式，即key="value"的格式，属性=”属性值。“

如：

```html
<body>
    图像标签的使用：<br />
    <img src="jietu.png"/>

    <h4>alt 替换文本 图像显示不出来时用文字替换：</h4>
    <img src="jietu1.png" alt="在这里"/>

    <h4>title 提示文本 鼠标放在图像上，提示的文字：</h4>
    <img src="jietu.png" alt="在这里" title="只有我不在的街道"/>

    <h4>width 给图像设置宽度：</h4>
    <img src="jietu.png" alt="在这里" title="只有我不在的街道" width="100"/>

    <h4>height 给图像设置宽度：</h4>
    <img src="jietu.png" alt="在这里" title="只有我不在的街道" height="200"/>

    <h4>border 给图像设置边框：</h4>
    <img src="jietu.png" alt="在这里" title="只有我不在的街道" height="200" border="5"/>

</body>
```



![image-20210103151630916](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103151630916.png)

![image-20210103151649212](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103151649212.png)



###### 4.4.7.2路径

1.目录文件夹和根文件夹

2.VSCode打开目录文件夹

3.路径

（1）**目录文件夹和根文件夹**

**目录文件夹**：实际上就是一个普通的文件夹，里面存放了我们做页面所需要的相关素材，如html文件、图片等。

**根目录**：打开目录文件夹的第一层就是根目录。

（2）**VSCode打开目录文件夹**

文件----打开文件夹，选择目录文件夹，进而可以创建或删除文件。

或直接将目录文件夹拖入VSCode中

（3）路径

通常我们会新建一个文件夹来存放图像文件，这时再查找图像，就需要采用”路径“的方式来指定图像文件的位置。

路径分为相对路径、绝对路径。

**相对路径**：以**引用文件所在位置**为参考基础，而建立出的目录路径，即**<u>图片相对于HTML文件的位置</u>。**

| 相对路径分类 | 符号 | 说明                                                         |
| ------------ | ---- | ------------------------------------------------------------ |
| 同一级路径   |      | 图像文件位于HTML文件同一级，如&lt;img src="baidu.com"/>      |
| 下一级路径   | /    | 图像文件位于HTML文件下一级，如&lt;img src="images/baidu.com"/> |
| 上一级路径   | ../  | 图像文件位于HTML文件上一级，如&lt;img src="../baidu.com"/>   |

如：

```
上一路径：
<body>
    <img src="images1/jietu.png"/>
</body>
```

**绝对路径**：是指目录下的绝对位置，直接到达目标位置，通常是从盘符开始的路径。

使用**”\“**(该方法不常用)

如：

```
"D:\web\img\logo.gif"或完整的网络地址"http://www.itcast.cn/imanegs/logo.if"
```



##### 4.4.8<u>超链接标签</u>

###### 4.4.8.1链接的语法格式

**&lt;a href="跳转目标" target="目标窗口的弹出方式"> 文本或图像 &lt;/a>**。a是anchor的缩写，意为锚

两个属性作用如下：

| 属性       | 作用                                                         |
| ---------- | ------------------------------------------------------------ |
| **href**   | 用于指定链接目标的url地址（必须属性），当标签应用href数学时，就具有了超链接的功能 |
| **target** | 用于指定链接页面的打开方式，其中"_self"为默认值，"_blank"为在新窗口中打开方式 |

**_self 在当前窗口打开页面**

**_blank在新窗口打开**

###### 4.4.8.2链接的分类

1）外部链接，如：

```
    <h4>1.外部链接</h4>
    <a href="http://www.qq.com" target="_blank">腾讯</a>
```

2）内部链接：网站内部页面之间的相互链接，直接链接内部页面名称即可，如：

```
	<h4>2.内部链接</h4>
    <a href="demo.html" target="_blank">demo</a>
```

![image-20210103171709217](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103171709217.png)



![image-20210103171724270](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103171724270.png)

（3）空链接：如果当前没有确定链接目标时（后续有链接时再更换），href="#"，如：

```
    <h4>空链接</h4>
    <a href="#">dem</a>
```

![image-20210103172014691](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103172014691.png)



（4）下载链接：如果href里面地址是一个文件或者压缩包，会下载这个文件。如：

```
    <h4>下载链接，地址链接的是 文件 .exe 或者zip等压缩包文件</h4>
    <a href="jietu.zip">下载文件</a>
```

![image-20210103172306010](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103172306010.png)



（5）网页元素链接：在网页中的各种网页元素，如文本、图像、表格、音频、视频等都可以添加超链接。如：

```
    <h4>网页元素的链接</h4>
    <a href="http:www.baidu.com"><img src="jietu.png" /></a>
```

![image-20210103172755775](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103172755775.png)

（6）锚点链接：当我们点击链接，可以快读定位到页面中的某个位置。

- 在**链接文本的href属性**中，设置属性值为**#名字**的形式，如&lt;a href="#two"> 第二集&lt;/a>
- 找到**目标位置**标签，里面添加一个**id属性=刚才的名字**，如：&lt;h3 id="two"> 第二集介绍&lt;/h3>

如：百度百科

![image-20210103183620556](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103183620556.png)

```html
<h2 id="top">目录</h2>
1 <a href="#jianjie">个人简介</a><br />
2 <a href="#演艺经历">演艺经历<br /></a>
3 <a href="#主要作品">主要作品<br /></a>
4 <a href="#获奖记录">获奖记录<br /></a>

<h3 id="jianjie">个人简介</h3>
刘德华（Andy Lau），1961年9月27日出生于中国香港，籍贯广东新会 [1]  ，华语影视男演员、歌手、制片人、作词人。<a href="#top"><strong >返回顶部</strong></a>

<h3 id="演艺经历">演艺经历</h3>
1981年出演电影处女作《彩云曲》 [2]  。1983年主演的武侠剧《神雕侠侣》在香港获得62点的收视纪录 [3-4]  。1991年创办天幕电影公司 [5]  。1994年担任剧情片《天与地》的制片人 [6]  。2000年凭借警匪片《暗战》获得第19届香港电影金像奖最佳男主角奖 [7-8]  。2004年凭借警匪片《无间道3：终极无间》获得第41届台湾电影金马奖最佳男主角奖 [8-9]  。2005年获得香港UA院线颁发的全港最高累积票房香港男演员奖 [10]  。2006年获得釜山国际电影节亚洲最有贡献电影人奖 [11]  。2011年主演剧情片《桃姐》，并凭借该片获得台湾电影金马奖最佳男主角奖、香港电影金像奖最佳男主角奖 [12]  。2012年担任第49届台湾电影金马奖评审团主席 [13]  。2020年主演警匪动作片《拆弹专家2》 [14]  。
<p>1985年发行首张个人专辑《只知道此刻爱你》 [15]  。1990年凭借专辑《可不可以》在歌坛获得关注 [16]  。1994年获得十大劲歌金曲最受欢迎男歌星奖。1995年在央视春晚上演唱其代表作《忘情水》 [17]  。2000年被《吉尼斯世界纪录大全》评为获奖最多的香港男歌手 [18]  。2004年第六次获得十大劲歌金曲最受欢迎男歌星奖。2015年第5次登上央视春晚并演唱歌曲《回家的路》 [19]  。</p>
<p>演艺事业外，刘德华关心公益慈善。1994年创立刘德华慈善基金会 [20]  。2000年被评为世界十大杰出青年 [21]  。2005年发起亚洲新星导计划 [22]  。2008年被委任为香港非官守太平绅士 [23]  。2010年获得第12届世界杰出华人奖 [24]  。2016年连任中国残疾人福利基金会副理事长 [21]  。</p><a href="#top"><strong>返回顶部</strong></a>

<h3 id="主要作品">主要作品</h3>
无间道 天若有情 天下无贼 旺角卡门等。<a href="#top"><strong>返回顶部</strong></a>

<h3 id="获奖记录">获奖记录</h3>
<strong>香港电影金像奖</strong><br />
▪ 2018    第37届香港电影金像奖最佳男主角奖[238]     拆弹专家    （提名）    <br />
▪ 2016    第35届香港电影金像奖最佳男主角奖    失孤    （提名）    <br />
```



以及**逆向思维返回顶部**的实现

![image-20210103190329024](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103190329024.png)



#### 4.5HTML中的注释和特殊字符

##### 4.5.1注释

HTML中的**注释以”&lt;!--"开头，以"-->"结束**,**快捷键ctrl+/**。

一句话，注释标签里的内容是给程序员看的，这个代码是不执行不显示到页面中的。但写注释是个好习惯，帮助阅读和理解。

##### 4.5.2特殊字符

| 特殊字符 | 描述     | 字符的代码                |
| -------- | -------- | ------------------------- |
|          | 空格符   | &nbsp；（英文分号，下同） |
| <        | 小于号   | &lt；                     |
| >        | 大于号   | &gt；                     |
| &        | 和号     | &amp；                    |
| &yen;    | 人名币   | &yen；                    |
| &copy;   | 版权     | &copy；                   |
| &reg;    | 注册商标 | &reg；                    |
| &deg;    | 摄氏度   | &deg；                    |
| &plusmn; | 正负号   | &plusmn；                 |

| &times;  | 乘号  | &time；   |
| -------- | ----- | --------- |
| &divide; | 除号  | &divide； |
| &sup2;   | 平方2 | &sup2；   |
| &sup3;   | 立方3 | &sup3；   |

**重点记住空格、大于号、小于号**，其余使用频率较低，使用时回头查阅即可。

#### 4.6综合案例

结合根目录、内部链接、外部链接、锚点链接、图像等知识制作“圣诞节页面”。

```html
<body>
    <h1>圣诞节的那些事</h1>
1.<a href="#jie">圣诞节的由来</a><br />
2.<a href="#oldman">圣诞老人的由来</a><br />
3.<a href="#tree">圣诞树的由来</a><br />
<h2 id="jie">圣诞节的由来</h2>
<p>基督教纪念耶稣诞生的重要节日。亦称耶稣圣诞节、主降生节，天主教亦称耶稣圣诞瞻礼。耶稣诞生的日期，《圣经》并无记载。公元336年罗马教会开始在12月25日过此节。12月25日原是罗马帝国规定的太阳神诞辰。有人认为选择这天庆祝圣诞，是因为基督教徒认为耶稣就是正义、永恒的太阳。5世纪中叶以后，圣诞节作为重要节日，成了教会的传统，并在东西派教会中逐渐传开。因所用历法不同等原因，各教派会举行庆祝的具体日期和活动形式也有差别。圣诞节习俗传播到亚洲主要是在十九世纪中叶，日本、韩国等都受到了圣诞文化的影响。现在西方在圣诞节常互赠礼物，举行欢宴，并以圣诞老人、圣诞树等增添节日气氛，已成为普遍习俗。圣诞节也成为西方世界以及其他很多地区的公共假日。</p>
<img src="images/t1.gif"/>
<h2 id="oldman">圣诞老人的由来</h2>
<p><a href="laoren.html" target="_blank">圣诞老人（SantaClaus）</a>，其原型是生活在公元4世纪米拉城（今土耳其境内）的主教圣尼古拉斯。他一生当中做了很多慈善工作，最喜欢在暗中帮助穷人。圣诞老人是他后来的别号，这个名字是出自他暗中送钱，帮助三个女孩子的故事。尼古拉斯死后被尊为圣徒。圣诞老人的形象是一位身穿红袍、头戴红帽的白胡子老头。每年圣诞节他驾着鹿拉的雪橇从北方而来，由烟囱进入各家，把圣诞礼物装在袜子里挂在孩子们的床头上或火炉前。</p>
<img src="images/t2.jpg"/>
<h2 id="tree">圣诞树的由来</h2>
<p>圣诞树，通常人们在圣诞前后把一棵常绿植物（如松树）弄进屋里或者放在户外，用圣诞灯和彩色的装饰物装饰，并把一个天使或星星置于树顶，圣诞树起源于德国；圣诞节环，西方国家圣诞节期间挂在家门口用的装饰品，通常用绿色的枝叶或藤条（松毛、松针等）和银色的金属及金色的铃铛配以红色的缎带组成主色调，以绿、白、黄、红四色代表欢乐喜庆，上面还写有MERRY CHRISTMAS或简写为X'mas的字样，圣诞节环最早出现在芬兰。</p>
<img src="images/t3.jpg"/>
<p>更多内容可以<a href="http://www.baidu.com" target="_blank">百度一下</a>。</p>
</body>
```



![image-20210103202322015](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103202322015.png)

![image-20210103202410455](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103202410455.png)



#### 4.7表格标签

表格是开发中非常常用的标签。

##### 4.7.1表格的主要作用

表格主要用于**显示、展示数据**，不是用来布局页面的。能将复杂的数据表现地很有条例。

##### 4.7.2表格的基本语法

1.&lt;table></table&gt;是用于定义表格的标签

2.<tr&gt;</tr&gt;标签用于定义表格的行，必须嵌套在&lt;table></table&gt;标签中

3.<td&gt;<td&gt;用于定义表格中的单元格，必须嵌套在<tr&gt;</tr&gt;标签中。

4.字母td指表格数据(table data)，即数据单元格的内容。

注：没有列的概念，通过单元格个数实现。

![image-20210103215808181](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103215808181.png)

如：

```html
<body>
    <!-- 这些属性需要写到表格标签table里面 -->
    <!--      -->
    <table>
        <tr><td>姓名</td> <td>性别</td> <td>年龄</td></tr>
        <tr><td>张三</td> <td>男</td> <td>18</td></tr>
        <tr><td>李四二</td> <td>男</td> <td>30</td></tr>
        <tr><td>刘德华</td> <td>男</td> <td>56</td></tr>
    </table>
</body>
```

![image-20210103220201378](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103220201378.png)



##### 4.7.3表头单元格标签

一般表头单元格位于表格的第一行或第一列(将td改为th)，表头单元格里面的**文本内容加粗居中**显示（与普通单元格的不同点）。

**<th&gt;**标签表示HTML表格的表头部分（table head的缩写）

如：

```html
<body>
    <!-- 这些属性需要写到表格标签table里面 -->
    <!--      -->
    <table>
        <tr><th>姓名</th> <th>性别</th> <th>年龄</th></tr>
        <tr><td>张三</td> <td>男</td> <td>18</td></tr>
        <tr><td>李四二</td> <td>男</td> <td>30</td></tr>
        <tr><td>刘德华</td> <td>男</td> <td>56</td></tr>

    </table>
</body>
```

![image-20210103220722693](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103220722693.png)

##### 4.7.4表格属性

表格标签的属性在实际开发中并不常用，后面通过CSS来设置。

目的有2个：

1.记住这些英文单词，后续CSS会使用到。

2.直观感受表格的外观形态。

| 属性名       | 属性值              | 描述                                                         |
| ------------ | ------------------- | ------------------------------------------------------------ |
| align        | left、center、right | 规定表格相对周围元素的对齐方式，默认为left，左对齐。center居中，right右对齐。 |
| border       | 1或“”               | 规定表格周围是否拥有边框，默认为“”，表示没有边框。1表示1像素的边框。 |
| cellpadding  | 像素值              | 规定单元边沿与其内容之间的空白，默认1像素。（文字与单元格的距离） |
| cellspacing  | 像素值              | 规定单元格之间的空白，默认2像素。（单元格之间的距离）。设置为0时，即为一根线，具体看案例。 |
| width/height | 像素比或百分比      | 规定表格的宽度/高度                                          |

表格属性使用：（注意这些属性需要写到表格标签table里面）

align：

```html
<body>
    <table align="center">
        <tr><th>姓名</th> <th>性别</th> <th>年龄</th></tr>
        <tr><td>张三</td> <td>男</td> <td>18</td></tr>
        <tr><td>李四二</td> <td>男</td> <td>30</td></tr>
        <tr><td>刘德华</td> <td>男</td> <td>56</td></tr>

    </table>
</body>
```



![image-20210104085018833](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104085018833.png)

border:

```html
<table align="center" border="1" >
```


![image-20210104085051777](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104085051777.png)

cellpadding:

```html
<table align="center" border="1" cellpadding="20">
```

![image-20210104085154078](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104085154078.png)

cellspacing:

```html
<table align="center" border="1" cellpadding="20" cellspacing="0">
```

![image-20210104085252185](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104085252185.png)

width:

```html
<table align="center" border="1" cellpadding="20" cellspacing="0" width="500">
```

![image-20210104085555985](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104085555985.png)

##### 4.7.5案例分析

制作小说排行榜：

![image-20210103222423795](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103222423795.png)

**先制作表格的结构**：

1.第一行里面是th表头单元格(6列8行)

2.第二行开始里面是td普通单元格，（趋势列内容为图片）

3.单元格里面可以放任何元素，文字链接图片等都可以

**后制作表格属性**：

1.用到宽度高度边框cellpadding和cellspacing(cellspacing="0")

2.表格浏览器居中对齐align

注意书写格式，如th/td竖着写更清晰。

```html
<body>
    <table align="center" width="500" height="249" border="1" cellspacing="0">
    <thead>
        <tr>
            <th>排名</th>
            <th>关键词</th>
            <th>趋势</th>
            <th>今日搜索</th>
            <th>最近七日</th>
            <th>相关链接</th>
        </tr>
    </thead>   
    <tbody>

        <tr>
            <td>1</td>
            <td>鬼吹灯</td>
            <td><img src="images/down.jpg"/></td>
            <td>456</td>
            <td>123</td>
            <td><a href="#">贴吧</a> <a href="#">图片</a> <a href="#">百科</a></td>
        </tr>

        <tr>
            <td>2</td>
            <td>盗墓笔记</td>
            <td><img src="images/down.jpg"/></td>
            <td>124</td>
            <td>6754</td>
            <td><a href="#">贴吧</a> <a href="#">图片</a> <a href="#">百科</a></td>
        </tr>

        <tr>
            <td>3</td>
            <td>西游记</td>
            <td><img src="images/up.jpg"/></td>
            <td>212</td>
            <td>7654</td>
            <td><a href="#">贴吧</a> <a href="#">图片</a> <a href="#">百科</a></td>
        </tr>
    </tbody>
    </table>
</body>  
```

![image-20210103224122741](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210103224122741.png)

##### 4.7.6表格结构标签

使用场景：因为表格可能很长，为了更好的表示表格的语义，可以将表格分割成表格头部和表格主体两大部分。

在表格标签中，分别用：**<thead&gt;标签 表格的头部区域，<tbody&gt;标签 表格的主体区域**。

**注意：**

1.<thead&gt;</thead&gt;:用于定义表格的头部，<**thead&gt;内部必须拥有&lt;tr&gt;标签**，一般位于第一行。

2.<tbody&gt;&lt;/tbody>:用于定义表格的主体，主要用于放数据本体，放在<tr&gt;外部。

3.**以上标签都是放在<table&gt;&lt;/table>中，与table同一缩进**

4.可**折叠**thead、tbody代码使得表格更清晰地表达语义。

如：上一个代码

##### 4.7.7合并单元格

将多个单元格合并成一个单元格。

**合并单元格方式**

- 跨行合并：rowspan="合并单元格的个数"，（如下图，<u>将第二行的单元格与第三行的单元格合并，所以称为跨行合并</u>）
- 跨列合并：colspan="合并单元格的个数"，（如下图，将第二列的单元格与第三列的单元格合并）

![image-20210104092046582](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104092046582.png)

**目标单元格**：（写合并代码）

- 跨行：最上侧单元格为目标单元格，写合并代码
- 跨列：最左侧单元格为目标单元格，写合并代码

**合并单元格三步曲**：

1. 先确定是跨行还是跨列并列

2. 找到目标单元格，写上合并方式=合并的单元格数量。<u>如<td colspan="2"&gt;</td&gt;</u>

3. 删除多余的单元格

   注意：clospan/rowspan合并代码写入td内。
   
   ```html
   <body>
       <table align="center" cellspacing="0" border="1" width="500" height="249">
           <tr>
               <td></td>
               <td colspan="2"></td>
               //<del><td></td></del>
           </tr>
           <tr>
               <td rowspan="2"></td>
               <td></td>
               <td></td>
           </tr>
           <tr>
               //<del><td></td></del>
               <td></td>
               <td></td>
           </tr>
       </table>
   </body>
   ```

![image-20210104100347560](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104100347560.png)

##### 4.7.8表格总结

表格三大部分

```
1.表格的相关标签
2.表格的相关属性
3.合并单元格
```

**1.表格的相关标签**

![image-20210104101811621](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104101811621.png)

**2.表格的属性**

align、border、cellspadding、cellspacing、width

**3.合并单元格**

三步曲



#### 4.8列表标签

表格是用来显示数据的，那么**列表就是用来布局**的。

**列表**最大的特点就是整齐、整洁、有序，它作为布局会更加自由和方便。

根据使用情景不同，表格可以分为三大类：**无序列表（图1）、有序列表（图2）和自定义列表**（图3）。

![image-20210104102506018](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104102506018.png)

​                                                                  图1 无序列表

![image-20210104102356123](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104102356123.png)

​																	图2 有序列表

![image-20210104102650402](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104102650402.png)

​																	图3 自定义列表

##### **<u>4.8.1无序列表</u>**

**<ul&gt;**标签表示HTML页面中项目的无序列表，一般会以项目符号呈现列表相，而列表项使用**<li&gt;**标签定义（li是list的缩写，意为列表）。

**基本语法**格式如下：（两部分组成）

![image-20210104103005557](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104103005557.png)

注意：

1.无序列表的各个列表项之间没有顺序级别之分，是并列的。

2.**<ul&gt;</ul&gt;只能嵌套<li&gt;</li&gt;**,直接在<ul&gt;</ul&gt;标签中输入其他标签或文字的操作是不被允许的，如&lt;p>不能放。（ul是unordered list缩写？）

3.**<li&gt;与</li&gt;之间**相当于一个容器，**可以容纳所有元素**。

4.无序列表会带有自己的样式属性(点)，但实际使用中，我们会使用CSS来设置。

如：

```html
<body>
    <h4>你喜欢的食物</h4>
    <ul>
        <li>榴莲</li>
        <li>臭豆腐</li>
        <li>螺狮粉</li>
    </ul>
</body>
```

![image-20210104103726640](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104103726640.png)

以及实际案例，小米的首页中列表的使用：

![image-20210104103914368](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104103914368.png)以及![image-20210104104031817](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104104031817.png)

##### *4.8.2有序列表*

有序列表即为有排列顺序的列表，其各个列表项会按照一定的顺序排序定义。

在HTML标签中，**<ol&gt;**标签用来定义有序列表，列表排序以数字来显示，并使用**<li&gt;**标签来定义列表项。（ol是ordered list缩写？）

**基本语法**格式如下：

![image-20210104104538676](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104104538676.png)

注意：

1..**<ol&gt;</ol&gt;只能嵌套<li&gt;</li&gt;**,直接在<ol&gt;</ol&gt;标签中输入其他标签或文字的操作是不被允许的，如&lt;p>不能放。

2.**<li&gt;与</li&gt;之间**相当于一个容器，**可以容纳所有元素**。

3.有序列表会带有自己的样式属性(自带数字)，但实际使用中，我们会使用CSS来设置。

如：

```html
<body>
    <h4>粉丝排行榜</h4>
    <ol>
        <li>刘德华 10000</li>
        <li>刘若英 2038</li>
        <li>王刚 203</li>
    </ol>
</body>
```

![image-20210104105028141](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104105028141.png)

##### <u>4.8.3自定义列表</u>

自定义列表的使用场景：自定义列表常用于对术语或名词进行解释和描述，自定义列表的列表项前没有任何项目符号。**通俗理解**，一个大哥带一群小弟，小弟们都围绕着大哥。

如：

![image-20210104105451605](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104105451605.png)

在HTML标签中，**<dl&gt;标签**用于定义描述列表（或定义列表，defined list缩写？），该标签会与**<dt&gt;（定义项目/文字，即大哥，defined title缩写？）**和**<dd&gt;（描述每一个项目/文字，即小弟们，defined data缩写？）**一起使用。由三部分组成，dt和dd是并列关系（兄弟关系）。

**基本语法**格式如下：

```html
<dl>
	<dt>名词1</dt>
	<dd>名词1解释1</dd>
	<dd>名词1解释2</dd>
</dl>
```

注意：

1.<dl&gt;</dl&gt;里面**只能包含**<dt&gt;和<dd&gt;.

2.**&lt;dt>和&lt;dd>个数没有限制，经常是一个<dt&gt;对应多个<dd&gt;**.

如：

```html
<body>
    <dl>
        <dt>关注我们</dt>
        <dd>新浪微博</dd>
        <dd>官方微信</dd>
        <dd>联系我们</dd>
    </dl>
</body>
```



![image-20210104110939999](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104110939999.png)

##### 4.8.4列表总结

| 标签名          | 定义         | 说明                                                      |
| --------------- | ------------ | --------------------------------------------------------- |
| <ul&gt;</ul&gt; | **无序标签** | 里面只能包含li 没有顺序，使用较多，li里面可以包含任何标签 |
| <ol&gt;</ol&gt; | 有序标签     | 里面只能包含li 有顺序，使用较多，li里面可以包含任何标签   |
| <dl&gt;</dl&gt; | 自定义列表   | 里面只能包含dt和dd。dt和dd里面可以放任何标签              |

**注意**：

1.学会无序列表、自定义列表的使用场景

2.无序列表和自定义列表的代码书写

3.列表布局在学完CSS后再来完成



#### 4.9表单标签

网页中的表单显示，最典型常见的案例是”注册“。

##### 4.9.1为什么需要表单

使用表单的目的是**收集用户信息**。

##### 4.9.2表单的组成

在HTML中，一个完整的表单通常由**表单域、表单控件（也称为表单元素）和提示信息**3个部分构成。

如：

![image-20210104112414228](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104112414228.png)

###### 4.9.2.1表单域

**表单域**是一个**包含表单元素的区域**（很大）。

在HTML标签中，**&lt;form>标签**用于定义表单域，以实现用户信息的收集和传递。

**&lt;form>会把它范围内的表单元素信息提交给服务器。**

**基本语法**格式如下：

```
<form action="ur1地址" method="提交方式" name="表单域名称">
	各种表单元素控件
</form>
```

如：

```html
  <form action="demo.py" method="POST" name="name1"> 

    </form>
```



由一个标签和三个属性构成，简单理解为：一个表单域+三属性：送去哪（地址），怎么送（提交方式），所送东西名字（名称）。

**常用属性**：

| 属性   | 属性值   | 作用                                               |
| ------ | -------- | -------------------------------------------------- |
| action | url地址  | 用于指定接收并处理表单数据的服务器程序的url地址    |
| method | get/post | 用于设置表单数据的提交方式，其取值为get或post      |
| name   | 名称     | 用于指定表单的名称，以区分同一个页面中的多个表单域 |

基础中，暂不用表单域提交数据，只需写上form标签即可。后续补充讲解。

目前需记住两点：

1.写表单元素之前，需要一个表单域把他们进行包含

2.表单域是form标签。

###### 4.9.2.2表单控件（表单元素）

```
1.input输入表单元素
2.select下拉表单元素
3.textarea文本域元素
```

**1.<input&gt;表单元素**

**<input&gt;标签用于收集用户信息**（input意为输入），标签内包含一个**type属性**，根据不同的type属性值，输入字段拥有很多种形式（如文本字段、复选框、掩码后的文本控件、单选按钮等）。input是**单标签**。

**基本语法**结构如下：

```
<input type="属性值" />
```

**type**属性的属性值及其描述如下：

| 属性值   | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| button   | 定义可点击按钮（多数情况下，通过JS启动脚本）                 |
| checkbox | 定义复选框，**如注册时勾选同意协议**                         |
| file     | 定义输入字段和“浏览”按钮，供文件上传                         |
| hidden   | 定义隐藏的输入字段                                           |
| image    | 定义图像形式的提交按钮                                       |
| password | 定义密码字段，该字段中的字符被掩码                           |
| radio    | 定义单选按钮                                                 |
| reset    | 定义重置按钮，重置按钮会清除表单中的所有数据                 |
| submit   | 定义提交按钮，提交按钮会把表单数据发送到服务器               |
| text     | 定义单行的输入字段，用户可在其中输入文本，默认宽度为20字符。 |

除此之外的常用属性如下：

| 属性           | 属性值         | 描述                                                 |
| -------------- | -------------- | ---------------------------------------------------- |
| name           | 由用户定义     | 定义input元素的名称，用来区别不同的表单              |
| value          | 由用户定义     | 规定input元素的值，<u>首次打开页面时默认显示文字</u> |
| <u>checked</u> | <u>checked</u> | 规定此input元素首次加载时应当被选中                  |
| maxlength      | 正整数         | 规定输入字段的字符的最大长度                         |

**注意**：

1.name和value是每个表单元素都有的属性值，主要给后台人员使用。简单理解：name是标签的名字，value是标签内容的初始值。name用户们看不见，value用户们可以看见。

```html
<form>
  用户名：<input type="text" name="username" value="请输入用户名" maxlength="6"/><br>
</form>
```

![image-20210104150924455](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104150924455.png)

**注意**："请输入用户名"这几个字会占用字节，使用时需要删去再自定义用户名。

2.name表单元素的名字，**要求单选按钮和复选框要有相同的name值**，这样才能实现多选一或多选的功能。

```html
<form>
  性别：<input type="radio" name="sex" value="男">男<input type="radio" name="sex" value="女"/> 女<br>
</form>
```

3.checked属性主要针对单选按钮和复选框，主要作用：首次打开页面时默认选中某个表单元素。

4.maxlength是用户可以在表单元素输入的最大字符数，一般较少使用。



属性的使用：

button:(如获取短信验证码应用)

```html
 <!-- 普通按钮button,后期结合js搭配使用 -->
        <input type="button" value="获取短信验证码"><br>
```

![image-20210104154132083](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104154132083.png)

checkbox及checked:(如爱好多选应用)

```html
  <!-- checkbox复选框 实现多选 -->
 爱好：<input type="checkbox" name="hobby" value="eat" checked="checked"/>吃饭
 <input type="checkbox" name="hobby" value="sleep"/> 睡觉 
 <input type="checkbox" name="hobby" value="paly"/>打豆豆
<br>
```

![image-20210104154417906](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104154417906.png)

file:(如从相册中上传头像设置应用)

```html
 <!-- 文件域，使用场景：上传文件使用的 -->
        上传头像：<input type="file">
```

![image-20210104154556721](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104154556721.png)

password:(如用户注册时输入密码应用)

```html
<!-- password密码框 用户看不见输入的密码 -->
        密码：<input type="password" name="pwd"/><br>
```

![image-20210104154649244](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104154649244.png)

radio:(如注册时性别勾选时应用)注意设置name

```html
<!-- name 是表单元素名字，性别单选按钮实现必须有相同的名字name,这才能实现多选一  复选框同理-->
<!-- 单选按钮和复选框可以设置checked属性，当页面打开时默认选择这个按钮 -->
        性别：<input type="radio" name="sex" value="男" checked="checked"/>男
        <input type="radio" name="sex" value="女"/> 女<br>
```

![image-20210104154825434](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104154825434.png)

reset:可以通过设置value设置重置按钮的显示文字

```html
<!-- 重置按钮可以还原表单元素的初始的默认状态 -->
        <input type="reset" value="重新填写"><br>
```

![image-20210104154903166](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104154903166.png)

submit:(如注册时的“注册按钮”应用)，同样可以通过设置value设置提交按钮的显示文字

```html
<form action="XXX.php" method="get">
<!-- 点击了提交按钮，可以把表单域form里面的表单元素及其值提交给服务器 -->
        <input type="submit" value="免费注册">
</form>
```

![image-20210104155021447](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104155021447.png)

点击之后：![image-20210104155524542](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104155524542.png)

text:(如注册时用户名输入应用)

```html
 <!-- text文本框，用户可以在里面输入任何文字 -->
        用户名：<input type="text" name="username" value="请输入用户名" maxlength="6"/><br>
```

全部：

```html
<body>
    <form action="XXX.php" method="get">
        <!-- text文本框，用户可以在里面输入任何文字 -->
        用户名：<input type="text" name="username" value="请输入用户名" maxlength="6"/><br>
        <!-- password密码框 用户看不见输入的密码 -->
        密码：<input type="password" name="pwd"/><br>
        <!-- radio单选按钮 实现多选一 -->
        <!-- name 是表单元素名字，性别单选按钮实现必须有相同的名字name,这才能实现多选一  复选框同理-->
        <!-- 单选按钮和复选框可以设置checked属性，当页面打开时默认选择这个按钮 -->
        性别：<input type="radio" name="sex" value="男" checked="checked"/>男<input type="radio" name="sex" value="女"/> 女<br>
        <!-- checkbox复选框 实现多选 -->
        爱好：<input type="checkbox" name="hobby" value="eat" checked="checked"/>吃饭
        <input type="checkbox" name="hobby" value="sleep"/> 睡觉 
        <input type="checkbox" name="hobby" value="paly"/>打豆豆<br>
        <!-- 点击了提交按钮，可以把表单域form里面的表单元素及其值提交给服务器 -->
        <input type="submit" value="免费注册">
        <!-- 重置按钮可以还原表单元素的初始的默认状态 -->
        <input type="reset" value="重新填写"><br>
        <!-- 普通按钮button,后期结合js搭配使用 -->
        <input type="button" value="获取短信验证码"><br>
        <!-- 文件域，使用场景：上传文件使用的 -->
        上传头像：<input type="file">

    </form>
</body>
```

![image-20210104155629914](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104155629914.png)

 **2.<label&gt;标签**

**<label&gt;**标签为input元素定义标注（**标签**）。

**<label&gt;**标签用于绑定一个表单元素，当*点击<label&gt;标签内的文本*时，浏览器就会自动将光标转到或选择对应的表单元素上用来<u>增加用户体验</u>。

简单举个例子来理解：注册时选择男女性别时，点击“男”或“女”的文字便可勾选单选按钮，而不是必须点击单选按钮完成选择，增大点击面积，<u>增加用户体验</u>。

**语法**：

```html
<label for="sex">男</label> 
<input type="radio" name="sex" id="sex">
```

核心：<label&gt;标签的**for属性**应当与相关元素的**id属性相同**。（label里for属性与input里id属性一样）

如：

```html
<body>
    <label for="text">用户名：</label><input type="text" id="text">
   <input type="radio" name="sex" id="nan"> <label for="nan">男</label>
   <input type="radio"name="sex" id="nv"><label for="nv">女</label>
</body>
```

点击”男“或“女”表单元素时，可勾选单选按钮。

**3.&lt;select>元素**

使用场景：在页面中，如果有多个选项让用户选择，并想节约页面空间时，我们可以使用**&lt;select>**标签控件定义**下拉列表**。简单理解：下拉列表展开选择，选择完毕后折叠。（option意为选项）

**语法**：

```html
<select>
    <option>选项1</option>
    <option>选项2</option>
    <option selected="selected">选项3</option>
    ....
</select>
```

**注意**：

1.<select&gt;中至少有一对<option&gt;

2.在<option&gt;**中定义selected="selected"时，当前项即为默认选中项**；若不定义，默认选中项为option中的第一个选项。

```html
<body>
    <form>
    籍贯：
    <select>
        <option>浙江</option>
        <option>上海</option>
        <option selected="selected">安徽</option>
    </select>
    </form>
</body>
```

![image-20210104163555842](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104163555842.png)

**4.<textarea&gt;文本域**

使用场景：当用户输入内容较多的情况下，使用**<textarea&gt;**标签。

在表单元素中，**<textarea&gt;**标签用于定义多行文本输入的空间，如留言板、评论、产品简介等。

**语法**：

```html
<textarea rows="3" cols="2">文本内容</textarea>
```

注意：

*cols=“每行中的字符数”，rows="显示的行数"，在实际开发中不会使用到，都是用CSS来改变大小。*（了解即可）

如：

```html
<body>
    <form>
        今日反馈：
        <textarea cols="50" rows="5">在这里反馈留言</textarea>
    </form>
</body>
```

![image-20210104164531939](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104164531939.png)

#### 4.10案例：注册页面

实现：

![image-20210104164722132](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104164722132.png)

分析：标题+表格，表格里嵌套表单。

“我承诺”下方三个使用无序列表。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>综合案例：注册页面</title>
</head>
<body>
    <h4>青春不常在，抓紧谈恋爱</h4>
    <table width="500" >
        <!-- 第一行 -->
        <tr>
            <td>性别：</td>
            <td><input type="radio" name="sex" id="nan" checked="checked"><label for="nan"><img src="images/man.jpg">男</label>
                <input type="radio" name="sex" id="nv"><label for="nv"><img src="images/woman.jpg">女</label></td>
        </tr>
        <!-- 第二行 -->
        <tr>
            <td>生日：</td>
            <td>
                <select>
                    <option>--请选择年份--</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>

                </select>
                <select>
                    <option>--请选择月份--</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>

                </select>
                <select>
                    <option>--请选择日--</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>

                </select>
            </td>
        </tr>
        <!-- 第三行 -->
        <tr>
            <td>所在地区：</td>
            <td><input type="text" value="北京"></td>
        </tr>
        <!-- 第四行 -->
        <tr>
            <td>婚姻状况：</td>
            <td>
                <input type="radio" name="marry" checked="checked" id="unmarry"><label for="unmarry">未婚</label> 
                <input type="radio" name="marry" id="married"><label for="married">已婚 </label>
                <input type="radio" name="marry" id="divoce"><label for="divoce">离婚</label>
            </td>
        </tr>
        <!-- 第五行 -->
        <tr>
            <td>学历：</td>
            <td><input type="txet" value="大学本科"></td>
        </tr>
        <!-- 第六行 -->
        <tr>
            <td>喜欢的类型：</td>
            <td><input type="checkbox" name="love" id="fumei"><label for="fumei">妩媚的</label>
            <input type="checkbox" name="love" id="lovely"><label for="lovely">可爱的</label>
            <input type="checkbox" name="love" id="young"><label for="young">小鲜肉</label>
            <input type="checkbox" name="love" id="old"><label for="old">老腊肉</label>
            <input type="checkbox" name="love" id="all" checked="checked"><label for="all">都喜欢</label></td>
        </tr>
        <!-- 第七行 -->
        <tr>
            <td>个人介绍：</td>
            <td><textarea>个人简介</textarea></td>
        </tr>
        <!-- 第八行 -->
        <tr>
            <td></td>
            <td><input type="submit" value="免费注册"></td>
        </tr>
        <!-- 第九行 -->
        <tr>
            <td></td>
            <td><input type="checkbox" checked="checked">我同意注册条款和会员加入标准</td>
        </tr>
        <!-- 第十行 -->
        <tr>
            <td></td>
            <td><a href="#">我是会员，立即登录</a></td>
        </tr>
        <!-- 第十一行 -->
        <tr>
            <td></td>
            <td>
                <h5>我承诺</h5>
                <ul>
                    <li>年满18，单身</li>
                    <li>抱着严肃的态度</li>
                    <li>真诚寻找另一半</li>
                </ul>
            </td>
        </tr>

    </table>
</body>
</html>
```

![image-20210104173036151](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210104173036151.png)

案例小总结：

1.使用表格更清楚、整齐，开始可设置border=“1”使得界面更清晰，全部写完后再删除该语句。

2.案例结合了表单的input各种属性和select下拉列表以及textarea文本域，空链接、表格、无序列表等知识。对于空链接和无序列表记忆程度不太足够，应及时复习。

3.“我同意注册。。。”使用checkbox复选框而不是单选框。

#### 4.11查阅文档

经常查阅文档是一个非常好的学习习惯。

推荐网址：

-百度：http://www.baidu.com

-W3C：http://www.w3school.com.cn

-菜鸟部落：http://www.runoob.com



##  学习CSS层叠样式

### 1.CSS简介

CSS主要使用场景就是美化页面，布局页面的。

```
1.HTML的局限性
2.CSS—网页的美容师
```

#### 1.1HTML的局限性

HTML，它比较单纯，只**关注内容的语义**，比如<h1&gt;表明这是个大标题。

很早的时候，世界上的网站虽然很多，但他们都有一个共同的特点：**丑**。

虽然HTML可以做简单的样式，但是带来的是无尽的**臃肿和繁琐**。



#### 1.2CSS-网页的美容师

**CSS**是**层叠样式表（Cascading Style Sheets）**的简称，也称为**CSS样式表**或**级联样式表**。CSS也是一种标记语言。

CSS主要用于设置HTML页面中的**文本内容**（字体、大小、对齐方式等）、**图片的外形**（宽高、边框样式、边距等）以及**版面的布局和外观显示样式**。

简单理解：**CSS可以美化HTML**，让HTML更漂亮，让页面布局更简单。

**总结**：

1.HTML主要做结构，显示元素内容

2.CSS美化HTML，布局页面。

**3.CSS最大价值：由HTML专注去做结构呈现，样式交给CSS，即结构（HTML）与样式（CSS）相分离。**



#### 1.3CSS语法规范

**CSS规则由两个主要的部分构成：选择器以及一条或多条声明。**（注意花括号{}）

![image-20210105091229996](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105091229996.png)

注意：

1.**选择器**是用于**指定**CSS样式的**HTML标签**，花括号内是对该对象设置的具体样式。

2.属性和属性值以"键值对"形式出现（key**:**"value"，**注意是“:”不是"="**）。

3.属性是对指定的对象设置的样式属性，如字体大小、文本颜色。

4.**属性和属性值之间用英文分号“;”分开。** **写完一个键值对加一个;**。

5.CSS内容写在head标签里的style标签内，html内容写在body内，实现样式与结构相分离。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS语法规范</title>
    <style>
        /* 选择器{样式} */
        /* 给谁改样式{改什么样式} */
        p{
            color:red;
            /* 修改字体大小 */
            font-size:12px;
        }
    </style>
</head>
```

![image-20210105091827488](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105091827488.png)



#### 1.4CSS代码风格

以下代码书写风格不是强制规范，而是符合实际开发书写方式。

##### 1.4.1样式格式书写

1.紧凑格式

```html
h3 {color:deeppink;font-size:20px;}
```

**2.展开格式(推荐使用，更直观)**

```
h3{
	color:deeppink;
	font-size:20px;
}
```

##### 1.4.2样式大小写

**强烈推荐**样式选择器、属性名、属性值关键字全部使用小写字母，特殊情况除外。

##### 1.4.3空格规范

```
h3 {
	color: pink;
}
```

**1.属性值前面，冒号后面，保留一个空格。**

**2.选择器（标签）和大括号中间保留空格。**



### 2.CSS基础选择器

#### 2.1CSS选择器的作用

```html
<div>我是div1</div>
<div>我是div2</div>
<p>我是段落</p>
<ul>
    <li>我是ul里的li</li>
</ul>
<ol>
    <li>我是ol里的li</li>
</ol>
```

```
1.将div里的文字改为红色
2.将第一个div里的文字改为红色
3.将ul里面的li文字改为红色
```

选择器就是根据不同需求把不同的标签选出来就是选择器的作用，即**选择标签**。

![image-20210105100013129](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105100013129.png)

以上CSS做了**两件事**：

1.找到所有的h1标签。选择器（**选对人**）

2.设置这些标签的样式，如颜色为红色（**做对事**）

#### 2.2选择器分类

选择器分为**基础选择器**和**复合选择器**两个大类，这里先了解基础选择器。

- 基础选择器是由**单个选择器**组成的

- 基础选择器又包括：**标签选择器**、**类选择器**、**id选择器**和**通配符选择器**。

##### 2.2.1标签选择器

**标签选择器**（元素选择器）是指用**HTML标签名称**作为选择器，按标签名称分类。

**基本语法**格式如下 ：

```
标签名 {
	属性1： 属性值1；
	属性2： 属性值2；	
	属性3： 属性值3；	
	...
}
```

**作用**：

标签选择器可以把**某一类标签全部选择**出来，如所有的&lt;div>标签。

**优点**：

能快速为页面中同类项的标签统一设置样式。

**缺点**：

不能设计差异化样式，只能选择全部的标签。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标签选择器</title>
    <style>
    /* 标签选择器：写上标签名 */
    p {
        color: green;
    } 
    div {
        color: pink;
    }

    </style>
</head>
<body>
    <p>男生</p>
    <p>男生</p>
    <p>男生</p>
    <div>女生</div>
    <div>女生</div>
    <div>女生</div>
</body>
```

![image-20210105103813614](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105103813614.png)

##### <u>2.2.2类选择器</u>

如果想要**差异化选择**不同的标签，单独选一个或几个标签，可以使用**类选择器**。（开发中最常用）

类选择器在HTML中以**class属性**表示，在CSS中，类选择器以一个点“**.**”号显示。

**基本语法**格式如下(类的定义)：

```
.类名{
	属性1:属性值1;
	...
}
```

结构需要**用class属性来调用class类**的意思

class属性调用类（不用加.）

```html
<div class='red'>变红色</div>
```



**注意**：

1.类选择器使用“.”（英文点号）进行标识，后面紧跟类名（自定义，我们自己命名的，不能与标签名冲突）

2.可以理解为给这个表情起了一个名字.来表示。

3.<u>长名称或词组</u>可以<u>使用中横线</u>来为选择器命名，如.star-sing。

4.不要使用纯数字、中文等命名，尽量使用英文字母表示。

5.命名要有意义，尽量使别人一眼就知道这个类名的目的。若<u>使用中文拼音，尽量写全拼（daohanglan），不要写简拼(dhl)</u>。

6.命名规范：网上查。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类选择器</title>
    <style>
        /* 类选择器口诀：样式点定义 结构类（class）调用 一个或多个 开发最常用*/
        .red{
            color: red;
        }
        .star-sing {
            color: green;
        }
    </style>
</head>
<body>
    <ul>
        <li class="red">冰雨</li>
        <li class="red">来生缘</li>
        <li>理想</li>
        <li>生僻字</li>
        <li class="sing-star">江南</li>
    </ul>
    <div class="red">也变红色</div>
</body>
```

![image-20210105105500798](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105105500798.png)

总结：样式点**定义**，结构类**调用**。

##### 2.2.3课题案例

实现：

![image-20210105110211131](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105110211131.png)

考察：类选择器的使用，div的使用

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>利用类选择器画三个盒子</title>
    <style>
        .red {
            width: 100px;
            height: 100px;
            /* 背景颜色 */
            background-color: red;
        }
        .green{
            width: 100px;
            height: 100px;
            background-color: green;
        }

    </style>
</head>
<body>
    <div class="red">红色</div>
    <div class="green">绿色</div>
    <div class="red">红色</div>
</body>
```

![image-20210105110717645](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105110717645.png)

##### 2.2.4类选择器—多类名

我们可以给**一个标签指定多个类名**，从而达到更多的选择目的。这些类名都可以选出这个标签。

简单理解就是**一个标签有多个名字**。

```
1.多类名使用方式
2.多类名的使用场景
```

1.多类名使用方式

```html
<div class=" red front20">谨慎</div>
```

（1）在标签class属性中书写多个类名

（2）多个类名中间**用空格分开**

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多类名的使用方式</title>
    <style>
        .red {
            color: red;
        }
        .font {
            font-size: 35px;
        }
    </style>
</head>
<body>
    <div class="red font">刘德华</div>
</body>
```

![image-20210105111725129](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105111725129.png)

2.多类名的使用场景（**代码复用**）

(1)可以把一些标签元素相同的样式（共同的部分放到一个类里面）

(2)这些表情都可以调用这个公共的类，然后再调用自己独有的类

(3)从而节省CSS代码，方便统一修改代码

课堂案例代码改进，增加.box类设置box的宽高

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>利用类选择器画三个盒子</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
        }
        .red {
            /* 背景颜色 */
            background-color: red;
        }
        .green{
            background-color: green;
        }

    </style>
</head>
<body>
    <div class="red box">红色</div>
    <div class="green box">绿色</div>
    <div class="red box">红色</div>
</body>
```



##### 2.2.5id选择器

id选择器可以为标有特定id的HTML元素指定特定的样式。

<u>HTML元素</u>以**id属性**来设置id选择器，CSS中id选择器以“**#**”来定义。

**基本语法**如下：

```html
#id名 {
	属性1：属性值1;
	...
}
```

如，将id为nav(导航栏)元素中的内容设置为红色。

```html
#nav {
	color: red;
}
```

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>id选择器</title>
    <style>
        #pink {
            color: pink;
        }
    </style>
</head>
<body>
    <div id="pink">迈克尔·杰克逊</div>
</body>
```

![image-20210105112932070](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105112932070.png)

**注意**：**id属性只能在每个HTML文档中出现一次，口诀：样式#定义，结构id调用，只能调用一次，别人切勿使用。**具有**唯一性**。



id选择器和类选择器的区别:

1.类选择器(class)好比人的名字，一个人可以有多个名字（曾用名、昵称、外号等），同时一个名字也可以被多个人使用（同名同姓的人）。

2.id选择器好比人的身份证明，全中国是唯一的，不得重复。

3.最大不同在于使用次数上。

4.类选择器在修改样式中最多，id选择器一般用于页面唯一性的元素上，于JS配合使用。



##### 2.2.6**通配符选择器**

在CSS中，通配符选择器使用“*****”定义，表示<u>选取页面中的所有元素(标签)</u>。(无需加名字)

**基本语法**格式如下：

```
* {
	属性1：属性值1;
	...
}
```

注意：

1.通配符选择器<u>不需要调用</u>，自动就给所有的元素使用样式

2.特殊情况采用，后续补充使用场景。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>通配符选择器</title>
    <style>
        * {
            color: red;
        }
        /* *这里把html/body/div/span/li等标签都改成了红色 */
    </style>
</head>
<body>
    <div>我的</div>
    <span>我的</span>
    <ul>
        <li>还是我的</li>
    </ul>
</body>
```

![image-20210105114231473](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105114231473.png)

##### 2.2.7基础选择器分类

| 基础选择器   | 作用                          | 特点                               | 使用情况     | 用法               |
| ------------ | ----------------------------- | ---------------------------------- | ------------ | ------------------ |
| 标签选择器   | 可以选出所有相同的标签，比如p | 不能差异化选择                     | 较多         | p {color: red;}    |
| 类选择器     | 可以选出1个或多个标签         | 可以根据需求选择                   | 非常多       | .nav {color: red;} |
| id选择器     | 一次只能选择1个标签           | ID属性只能在每个HTML文档中出现一次 | 一般和js搭配 | #nav {color: red;} |
| 通配符选择器 | 选择所有的标签                | 选择的太多，有部分不需要           | 特殊情况使用 | * {color: red;}    |

-每个基础选择器都有使用场景，都需要掌握。



### 3.CSS字体属性

CSS Fonts（字体）属性用于定义**字体系列**、**大小**、**粗细和字体样式**（如斜体）。

#### 3.1字体系列

CSS使用**font-family**属性定义文本的字体系列。

**语法**格式如下：

```html
1.p { font-family:"微软雅黑";}
2.div {font-family:Arial,"Microsoft Yahei","微软雅黑";}
更提倡第二种，使用英文，大小写皆可，兼容性更强
```

**注意**：

1.各种字体之间必须使用英文的逗号隔开。

2.一般情况下，如果有空格隔开的多个单词组成的字体需要加引号。

3.尽量<u>使用系统默认自带字体</u>（微软雅黑），保证在任何用户的浏览器中都能正确显示。

4.属性值定义多个字体的含义：先使用第一种字体，若系统没有则使用第二种，依此类推，若定义的字体系统都没有，则使用浏览器默认的字体。

5.常见的几个字体：

```
body{font-family: 'Microsoft YaHei',tahoma,arial,'Hiragino Sans GB';}
```

一般放在**style里的body标签**内。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>字体系列</title>
    <style>
        h2 {
            font-family: 'Microsoft YaHei';
        }
        p {
            font-family: 'Microsoft YaHei',Arial;
        }
    </style>
</head>
<body>
    <h2> 《红楼梦曲》</h2>
    <p>为官的，家业凋零；</p>
    <p>富贵的，金银散尽；</p>
    <p>有恩的，死里逃生；</p>
    <p>无情的，分明报应；</p>
    <p>欠命的，命已还；</p>
    <p>欠泪的，泪已尽：</p>
    <p>冤冤相报实非轻，</p> 
    <p>分离聚合皆前定。</p>
    <p>欲知命短问前生，</p>
    <p>老来富贵也真侥幸。</p>
    <p>看破的，遁入空门；</p>
    <p>痴迷的，枉送了性命。</p>
    <p>好一似食尽鸟投林，</p>
    <p>落了片白茫茫大地真干净！</p> 
</body>
```

![image-20210105150347681](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105150347681.png)



#### 3.2字体大小

CSS使用**font-size**属性定义字体大小

```
p {
	font-size: 18px;
}
```

**注意**：

1.px(像素)大小是我们页面中最常用的单位，**px不要漏写**

2.谷歌浏览器默认的文字大小为16px

3.不同浏览器可能默认显示的字号大小不一致，我们<u>尽量给一个明确值大小，不要默认大小</u>

4.可以给<u>body指定整个页面文字的大小</u>

5.<u>标题标签比较特殊，需要单独指定文字大小，如使用标签选择器指定</u>。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>字体大小</title>
    <style>
        body {
            font-size: 16px;
        }
        /* 标题标签比较特殊，需要单独指定文字大小 */
        h2 {
            font-size: 18px;
        }
    </style>
</head>
文字同上一案例
```

![image-20210105151903529](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105151903529.png)

#### 3.3字体粗细

CSS使用**font-weight**属性设置文本字体的粗细。

```
p {
	font-weight: bold;
}
```

| 属性值  | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| normal  | 默认值（不加粗）                                             |
| bold    | 定义粗体（加粗）                                             |
| 100-900 | 400等同于normal，700等同于bold，**注意这个数字后面不跟单位** |

1.学会让加粗标签（比如h和strong等)不加粗(通过font-weight属性设置)，或者其他标签加粗

2.**实际开发中用数字表示粗细更常用**

如：

```html
<style>
        .bold{
            /* 这个600的后面不要跟单位，等价于bold都是加粗的效果 */
            /* 实际开发中，我们提倡使用数字表示加粗或变细 */
            font-weight: 600;
        }
        h2 {
            font-weight: 400;
            /* font-weight: normal;  400与normal效果一模一样，实现标题只变大不变粗 */
        }
    </style>
</head>
<body>
    <h2> 《红楼梦曲》</h2>
    <p>为官的，家业凋零；</p>
    <p>富贵的，金银散尽；</p>
    <p>有恩的，死里逃生；</p>
    <p class="bold">无情的，分明报应；</p>
    <p>欠命的，命已还；</p>
</body>
```

![image-20210105155928844](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105155928844.png)

#### 3.4文字样式

CSS使用**font-style**属性设置文本的风格。

```
p {
	font-style: normal;
}
```

| 属性值 | 作用                               |
| ------ | ---------------------------------- |
| normal | 默认值，浏览器会显示标准的字体样式 |
| italic | 浏览器会显示斜体的字体样式         |

**注意：平时我们很少给文字加斜体，反而要给斜体标签(em,i)改为不倾斜字体。**（设置normal修改）

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>字体样式</title>
    <style>
        p {
            font-style: italic;
        }
        em {
            /* 让倾斜的字体变正常 */
            font-style: normal;
        }
    </style>
</head>
<body>
    <p>同学，上课时候的你</p>
    <em>下课时候的你</em>
</body>
```

![image-20210105161901789](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105161901789.png)

#### 3.5字体复合属性

字体属性可以把以上文字样式综合来写，这样可以更节约代码。

```
body {
	font: font-style font-weight font-size/line-height font-family;
}
```

注意：

1.使用font属性时，必须按上面语法格式中的顺序书写（样式粗细大小字体，<u>样粗大体</u>），**不能更换顺序**，并且各个属性间以**空格**隔开。

2.不需要设置的属性可以省略（取默认值，如line-height行高），但**必须保留font-size和font-family属性**（大体），否则font属性将不起作用。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>复合属性</title>
    <style>
        /* 想要div文字变倾斜，加粗，字号设置为16像素，且是微软雅黑字体 */
        div {
            /* font-style: italic;
            font-weight: 700;
            font-size: 16px;
            font-family: "Microsoft yahei"; */
            /* 复合属性：简写的方式 */
            /* font: font-style font-weight font-size/line-height font-family; */
            /* font: italic 700 16px/20px 'Microsoft yahei'; */
            font: 20px 'Microsoft yahei'
        }
    </style>
</head>
<body>
    <div>对于可控的事情，我们要保持谨慎。</div>
</body>
```

![image-20210105163904196](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105163904196.png)

#### 3.6字体属性总结

| 属性        | 表示     | 注意点                                                   |
| ----------- | -------- | -------------------------------------------------------- |
| font-size   | 字号     | 一定要跟上单位px（像素）                                 |
| font-family | 字体     | 实际工作中按照团体约定来写字体                           |
| font-weight | 字体粗细 | 加粗：700/bold,不加粗：400/normal，记住数字无需跟单位    |
| font-style  | 字体样式 | 倾斜：italic 不清晰：normal(常用)                        |
| font        | 字体连写 | 1.字体连写必须按顺序书写2.字号和字体不可省，其他可以省略 |



### 4.CSS文本属性

CSS Text（文本）属性可定义文本的**外观**，如文本的颜色、对齐文本、装饰文本、文本缩进、行间距等。

#### 4.1文本的颜色

**color属性**用来定义文本的属性。

```
div {
	color: red;
}
```

| 表示方法     | 属性值                        |
| ------------ | ----------------------------- |
| 预定义的颜色 | red,green                     |
| 十六进制     | #FF0000，#FF6600              |
| RGB代码      | rgb(255,0,0)或rgb(100%,0%,0%) |

**开发中最常用的是十六进制。**三种方法都不需要记颜色，后续会使用吸色器。

#### 4.2对齐方式

**text-align属性**用于设置元素内文本内容的水平对齐方式。

```
div {
	text-align: center;
}
```

| 属性值 | 解释             |
| ------ | ---------------- |
| left   | 左对齐（默认值） |
| right  | 右对齐           |
| center | 居中对齐         |

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>文字对齐</title>
    <style>
        h1 {
            /* 本质是让h1盒子里面的文字水平居中对齐 */
            /* text-align: center; */
            text-align: right;
        }
    </style>
</head>
<body>
    <h1>居中对齐的标题</h1>
</body>
```

![image-20210105170023430](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105170023430.png)

#### 4.3装饰文本

text-decoration属性规定添加到文本的修饰，可以给文本添加下划线、删除线、上划线等。

```html
div {
	text-decoration: underline;
}
```

| 属性值       | 描述                            |
| ------------ | ------------------------------- |
| **none**     | 默认，没有装饰线（最常用）      |
| underline    | 下划线，链接a自带下划线（常用） |
| overline     | 上划线（几乎不用）              |
| line-through | 删除线（不常用）                |

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>装饰文本</title>
    <style>
        div {
             /* text-decoration: underline;  */
            /* text-decoration: overline; */
            text-decoration: line-through;
        }
        a {
            /* 取消a默认的下划线 */
            text-decoration: none;
            color: red;
        }
    </style>
</head>
<body>
    <div>对于可控的事情，我们要保持谨慎。</div>
    <a href="#">谨慎</a>
</body>
```

![image-20210105170628948](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105170628948.png)

![](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105170542793.png)

​                                 ![image-20210105171110554](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105171110554.png) 

**总结：重点记住如何添加下划线，如何删除下划线（如超链接）**

#### 4.4文本缩进

**text-indent属性**用来指定文本的第一行的缩进，通常是**将段落的首行缩进**。

```
div {
	text-indent: 10px;
}
```

通过设置该属性，所有元素的第一行都可以缩进一个给定的长度，甚至该长度可以为负值。

```
p {
	text-indent: 2em;
}
```

**em**是一个<u>相对单位</u>，就是当前元素**1个文字的大小**，1em=16px,如果当前元素没有设置大小，则会按照父元素的1个文字大小缩进。

#### 4.5行间距

**line-height属性**用于设置行间的距离（行高），可以控制文字行与行之间的距离。

```
p {
	line-height: 26px;
}
```

![image-20210105172912710](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105172912710.png)

#### 4.6文本属性总结

| 属性            | 表示     | 注意点                                            |
| --------------- | -------- | ------------------------------------------------- |
| color           | 文本颜色 | 通常用十六进制，而且是简写形式#fff                |
| text-align      | 文本对齐 | 可以设定文字水平的对齐方式                        |
| text-indent     | 文本缩进 | 通常用于段落首行缩进2个字的距离 text-indent: 2em; |
| text-decoration | 文本装饰 | 添加下划线：underline 取消下划线：none            |
| line-height     | 行高     | 控制行与行之间的距离                              |



### 5.CSS的引入方式

#### 5.1CSS的三种样式表

按照CSS样式书写的位置（或引入的方式），CSS样式表可以分为三大类：

```
1.内部样式表（嵌入式引入）
2.行内样式表（行内式引入）
3.外部样式表（链接式引入）
显示优先度由高到低是：行内样式表，内部样式表，外部样式表
```

#### 5.2内部样式表

内部样式表（内嵌样式表）是写到html页面内部，是将所有代码抽取出来，单独放到一个<style&gt;标签中（上述练习所使用的方式）。

```html
<style>
    div {
        color: red;
    }
</style>
```

注意：

1.style标签理论上可以放在HTML文档的任何地方，但一般会放在文档的<head&gt;标签内。

2.通过此方式，可以方便<u>控制当前整个页面</u>中的元素样式设置。

3.代码结构清晰，但没有实现结构与样式完全分离，CSS仍在html文档内。

4.使用内部样式表设定CSS，又称为**嵌入式引入**，是之前练习所用的方式。

#### 5.3行内样式表

行内样式表（内联样式表）是**在元素标签内部的style属性中设定CSS样式**。适合于修改简单样式。

```html
<div style="color: red; font-size= 12px;">
    对于可控的事情，我们要保持谨慎
</div>
```

注意：

1.style其实就是标签的属性

2.在双引号中间，写法要符合CSS规范，属性：属性值;

3.可以控制当前的标签设置样式，即只能控制当前这一行

4.由于书写烦琐，并且没有体现出结构与样式相分离的思想，不推荐大量使用，只有对当前元素添加简单样式的时候，可以考虑使用。尽量不使用。

5.使用行内样式表设定CSS，又称为**行内式引入**。

如：

```html
<body>
    <h2> 《红楼梦曲》</h2>
    <p style="color: red; font-weight: 700">为官的，家业凋零；</p>
    <p>富贵的，金银散尽；</p>
    <p>有恩的，死里逃生；</p>
    <p>无情的，分明报应；</p>
```

![image-20210105191929481](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105191929481.png)

#### 5.4外部样式表

实际开发中都是外部样式表，适合于样式比较多的情况。核心是：<u>样式单独写到CSS文件中，之后把CSS文件引入到HTML页面中使用</u>。

**引入外部样式表分为两步：**

**1.新建一个<u>后缀名为.css</u>的样式文件，把所有CSS代码都放入此文件中**

**2.在HTML页面中，使用&lt;link>标签引入这个文件(放在head标签内，title标签下方)**或者**使用@import声明**

```
<link rel="stylesheet" href="css文件路径">

@import url(css文件路径) 媒体描述符;
```

输入link后+tab键，自动输入整条代码

**注意：**

1.<u>外部样式表中只能包含CSS规则和CSS注释，不能出现HTML或其他标记语言</u>。

2.@import指令必须放在其他CSS规则前面，即style内第一条语句

3.一个文档中可以有多条link和@import语句

4.媒体描述符后续再讨论

| 属性 | 作用                                                         |
| ---- | ------------------------------------------------------------ |
| rel  | 定义当前文档与被链接文档之间的关系（relation简称），这里指定为"stylesheet",表示被链接的文档是一个样式表文件。 |
| href | 定义所链接外部样式表文件的URL，可以是相对路径也可以是绝对路径。 |

使用外部样式表设定CSS，通常也称为**外链式**或**链接式引入**，这种方式是<u>开发中常用</u>的方式。

如：

```
style.css
div {
    color: red;
}
```

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>外部样式表</title>
     /*@import url(style.css);*/
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>对于可控的事情，我们要保持谨慎</div>
</body>
```

![image-20210105193554026](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105193554026.png)

#### 5.5CSS引入方式总结

| 样式表     | 优点                     | 缺点         | 使用情况 | 控制范围     |
| ---------- | ------------------------ | ------------ | -------- | ------------ |
| 行内样式表 | 书写方便，权重高         | 结构样式混写 | 较少     | 控制一个标签 |
| 内部样式表 | 部分结构和样式相分离     | 没有彻底分离 | 较多     | 控制一个页面 |
| 外部样式表 | 完全实现结构和样式相分离 | 需要引入     | 最多     | 控制多个页面 |



### 6.综合案例:新闻页面

制作页面整体分为两步：

1.搭建html结构页面

2.修改CSS样式

2.先宏观后微观，先字体。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新闻页面</title>
    <style>
        body {
            font: 16px/28px 'Microsoft yahei';
        }
        h1 {
            /* 文字不加粗 */
            font-weight: 400; 
            /* 文字水平居中对齐 */
            text-align: center;
        }
        a {
            text-decoration: none;
        }
        p {
            /* 首行缩进2个字的距离 */
            text-indent: 2em;
        }
        .gray{
            color: #888888;
            font-size: 12px;
            text-align: center;
        }
        .search {
            /* #666666可以简写为#666，两两相同可简写 */
            color: #666666;
            width: 170px;
        }
        .btn {
            font-weight: 700;
        }
        .pic {
            /* 想让图片居中对齐，则让它的父亲居中对齐，对img居中不行 */
            text-align: center;
        }
        .footer {
            color: #888;
            text-align: right;    
            font-size: 12px;
        }
    </style>
</head>
<body>
    <h1>寒潮再度来袭 6日至8日中东部气温“跳水”</h1>
    <div class="gray">2021-01-05 08:06:20 来源： <a href="#">中国天气网</a> 
    <input type="text" value="请输入查询条件" class="search"> <button class="btn">搜索</button></div>
    <!-- hr水平线标签，不常用 -->
    <hr>

    <p>中国天气网讯 受昨天“上线”的弱冷空气影响，今天（1月5日）降温还会波及我国南方地区；今天夜间至8日，本周另一股较强冷空气将“无缝衔接”，两股冷空气“联手”将我国大部气温打入明显偏低状态，为此中央气象台今早发布寒潮蓝色预警。此外明天，我国雨雪范围将达到本周最大，其中，西藏西部、山东半岛等地局地有大雪。</p>

    <h4>本周两股冷空气“接力赛” 降温后寒冷程度不亚于2020年末寒潮</h4>

    <p>经过元旦假期三天的“休整”，本周内有两股冷空气接连影响我国，前一股较弱，后一股更强。昨天，弱冷空气已经“上线”，截至下午14时，北方大部地区气温都有所下滑，其中新疆北部、内蒙古中西部、甘肃中西部、宁夏、陕西北部和南部、山西西部等地降温较为明显，气温比前一天同一时次普遍下降了4~8℃。</p>
   
    <div class="pic"><img src="images/snow.jpg"><br>
    昨天清晨，甘肃酒泉迎来2021年首场降雪。（图/曹华）</div>

    <p>中央气象台预计，受较强冷空气影响，5日夜间至8日，我国中东部地区气温将普遍下降6~8℃，其中华北西部、黄淮东部、江淮东部和江南东部等地的部分地区降温幅度可达10℃以上；降温过后最低气温0℃线将南压至江南南部到华南北部，-10℃线将南压至秦岭到江淮东部一线。长江流域及其以北地区将有4～6级偏北风，阵风7~9级。为此，中央气象台今日06时发布寒潮蓝色预警。</p>

    <p class="footer">编辑：王雯雯</p>
</body>
</html>
```

![image-20210105202807270](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105202807270.png)

![image-20210105202816708](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105202816708.png)



### 7.Chrome调试工具

Chrome浏览器提供了一个非常好用的调试工具，可以用来调试我们的HTML结构和CSS样式。

#### 7.1打开调试工具

打开Chrome浏览器，按下**F12键（Fn键+F12）**或**右击空白页处检查**（拿小黑箭头）。

#### 7.2使用调试工具

1.Ctrl+滚轮可以放大开发者工具代码大小

2.左边是HTML元素结构，右边是CSS样式

3.右边CSS样式可以改动数值（左右箭头或者直接输入）和查看颜色

4.Ctrl+0（零）复原浏览器大小



### 8.Emmet语法

Emmet语法的前身是Zen coding，它使用缩写来提高html/css的缩写速度，VSCode内部已经集成该语法。

#### 8.1快速生成HTML结构语法

1.生成标签 直接输入标签名 按tab键即可，比如div+tab就可以生成&lt;div>&lt;/div>

2.如果想要多个相同的标签，加上*(星号)就可以了，比如

```
div*3+tab
```

就可以快速生成3个div

3.如果有父子级关系的标签，可以用>，比如ul>li+tab，即可生成

```html
<ul>
     <li></li>
</ul>
```

<u>ul>li*3(与第2条结合),即可生成</u>

```html
<ul>
        <li></li>
        <li></li>
        <li></li>
</ul>
```

4.如果有兄弟关系的标签，可以用+（加号），比如div+p tab,即可生成

```html
<div></div>
<p></p>
```

5.如果生成带有类名或id名字的，直接写.nav或#one tab,即可生成（默认是div标签，可以与上面几条结合使用）

```html
.nav+tab
<div class="nav"></div>
#banner+tab
<div id="banner"></div>
p.one+tab
<p class="one"></p>
span.gray+tab
<span class="gray"></span>
ul>li#two+tab
<ul>
    <li id="two"></li>
</ul>
```

6.如果生成的div类名是有顺序的，可以用**自增符号$**(英文状态下)

```html
.demo$*5+tab
    <div class="demo1"></div>
    <div class="demo2"></div>
    <div class="demo3"></div>
    <div class="demo4"></div>
    <div class="demo5"></div>
```

7.如果想要在生成的标签内部写内容可以用{}表示

```html
    <!-- 我们想生成的标签里面默认显示几个文字 -->
div{谨慎}+tab
    <div>谨慎</div>
div{乐观}*3+tab
    <div>乐观</div>
    <div>乐观</div>
    <div>乐观</div>
div{$}*3+tab
    <div>1</div>
    <div>2</div>
    <div>3</div>
```

#### 8.2快速生成CSS结构

```html
tac+tab（取三个单词首字母）
text-align: center;
w100+tab
width: 100px;
ti2em+tab
text-indent: 2em;
等，前期还是手动全写，熟练后再使用这些快捷键
```

#### 8.3快速格式化代码

VSCode 快速格式代码：shift+alt+f 。自动缩进与排版。

也可以设置我们保存页面的时候自动格式化代码

1）文件--->【首选项】---->【设置】或左下角点击管理里的设置

2）搜索emmet.include

3）在settings.json下的【用户】中添加以下语句：

"editor.formatOnType":true,

 "editor.formatOnSave":true,

只需要设置一次即可，以后都有自动保存格式化代码



### 9.CSS的复合选择器

#### 9.1什么是复合选择器

在CSS中，可以根据选择器的类型，把选择器分为**基础选择器**和**复合选择器**，复合选择器是建立在基础选择器智商，对基础选择器进行组合形成的。

- 复合选择器可以更准确、更高效的选择目标元素（标签）
- 复合选择器是由两个或多个基础选择器，通过不同的方式组合而成的
- 常用的复合选择器包括：后代选择器、子选择器、并集选择器、伪类选择器等

#### <u>9.2后代选择器</u>

**后代选择器**又称为**包含选择器**，可<u>选择父元素里面子元素</u>。其写法就是把外层标签写在前面，内层标签写在后面，中间**用空格分隔**。当标签发生嵌套时，内部标签就成为外层标签的后代。

**基本语法**格式如下：

```
元素1 元素2 { 样式声明 }
ul li { 样式声明 } /*选择ul里面所有的li标签元素*/
```

上述语法表示**选择元素1里面的所有元素2**（后代元素）

**注意**：

1.元素1和元素2中间**用空格隔开**

2.**元素1是父级，元素2是子级，最终选择的是元素2**，其他不变

3.元素2可以是儿子，也可以是孙子等，<u>只要是元素1的后代</u>即可，一层一层查找下去，孙子需要写三个元素：父亲、儿子、孙子

4.元素1和元素2可以是任意基础选择器（id选择器、类选择器、标签选择器皆可）。如**实现将第二个ul标签内的li选出改为yellow色，**第二个ul添加类选择器，元素1写成类选择器实现。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>后代选择器</title>
    <style>
        /* 我想要把ol里面的li选出来改为pink */
        ol li {
            color: pink;
        }
        ol li a {
            color: red;
        }
        .nav li a {
            color: yellow;
        }
    </style>
</head>

<body>
    <ol>
        我不变
        <li>我是ol的孩子</li>
        <li>我是ol的孩子</li>
        <li>我是ol的孩子</li>
        <li><a href="#">我是孙子</a></li>
    </ol>
    <ul>
        <li>我是ul的孩子</li>
        <li>我是ul的孩子</li>
        <li>我是ul的孩子</li>
        <li><a href="#">不会变化的</a></li>
    </ul>
    <ul class="nav">
        <li>我是ul的孩子</li>
        <li>我是ul的孩子</li>
        <li>我是ul的孩子</li>
        <li><a href="#">不会变化的</a></li>
        <li><a href="#">不会变化的</a></li>
        <li><a href="#">不会变化的</a></li>

    </ul>
</body>
```

!![image-20210105224710194](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210105224710194.png)

#### <u>9.3子选择器</u>

**子元素选择器（子选择器）**只能选择作为某元素的最近一级子元素，简单理解就是选<u>亲儿子</u>元素。

语法：

```
元素1>元素2 { 样式声明 }
```

上述语法表示**选择元素1里面的所有直接后代（子元素）元素2**。

例如：

```
div>p { 样式声明 } /*选择div里面所有最近一级p标签元素*/
```

**注意**：

1.元素1和元素2中间用**大于号>**隔开

2.元素1是父级，元素2是子级，**最终选择的是元素2**

3.元素2**必须是亲儿子**，其孙子、重孙之类都不管，也可以简单称之为 亲儿子选择器

如：使儿子的链接字体变红色，孙子字体不变

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>子元素选择器</title>
    <style>
       <!--选择亲儿子--> 
        .nav>a {
            color: red;
        }
    </style>
</head>

<body>
    <div class="nav">
        <a href="#">我是儿子</a>
        <p>
            <a href="#">我是孙子</a>
        </p>
    </div>
</body>
```

![image-20210110201026138](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210110201026138.png)



#### 9.4课题练习

通过联系进一步理解区分后代选择器和子选择器。

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 1.将链接文字修改为红色,后代选择器 */
        /* 写.nav a 也可以*/
        .nav ul li a {
            color: red;
        }

        /* 2.将大肘子文字修改为红色,亲儿子选择器 */
        .hot>a {
            color: red;
        }
    </style>
</head>

<body>
    <div class="nav">
        <ul>
            <li><a href="#">百度</a></li>
            <li><a href="#">百度</a></li>
        </ul>
    </div>

    <div class="hot">
        <a href="#">大肘子</a>
        <ul>
            <li><a href="#">猪头</a></li>
            <li><a href="#">猪尾巴</a></li>
        </ul>
    </div>
</body>
```

![image-20210110201121636](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210110201121636.png)

#### <u>9.5并集选择器</u>

**并集选择器可以选择多组标签，同时为他们定义相同的样式。**通常用于集体声明。

**并集选择器**是各选择器**通过英文逗号（,）连接而成**，任何形式的选择器都可以作为并集选择器的一部分。

语法：

```
元素1,元素2 { 样式声明 }
```

上述语法表示**选择元素1和元素2**.

例如：

```
ul,div { 样式声明 } /*选择ul和div标签元素*/
```

**注意**：

1.元素1和元素2中间用**逗号隔开**

2.逗号可以**理解为和**的意思

3.并集选择器通常用于集体声明

4.约定的语法规范，并集选择器喜欢竖着写

5.一定要注意，最后一个选择器，不需要加逗号 

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>复合选择器之并集选择器</title>
    <style>
        /* 要求1：把熊大和熊二文字改为粉色 */
        /* div,
        p {
            color: pink;
        } */

        /* 要求2：把熊大和熊二改为粉色，小猪一家改为粉色 */
        div,
        p,
        .pig li {
            color: pink;
        }
        /* 约定的语法规范，并集选择器喜欢竖着写 */
        /* 一定要注意，最后一个选择器，不需要加逗号 */
    </style>
</head>

<body>
    <div>熊大</div>
    <p>熊二</p>
    <span>光头强</span>
    <ul class="pig">
        <li>小猪佩奇</li>
        <li>猪爸爸</li>
        <li>猪妈妈</li>
    </ul>
</body>
```

![image-20210106092620389](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210106092620389.png)



#### 9.6伪类选择器

**伪类选择器**用于向某些选择器添加特殊的效果，比如给链接添加特殊效果，或选择第1个，第n个元素（鼠标经过链接，链接文字变色）。

伪类选择器书写最大的特点是**用冒号（:）表示**，比如 :hover、 :first-child

伪类选择器很多，如有链接伪类、结构伪类等，在这里详述常用的结构伪类选择器。

##### 9.6.1链接伪类选择器

```
a:link		/* 选择所有未被访问的链接 */
a:visited	/* 选择所有已被访问的链接 */
a:hover		/* 选择鼠标指针位于其上的链接 */
a:active 	/* 选择活动链接（鼠标按下未弹起的链接） */
```

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>链接伪类选择器</title>
    <style>
        /* 1.a:link 选择未访问过的链接*/
        a:link {
            color: #333;
            text-decoration: none;
        }

        /* 2.a:visited 选择访问过的链接 */
        a:visited {
            color: orange;
        }

        /* 3.a:hover 选择鼠标经过的那个链接 */
        a:hover {
            color: blue;
        }

        /* 4.a:active 选择鼠标按下但未弹起的那个链接 */
        a:active {
            color: green;
        }
    </style>
</head>

<body>
    <a href="#">小猪佩奇</a>
    <a href="http://www.xxx.com">未知的网站</a>
</body>
```

![image-20210106101013514](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210106101013514.png)

###### 9.6.1.1链接伪类选择器注意事项

1.为了确保生效，请**按照LVHA的顺序**声明：:link,:visited,:hover,:active

2.记忆法love hate或Lv包包hao(好)。

3.因为a链接在浏览器中具有默认样式，所以实际工作中都需要<u>给链接单独指定样式</u>。

###### 9.6.1.2链接伪类实际开发中的写法

```html
/* a是标签选择器，选择所有链接 */
        a {
            color: gray;
			text-decoration: none;
        }

        /* :hover 链接伪类选择器，鼠标经过 */
        a:hover {
            color: red;
            /*鼠标经过时，由原来的灰色变成红色 */
        }
```

主要使用：链接平时的状态和鼠标经过的状态。

#### 9.7:focus伪类选择器

**:focus伪类选择器**用于选取<u>获得焦点</u>的<u>表单元素</u>。

焦点就是光标，一般情况&lt;input>类表单元素才能获取，因此这个选择器也主要<u>针对表单元素</u>来说。

语法:

```
input:focus {
	background-color: yellow;
}
```

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>focus伪类选择器</title>
    <style>
        /* 把获得光标的input表单元素选取出来 */
        input:focus {
            background-color: red;
        }
    </style>
</head>

<body>
    <input type="text">
    <input type="text">
    <input type="text">

</body>
```

![image-20210106105446652](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210106105446652.png)

#### 9.8复合选择器总结

| 选择器                | 作用                   | 特征             | 使用情况 | 隔开符号及用法                       |
| --------------------- | ---------------------- | ---------------- | -------- | ------------------------------------ |
| <u>后代选择器</u>     | 用来选择后代元素       | 可以是子孙后代   | 较多     | 符号是**空格** .nav a                |
| 子代选择器            | 选择最近一级元素       | 只选亲儿子       | 较少     | 符号是**大于 **.nav>p                |
| <u>并集选择器</u>     | 选择某些相同样式的元素 | 可以用于集体声明 | 较多     | 符号是**逗号** .nav,.header          |
| <u>链接伪类选择器</u> | 选择不同状态的链接     | 跟链接相关       | 较多     | 重点记住 a{} 和a:hover实际开发的写法 |
| :focus选择器          | 选择获得光标的表单     | 跟表单相关       | 较少     | 记住这个用法input:focus              |



### 10.CSS的元素显示模式

了解元素的显示模式可以更好的让我们布局页面

#### 10.1什么是元素的显示模式

作用：网页的标签非常多，在不同地方会用到不同类型的标签，了解他们的特点**可以更好的布局我们的页面**。

元素显示模式就是**元素（标签）以什么方式进行显示**，如&lt;div>自己占一行，如一行可以放多个&lt;span>。

HTML元素一般分为**块元素**和**行内元素**两种类型。（人类分为男人和女人）

#### 10.2块元素

常见的块元素有<h1&gt;~<h6&gt;、&lt;p>、<div&gt;、<ul&gt;、<ol&gt;、<li&gt;等，其中**<div&gt;**标签是**最典型的块元素**。

<u>块元素的特点</u>：                                                               

1.比较霸道，自己独占一行

2.高度、宽度、外边距以及内边距都可以控制

3.宽度默认是容器（父级宽度）的100%

4.是一个容器及盒子，里面可以放行内或块级元素

**注意**：

1.<u>文字类的元素内不能使用块级元素</u>（文字类的元素如p、 h1~h6）

2.&lt;p>标签主要用于存放文字，因此&lt;p>里面不能放块级元素，特别不能放<div&gt;

3.同理，<h1&gt;~<h6&gt;等都是文字块类级标签，里面不能放其他块级元素

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>块元素</title>
    <style>
        div {
            /* width: 200px; */
            height: 200px;
            background-color: red;
        }
    </style>
</head>

<body>
    <div>比较霸道，自己独占一行</div>瑟瑟发抖
    <!-- <p>
    <div>这里有问题</div>
    </p> -->
</body>
```

![image-20210106113510322](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210106113510322.png)

#### 10.3行内元素

常见的**行内元素<a&gt;**、&lt;strong>、&lt;b>、<em&gt;、&lt;i>、&lt;del>、<s&gt;、<ins&gt;、<u&gt;、<span&gt;等，其中**<span&gt;标签**是最典型的**行内元素**，又称为**内联元素**。

<u>行内元素的特点</u>：

1.相邻行内元素在一行上，一行可以显示多个

2.高、宽直接设置是无效的

3.默认宽度就是它本身内容的宽度

4.行内元素只能容纳文本或其他行内元素



**注意**：

1.链接里面不能再放链接

2.特殊情况**链接<a&gt;里面可以放块级元素**，但是给**<a&gt;转换一下块级（行内块）模式**更安全

#### 10.4行内块元素

在行内元素中有几个特殊的标签——<img&gt;、<input&gt;、<td&gt;（图片、表单、表格），它们**同时具有块元素和行内元素的特点**，又称为**行内块元素**。

行内块元素的特点：

1.和相邻行内元素（行内块）在一行上，但是他们之间会有空白缝隙，一行可以显示多个（行内元素特点）。

2.默认宽度就是它本身内容的宽度（行内元素特点）。

3.高度、行高、外边距以及内边距都可以控制（块级元素特点）。

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        input {
            width: 249px;
            height: 50px;
        }
    </style>
</head>

<body>
    <input type="text">
    <input type="text">

</body>
```

![image-20210106144203320](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210106144203320.png)

#### 10.5元素显示模式总结

| 元素模式   | 元素排列               | 设置样式                   | 默认宽度           | 包含                   |
| ---------- | ---------------------- | -------------------------- | ------------------ | ---------------------- |
| 块级元素   | 一行只能放一个块级元素 | 可以设置宽度高度           | （父级）容器的100% | 容器级可以包含任何标签 |
| 行内元素   | 一行可以放多个行内元素 | 不可以**直接**设置宽度高度 | 本身内容的宽度     | 容纳文本或其他行内元素 |
| 行内块元素 | 一行放多个行内块元素   | 可以设置宽度高度           | 本身内容的宽度     |                        |

#### 10.6元素显示模式转换

特殊情况下，我们需要元素模式的转换，简单理解：<u>一个模式的元素需要另外一种模式的特性</u>。如想要增加链接<a&gt;的触发范围。

**转换为块元素：display: block;**

转换为行内元素：display: inline;

**转换为行内块元素：display: inline-block;**

记忆：display转换，block块，inline行内,inline-block行内块。重点记忆第1、3种，常用。

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        a {
            width: 100px;
            height: 50px;
            background-color: green;
            /* 把行内元素a 转换成 块级元素才能改变高宽 */
            display: block;
        }

        div {
            width: 300px;
            height: 100px;
            background-color: pink;
            /* 把div块元素转换为行内元素 */
            display: inline;
        }

        span {
            width: 200px;
            height: 30px;
            background-color: blue;
            display: inline-block;
        }
    </style>
</head>

<body>
    <a href="#">行内元素</a>
    <div>块级元素</div>
    <div>块级元素</div>
    <span>行内元素转换为行内块元素</span>
    <span>行内元素转换为行内块元素</span>


</body>
```

![image-20210106150144996](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210106150144996.png)



#### 10.7snipaste小工具使用

Snipate是一个简单但强大的截图工具。

常用快捷方式：

1. F1可以截图.同时测量大小，设置箭头书写文字等

2. F3 在桌面置项显示

3. 点击图片, alt可以取色(按下shift可以切换取色模式)

4. 按下esc 取消图片显示

  

#### 10.8简洁版小米侧边栏

实现：

![image-20210106161624832](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210106161624832.png)

案例核心思路分为两步：

1.将链接a转换为块级元素，这样链接就可以单独占一行，并且有宽度和高度

2.鼠标经过 a给链接设置背景颜色

其中**文字垂直居中实现小技巧**：

CSS没有提供文字垂直居中的代码，可以使用一个小技巧实现

解决方案：**让文字的行高等于盒子的高度**，就可以让文字在当前盒子内垂直居中。



**单行文字垂直居中的原理**：行高=上空隙+文字本身高度+下空隙。简单理解：行高的上空隙和下空隙把文字挤到中间。若行高小于盒子的高度，文字偏上；若行高大于盒子高度，则文字偏下。



```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>简洁版小米侧边栏</title>
    <style>
        /* 1.把a转换为块级元素 */
        a {
            display: block;
            width: 230px;
            height: 40px;
            background-color: #535758;
            font-size: 14px;
            color: #fff;
            text-decoration: none;
            text-indent: 2em;//首行缩进实现前面空格
            line-height: 40px;//实现文字实现垂直居中，行高=height
        }

        /* 2.鼠标经过链接变换背景颜色 */
        a:hover {
            background-color: #ff6f00;
        }
    </style>
</head>

<body>
    <a href="#">手机 电话卡</a>
    <a href="#">电视 盒子</a>
    <a href="#">笔记本 平板</a>
    <a href="#">出行 穿戴</a>
    <a href="#">智能 路由器</a>
    <a href="#">电源 配件</a>
    <a href="#">健康 儿童</a>
    <a href="#">耳机 音响</a>

</body>
```



![image-20210106161624832](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210106161624832.png)



### 11.CSS的背景

通过CSS背景属性，可以给页面元素添加背景样式。

背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定等。

#### 11.1背景颜色

**background-color属性**定义了元素的背景颜色。

```
background-color: 颜色值;
```

一般情况下，元素背景颜色默认值为**transparent**（透明），我们也可以手动指定背景颜色为透明色

#### 11.2背景图片

**background-image属性**描述了元素的背景图像，实际开发<u>常见于logo或一些装饰性图片或超大的背景图片</u>。优点是非常便于控制位置（<u>默认背景图片平铺显示</u>）

```
background-image: none|url(url)
```

| 参数值 | 作用                           |
| ------ | ------------------------------ |
| none   | 无背景图（默认的）             |
| url    | 使用相对或绝对路径指定背景图像 |

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>背景图片</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            /* 不要漏掉url */
            background-image: url(images/logo.png);
        }
    </style>
</head>

<body>
    <div></div>
</body>
```

![image-20210106170127022](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210106170127022.png)

#### 11.3背景平铺

**background-repeat属性**设置背景图片平铺

```
background-repeat: repeat | norepeat | repeat-x | repeat-y
```

| 参数值   | 作用                               |
| -------- | ---------------------------------- |
| repeat   | 背景图像在纵向和横向上平铺（默认） |
| norepeat | 背景图像不平铺                     |
| repeat-x | 背景图像在横向上平铺               |
| repeat-y | 背景图像在纵向上平铺               |

注意：页面元素既可以添加背景颜色也可以添加背景图片，只不过背景图片会压住背景颜色。

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>背景图片</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            /* 不要漏掉url */
            background-color: pink;
            background-image: url(images/logo.png);
            /* 1.设置图像不平铺 */
            /* background-repeat: no-repeat; */
            /* 2.默认情况下，背景图片是平铺的 */
            /* background-repeat: repeat; */
            /* 3.沿着x轴平铺 */
            /* background-repeat: repeat-x; */
            /* 4.沿着y轴平铺 */
            background-repeat: repeat-y;
            /* 页面元素既可以添加背景颜色也可以添加背景图片，只不过背景图片会压住背景颜色。 */
        }
    </style>
</head>

```

![image-20210107090217628](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107090217628.png)



#### 11.4背景图片位置

**background-position属性**可以改变图片在背景中的位置。

```
background-position: x y;
```

参数代表的意思是：x坐标和y坐标，可以使用**方位名词**或**精确单位**。

| 参数值   | 说明                                                      |
| -------- | --------------------------------------------------------- |
| length   | 百分数\|由浮点数字和单位标识符组成的长度                  |
| position | top \| center \| bottom \| left \| center \|right方位名词 |

注意：

**1.参数是方位名词**

- 如果指定的两个值都是方位名词，则两个值前后顺序无关，比如left top和top left效果一致（中间用空格隔开）
- 若只规定了一个方位名词，则第二个方位名词默认是center（居中对齐）

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>背景位置-方位名词</title>
    <style>
        div {
            width: 400px;
            height: 200px;
            background-color: pink;
            background-image: url(images/logo.png);
            background-repeat: no-repeat;
            /* background-position: 方位名词; */
            /* background-position: center top; */
            /* background-position: center right; */
            /* 如果是方位名词center right和right center效果一致 */
            /* background-position: right center; */
            /* 若只规定了一个方位名词，则第二个方位名词默认是center */
            background-position: left;

        }
    </style>
</head>

<body>
    <div></div>
```

![image-20210107092708920](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107092708920.png)



**2.参数是精确单位**

- 如果参数值是精确单位（<u>有px</u>），第一个参数值一定为x坐标，第二个一定为y坐标
- 若只指定一个数值，那该数值一定是x坐标，另一个默认垂直居中

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 400px;
            height: 200px;
            background-color: pink;
            background-image: url(images/logo.png);
            background-repeat: no-repeat;
            /* x轴一定是20，y轴一定是50 */
            /* background-position: 20px 50px; */
            /* background-position: 50px 20px; */
            background-position: 20px;
        }
    </style>
</head>
```

![image-20210107101004006](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107101004006.png)20px 50px

![image-20210107100605982](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107100605982.png)50px 20px

![image-20210107100638068](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107100638068.png)20px

**3.参数是混合单位**

- 如果指定的两个值是精确单位和方位名词混合使用，则第一个值是x坐标，第二个值是y坐标



#### 11.5背景案例应用

##### 11.5.1应用一

模仿王者荣耀官网的![image-20210107094500187](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107094500187.png)

step1:检查查询，得知盒子宽高118×41（我设置了118×40）以及下载图片素材（点击open in new tab下载，偷官网素材的方法）

![image-20210107094605468](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107094605468.png)

![image-20210107094825312](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107094825312.png)

step2:

注意：

1.前期添加盒子的背景颜色，方便观察位置，后期可再删除。

2.若是img src方式插入图片，较难改变图片位置，这种做装饰用的小图片使用背景图片方式插入图片，也方便改变图片位置。

3.图片与文字间具有一定距离实现，如图失败，可使用文字缩进1.5个字实现差不多效果（更好的方法后期会学习）。

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>背景位置方位名词应用1</title>
    <style>
        h3 {
            width: 118px;
            height: 40px;
            /* background-color: pink; */
            font-size: 12px;
            font-weight: 400;
            line-height: 40px;
            background-image: url(images/icon.png);
            background-repeat: no-repeat;
            background-position: left center;
            text-indent: 1.5em;
        }
    </style>
</head>

<body>
    <h3>
        成长守护平台
    </h3>
</body>
```

![image-20210107095119644](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107095119644.png)图失败

![image-20210107095408564](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107095408564.png)图成功

##### 11.5.2应用二

模仿王者荣耀官网背景图片

![image-20210107101957254](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107101957254.png)



step1:下载背景图片素材，测量图片上方距离

step2:使用背景图片位置混合单位实现图片位置

```html
<style>
        body {
            background-image: url(images/bg.jpg);
            background-repeat: no-repeat;
            background-position: center 40px;
        }
  </style>
```

#### 11.6背景图像固定（背景附着）

**background-attachment属性**设置背景图像是否固定或随着页面的其余部分滚动。后期可以制作视差滚动情况。

```
background-attachment: scroll | fixed
```

| 参数   | 作用                             |
| ------ | -------------------------------- |
| scroll | 背景图像是随对象内容滚动（默认） |
| fixed  | 背景图片固定                     |

#### 11.7背景复合写法

为了简化背景属性的代码,我们可以将这些属性合并简写在同一个属性**background**中，从而节约代码量。（类似于font）

当使用简写属性时.没有特定的书写顺序，一般习惯约定顺序为:

**background:背景颜色 背景图片地址 背景平铺 背景图像滚动  背景图片位置:**（中间空格隔开，颜址平动位）

```
background: transpaent url(image.jpg) repeat-y fixed top;
```

这是实际开发中，<u>更提倡的写法</u>。

如：

```
 background: black url(images/bg.jpg) no-repeat fixed center top;
```

#### 11.8背景色半透明

如：

![image-20210107103605745](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107103605745.png)

![image-20210107103622858](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107103622858.png)

**语法**：

```html
background: rgba(0,0,0,0)
```

- 最后一个参数是alpha透明度，<u>取值范围在0~1之间</u>。透明度0：完全透明，透明度1：完全不透明。
- 我们习惯把0.3的0省略掉，写成background:rgba(0,0,0,.3);
- 注意：背景半透明是指盒子背景半透明，盒子里面的内容不受影响

```html
如：
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>背景半透明</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background: rgba(0, 0, 0, .3);
            font-size: 16px;
        }
    </style>
</head>

<body>
    <div>1111</div>
</body>
```

![image-20210107104804981](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107104804981.png)

#### 11.9背景总结

| 属性                  | 作用           | 值                                            |
| --------------------- | -------------- | --------------------------------------------- |
| background-color      | 背景颜色       | 预定义的颜色值/十六进制/RGB代码               |
| background-image      | 背景图片       | url(图片路径)                                 |
| background-repeat     | 是否平铺       | repeat/no-repeat/repeat-x/repeat-y            |
| background-attachment | 背景固定       | scroll/fixed(滚动/固定)                       |
| background-position   | 背景位置       | length/position/ 分别是x和y坐标               |
| 背景简写              | 书写更简单     | 背景颜色 背景图片 背景平铺 背景固定 背景位置; |
| 背景色半透明          | 背景颜色半透明 | background:rgba(0,0,0,.3)注意a                |

#### 11.10综合案例：五彩导航

![image-20210107105621503](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107105621503.png)

**练习价值**：

1.链接属于行内元素，但此时需要设置宽高，因此需要模式转换

2.里面的文字需要水平居中和垂直居中，因此需要单行文字垂直居中的代码

3.链接里面需要设置背景图片，因此需要用到背景的相关属性设置

4.鼠标经过变化背景图片，因此需要用到链接伪类选择器

步骤：

1.搭建结构

![image-20210107110307229](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107110307229.png)

2.将链接转换成行内块元素，并设置于背景图片一样大小的宽高

![image-20210107110731068](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107110731068.png)

3.实现盒子内文字垂直居中，并修改文字（颜色、取消文本装饰的下划线）

![image-20210107110958941](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107110958941.png)

4.使用后代选择器复合写法，插入第一个导航的背景图片

![image-20210107111319710](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107111319710.png)

5.发现文字较背景图片偏下，可修改行高调整文字位置line-height:58px修改为48px（具体值可边修改边刷新页面观察）

![image-20210107111503972](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107111503972.png)

6.使用链接伪类选择器，给不同的导航鼠标经过时换不同的背景图片 

![image-20210107112620972](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107112620972.png)

5.6重复4次，依此类推。

小结：

1.VSCode某一位置一列输入相同的值方法：先点击需要输入的位置，再按住shift+alt键，鼠标下拉这一列，如下图，就可输入值了。

![image-20210107110149685](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107110149685.png)

2.![image-20210107112137766](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107112137766.png)

后代选择器写background属性，而链接伪类选择器写background-image属性理由：

链接伪类选择器在后代选择器定义之下，已经定义了no-repeat属性值，无需再次定义no-repeat，因此只需定义背景图片属性一个属性，那用background-image属性足够了。

3.注意案例的步骤思路。



完整代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>案例：五彩导航</title>
    <style>
        .nav a {
            display: inline-block;
            width: 120px;
            height: 58px;
            background-color: pink;
            text-align: center;
            line-height: 48px;
            color: #fff;
            text-decoration: none;
        }

        /* 使用后代选择器复合写法，插入每个导航的背景图片 */
        .nav .bg1 {
            background: url(images/bg1.png ) no-repeat;
        }

        /* 使用链接伪类选择器，给不同的导航鼠标经过时换不同的背景图片 */
        .nav .bg1:hover {
            background-image: url(images/bg11.png);
        }

        .nav .bg2 {
            background: url(images/bg2.png) no-repeat;
        }

        .nav .bg2:hover {
            background-image: url(images/bg22.png);
        }

        .nav .bg3 {
            background: url(images/bg3.png) no-repeat;
        }

        .nav .bg3:hover {
            background-image: url(images/bg3.jpg);
        }

        .nav .bg4 {
            background: url(images/bg4.png) no-repeat;
        }

        .nav .bg4:hover {
            background-image: url(images/bg5.png);
        }
    </style>
</head>

<body>
    <div class="nav">
        <a href="#" class="bg1">五彩导航</a>
        <a href="#" class="bg2">五彩导航</a>
        <a href="#" class="bg3">五彩导航</a>
        <a href="#" class="bg4">五彩导航</a>
    </div>
</body>

</html>
```



### 12.CSS的三大特性

CSS有三个非常重要的特性：层叠性、继承性、优先级。

#### 12.1层叠性

<u>相同选择器</u>给设置<u>相同的属性</u>，此时一个样式就会**覆盖（层叠）**另一个冲突的属性。层叠性主要解决样式冲突的问题。

层叠性原则：

- 样式冲突，遵循的原则是**就近原则**，哪个样式离结构进，就执行哪个样式。代码是一行一行从上至下执行，后面的覆盖之前的。
- 样式不冲突，不会层叠

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS层叠性</title>
    <style>
        div {
            color: red;
            font-size: 12px;
        }

        div {
            color: pink;
        }
    </style>
</head>

<body>
    <div>对于可控的事情，我们要保持谨慎</div>
</body>
```

![image-20210107113646502](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107113646502.png)

![image-20210107113657750](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107113657750.png)

#### 12.2继承性

CSS中的基础：子标签会继承父标签的<u>某些样式</u>，如文本颜色和字号。简单理解:子承父业。

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS继承性</title>
    <style>
        div {
            color: pink;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <div>
        <p>龙生龙，凤生凤，老鼠生的孩子会打动</p>
    </div>
</body>
```

![image-20210107114250884](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107114250884.png)

- 恰当使用继承可以简化代码，降低CSS样式的复杂性
- 子元素可以继承父元素的样式（text-、font-、line-这些元素开头的可以继承，以及color属性，跟文字相关的样式）

##### 12.2.1行高的继承性

```
body {
	font:12px/1.5 'Microsoft yahei'
}
```

- 行高可以跟单位也可以不跟单位
- 如果子元素没有设置行高，则会继承父元素的行高为1.5
- 此时子元素的行高：当前子元素的文字大小*1.5
- **body行高1.5这样写法最大的优势就是里面子元素可以根据自己文字大小自行调整行高**

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>行高的继承</title>
    <style>
        body {
            color: pink;
            /* font: 12px/24px 'Microsoft yahei'; */
            font: 12px/1.5 'Microsoft yahei';
        }

        div {
            /* 子元素继承了父元素body的行高1.5 */
            /* 这个1.5就是当前元素文字font-size 的1.5倍，所以当前div行高是14*1.5=21px */
            font-size: 14px;
        }

        p {
            /* 当前p的行高是24px */
            font-size: 16px;
        }

        /* li没有手动指定文字大小，则会继承父亲的文字大小ul->body 12px,所以li的文字大小是12px ，当前的行高为12*1.5=18px */
    </style>
</head>

<body>
    <div>保持谨慎</div>
    <p>保持谨慎</p>
    <ul>
        <li>没有指定文字大小</li>
    </ul>
</body>
```

![image-20210107145234694](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107145234694.png)

![image-20210107145252296](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107145252296.png)

![image-20210107145304226](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107145304226.png)

#### 12.3优先级

当统一元素指定多个选择器，就会有优先级的产生。

- 选择器相同，则执行层叠性
- 选择器不同，则根据**选择器权重**执行

| 选择器                   | 选择器权重 |
| ------------------------ | ---------- |
| 继承或 *                 | 0,0,0,0    |
| 元素继承器（标签选择器） | 0,0,0,1    |
| 类选择器、伪类选择器     | 0,0,1,0    |
| ID选择器                 | 0,1,0,0    |
| 行内样式style=""         | 1,0,0,0    |
| !important重要的         | 无穷大     |

**一般范围越小，权重越高**

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS优先级</title>
    <style>
        div {
            color: pink !important;
        }

        .test {
            color: red;
        }

        #demo {
            color: green;
        }
    </style>
</head>

<body>
    <div class="test" id="demo" style="color:purple">对于可控的事情，我们要保持谨慎</div>
</body>
```

![image-20210107152226971](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107152226971.png)



##### **优先级注意点**：

1.权重是有4组数字组成，但是永远<u>不会有进位</u>（0,0,0,10）

2.等级从左向右，如果某一位数值相同，则判断下一位数值

**<u>3.继承的权重是0</u>**，<u>如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是0</u>

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS权重注意点</title>
    <style>
        #father {
            color: red;
        }
        /* 所以以后我们看标签到底执行哪个样式，就先看这个标签有没有直接被选出来 */
        p {
            color: pink;
        }
        /* a链接浏览器默认指定了一个样式，蓝色有下划线 a{color:blue} */
		/* a {
            color: green;
        } */
    </style>
</head>

<body>
    <div id="father">
        <p>保持乐观</p>
    </div>
    <a href="#">单独样式</a>
</body>
```

![image-20210107153356655](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107153356655.png)

**结果文字为粉色，而不是红色，链接颜色为蓝色，而不是绿色。**

理由：

1.father权重很高，但p是继承，权重为0，div才是直接选中；而p是标签选择器，权重大于0：

2.a链接浏览器默认指定了一个样式，蓝色有下划线 a{color:blue}，而继承的权重为0

##### 权重叠加：

如果是复合选择器，则会有权重叠加，需要计算权重。

- div ul li——>0,0,0,3
- .nav ul li——>0,0,1,2
- <u>a:hover——>0,0,1,1(a+:hover,0,0,0,1+0,0,1,0)</u>
- .nav a——>0,0,1,1

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>权重的叠加</title>
    <style>
        /* 复合选择器会有权重叠加的问题 */
        /* 权重虽然会叠加，但永远不会有进位 */
        /* li的权重是0,0,0,1    1*/
        li {
            color: red;
        }

        /* ul li权重是0,0,0,1+0,0,0,1=0,0,0,2,大于li的权重   2*/
        ul li {
            color: green;
        }

        /* .nav li权重是0,0,1,0+0,0,0,1=0,0,1,1   11*/
        .nav li {
            color: pink;
        }
    </style>
</head>

<body>
    <ul class="nav">
        <li>大猪蹄子</li>
        <li>大肘子</li>
        <li>猪尾巴</li>
    </ul>
</body>
```

![image-20210107154754120](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107154754120.png)文字为粉色

##### 权重叠加练习

练习1：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS权重练习</title>
    <style>
        .nav {
            color: red;
        }

        li {
            color: pink;
        }
    </style>
</head>

<body>
    <ul class="nav">
        <li>人生四大悲</li>
        <li>家里没宽度</li>
        <li>网速不够快</li>
        <li>手机没流量</li>
        <li>学校没wifi</li>

    </ul>
</body>
```

![image-20210107160402284](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107160402284.png)颜色为粉色，理由.nav继承的权重为0

练习2：

```html
/* 权重是11 */
.nav li {
	color: red;
}

/* 需求：把第一个li颜色改为粉色加粗 */
/* 权重是10 */
.pink {
	color: pink;
	font-weight: 700;
}
```

![image-20210107160811816](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107160811816.png)颜色未变粉，权重不够

修改,增加 pink的权重：

```
/*  .nav.pink权重是20*/
.nav .pink {
            color: pink;
            font-weight: 700;
        }
```

![image-20210107161030276](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107161030276.png)



### <u>13.盒子模型</u>

网页布局要学习三大核心：盒子模型、浮动和定位。学习好盒子模型能非常好的帮助我们布局页面。

#### 13.1看透网页布局的本质

![image-20210107161446815](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107161446815.png)

网页布局过程：

1.先准备好相关的网页元素，网页元素基本都是盒子Box

2.利用CSS设置好盒子样式，然后摆放到相应位置

3.往盒子里面装内容

<u>网页布局的核心本质：就是利用CSS摆盒子。</u>

#### 13.2盒子模型（Box Model）组成

所谓**盒子模型**：就是把HTML页面中的布局元素看作是一个矩形的盒子（如p、div），也就是盛装内容的容器。

CSS盒子模型本质上是一个盒子，封装周围的HTML元素，它包括：边框（border）、外边距(margin)、内边距(padding)和实际内容(content，可以嵌套盒子)。

![image-20210107162149530](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107162149530.png)

![image-20210107162326572](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107162326572.png)

#### 12.3边框

border可以设置元素的边框。边框有三部分组成：边框宽度（粗细）、边框样式、边框颜色。

**语法**：

```
border: border-width || border-style || border-color
```

| 属性         | 作用                           |
| ------------ | ------------------------------ |
| border-width | 定义边框粗细，单位是px         |
| border-style | 边框的样式（如实线框、虚线框） |
| border-color | 边框颜色                       |

border-style: solid实线边框 dashed虚线边框 dotted点线边框

```html
<style>
        div {
            width: 300px;
            height: 200px;
            /* 边框的粗细，一般单位用px */
            border-width: 5px;
            /* 边框的样式solid实线边框 dashed虚线边框 dotted点线边框 */
            /* border-style: solid; */
            /* border-style: dashed; */
            border-style: dotted;
             /* 边框的颜色 */
            border-color: pink;
        }
</style>
```

![image-20210107165804707](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107165804707.png)

小结：记住solid实线，dashed虚线，dotted点线三种style就够了

**边框简写**：

```
border: 1px solid red;没有先后顺序
```

边框分开写法：

```
border-top :1px dashed red; 只设定上边框，其余同理
border-bottom
border-left
borfer-right
```

练习：给一个200*200的盒子，设置上边框为红色，其他边框为蓝色

合理使用层叠性。

```html
    <style>
        div {
            width: 200px;
            height: 200px;
            border: 1px solid blue;
            border-top: 1px solid red;
        }
    </style>
```

![image-20210107170946768](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107170946768.png)

#### 13.4表格的细线边框

**border-collapse属性**控制浏览器绘制表格边框的方式，它控制相邻单元格的边框。(collapse意为合并)

**语法**：

```
border-collapse:collapase; 表示相邻边框合并在一起
```

如：

```html
table {
            border: 1px solid pink;
            border-collapse: collapse;
            text-align: center;
        }
```

![image-20210107171922141](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107171922141.png)

#### 13.5边框会影响盒子的实际大小

边框会额外增加盒子的实际大小，因此我们有两种方案解决：

1.测量盒子大小的时候，不量边框

2.如果测量的时候包含了边框，则需要width/height减去边框的宽度

#### 13.6内边距（padding）

padding属于设置内边距，即边框与内容之间的距离。

##### 13.6.1内边距

| 属性           | 作用     |
| -------------- | -------- |
| padding-left   | 左内边距 |
| padding-right  | 右内边距 |
| padding-top    | 上内边距 |
| padding-bottom | 下内边距 |

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>13-盒子模型之内边距padding.html</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            padding-left: 20px;
            padding-top: 10px;
        }
    </style>
</head>

<body>
    <div>
        盒子内容是content盒子内容是content盒子内容是content盒子内容是content盒子内容是content盒子内容是content
    </div>
</body>
```

![image-20210107173008382](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107173008382.png)

**padding复合属性**（简写属性）

| 值的个数                   | 表达意思                                                     |
| -------------------------- | ------------------------------------------------------------ |
| padding:5px                | 1个值，表示上下左右都有5像素内边距                           |
| padding:5px 10px           | 2个值，表示上下有5像素内边距，左右有5像素内边距              |
| padding:5px 10px 20px      | 3个值，表示上内边距有5像素，左右有5像素内边距,下内边距有20像素 |
| padding:5px 10px 20px 30px | 4个值，表示上 5px,右 10px，下20px,左30px（顺时针顺序）       |

以上4种情况，实际开发种都会遇到。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>13-盒子模型之内边距padding.html</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            /* padding-left: 20px;
            padding-top: 10px; */
            /* padding: 5px; */
            padding: 5px 10px;
        }
    </style>
</head>

<body>
    <div>
        盒子内容是content盒子内容是content盒子内容是content盒子内容是content盒子内容是content盒子内容是content
    </div>
</body>
```

![image-20210107173750543](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107173750543.png)

当我们给盒子指定了padding值之后，发生了两件事情：

1.内容和边框有了距离，添加了内边距

2.padding影响了盒子实际大小

也就是说，如果盒子已经有了宽度和高度，此时再指定内边距，会撑大盒子。

**解决方案**：

为保证盒子和效果图大小保持一致，则需要**width/height减去多出来的内边距大小**即可。(160+20*20=200,将盒子修改为160x160大小，与border一样)

如：

![image-20210107200716654](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107200716654.png)设置padding:20px,200+20*2=240px

##### 13.6.2案例：新浪导航案例

padding内边距可以撑开盒子，我们可以巧妙地运用。

制作新浪导航案例：

![image-20210107201447436](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107201447436.png)

相关取值:
1.上边框为3像素颜色为f185000
2.下边框为1像素颜色为#edeefo
3.盒子高度为41像素背景颜色为#fcfcfc
4.文字颜色为#4c4c4c

分析：因为每个导航栏里面的字数不一样多，不设置每个的盒子宽度，**设置padding更合适**

![image-20210107201416159](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107201416159.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新浪导航栏</title>
    <style>
        .nav {
            height: 41px;
            border-top: 3px solid #ff8500;
            border-bottom: 1px solid #edeef0;
            background-color: #fcfcfc;
            line-height: 41px;
        }

        .nav a {
            /* 转换成行内块元素才能修改高度 */
            display: inline-block;
            height: 41px;
            padding: 0 20px;
            font-size: 12px;
            text-decoration: none;
            color: #4c4c4c;
        }

        .nav a:hover {
            background-color: #111;
            color: #ff8500;
        }
    </style>
</head>

<body>
    <div class="nav">
        <a href="#">新浪导航</a>
        <a href="#">手机新浪网</a>
        <a href="#">移动客户端</a>
        <a href="#">微博</a>
        <a href="#">关注我</a>
    </div>
</body>

</html>
```

![image-20210107203203417](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107203203417.png)

小结：

1.单行文字垂直居中问题

2.链接a比较特殊，需单独设置属性

3.将a转换为行内块元素再进行设置高度，使得鼠标经过文字这块时就能变色

4.每个导航栏里面的字数不一样多时，为了美观，设置padding更合理



##### 13.6.3案例：小米导航栏修改

小米侧边栏这个案例，文字距离左侧的距离不应该用text-indent，这样不准确，使用padding值，这样更加准确。

注意：padding内边距会撑开盒子，因此我们需要**修改宽度**（新宽度=原宽度-左内边距）

```
 /* width: 230px; */
 width: 200px;
 height: 40px;
 background-color: #535758;
 font-size: 14px;
 color: #fff;
 text-decoration: none;
 /* text-indent: 2em; */
 padding-left: 30px;
 line-height: 40px;
```

##### 13.6.4padding不改变盒子大小的情况

如果盒子<u>本身没有指定width/height属性</u>，则此时padding不会撑开盒子大小。

如：

```
h1 {
            height: 200px;
            background-color: pink;
            padding: 10px;
        }
```

![image-20210107214355152](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107214355152.png)未加padding

![image-20210107214417252](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107214417252.png)加了padding，宽度未变，是浏览器的宽度；

高度变成242.88+10*2=262.88，仅变化了高度。



又如：

```
		div {
            width: 300px;
            height: 200px;
            background-color: purple;
        }

        div p {
            padding: 30px;
            background-color: red;
        }
 
<body>
    <h1></h1>
    <div>
        <p></p>
    </div>
</body>
```

![image-20210107214936001](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107214936001.png)

![image-20210107215218608](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107215218608.png)

结果：盒子宽高不变

理由：p的宽高是300×60，没有超过父亲div宽300px而变成360px，因为p没有<u>直接指定（？）</u>宽度高度

#### 13.7外边距（margin）

**margin属性**用于设置外边距，即控制盒子和盒子之间的距离

##### 13.7.1外边距

| 属性          | 作用     |
| ------------- | -------- |
| margin-left   | 左外边距 |
| margin-right  | 右外边距 |
| margin-top    | 上外边距 |
| margin-bottom | 下外边距 |

margin简写方式代表的意义跟padding 完全一致。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>盒子模型之外边距</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        /* .one {
            margin-bottom: 20px;
        } */

        .two {
            /* margin-top: 20px; */
            margin: 30px 50px;
        }
    </style>
</head>

<body>
    <div class="one">1</div>
    <div class="two">2</div>
</body>
```

![image-20210107222425724](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210107222425724.png)

##### 13.7.2外边距典型应用

外边距可以让<u>块级盒子</u><u>**水平居中**</u>，但是必须满足两个条件：

1.盒子必须指定了<u>宽度</u>（width）

2.盒子**左右的外边距**都**设置为auto**

```
.header{
	width:900px;
	margin:0 auto;
}
```

以下三种常见写法：

```
1.margin-left:auto; margin-right:auto;
2.margin:auto;
3.margin:0 auto;(实际开发中更常用)
```

**注意**：以上方法是让<u>块级</u>元素水平居中，**行内元素或者行内块元素居中给其父元素添加 text-align:center即可**

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>行内元素和行内块元素水平居中</title>
    <style>
        .header {
            width: 100px;
            height: 200px;
            background-color: green;
            margin: 0 auto;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="header">
        <span>里面的文字</span>
    </div>
</body>
```

![image-20210110205251939](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210110205251939.png)

##### 13.7.3外边距合并

使用margin定义块元素的垂直外边距时，可能会出现外边距的合并。

**嵌套块元素垂直外边距的塌陷**

对于两个嵌套关系（父子关系）的块元素，父元素有上外边距的同时，子元素也有上外边距，此时父元素会塌陷较大的外边距值。

![image-20210110205848519](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210110205848519.png)

**解决方案**：

1.可以为父元素定义上边框,边框颜色定义为transparent(透明)更美观

2.可以为父元素定义上内边距

3.可以为父元素添加overflow:hidden(比较常用，以上两种会影响盒子大小)

还有其他方法，如浮动、固定，绝对定位的盒子不会有塌陷问题，后续再总结。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>外边距的合并</title>
    <style>
        .father {
            width: 400px;
            height: 400px;
            background-color: purple;
            margin-top: 50px;
            /* border: 1px solid transparent; */
            /* padding: 1px; */
            overflow: hidden;
        }

        .son {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
</body>
```

![image-20210110210624903](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210110210624903.png)

#### 13.8清除内外边距

网页元素很多都带有默认的内外边距，而且不同的浏览器默认的也不一致，因此我们在布局前，首先要清除下网页元素的内外边距。

```
* {
	padding: 0; 清除内边距
	margin: 0; 清除外边距
}
```

注意行内元素为了照顾兼容性，尽量只设置左右内外边距，不要设置上下内外边距（设置了也不一定奏效）。但行内块元素和块级元素都可以。

如：

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>清除内外边距</title>
    <style>
        /* 这句话是我们CSS的第一行代码 */
        * {
            margin: 0;
            padding: 0;
        }
    </style>
</head>

<body>
    123
    <ul>
        <li>456</li>
    </ul>
</body>
```

未清除内外边距：![image-20210110210939965](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210110210939965.png)

清除内外边距后：![image-20210110211126256](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210110211126256.png)



### 14.PS基本操作

因为网页美工大部分效果图都是利用**PS ( Photoshop )**来做的，所以以后我们大部分<u>切图</u>工作都是在PS面完成。

- **文件->打开**：可以打开我们要测量的图片
- **Ctrl+R** :可以打开标尺，或者**视图->标尺**
- 右击标尺，把里面的**单位改为像素**
- **Ctrl+加号(+)**可以放大视图，**Ctrl+减号(-)**可以缩小视图
- **按住空格健**，鼠标可以变成小手，**拖动PS视图**
- 用**选区拖动**，可以测量大小
- **Ctrl+ D**可以**取消选区**，或者在旁边空白处点击一下也可以取消选区



###  15.综合案例

#### 案例1实现：

![image-20210112165726369](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210112165726369.png)

首先划分区域,如右图

**step1**：前提，设置整个页面背景颜色,清除内外边距,设置box

```html
<style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #ebebeb;
        }
    
   		 .box {
            width: 298px;
            height: 415px;
            background-color: #fff;
            margin: 100px auto;
        }

</style>
```

**step2**：img区域制作。**难点：图片大小符合box的大小。解决方法：将图片的宽调整为100%，这样就与父元素box一样宽了。**

```html
.box img {
            width: 100%;
        }
 ------------------
<div class="box">
        <img src="images/pic1.jpg" alt="">
</div>
```

**step3**.review区域制作。**难点：评价的字数不同会影响下面模块的布局。解决方法：将p转换为行内块元素，为该模块设置高度**，同时设置左右边距如案例一样且更美观（下面两个标签同），同时不会影响盒子大小。

```html
.review {
            height: 50px;
            font-size: 14px;
            color: #333333;
            /* 因为这个段落没有width属性，所以padding不会撑开盒子的宽度 */
            padding: 0 28px;
        }
<p class="review">快递牛,整体不错蓝牙可以秒连，值得入手</p>
```

**step4**:appraise来源区域制作。

```html
.appraise {
            font-size: 12px;
            color: #b0b0b0;
            margin-top: 10px;
            padding: 0 28px;
        }
<div class="appraise">来自于117384231的评价</div>
```

step5:info模块制作。

**难点1**：产品名称与价格一行上，但样式不同。解决方案：**使用h4标签写产品名称，使用span标签写价格，同时将h4转换为行内块元素，使得名称和价格在同一行上。**

难点2：|的设置，与产品名称和价格有一定的间距。解决方案：使用em标签放置“|”,同时设置为不倾斜，设置左右margin来实现间距。

```html
<style>
	.info {
            font-size: 12px;
            margin-top: 10px;
            padding: 0 28px;
        }

	.info h4 {
            display: inline-block;
            font-weight: 400;
        }

	.info span {
            color: #ff5b00;
        }

	.info em {
            font-style: normal;
            color: #ebe4e0;
            margin: 0 6px 0 15px;

        }
</style>
---------------------------
<div class="info">
            <h4><a href="#">小米真无线蓝牙耳机Air 2...</a>
                <em>|</em>
            </h4>
            <span> 69.9元</span>
        </div>
```

![image-20210112194612456](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210112194612456.png)

小结：

1.首先需要清除内外边距。需要的话也设置整个页面的背景颜色。

2.<u>图片宽度与盒子宽度一样的实现方法：将图片大小（宽）调整为100%，与父元素宽度一样宽。</u>

```html
.box img {
    width: 100%;
}
```

3.对于评价的字数不同，将p标签转换为行内块元素进设置高度，可使得布局更美观。

4.**同一行上有两种不同的样式文字，分别对两类文字设置标签，如h4、em标签，即使文字本身没有大字、斜体等要求，也可以在类选择器中将文字样式变正常，如设置h4的粗细、em的不倾斜。**

全部代码

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>综合案例2</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #ebebeb;
        }

        a {
            color: #333;
            text-decoration: none;
        }

        .box {
            width: 298px;
            height: 415px;
            background-color: #fff;
            margin: 100px auto;
        }

        .box img {
            width: 100%;
        }

        .review {
            height: 50px;
            font-size: 14px;
            color: #333333;
            /* 因为这个段落没有width属性，所以padding不会撑开盒子的宽度 */
            padding: 0 28px;
        }

        .appraise {
            font-size: 12px;
            color: #b0b0b0;
            margin-top: 10px;
            padding: 0 28px;
        }

        .info {
            font-size: 12px;
            margin-top: 10px;
            padding: 0 28px;
        }

        .info h4 {
            display: inline-block;
            font-weight: 400;
        }

        .info span {
            color: #ff5b00;
        }

        .info em {
            font-style: normal;
            color: #ebe4e0;
            margin: 0 6px 0 15px;

        }
    </style>
</head>

<body>
    <div class="box">
        <img src="images/pic1.jpg" alt="">
        <p class="review">快递牛,整体不错蓝牙可以秒连，值得入手</p>
        <div class="appraise">来自于117384231的评价</div>
        <div class="info">
            <h4><a href="#">小米真无线蓝牙耳机Air 2...</a>
                <em>|</em>
            </h4>
            <span> 69.9元</span>
        </div>
    </div>
</body>
```



#### 案例2实现：

![image-20210112195738166](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210112195738166.png)

与案例一类似

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>综合案例1</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #ebebeb;
        }

        .box {
            width: 236px;
            height: 317px;
            background-color: #fff;
            /* 让块级的盒子水平居中对齐 */
            margin: 100px auto;
        }

        .box img {
            width: 100%;
        }

        .title {
            font-size: 14px;
            text-align: center;
            color: #333333;
        }

        .info {
            font-size: 12px;
            text-align: center;
            color: #b0b0b0;
            margin-top: 5px;
        }

        .box p {
            font-size: 14px;
            text-align: center;
            color: #ff5b00;
            margin-top: 10px;
        }

        .box span {
            font-size: 14px;
            text-decoration: line-through;
            text-align: center;
            color: #b0b0b0;

        }
    </style>
</head>

<body>
    <div class="box">
        <img src="images/pic.jpg" alt="">
        <div class="title">小米智能门锁 推拉式</div>
        <div class="info">一步推拉，高端智能门锁</div>
        <p>1599元 &nbsp; <span>1699元<span></p>

</body>
```

![image-20210112195850285](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210112195850285.png)

#### **pink老师总结**

**1.布局为啥用不同盒子，我只想用div ?**
	标签都是有语义的,合理的地方用合理的标签。比如<u>产品标题就用h,大量文字段落就用p</u>
**2.为啥用辣么多类名?**
	类名就是给每个盒子起了一个名字，可以更好的找到这个盒子， 选取盒子更容易,<u>后期维护也方便</u>。
**3.到底用margin还是padding ?**
	大部分情况两个可以混用，两者各有优缺点。但是根据实际情况,总是有更简单的方法实现。
**4.自己做没有思路?**
	布局有很多种实现方式,同学们可以开始先模仿老师的写法,然后再做出自己的风格。
	最后同学们一定多运用辅助工具比如屏幕画笔,ps等等



#### 案例3：快报模块

实现：

![image-20210115110831487](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210115110831487.png)

划分模块：

![image-20210115111115883](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210115111115883.png)

使用PS切片获得：box:248×163（不量边框），颜色#ccc

h3高度32px，字体大小14px，左内边距15px

ul中文字大小12px,颜色#666,每个li高度23px，左内边距20px，上内边距7px

步骤：

step1:消除内外边距，设置box

```html
<style>
        * {
            margin: 0;
            padding: 0;
        }
        .box {
            width: 248px;
            height: 163px;
            border: 1px solid #ccc;
            margin: 100px auto;
        }
</style>        
```

step2:设置h3

```html
.box h3 {
            height: 32px;
            font-size: 14px;
            font-weight: 400;
            line-height: 32px;
            color: #ccc;
            border-bottom: 1px dotted #ccc;
            padding-left: 15px;
        }
```

step3:设置ul

```html
ul {
            list-style: none;
        }
.box ul {
            padding-left: 20px;
            padding-top: 7px;
        }

        .box ul li {
            height: 23px;
            line-height: 23px;
        }

        .box ul li a {
            font-size: 12px;
            color: #666;
            text-decoration: none;
        }

        .box ul li a:hover {
            text-decoration: underline;
        }
```



**注意：**

1.h3设置左边距时应使用padding，而不是margin，否则底下的虚线会随着移动(如下图)，注意内外边距的使用场景。且此时不会撑开盒子，因为没有定义h3的宽度

![image-20210303192932675](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303192932675.png)

2.**新知识点：去掉li前面的项目符号（小原点）**

语法：

```html
list-style: none;
```

注意：该语句通常写在li标签选择器下。

3.在设置列表内的左边距时，可使用margin，也可使用padding，也可对ul进行设置，也可对每个li设置。

4.在设置列表内的上边距时，可使用margin，也可使用padding，但只可对ul进行设置，不能每个li设置，否则效果不符预期。

代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新闻快报模块</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .box {
            width: 248px;
            height: 163px;
            border: 1px solid #ccc;
            margin: 100px auto;
        }

        .box h3 {
            height: 32px;
            font-size: 14px;
            font-weight: 400;
            line-height: 32px;
            color: #ccc;
            border-bottom: 1px dotted #ccc;
            padding-left: 15px;
        }

        .box ul {
            padding-left: 20px;
            padding-top: 7px;
        }

        .box ul li {
            height: 23px;
            line-height: 23px;
        }

        .box ul li a {
            font-size: 12px;
            color: #666;
            text-decoration: none;
        }

        .box ul li a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="box">
        <h3>品优购快报</h3>
        <ul>
            <li><a href="#">[特惠]爆款耳机5折秒!</a></li>
            <li><a href="#">[特惠]母亲节，健康好礼低至5折!</a></li>
            <li><a href="#">[特惠]爆款耳机5折秒!</a></li>
            <li><a href="#">[特惠] 9. 9元洗100张照片!</a></li>
            <li><a href="#">[特惠]长虹智能空调立省1000</a></li>
        </ul>
    </div>
</body>

</html>
```

实现结果：

![image-20210303195934366](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303195934366.png)

### <u>16.圆角边框</u>

在CSS3中,新增了**圆角边框**样式,这样我们的盒子就可以变圆角了。

如：

![image-20210303200311566](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303200311566.png)

**border-radius**属性用于设置元素的外边框圆角。

语法：

```
border-radius: length;
```

**radius半径（圆的半径）原理**：（椭）圆与边框的交集形成圆角效果，如图

![image-20210303200853763](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303200853763.png)

so,length数值越大，弧度越大

**注意**：

1.参数值可以是数值，也可以是百分比。

**2**.如果是**正方形**, 想要设为一个圆,把数值修改为**高度或者宽度的一半**即可,或者直接写为50%（50%就是**高度和宽度的一半**）。

**3**.如果是个**矩形**，设置为**高度的一半**就可以做。

4.该属性是一个简写属性。可以跟四个值，分别代表左上角、右上角、右下角、左下角（顺时针）。若只设置了两个值，意思是左上角和右下角一对角是一个length，右上角和左下角一对角是一个length。

5.可以分开写: border-top-left-radius（左上角）， border-top-right-radius（右上角）， border-bottom-right-radus（右下角） 和border-bottom-left-radius(左下角)

案例代码1：

```html
 <style>
        div {
            width: 400px;
            height: 200px;
            background-color: pink;
            border-radius: 10px;
        }
    </style>
```

实现结果：

![image-20210303200717297](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303200717297.png)

案例代码2：

```
.yuanxing {
            width: 200px;
            height: 200px;
            background-color: pink;
            /* border-radius: 100px; */
            /* 50%就是高度和宽度的一半，等价与100px */
            border-radius: 50%;
        }
```

![image-20210303202533765](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303202533765.png)

```
.juxing {
            width: 200px;
            height: 100px;
            background-color: pink;
            /* 圆角矩形设置为高度的一半 */
            border-radius: 50px;
        }
```

![image-20210303202559577](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303202559577.png)

```
.radius {
            width: 200px;
            height: 200px;
            background-color: pink;
            border-radius: 10px 20px 30px 40px;
        }
```

![image-20210303202637973](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303202637973.png)

```
.radius {
            width: 200px;
            height: 200px;
            background-color: pink;
            border-radius: 10px 40px;
        }
```

![image-20210303202700315](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303202700315.png)

### <u>17.盒子阴影</u>

CSS3中新增了盒子阴影，我们可以使用**box shadow**属性为盒子添加阴影，新人福利，如![image-20210303203111894](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303203111894.png)

语法：

```
box-shadow: h-shadow v-shadow blur spread color inset
```

| 值       | 描述                                                      |
| -------- | --------------------------------------------------------- |
| h-shodow | 必需。水平阴影的位置。允许负值。                          |
| V-shadow | 必需。垂直阴影的位置。允许负值。                          |
| blur     | 可选。模糊距离。数值越大越模糊，0时为实的                 |
| spread   | 可选。阴影的尺寸（大小）。                                |
| color    | 可选。阴影的颜色。请看css颜色值。使用rgba透明度显得更真实 |
| inset    | 可选。将外部阴影(outset)改为内部阴影。                    |

**注意:**
**1.默认的是外阴影(outset)。但是不可以写这个单词，否则导致阴影无效**.

**2.盒子阴影不占用空间。**不会影响其他盒子排列。

3.**div也可有:hover伪链接**（span等也都有），从而实现鼠标经过盒子时，盒子出现阴影。

4.具体什么值才能使影子更真实，需要自己测或者参照他人模板。

案例代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>盒子阴影</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin: 100px auto;
        }

        /* 原先盒子没有影子，当鼠标经过时添加阴影 */
        div:hover {
            box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, .3);

        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

实现结果：

![image-20210303204414695](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303204414695.png)

### *18.文字阴影*

在CSS3中，我们可以使用**text-shadow**属性将阴影应用于文本。

语法：

```
text-shadow:h-shadow v-shadow blur color;
```

| 值       | 描述                              |
| -------- | --------------------------------- |
| h-shadow | 必需。水平阴影的位置。允许负值。  |
| v-shadow | 必需。垂直阴影的位置。允许负值。  |
| blur     | 可选。模糊的距离。                |
| color    | 可选。阴影的颜色。参阅CSS颜色值。 |

案例代码:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>文字阴影</title>
    <style>
        div {
            font-size: 50px;
            color: orange;
            font-weight: 700;
            text-shadow: 5px 5px 6px rgba(0, 0, .3);
        }
    </style>
</head>

<body>
    <div>你是阴影，我是云影</div>
</body>

</html>
```

实现结果：

![image-20210303214310567](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303214310567.png)

### 19CSS浮动

#### 19.1传统页面布局的三种方式

网页布局的本质——用CSS来摆放盒子，把盒子摆放到相应位置。

CSS提供了三种传统布局方式(简单说就是盒子如何进行排列顺序) :
●普通流(标准流)
●浮动
●定位

#### 19.2标准流（普通流/文档流）

**所谓的标准流就是标签按照规定好默认方式排列**。

1.块级元素会独占一行，从上向下顺序排列。

●常用元素:div. hr. p. h1~h6. ul. ol. d. form. table

2.行内元素会按照顺序，从左到右顺序排列,碰到父元素边缘则自动换行。

●常用元素:span. a. i. em等

以上都是标准流布局,我们前面学习的就是标准流，**标准流是最基本的布局方式**。

**注意：实际开发中，一个页面基本都包含了这三种布局方式。（后面移动端学习新的布局方式）**

#### 19.3为什么需要浮动？

提问:我们用标准流能很方便的实现如下效果吗?
1.如何让多个块级盒子(div)水平排列成一行?

![image-20210303215321943](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303215321943.png)

比较难,虽然转换为行内块元素可以实现-行显示,但是他们之间会有大的空白缝隙.很难控制。

![image-20210303215345880](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303215345880.png)

2.如何实现两个盒子的左右对齐？

![image-20210303215413565](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303215413565.png)

总结:有很多的布局效果,标准流没有办法完成，此时就可以利用浮动完成布局。因为<u>浮动可以改变元素标签默认的排列方式</u>。

**浮动最典型的应用:可以让多个块级元素一行内排列显示**

网页布局第一准则：**多个块级元素纵向排列找标准流，多个块级元素横向排列找浮动。**

案例代码：

````html
 <style>
        div {
            float: left;
            width: 100px;
            height: 150px;
            background-color: pink;
            /* display: inline-block; */
        }
    </style>
````

实现结果：

![image-20210303215845607](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210303215845607.png)

#### 19.4什么是浮动？

**float**属性用于创建浮动框，将其移动到一边，**直到左边缘或右边缘触及包含块或另一个浮动框的边缘。**

语法：

```
选择器 {float : 属性值;}
```

| 属性值 | 描述                 |
| ------ | -------------------- |
| none   | 元素不浮动（默认值） |
| left   | 元素向左浮动         |
| right  | 元素向右浮动         |

案例代码1： 都是左浮动。

```html
<style>
        .right,
        .left {
            width: 100px;
            height: 100px;
            background-color: pink;
            float: left;
        }
    </style>
```

实现结果：

![image-20210304091401731](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304091401731.png)

第二个div左浮动到第一个浮动框的边缘，因此两个盒子贴在一起

案例代码2：一个左浮动，一个右浮动

```html
<style>
        .right,
        .left {
            width: 100px;
            height: 100px;
            background-color: pink;
            float: left;
        }

        .right {
            float: right;
        }
    </style>
```

实现结果：

![image-20210304091606977](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304091606977.png)

#### <u>19.5浮动特性</u>

加了浮动之后的元素，会具有很多特性，需要我们掌握

**1.浮动元素会脱离标准流（脱标）**

2.浮动元素会**一行内显示并且元素顶部对齐**

3.浮动元素会具有行内块元素的特性

##### 19.5.1脱标

设置了浮动（float）的元素**最重要特性**：

1.脱离标准普通流的控制（浮）移动到指定位置（动），（俗称**脱标**）

2.浮动的盒子**不再保留原先的位置**。

![image-20210304092619219](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304092619219.png)

如上图例子，穿粉色衣服的pink老师飞起来（脱离标准流），之前排队的位置也不再保留，后面的人替上。

![image-20210304092935331](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304092935331.png)

案例代码：

```html
不设置浮动
<style>
        .fudong {
            width: 100px;
            height: 100px;
            background-color: pink;
        }

        .biaozhun {
            width: 200px;
            height: 200px;
            background-color: blue;
        }
    </style>
```

实现结果：

![image-20210304093241289](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304093241289.png)

```html
设置浮动
<style>
        .fudong {
            width: 100px;
            height: 100px;
            background-color: pink;
            float: left;
        }

        .biaozhun {
            width: 200px;
            height: 200px;
            background-color: blue;
        }
    </style>
```

实现结果：

![image-20210304093315035](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304093315035.png)

说明：两个盒子已不在一个层次上，从而产生重叠效果

##### 19.5.2浮动特性——一行显示

如果多个盒子都设置了浮动，则它们会按照属性值一行内显示并且元素顶部对齐。

案例代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>浮动特性——一行显示</title>
    <style>
        div {
            float: left;
            width: 100px;
            height: 100px;
        }

        .one {
            background-color: blue;
        }

        .two {
            background-color: pink;
            height: 200px;
        }

        .three {
            background-color: red;
        }
    </style>
</head>

<body>
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
</body>

</html>
```

实现结果：

![image-20210304095752999](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304095752999.png)

说明：

1.多个的盒子大小可以不同，但设置浮动后，会按照属性值一行内显示**并且元素顶部对齐。**如第二个盒子。

2.**浮动的元素是互相贴靠在一起的(不会有缝隙) , 如果父级宽度装不下这些浮动的盒子，多出的盒子会另起一行对齐**。如下图缩小浏览器大小实现。

![image-20210304100037614](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304100037614.png)

##### 19.5.3浮动元素具有行内块元素特性

任何元素都可以浮动，不管原先是什么模式的元素，添加浮动之后具有**行内块元素**相似的特性。

**注意：**

1.如果块级盒子没有设置宽度，默认宽度和父级一样宽，但是添加浮动后，它的大小根据内容来决定。
2.浮动的盒子中间是没有缝隙的,是紧挨着一起的。
3.行内元素同理

案例代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>浮动特性——具有行内块元素特性</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        /* 任何元素都可以浮动，不管原先是什么模式的元素，添加浮动之后具有行内块元素相似的特性。 */
        span,
        div {
            float: left;
            height: 100px;
            width: 100px;
            background-color: pink;
        }

        /* 如果行内元素有了浮动，则不需要转换为块级/行内块元素就可以直接添加高度和宽度 */
        p {
            height: 200px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <span>1</span>
    <span>2</span>
    <div>3</div>
    <p></p>
</body>

</html>
```

实现结果：

![image-20210304101248589](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304101248589.png)

说明：块级元素p未指定宽度且未浮动，默认宽度和父级一样。

```
 p {
            float: right;
            height: 200px;
            background-color: purple;
        }
————————————————————————————————————
<p>ppp</p>
```

实现结果：

![image-20210304101421060](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304101421060.png)

说明：块级元素p未指定宽度，但设置浮动，宽度由其内容决定“ppp”

##### 19.5.4浮动元素经常和标准流的父级搭配使用

为了约束浮动元素位置我们网页布局一般采取的策略是:
网页布局第一准则：**先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置符合**

![image-20210304102524682](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304102524682.png)

1.小米布局案例1——导航栏

实现布局：

![image-20210304102940873](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304102940873.png)

已知：大盒子（父级元素）1200x460，左侧盒子宽230px，右侧盒子970px

案例代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小米导航栏布局</title>
    <style>
        .box {
            width: 1200px;
            height: 460px;
            background-color: purple;
            margin: 0 auto;
        }

        .left {
            float: left;
            width: 230px;
            height: 460px;
            background-color: blue;
        }

        .right {
            float: left;
            width: 970px;
            height: 460px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="left">左</div>
        <div class="right">右</div>
    </div>
</body>

</html>
```

实现结果：

![image-20210304103619612](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304103619612.png)

2.小米布局案例2

实现：

![image-20210304103758205](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304103758205.png)

已知box尺寸1226x285，小盒子宽度296px，小距离14px

案例代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>浮动案例——小米布局案例</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            width: 1226px;
            height: 285px;
            background-color: pink;
            margin: 0 auto;
        }

        .box li {
            list-style: none;
            width: 296px;
            height: 285px;
            background-color: purple;
            margin-right: 14px;
            float: left;
        }
    </style>
</head>

<body>
    <ul class="box">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</body>

</html>
```

实现结果：

![image-20210304104547761](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304104547761.png)

说明：与预期不符，原因：加上最后一个盒子的右边距超过父级元素的宽度，从而另起一行，所以需要删去最后一个盒子的右边距，置为0。

修改代码：

```html
/* 这里必须写.box .last，注意权重的问题，20 */
        .box .last {
            margin-right: 0;
        }
_______________
<li class="last">4</li>
```

实现结果：

![image-20210304104607015](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304104607015.png)

说明：与预期一致，同时需要注意CSS表现时不能通过.last选择器实现，权重为10低于.box li权重11，从而失败。



**小结：**

1.浮动布局不一定要靠div盒子实现，也可通过ul大盒子、li多个小盒子实现，注意去除小圆点。

2.注意最后一个盒子无需设置右边距，否则会超过父元素的宽度，从而另起一行。同时注意权重问题。

3.小米布局案例3

实现：

![image-20210304105919999](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304105919999.png)

已知box尺寸1226x615,左盒子宽度234px，右盒子宽度992px，每个小盒子尺寸234x300，小盒子左右/上下间距14px

**网页布局第二准则:先设置盒子大小,之后设置盒子的位置.**

step1布局box、left、right

```html
.box {
            width: 1226px;
            height: 625px;
            background-color: pink;
            margin: 0 auto;
        }

        .left {
            width: 234px;
            height: 625px;
            background-color: purple;
            float: left;
        }

        .right {
            width: 992px;
            height: 625px;
            background-color: royalblue;
            float: left;
        }
```

![image-20210304111618382](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304111618382.png)

**注意**：需要进行通配符选择清除内外边距，否则会如上图，导致超过父级宽度，另起一行。

step2:布局left里8个小盒子

```
.right>li {
            width: 234px;
            height: 300px;
            background-color: pink;
            list-style: none;
            float: left;
            margin-left: 14px;
            margin-bottom: 14px;
        }
```

**注意**：**小细节：使用子代选择器**更稳妥

实现结果：

![image-20210304113245524](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304113245524.png)

小结：

1.right盒子可用div、ul，但注意使用通配符选择器清除内外边距。

2.小盒子左右间距使用margin-left，无需另外考虑最后一个盒子。

3.right中修饰小盒子时，注意使用**子代选择器**

**疑惑？**

盒子宽度+下边距=300x2+14x2=628>615，且使用的是margin外边距，应该不会撑大盒子，5-8盒子的下边距应该超过box部分应显无色，如下图。

![image-20210304113738809](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304113738809.png)

但本人制作出来的5-8的margin图上貌似有点多（大于应有的1px），为什么？

### 20.常见的网页布局

#### 20.1常见网页布局

![image-20210304114122188](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304114122188.png)

![image-20210304114200495](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304114200495.png)

说明：第三种布局中的top、footer与浏览器同宽（通栏），<u>即无需指定宽度</u>

尺寸说明：top高50px,banner宽980高150，box宽980高300,里面小盒子宽237高300，中间间隔10px，footer高200，上下间隔10px

案例代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>常见网页布局</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .top {
            height: 50px;
            background-color: gray;
        }

        .banner {
            width: 980px;
            height: 150px;
            background-color: gray;
            margin: 10px auto;

        }

        .box {
            width: 980px;
            height: 300px;
            background-color: pink;
            margin: 0 auto;
        }

        .box li {
            width: 237px;
            height: 300px;
            background-color: purple;
            margin-right: 10px;
            float: left;
        }

        .box .last {
            margin-right: 0;
        }

        /* 只要是通栏的盒子（和浏览器一样宽），无需指定宽度 */
        .footer {
            height: 200px;
            background-color: gray;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <div class="top">top</div>
    <div class="banner">banner</div>
    <div class="box">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li class="last">4</li>
        </ul>
    </div>
    <div class="footer">footer</div>
</body>

</html>
```

实现结果：

![image-20210304145730482](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304145730482.png)

#### 20.2浮动布局注意点

1.**浮动和标准流的父盒子搭配**。
**先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置**

2.**一个元素浮动了,理论上其余的兄弟元素也要浮动**。
一个盒子里面有多个子盒子，如果其中一个盒子浮动了，那么其他兄弟也应该浮动。以防止引起问题。
**浮动的盒子只会影响<u>浮动盒子后面的标准流</u>，不会影响前面的标准流**

案例：有一个大盒子box，三个子盒子——一毛二毛三毛

初始情况，三个都不浮动

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>浮动布局注意点</title>
    <style>
        .box {
            width: 300px;
            height: 200px;
            background-color: purple;
        }

        .ymao {
            width: 100px;
            height: 100px;
            background-color: pink;
        }

        .emao {
            width: 150px;
            height: 20px;
            background-color: skyblue;
        }

        .smao {
            width: 70px;
            height: 70px;
            background-color: orange;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="ymao">一毛</div>
        <div class="emao">二毛</div>
        <div class="smao">三毛</div>

    </div>
</body>

</html>
```

实现结果：

![image-20210304150909672](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304150909672.png)

若一毛、三毛不浮动，二毛浮动

```
.emao {
            float: left;
            width: 150px;
            height: 20px;
            background-color: skyblue;
        }
```

实现结果：

![image-20210304151039197](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304151039197.png)

说明：符合原则：**浮动的盒子只会影响<u>浮动盒子后面的标准流</u>（三毛上移一行），不会影响前面的标准流（一毛不动）**

一毛不动，二毛上浮，三毛上移。（举例，一毛二毛三毛依次排队，二毛上飞，三毛前进走入二毛空出来的位置，二毛虽浮动了，但仍不能插队排到一毛上方）

若一毛、三毛浮动，二毛不浮

![image-20210304152149414](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304152149414.png)

说明：一毛上浮，二毛上移一行，一毛盖住二毛（一毛浮动影响后面的二毛）；三毛上浮（和一毛一个层次）上移一行，排到二毛后面，一毛的右边（三毛位置有点迷糊？）

**总之**：给所有孩子设置浮动，就会在一行上显示；若出现乱七八槽的覆盖现象，检查哪个孩子没有设置浮动。（一浮全浮）

### 21清除浮动

#### 21.1为什么需要清除浮动

前面浮动元素有一个标准流的父元素，他们有一个共同特点——都有高度。

**思考题：**

父级元素都必须要有高度吗？

如：淘宝购物浏览的商品页面没有高度（商品有很多），新闻页面的根据文字字数不同高度不同（文字不同）



理想中的状态，让子盒子撑开父亲，有多少孩子，父盒子就有多高。

不给父盒子高度会产生问题...



案例（*）代码：

1.子盒子一毛二毛不浮动

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>为什么要清除浮动</title>
    <style>
        .box {
            width: 400px;
            border: 1px solid red;
        }

        .ymao {
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .emao {
            width: 100px;
            height: 200px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="ymao">一毛</div>
        <div class="emao">二毛</div>
    </div>
</body>

</html>
```

实现结果：

![image-20210304154616258](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304154616258.png)

2.一毛二毛设置浮动

实现结果：

![image-20210304154654672](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304154654672.png)

我们可以发现，虽然一毛二毛在一行上显示，但父元素box高度变为0

3.若在2之后在加上标准流footer

实现结果：

![image-20210304154858459](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304154858459.png)

我们可以发现，结果与预期不符，影响后面标准流盒子紧跟上。

**小结：**

由于父级盒子很多情况下，不方便给高度。但是子盒子浮动又不占有位置，最后父级盒子高度为0时，就会影响下面的标准流盒子的排版。

#### 21.2清除浮动的本质

-清除浮动的本质是清除浮动元素造成的影响。

-如果父盒子本身有高度，则不需要清除浮动。

-**清除浮动之后，父级就会根据浮动的子盒子自动检测高度。父级有了高度。就不会影响下面的标准流了**

语法：

```
选择器{clear: 属性值}
```

| 属性值 | 描述                                       |
| ------ | ------------------------------------------ |
| left   | 不允许左侧有浮动元素（清除左侧浮动的影响） |
| right  | 不允许右侧有浮动元素（清除右侧浮动的影响） |
| both   | 同时清除左右两侧浮动的影响                 |

实际工作中，几乎只用**clear：both;**

**清除浮动的策略：闭合浮动。**只让浮动在父盒子内部影响，不影响父盒子外面的其他盒子（关起门来打孩子）

#### 21.3清除浮动方法

```
1.额外标签法，也称为隔墙法，是w3c推荐的做法
2.父级添加overflow属性
3.父级添加after伪属性
4.父级添加双伪属性
```

第1种会遇见，但不常用。后3种更常用。

##### 21.3.1额外标签法

额外标签法，也称为隔墙法，是w3c推荐的做法

**额外标签法**会在<u>浮动元素末尾</u>添加一个空的标签，如<div&gt;</div&gt;，再在style里使用选择器，使用clear:both

优点：通俗易懂，书写方便

缺点：添加许多无意义的标签，结构化差

**注意：要求这个新的空标签必须是块级元素。**

案例代码：（在案例（*）即”为什么要清除浮动“案例中改进）

```html
.clear {
            clear: both;
        }
————————————————————
<div class="box">
        <div class="ymao">一毛</div>
        <div class="emao">二毛</div>
        <div class="clear"></div>
    </div>
    <div class="footer"></div>
```

实现结果：

![image-20210304164236937](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304164236937.png)

注意：如果将新增的盒子改为行内元素，如

```
<span class="clear"></span>
```

就会：

![image-20210304164436086](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304164436086.png)

##### 21.3.2父级添加overflow

可以给父级添加**overflow**属性，将其属性值设置为**hidden、auto 或scroll**，（外边距合并中也用到过该语句）

子不教，父之过，注意是<u>**给父元素添加代码**</u>。

优点：代码简洁

缺点：无法显示溢出的部分

案例代码：（在案例（*）即”为什么要清除浮动“案例中改进）

```
.box {
            overflow: hidden;
            width: 400px;
            border: 1px solid red;
        }
```

实现结果：

![image-20210304185613921](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304185613921.png)

##### 21.3.3：after伪元素法

：after方式是额外标签法的升级版，也是给父元素添加

```
.clearfix:after {
            content: "";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }

        .clearfix {
            /* IE 6/7专属 */
            *zoom: 1
        }
```

注：

1.目前不深究代码具体内容，后续学了伪元素再学。

2.简单理解：和额外标签法思路一样，在子盒子最后面增加一个盒子（隔墙），并设置为块元素（增加的盒子只能为块级元素，不能为行内元素），再进行清除浮动。

3.会复制粘贴调用即可。

4.<u>实际工作中会常用，需会</u>。（不能因为代码多而放弃该方法）

优点：没有增加标签，结构更简单

缺点：照顾低版本浏览器

代表网站：百度、淘宝、网易

案例代码：（在案例（*）即”为什么要清除浮动“案例中改进）

```html
.clearfix:after {
            content: "";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }

        .clearfix {
            /* IE 6/7专属 */
            *zoom: 1;
        }
________________________
<div class="box clearfix">
        <div class="ymao">一毛</div>
        <div class="emao">二毛</div>
    </div>
    <div class="footer"></div>
```

实现结果：

![image-20210304191119164](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304191119164.png)

##### 21.3.4双伪元素清除浮动

也是给父元素添加

```
.clearfix:before,
.clearfix:after {
            content: "";
            display: table;
}

.clearfix:after {
            clear: both;
}

.clearfix {
            /* IE 6/7专属 */
            *zoom: 1;
        }
```

注：

1.目前不深究代码具体内容，后续学了伪元素再学。

2.简单理解：和额外标签法思路一样，在子盒子的<u>最前面和最后面</u>增加一个盒子（双面隔墙），并设置为块元素（增加的盒子只能为块级元素，不能为行内元素），再进行清除浮动。

3.会复制粘贴调用即可。

4.<u>实际工作中会常用，需会</u>。

优点：代码更简洁

缺点：照顾低版本浏览器

代表网站：小米、腾讯

案例代码：（在案例（*）即”为什么要清除浮动“案例中改进）

```html
.clearfix:before,
        .clearfix:after {
            content: "";
            display: table;
        }

        .clearfix:after {
            clear: both;
        }

        .clearfix {
            /* IE 6/7专属 */
            *zoom: 1;
        }
___________
<div class="box clearfix">
```

实现结果：

![image-20210304193437017](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304193437017.png)

#### 21.4清除浮动总结

为什么要清除浮动？

1.父级没有设置高度

2.子盒子浮动了

3.影响后面的布局

| 清除浮动的方式       | 优点               | 缺点                               |
| -------------------- | ------------------ | ---------------------------------- |
| 额外标签法（隔墙法） | 通俗易懂，书写方便 | 添加许多无意义的标签，结构化较差   |
| 父级overflow:hidden  | 书写简单           | 溢出隐藏                           |
| 父级after伪元素      | 结构语义化简单     | 由于IE6-7不支持：after，兼容性问题 |
| 父级双伪元素         | 结构语义化简单     | 由于IE6-7不支持：after，兼容性问题 |

### 22.PS切图

#### 22.1常见的图片格式

4.1常见的图片格式
1. jpg图像格式: JPEG ( JPG )对色彩的信息保留较好,高清,颜色较多,我们**产品类的图片经常用jpg格式的**。
2. gif图像格式 : GIF格式最多只能储存256色,所以通常用来显示简单图形及字体,是可以保存透明背景和动画效果实际，经常用于一些**图片小动画效果**。
3. png图像格式是一种新兴的网络图形格式，结合了GIF和JPEG的优点。具有存储形式丰富的特点，能够保持透明背景，如果想要切成**背景透明**的图片，请选择png格式。
4. PSD图像格式PSD格式是Photoshop的专用格式，里面可以存放图像、通道、遮罩等多种设计稿。**对我们前端人员来说最大的优点，我们可以直接从上面复制文字、获得图片，还可以测量大小和距离。**

#### 22.2切图方式

PS有很多的切图方式：**图层切图**、切片切图、PS插件切图等。

##### 22.2.1图层切图

最简单的切图方式：选中所需图片->右击图层->快速导出为PNG（可以通过图层的眼睛确认是否为需要的图）

![image-20210304202731863](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304202731863.png)

很多情况下，我们需要合并图层（图片与文字）再导出：

1.选中需要的图层：图层菜单->合并图层（ctrl+e）

2.右击图层->快速导出为PNG

注：建议先复制一份后导出，以防反悔。

##### 22.2.2切片切图

**step1:利用切片工具选中图片**

鼠标长按，再选择切片工具

![image-20210304205032634](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304205032634.png)

**step2：导出选中的图片**

文件菜单->导出-><u>存储为web设备所用格式</u>->选择我们要的图片格式->存储

注：

<u>1</u>.前3小步可用快捷键ctrl+shift+alt+s完成

2.图片格式一般选JPEG，有透明背景的选PNG

<u>3</u>.存储时，下方的切片选择“选中的切片”

4.若要保存有透明背景的图片，先勾掉背景图层前的眼睛，再导出图片

5.![image-20210304213600298](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304213600298.png)切片选择工具可以上下左右移动切片、改变切片大小，可以按delete键删除切片



![image-20210304205937584](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304205937584.png)

![image-20210304205808639](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210304205808639.png)

##### 22.2.3插件切图

**Cutterman**是一款运行在Photoshop中的插件,能够自动将你需要的图层进行输出，以替代传统的手工"导出web所用格式"以及使用切片工具进行挨个切图的繁琐流程。

**注意：该插件只能用于完整版本，不能用于绿色版本。**

分辨完整版与绿色版方法：可以在窗口->拓展功能，若拓展功能可以使用，则为完整版；若拓展功能为灰色，不能使用，则为绿色版。

在官网安装插件，安装完毕后重启PS，窗口->拓展功能下即可发现cutterman插件。

**cutterman的简单使用**

1.打开该插件：

![image-20210305091213931](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305091213931.png)

2.去注册一个账号（过程简单并免费）

3.注册完毕后登录

![image-20210305091608701](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305091608701.png)

4.仅勾选web，并点击下方的三角可选择图片存储方式

![image-20210305091736425](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305091736425.png)

5.点击输出选择图片保存的位置

![image-20210305091802434](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305091802434.png)

6.选中所要导出图片的图层

7.点击导出选中图层即可

![image-20210305091939981](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305091939981.png)

**合并导出图层的方法：**

1.选中所要合并导出的图层，

2.勾选![image-20210305092835411](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305092835411.png)

3.点击![image-20210305091939981](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305091939981.png)即可

![image-20210305093043176](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305093043176.png)

还可以选中图层后，使用选区工具，选区后一键导出选中的图片

### 23.学成在线案例

该网页是典型的企业网站，可借此复习之前知识，并感知企业级网站布局流程。

实现效果：

![image-20210305103215681](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305103215681.png)

#### 23.1准备素材和工具

1. 学成在线PSD源文件。
2. 开发工具= PS(切图) / cutterman插件+ vscode (代码) + chrome (测试)。

#### 23.2页面布局思路

我们本次采取结构与样式相分离思想:
1.创建study目录文件夹(用于存放我们这个页面的相关内容)。

2.用vscode打开这个目录文件夹。

3.study目录内新建images文件夹,用于保存图片。

4.新建<u>首页文件index.html</u> (以后我们的网站首页统规定为index.html)。

5.新建style.css样式文件。我们本次采用外链样式表。

6.将样式引入到我们的HTML页面文件中。



为了提高网页制作的效率,布局时通常有以下的**整体思路**:
1.必须确定页面的版心(可视区，如下图) , 我们测量可得知。

2.分析页面中的行模块，以及每个行模块中的列模块（先弄第一行模块，再弄第一行内的列模块，再弄第二行，依此类推）。页面布局第一准则。

3.一行中的列模块经常浮动布局,先确定每个列的大小，之后确定列的位置。页面布局第二准则。

4.制作HTML结构。我们还是遵循,先有结构,后有样式的原则。结构永远最重要

5.所以，先理清楚**布局结构**，再写代码尤为重要这需要我们多写多积累

![image-20210305194831895](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305194831895.png)



红色为行模块，蓝色为列模块。

![image-20210305195235551](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305195235551.png)

#### <u>23.3CSS属性书写顺序</u>

建议遵循以下顺序:
1.布局定位属性: display / position/ float/ clear / visibility/ overflow (建议display第-个写,毕竟关系到模式)
2.自身属性: width/ height/ margin/ padding / border / background
3.文本属性: color/ font / text- decoration/ text- align/ vertical- align/ white- space / break-word
4.其他属性(CSS3 ) : content/ cursor / border-radius/ box-shadow/ text- shadow/ background:linear-gradient...

**布局、本身、字体、其他**

#### 23.4具体步骤

**确定版心**

这个页面的版心是1200像素,每个版心都要水平居中对齐,可以定义版心为公共类:

```
.w {
    width: 1200px;
    margin: 0 auto;
}
```

**头部划分**：

![image-20210305195648969](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305195648969.png)

-1号是版心盒子header 1200* 42的盒子水平居中对齐，上下给一个margin值30就可以

-版心盒子里面包含2号盒子logo

-版心盒子里面包含3号盒子nav导航栏

-版心盒子里面包含4号盒子search搜索框

-版心盒子里面包含5号盒子user个人信息

注意:要求里面的4个盒子必须都是浮动

1.header区域

```html
.header {
    height: 42px;
    background-color: pink;
    /* 注意改地方会层叠w里面的margin，上下需要设置，所以需要左右也要设置下 */
    margin: 30px auto;
}
——————————————————
<div class="header w">
版心
</div>
```

**注意：层叠性**

实现结果:

![image-20210305195608171](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305195608171.png)

2.logo区域

logo尺寸198x42

```html
.logo {
    height: 42px;
    width: 198px;
    background-color: purple;
}
——————————————————————————
		<!-- logo部分 -->
        <div class="logo">
            <img src="img/logo.png" alt="">
        </div>
```

实现结果:

![image-20210305200213322](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305200213322.png)

3.导航栏nav区域

尺寸说明：nav与logo间隔60px，文字之间左右间隔15px

**导航栏注意点:**

**实际开发中，我们不会直接用链接a而是用li包含链接(li+ a)的做法。ul>li>a+tab**

1.li+a语义更清晰，一看这就是有条理的列表型内容。

2.如果直接用a ,搜索引擎容易辨别为有堆砌关键字嫌疑(故意堆砌关键字容易被搜索引擎有降权的风险) ，从而影响网站排名。

**注意：**

1.一浮全浮，<u>给nav加浮动</u>同时也要给logo加浮动。

2.让导航栏<u>一行显示，给li加浮动</u>（而不是a，a本身就是行内元素就是一行显示的，且是li影响盒子排列），因为li是块级元素，需要一行显示。

3.这个nav导航栏可以不给宽度，将来可以继续添加其余文字。

4.因为导航栏里面文字不一样多，所以最好给链接a左右padding撑开盒子，而不是指定宽度。

5.因为要修改a的高度，因此需要将a转换为块级元素，同时还能增大点击范围（比在li下修改高度好）

6.文字左右间的间距，在li中、a中都可以设置，但在li中设置更好（li影响盒子排列）

```html
li {
    list-style: none;
}

a {
    text-decoration: none;
}

.logo {
    float: left;
    height: 42px;
    width: 198px;
    background-color: purple;
}

.nav {
    float: left;
    margin-left: 60px;
}

.nav ul li{
    float: left;
    margin: 0 15px;
}

.nav ul li a {
    display: block;
    height: 42px;
    font-size: 18px;
    line-height: 42px;
    color: #050505;
    padding: 0 10px;
}

.nav ul li a:hover {
    border-bottom: 2px solid #00a4ff;
}
——————————————————————————————————————
<div class="nav">
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">搜索</a></li>
                <li><a href="#">职业规划</a></li>
            </ul>
        </div>
```

实现结果:

![image-20210305201951946](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305201951946.png)

4.搜索search区域

**模块划分**：一个search大盒子里面包含2个表单

尺寸说明：大盒子尺寸412x42，与nav间距70px，input宽360px(注意不量边框)所以高40（42-1x2）。“请输入关键词”与框间距15px。按钮宽度50px

![image-20210305202300891](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305202300891.png)

**注意：**

1.因为“请输入关键词”与框的间距通过padding设置，会撑大盒子。所以需要将input宽度设置为360-15=345

2.按钮默认有个边框，需要手动消除。

<u>3</u>.input、button都是**行内块元素，在一行排列时中间有缝隙**，因此input宽度+button宽度+缝隙大于box宽度（若没有缝隙，刚好并排放下），所以button另起一行，如下图。解决方法：给input、button添加浮动（浮动元素在一行内显示且没有缝隙）。

![image-20210305214136065](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305214136065.png)

4.若button仍在第二行，检查一下大盒子宽度是否大于等于input宽度+input边框*2+button宽度。

```html
.search {
    float: left;
    width: 412px;
    margin-left: 50px;
    color:#00a4ff;
}

.search input {
	float:left;
    width: 345px;
    height: 40px;
    font-size: 14px;
    color: #bfbfbf;
    border: 1px solid #00a4ff;
    border-right: 0;
    padding-left: 15px;
}

.search button{
    float: left;
    width: 50px;
    height: 42px;
    /* 按钮button默认有个边框，需要我们手动删除 */
    border: 0;
    background:url(img/btn.png);
}
——————————————————————————
<!-- search搜索框部分 -->
        <div class="search">
            <input type="text" value="输入关键字">
            <button></button>
        </div>
```

实现结果:

![image-20210305221043501](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305221043501.png)

5.用户user区域

尺寸说明：离右侧距离30px，文字14px，颜色#666

注：图片与文字一起居中对齐，如下图，后续再学

![image-20210305221407016](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305221407016.png)

```html
.user {
    float: right;
    font-size: 14px;
    color: #666;
    line-height: 42px;
    margin-right: 30px;
}
---————————————————
<!-- user用户部分 -->
        <div class="user">
            <img src="img/user.png" alt="">
            qq-lilei
        </div>
```

实现结果：

![image-20210305222522466](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305222522466.png)

————————————————————————————————

top部分结合：删除盒子辅助背景颜色，增加页面背景颜色

实现结果：

![image-20210305222644500](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210305222644500.png)

6.banner模块

**模块划分**：

![image-20210306091122794](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306091122794.png)

![image-20210306091027678](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306091027678.png)

●1号盒子是通栏的大盒子banner，不给宽度，给高度,给一个蓝色背景

●2号盒子是版心,要水平居中对齐

●3号盒子版心内,左对齐subnav侧导航栏

●4号盒子版心内,右对齐course课程

注意：版心部分划分时，不要如下图，如此划分下图右侧模块难以实现。直接在版心模块里放入大背景图片即可（即调用w），无需硬划分成左右两块背景。

![image-20210306091250406](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306091250406.png)

尺寸说明：banner高420

```html
.banner .w {
    height: 420px;
    background: url(img/banner2.png) no-repeat top center;
}

——————————————————————————
<div class="banner">
        <div class="w">
        </div>
</div>
```

实现结果：

![image-20210306093905521](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306093905521.png)7.subnav模块

模块划分：![image-20210306094224747](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306094224747.png)

尺寸说明：subnav宽度190，subnav里链接高度45，距左右各20px



**注意**：

1.subnav背景颜色是半透明的，使用rgba。

2.链接文字左右设置距离时可用padding（不会撑大盒子，li没有指定宽度），也可用margin，可以给li设置，也可以给a设置。

3.<u>文字后的>，可以通过在a里再加个span盒子进行右浮动实现</u>。

span盒子添加在a内而不是li内，原因：1.鼠标经过文字时，>也会一起变色2.由于2中，我们是给li设置左右内边距，所以在a内添加后的>仍保有li所设置的右内边距，也就更美观整齐了。

由于span与a 是父子关系，所以给span添加右浮动时，也不存在一浮全浮的盒子了。

**4.CSS样式里的选择器写的越详细越好，方便后期更改，也防止盒子内其他盒子内相同元素调用，如.subnav ul li a 写成.subnav a也可以，但更推荐第一种写法。**

5.span里的>可以直接这么写，也可以写成&gt；(英文分号)

```html
.subnav {
    width: 190px;
    height: 420px;
    background: rgba(0,0,0,.3);
}
.subnav ul li {
    height: 45px;
    line-height: 45px;
    margin: 0 20px;
}

.subnav ul li a {
    font-size: 14px;
    color: #fff;
}

.subnav ul li a span {
    float: right;
}

.subnav ul li a:hover{
    color: #00a4ff;
}
______________________________________
<div class="banner">
        <div class="w">
            <div class="subnav">
                <ul>
                    <li><a href="#">前端开发<span>></span></a></li>
                    <li><a href="#">后端开发<span>></span></a></li>
                    <li><a href="#">移动开发<span>></span></a></li>
                    <li><a href="#">人工智能<span>></span></a></li>
                    <li><a href="#">商业预测<span>></span></a></li>
                    <li><a href="#">云计算&大数据<span>></span></a></li>
                    <li><a href="#">运维&从测试<span>></span></a></li>
                    <li><a href="#">UI设计<span>></span></a></li>
                    <li><a href="#">产品<span>></span></a></li>
                </ul>
            </div>
        </div>
    </div>
```

实现结果：

![image-20210306095512508](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306095512508.png)

8.**course模块**

该模块有很多细节，多看看多理解。

**模块划分**：

![image-20210306103143583](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306103143583.png)

尺寸说明：大盒子230x300，上间距50px。h2高48px,body左右间距20px，body内文字上下间距14px，“全部课程”高38px,与上面小缝隙5px

**注意**：

1.给course添加浮动后，也要给subnav添加浮动

2.给body设置左右间距padding时不会撑大盒子，因为没有给body指定宽度

3.body里可分为上下两块，上可用ul、li，大小文字可用h4、p实现，下可用a实现

4.在给“全部课程”设置border等属性时，需要给a添加类选择器进行声明，若对.body a进行声明，会对body内对li也加上边框。如图

![image-20210306112619794](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306112619794.png)

```html
.subnav {
    float: left;
    width: 190px;
    height: 420px;
    background: rgba(0,0,0,.3);
}
.course {
    float: right;
    width: 230px;
    height: 300px;
    background-color: #fff;
    /* 浮动的盒子不存在外边距合并的问题 */
    margin-top: 50px;
}

.course h2 {
    width: 230px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    background-color: #9bceea;
}

.body {
    padding: 0 20px;
}

.body ul li h4 {
    font-size: 16px;
    color: #4e4e4e;
}

.body ul li p{
    font-size: 12px;
    color: #a5a5a5;
}

.body ul li {
    padding: 14px 0;
    border-bottom: 1px solid #ccc;
}

.body .more{
    display: block;
    height: 38px;
    color: #00a4ff;
    border: 1px solid #00a4ff;
    margin-top:5px;
    text-align: center;
    line-height: 38px;
    background-color: #fff;
}
——————————————————————————
<div class="course">
                <h2>我的课程</h2>
                <div class="body">
                    <ul>
                        <li>
                            <a href="#">
                                <h4>继续学习 程序语言设计</h4>
                                <p>正在学习-使用对象</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h4>继续学习 程序语言设计</h4>
                                <p>正在学习-使用对象</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h4>继续学习 程序语言设计</h4>
                                <p>正在学习-使用对象</p>
                            </a>
                        </li>
                    </ul>
                    <a href="#" class="more">全部课程</a>
                </div>
</div>
```

实现结果：

![image-20210306112712647](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306112712647.png)

9.精品推荐模块

**模块划分**：

![image-20210306125147868](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306125147868.png)

●大盒子水平居中goods精品,注意此处有个盒子阴影

●1号盒子是标题H3左侧浮动

●2号盒子里面放链接左侧浮动, goods-item距离可以控制链接的左右外边距(注意行内元素只给左右内外边距)

●3号盒子右浮动mod修改

尺寸说明：大盒子高度60px，上边距10px，左右间距30px，1、2号盒子间距30px，2号盒子文字左右间距30px（竖线与文字之间距离）

**注意**：

1.**行高会继承**，所以给goods设置垂直居中即可，不用三个盒子各自设置。

2.将2号盒子文字左右间距30px通过给a设置padding值实现，原理同导航栏

```html
/* 精品推荐模块 */
.goods {
    height: 60px;
    line-height: 60px;
    box-shadow: 0 3px 4px 3px rgba(0,0,0,.1);
}

.goods h3{
    float: left;
    font-size: 16px;
    color: #00a4ff;
    margin: 0 30px;
}


.goods ul li {
    float: left;
}

.goods ul li a {
    padding: 0 30px;
    font-size: 16px;
    color: #050505;
    border-left: 1px solid #ccc;
}

.goods .mod {
    float: right;
    font-size: 14px;
    color: #00a4ff;
    margin-right: 30px;
}
______________________________
<!-- 3.精品推荐部分start -->
    <div class="goods w">
        <h3>精品推荐</h3>
        <ul>
            <li><a href="#">jQuery</a></li>
            <li><a href="#">Spark</a></li>
            <li><a href="#">MySQL</a></li>
            <li><a href="#">JavaWeb</a></li>
            <li><a href="#">jQuery</a></li>
        </ul>
        <a href="#" class="mod">修改兴趣</a>
    </div>
    <!-- 精品推荐部分end -->
```

实现结果：

![image-20210306131931436](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306131931436.png)

10.box-hd模块

![image-20210306132037302](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306132037302.png)

●1号盒子为最大的盒子，box版心水平居中对齐

●2号盒子为上面部分，box-hd --里面左侧标题H3左浮动,右侧链接a右浮动

●3号盒子为底下部分，box-bd--里面是无序列表,有10个小li组成

●小li外边距的问题，这里有个小技巧:给box-hd宽度为1215就可以一行装开5个li



尺寸说明：box上边距30px，box-hd高45px，“查看全部”上边距10px，右边距30px.



**小技巧**：

1.在css样式表中，ctrl+g，再输入行号，可以跳到指定行号内

2.给body设置高度3000px，增加滚动条，预览页面更直观，完毕后再删去



**注意**：

1.h3、a设置了浮动，为了不影响后面盒子的排列，有两种解决方法：清除浮动或添加父级盒子高度，因为box-hd本应定义高度，所以选择给box-hd设置高度

```html
/* box核心模块 */
.box {
    margin-top: 30px;
}

.box-hd {
    height: 45px;
}

.box-hd h3 {
    float: left;
    font-size: 20px;
    font-weight: 400;
    color: #494949;
}

.box-hd a {
    float: right;
    font-size: 12px;
    color: #a5a5a5;
    margin-top: 10px;
    margin-right: 30px;
}
————————————————————————————————————————————
<div class="box w">
        <div class="box-hd">
            <h3>精品推荐</h3>
            <a href="#">查看全部</a>
        </div>
</div>
```

实现结果：

![image-20210306135959848](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306135959848.png)

11.box-bd模块

**模块划分**：

![image-20210306142239237](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306142239237.png)

尺寸说明：每个li大小228x270，li之间上下左右缝隙15px；bd里的文字右边距20px，左边距25px，上下边距20px。

注意：

1.<u>在设置了右边距后，第5个盒子会掉入下一行。解决小技巧：把li的父亲ul修改的足够宽，（228+15）*5=1215，因此给box-hd宽度为1215就可以一行装开5个li。</u>

2.img必须要和li一样宽，通过设置图片宽度100%实现

3.右上角new！标签在学完定位再做。

```html
/* 把li的父亲ul修改的足够宽，一行就能装下5个盒子，就不会换行了，此处由于层叠性与权重，不会影响版心 */
.box-bd ul {
    width: 1225px;
}

.box-bd ul li {
    float: left;
    width: 228px;
    height: 270px;
    margin-right: 15px;
    margin-bottom: 15px;
    background-color: #fff;
}

.box-bd img {
    width: 100%;
}

.box-bd h4 {
    margin: 20px 20px 20px 25px;
    font-size: 14px;
    font-weight: 400;
    color: #050505;
}

.box-bd .info {
    margin: 20px 20px 20px 25px;
    font-size: 12px;
    color: #999999;
}

.box-bd .info span {
    color: #ff7c2d;
}
————————————————————————————————————
<div class="box-bd">
            <ul>
                <li>
                    <img src="img/pic1.png" alt="">
                    <h4>Think PHP 5.0 博客系统实战项目演练</h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
                <li>
                    <img src="img/pic2.png" alt="">
                    <h4>Android 网络图片加载框架详解 </h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
                <li>
                    <img src="img/pic3.png" alt="">
                    <h4>Angular 2 最新框架+主流技术+项目实战 </h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
                <li>
                    <img src="img/pic4.png" alt="">
                    <h4>Android Hybrid APP开发实战 H5+原生！</h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
                <li>
                    <img src="img/pic4.png" alt="">
                    <h4>Android Hybrid APP开发实战 H5+原生！</h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
                <li>
                    <img src="img/pic1.png" alt="">
                    <h4>Think PHP 5.0 博客系统实战项目演练</h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
                <li>
                    <img src="img/pic2.png" alt="">
                    <h4>Android 网络图片加载框架详解 </h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
                <li>
                    <img src="img/pic3.png" alt="">
                    <h4>Angular 2 最新框架+主流技术+项目实战 </h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
                <li>
                    <img src="img/pic4.png" alt="">
                    <h4>Android Hybrid APP开发实战 H5+原生！</h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
                <li>
                    <img src="img/pic4.png" alt="">
                    <h4>Android Hybrid APP开发实战 H5+原生！</h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
            </ul>
</div>
```

实现结果：

![image-20210306142004377](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306142004377.png)

13.footer模块

**模块划分**：

![image-20210306142842693](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306142842693.png)

●1号盒子是通栏大盒子，底部footer给高度,底色是白色

●2号盒子版心水平居中

●3号盒子版权copyright左对齐

●4号盒子链接组links 右对齐

尺寸说明：1号盒子高度415px，版心上边距35px。3号盒子内中间文字与上间距10px与下间距15px，“下载APP”大小118x35

**注意**：

1.由于未给ul设置高度，所以我们需要清除浮动，否则会出现如下图情况

2.清除浮动记得原则：子不教父之过，给父元素添加清除浮动

3.在给版心上边距margin时，会出现外边距塌陷问题。所以可以考虑使用padding

4.3使用padding不会撑大盒子，原因：父级盒子没有定义高度

![image-20210306143421449](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306143421449.png)

```html
.clearfix:before,
.clearfix:after {
            content: "";
            display: table;
}

.clearfix:after {
            clear: both;
}

.clearfix {
            /* IE 6/7专属 */
            *zoom: 1;
}

/* footer模块 */
.footer {
    height: 415px;
    background-color: pink;
}
_______________
 <div class="box-bd ">
            <ul class="clearfix">
               
<!-- footer模块start -->
    <div class="footer">
        <div class="w">
            123
        </div>
    </div>
```

实现结果：

![image-20210306151858535](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306151858535.png)14.copyright模块

```html
.footer .w {
    padding-top: 35px;
}

.copyright {
    float: left;
}

.copyright p {
    margin-top:10px;
    margin-bottom: 15px;
    font-size: 12px;
    color: #666666;
}

.copyright .download {
    display: block;
    width: 118px;
    height: 35px;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #00a4ff;
    border: 1px solid #00a4ff;
}

.links{
    float: right;
}
______________________
<div class="footer">
        <div class="w">
            <div class="copyright">
                <img src="img/logo.png" alt="">
                <p>学成在线致力于普及中国最好的教育它与中国一流大学和机构合作提供在线课程。<br>
                    © 2017年XTCG Inc.保留所有权利。-沪ICP备15025210号</p>
                <a href="#" class="download">下载APP</a>
            </div>
            <div class="links">abc</div>
        </div>
    </div>
```

实现结果：

![image-20210306151927092](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306151927092.png)15.links模块

注意：此处可使用自定义列表dl、dd、dt

```html
.links{
    float: right;
}

.links dl {
    float: left;
    margin-left: 100px;
}

.links dl dt {
    font-size: 16px;
    color: #333333;
    margin-bottom: 5px;
}

.links dl dd a {
    font-size: 12px;
    color: #333333;
}
————————————————————————————————
<div class="links">
                <dl>
                    <dt>关于学成网</dt>
                    <dd><a href="#">关于</a></dd>
                    <dd><a href="#">管理团队</a></dd>
                    <dd><a href="#">工作机会</a></dd>
                    <dd><a href="#">客户服务</a></dd>
                    <dd><a href="#">帮助</a></dd>
                </dl>
                <dl>
                    <dt>新手指南</dt>
                    <dd><a href="#">如何注册</a></dd>
                    <dd><a href="#">如何选课</a></dd>
                    <dd><a href="#">如何拿到毕业证</a></dd>
                    <dd><a href="#">学分是什么</a></dd>
                    <dd><a href="#">考试未通过怎么办</a></dd>
                </dl>
                <dl>
                    <dt>合作伙伴</dt>
                    <dd><a href="#">合作机构</a></dd>
                    <dd><a href="#">合作导师</a></dd>
                </dl>
            </div>
```

实现结果：

![image-20210306153439021](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306153439021.png)



### 24.定位

#### 24.1为什么需要定位

提问:以下情况使用标准流或者浮动能实现吗?

1.某个元素可以自由的在一个盒子内移动位置，并且压住其他盒子。如学成在线案例中的“new！”标签

2.当我们滚动窗口的时候，盒子是固定在屏幕某个位置的。如淘宝滚动时上方的搜索框、右侧的导航栏固定不动。

以上效果,标准流或浮动都无法快速实现，此时**需要定位**来实现。

所以:

1.浮动可以让多个块级盒子一行没有缝隙排列显示 ,经常用于横向排列盒子。

2.定位则是可以让盒子自由的在**某个盒子内移动**位置或者**固定屏幕中某个位置，并且可以压住其他盒子**。

#### 24.2定位组成

**定位**:将盒子定在某一个位置，所以**定位也是在摆放盒子，按照定位的方式移动盒子**。

**定位=定位模式+边偏移**。

**定位模式**用于指定一个元素在文档中的<u>定位方式</u>。 **边偏移**则决定了该元素的<u>最终位置</u>。

##### 24.2.1定位模式

定位模式决定元素的定位方式，它通过CSS的**position**属性来设置,其值可以分为四个:

| 值       | 语义     |
| -------- | -------- |
| static   | 静态定位 |
| relative | 相对定位 |
| absolute | 绝对定位 |
| fixed    | 固定定位 |

##### 24.2.2边偏移

边偏移就是定位的盒子移动到最终位置。有top、bottom、eft 和right 4个属性。（这与margin、padding的四个无关）

| 边偏移属性 | 示例        | 描述                                           |
| ---------- | ----------- | ---------------------------------------------- |
| top        | top:80px    | 顶端偏移量，定义元素相对于其父元素上边线的距离 |
| bottom     | bottom:80px | 底端偏移量，定义元素相对于其父元素下边线的距离 |
| left       | left:80px   | 左侧偏移量，定义元素相对于其父元素左边线的距离 |
| right      | right:80px  | 右侧偏移量，定义元素相对于其父元素右边线的距离 |

#### *24.3静态定位*

可以简单理解为静态定位就是标准流。

**静态定位**是元素的**默认定位方式，无定位**的意思。

语法:

```
选择器{ position: static; }
```

特点：

●静态定位按照标准流特性摆放位置，它没有边偏移

●静态定位在布局时很少用到

#### <u>24.4相对定位（relative）</u>

**相对定位**是元素在移动位置的时候,是相对于它**原来的位置**来说的(自恋型，即以它的左上角顶点为坐标原点)。

语法:

```
选择器{ position: relative; }
```

**特点**：(务必记住)

1.它是相对于自己原来的位置来移动的(**移动位置的时候参照点是自己原来的位置**)。

2.原来在标准流的位置继续占有,后面的盒子仍然以标准流的方式对待它。( **不脱标，继续保留原来位置**，会压住后面的标准流盒子)

因此,相对定位并没有脱标。它最典型的应用是给绝对定位当爹的。。


案例代码：

```css
.box1 {
            position: relative;
            top: 100px;
            left: 100px;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

.box2 {
            width: 200px;
            height: 200px;
            background-color: purple;
        }
```

实现结果：

未定位

![image-20210306165106166](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306165106166.png)

定位后

![image-20210306165150272](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306165150272.png)

#### <u>24.5绝对定位（absolute）</u>

**绝对定位**是元素在移动位置的时候，是相对于它**祖先元素**来说的(拼爹型) 。

语法:

```
选择器{ position: absolute; }
```

**特点**：(务必记住)

1.如果**没有祖先元素**或者**祖先元素没有定位**,则以**浏览器为准**定位( Document文档) 

2.如果**祖先元素有定位**(相对、绝对、固定定位) , 则以**最近一级**的有**定位祖先元素**为参考点移动位置。

3.绝对定位不再占有原先的位置。( **脱标**）

##### 24.5.1没有父级或父级无定位情况

如果**没有祖先元素**或者**祖先元素没有定位**,则以**浏览器为准**定位( Document文档) 

案例代码：

没有祖先元素

```css
.son {
            position: absolute;
            /* top: 0; */
            bottom: 0;
            /* left: 0; */
            right: 0;
            width: 200px;
            height: 200px;
            background-color: purple;
        }
```

可以去四个角落等位置

![image-20210306170803314](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306170803314.png)

有祖父元素但没有定位

案例代码：

```css
.father {
            width: 400px;
            height: 400px;
            background-color: pink;
        }

        .son {
            position: absolute;
            /* top: 0; */
            bottom: 0;
            /* left: 0; */
            right: 0;
            width: 200px;
            height: 200px;
            background-color: purple;
        }
```

![image-20210306171158510](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306171158510.png)

仍以浏览器为准定位

##### 24.4.2父级有定位情况

1.如果**祖先元素有定位**(相对、绝对、固定定位) , 则以**最近一级**的有**定位祖先元素**为参考点移动位置。

2.绝对定位不再占有原先的位置。( 脱标)如轮播图里<>位置不动并压住图片

如：

1.爸爸没有定位，爷爷有定位，则以爷爷为准。

2.爸爸、爷爷都有定位，则以爸爸为准。

案例代码：

```css
<style>
        .grandfather {
            position: relative;
            width: 500px;
            height: 500px;
            background-color: skyblue;
        }

        .father {

            width: 400px;
            height: 400px;
            background-color: pink;
        }

        .son {
            position: absolute;
            bottom: 10px;
            right: 40px;
            width: 200px;
            height: 200px;
            background-color: purple;
        }
    </style>
```

实现结果：

![image-20210306200218908](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306200218908.png)

绝对定位特点3的体现

![image-20210306194650276](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306194650276.png)

#### 24.6子绝父相

弄清楚这个口诀，就明白了绝对定位和相对定位的使用场景。

"子绝父相”是我们学习定位的口诀，是定位中最常用的一种方式这句话的意思是:**子级是绝对定位的话，父级要用相对定位**。

①子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子。

②父盒子需要加定位限制子盒子在父盒子内显示。

③父盒子布局时，需要占有位置,因此父亲只能是相对定位。

这就是子绝父相的由来，所以**相对定位经常用来作为绝对定位的父级**。

总结:因为**父级需要占有位置，因此是相对定位**，**子盒子不需要占有位置，则是绝对定位**

当然，子绝父相不是永远不变的，如果父元素不需要占有位置，**子绝父绝**也会遇到。

#### 24.7案例：学成在线-hot、new模块添加

分析：hot使用绝对定位，li使用相对定位

![image-20210306201757424](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306201757424.png)

注意：

1.绝对定位中的值可以为负值，如right:-4px

2.为了仅让背景图片与li同款，防止new、hot图也同宽，可使用**子代选择器**，.box-bd>img

在学成在线案例上改进代码：

在li中使用em标签添加hot图片，使用子代选择器防止hot图片与li同宽，给父级li添加相对定位，给em添加绝对定位，检查修改参数调图片位置。

```css
.box-bd ul li {
    position: relative;
    float: left;
    width: 228px;
    height: 270px;
    margin-right: 15px;
    margin-bottom: 15px;
    background-color: #fff;
}
.box-bd ul li em {
    position: absolute;
    top: 4px;
    right: -9px;
}

.box-bd>img {
    width: 100%;
}
```

```html
<ul class="clearfix">
                <li>
                    <em>
                        <img src="img/hot.png" alt="">
                    </em>
                    <img src="img/pic1.png" alt="">
                    <h4>Think PHP 5.0 博客系统实战项目演练</h4>
                    <div class="info">
                        <span>高级</span>&nbsp; • &nbsp;1125人在学习
                    </div>
                </li>
```

#### <u>24.8固定定位fixed</u>

**固定定位**是元素固定于<u>浏览器可视区</u>（随着浏览器的大小而变化）的位置。

主要使用场景:可以在浏览器页面滚动时元素的位置不会改变。如在浏览器左右两侧、右下角的弹窗广告。

语法:

```
选择器{ position: fixed; }
```

**特点**: 

1.以浏览器的可视窗口为参照点移动元素。

●跟父元素没有任何关系

●不随滚动条滚动。

2.固定定位**不再占有原先的位置**。

固定定位也是脱标的，其实固定定位也可以看做是一种特殊的绝对定位。



**固定定位小技巧:固定在版心右侧位置**。

具体步骤：

1.让固定定位的盒子**left: 50%**.走到浏览器可视区(也可以看做版心)的一半位置。

2.让固定定位的盒子**margin-left:版心宽度的一半距离**。多走版心宽度的一半位置
就可以让固定定位的盒子贴着版心右侧对齐了。



案例代码：

```html
.box {
            position: fixed;
            top: 0;
            left: 10px;
        }
__________________
<div class="box">
        <img src="baozi.webp" alt="">
</div>
```

实现结果：

![image-20210306205633467](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306205633467.png)



课后作业：两侧固定的广告

案例代码：（在学成在线案例上增加）

```html
.ad1 {
    position: fixed;
    top: 50px;
    left: 20px;
}

.ad2 {
    position: fixed;
    top: 50px;
    right: 20px;
}
__________________________
<!-- 广告模块 -->
    <div class="ad1">
        <img src="img/advertise.png" alt="">
    </div>

    <div class="ad2">
        <img src="img/advertise.png" alt="">
    </div>
```

实现结果：

![image-20210306210522290](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306210522290.png)



固定在版心右侧案例代码：

```html
<style>
        .fixed {
            position: fixed;
            /* 1.走浏览器宽度的一半 */
            left: 50%;
            /* 2.利用margin走版心盒子宽度的一半 */
            margin-left: 505px;
            width: 40px;
            height: 100px;
            background-color: skyblue;
        }

        .banxin {
            width: 1000px;
            height: 900px;
            margin: 0 auto;
            background-color: pink;
        }
    </style>
```

实现结果：

![image-20210306211848990](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306211848990.png)

#### *24.9粘性定位sticky*

粘性定位可以被认为是相对定位和固定定位的混合。

语法:

```
选择器{ position: sticky; top: 10px; }
```

粘性定位的特点:

1.以浏览器的可视窗口为参照点移动元素(固定定位特点)

2.粘性定位**占有原先的位置**(相对定位特点)

3.必须添加top. left. right. bottom其中一个才有效

跟页面滚动搭配使用。兼容性较差 , IE不支持。

可以使用这个实现常见的右侧导航栏，如下图，但由于兼容性和其他问题，该模块使用js实现，因此该语句了解即可，很少使用。

![image-20210306213300487](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306213300487.png)

案例代码：

```html
<style>
        body {
            height: 900px;
        }

        .box {
            position: sticky;
            top: 10px;
            width: 400px;
            height: 30px;
            margin: 50px auto;
            background-color: pink;
        }
    </style>
```

实现结果：

最初：

![image-20210306213108057](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306213108057.png)

随着滚动条滚动后：

![](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306213128346.png)

#### 24.10定位总结

| 定位模式         | 是否脱标         | 移动位置           | 是否常用   | 备注                 |
| ---------------- | ---------------- | ------------------ | ---------- | -------------------- |
| static静态定位   | 否               | 不使用边偏移       | 很少       |                      |
| relative相对定位 | 否（占有位置）   | 相对于自身位置移动 | 常用       | 自恋型               |
| absolute绝对定位 | 是（不占有位置） | 带有定位的父级     | 常用       | 拼爹型，如轮播图应用 |
| fixed固定定位    | 是（不占有位置） | 浏览器可视区       | 常用       | 如网页弹窗广告       |
| sticky粘性定位   | 否（占有位置）   | 浏览器可视区       | 当前阶段少 | 如网页右侧导航栏     |

中间三种定位是重点

1.一定记住相对定位、固定定位、绝对定位两个大的特点: 1. 是否占有位置(脱标否) 2.以

谁为基准点移动位置。

2.学习定位重点学会子绝父相。

#### 24.11定位叠放次序z-index

在使用定位布局时,可能会出现盒子重叠的情况。此时,可以使用z-index来控制盒子的前后次序(z轴，变成立体三维)

语法:

```
选择器{ z-index: 1; }
```

●数值可以是正整数、负整数或0,默认是auto ,数值越大，盒子越靠上。简单理解：z轴数字越大，位置就越高（只能是整数，不能写小数）

●如果属性值相同，则按照书写顺序，后来居上（层叠性）

●数字后面<u>不能加单位</u>

●<u>只有定位的盒子才有z-index属性</u>（浮动什么的没有）

案例代码：

```css
<style>
        .box {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
        }

        .box1 {
            background-color: pink;
        }

        .box2 {
            left: 50px;
            top: 50px;
            background-color: purple;
        }

        .box3 {
            left: 100px;
            top: 100px;
            background-color: gray;
        }
    </style>
```

最初：

![image-20210306215546473](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306215546473.png)

说明：因为层叠性，所以定义在最后的灰色在最上面

```css
添加z-indenx
.box1 {
            background-color: pink;
            z-index: 2;
        }

        .box2 {
            left: 50px;
            top: 50px;
            background-color: purple;
        }

        .box3 {
            left: 100px;
            top: 100px;
            background-color: gray;
            z-index: 1;
        }
```

![image-20210306215724778](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210306215724778.png)

说明：box1的z-indenx大于box3的大于默认的box2，所以box1在最上面，其次是box3、box2

#### 24.11定位的拓展

##### 24.11.1绝对定位的盒子居中

加了绝对定位的盒子不能通过**margin:0 auto**水平居中,但是可以通过以下计算方法实现水平和垂直居中。

**水平居中**：

①left: 50%; :让盒子的左侧移动到父级元素的水平中心位置。

②margin-left: -100px; :让盒子向左移动自身宽度的一半。

**垂直居中**：

①top: 50%; :让盒子的左侧移动到父级元素的水平中心位置。

②margin-top: -100px; :让盒子向左移动自身宽度的一半。

注：

1.margin可以取负值。

2.这样做，不管浏览器可视区大小，仍可以实现水平垂直居中。

案例代码：

```css
.box {
            position: absolute;
            /* 水平居中 */
            /* 1.先右走浏览器的一半 */
            left: 50%;
            /* 2.再左走盒子宽度的一半，margin取负值 */
            margin-left: -50px;
            /* 垂直居中 */
            /* 1.先下走浏览器的一半 */
            top: 50%;
            /* 2.再上走盒子宽度的一半，margin取负值 */
            margin-top: -50px;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
```

实现结果：

![image-20210307090351477](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307090351477.png)

##### 24.11.2定位特殊特性

<u>绝对定位和固定定位</u>也<u>和浮动类似</u>。

1.行内元素添加绝对或者固定定位，可以直接设置高度和宽度。

2.块级元素添加绝对或者固定定位，如果不给宽度或者高度,默认大小是内容的大小。

案例代码：

行内元素未添加定位前：默认大小是内容的大小

```css
span {
            background-color: pink;
        }
```

![image-20210307090852316](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307090852316.png)

行内元素添加绝对定位后：可以直接设置高度和宽度

```css
span {
            position: absolute;
            width: 100px;
            height: 50px;
            background-color: pink;
        }
```

![image-20210307091017405](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307091017405.png)

块级元素未添加定位前：不给宽度或者高度,默认大小是浏览器宽度

```css
div {
            background-color: skyblue;
        }
```

![image-20210307091128690](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307091128690.png)

块级元素添加绝对定位后：不给宽度或者高度,默认大小是内容的大小。

```css
div {
            position: absolute;
            background-color: skyblue;
        }
```

![image-20210307091320762](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307091320762.png)

##### 24.11.3脱标的盒子不会触发外边距塌陷

浮动元素、绝对定位(固定定位)元素的都不会触发外边距合并的问题。

##### 24.11.4绝对定位(固定定位)会完全压住盒子

<u>浮动</u>元素不同，只会压住它下面标准流的盒子，但是<u>不会压住下面标准流盒子里面的文</u><u>字(图片)</u>。浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的（不忘初心，砥砺前行）。文字会围绕浮动元素。

但是<u>绝对定位(固定定位)会压住下面标准流所有的内容</u>。

案例代码：

文字围绕浮动元素1

```css
.box {
            float: left;
            width: 100px;
            height: 100px;
            background-color: blue;
        }
```

![image-20210307092845414](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307092845414.png)

文字围绕浮动元素2

```html
img {
            float: left;
        }
________________
 <div class="baozi"><img src="baozi.webp" alt=""></div>
    <p>小笼包（small steamed bun），别称小笼馒头，.....</p>
```

![image-20210307093351142](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307093351142.png)

绝对定位(固定定位)压住下面标准流所有的内容

```css
.box {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: blue;
        }
```

![image-20210307093721856](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307093721856.png)

#### 24.12综合案例：淘宝焦点图布局

实现：

![image-20210307093903428](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307093903428.png)



模块划分：

![image-20210307094029189](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307094029189.png)

1.大盒子我们类名为: tb-promo 淘宝广告

2.里面先放一张图片。

3.左右两个按钮用链接就好了。左箭头 prev 右箭头next

4.<u>底侧小圆点用ul做</u>。类名为promo-nav



**1.盒子与图片**

注意：因为盒子大小是固定的，为了让放入的图片填充满，最好再对插入的图片进行声明，使得所有插入的图片都能填充满盒子。（插入的图片大小不一定刚好与盒子大小一样）

```css
* {
            margin: 0;
            padding: 0;
        }

        .tb-promo {
            width: 520px;
            height: 280px;
            background-color: pink;
            margin: 100px auto;
        }

        .tb-promo img {
            width: 520px;
            height: 280px;
        }
```

实现结果：

![image-20210307095028780](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307095028780.png)

**2.左右侧箭头按钮**

尺寸大小20x30

注意：

1.按钮需加绝对定位，子绝父相

2.垂直水平居中算法

3.圆角边框使用

4.左右侧箭头相同样式很多，可**选用并集选择器可以集体声明相同的样式**，可节省代码，并更简洁。其中left、right属性切记不要放入并集选择器内，按需分别放入各自箭头内。

案例代码：

```css
/* 并集选择器可以集体声明相同的样式 */
        .prev,
        .next {
            position: absolute;
            /* 绝对定位的盒子垂直居中 */
            top: 50%;
            margin-top: -15px;
            /* 加了绝对定位的盒子可以直接设置高度、宽度 */
            width: 20px;
            height: 30px;
            background: rgba(0, 0, 0, .3);
            text-align: center;
            line-height: 30px;
            text-decoration: none;
            color: #fff;
        }

        .prev {
            left: 0;
            border-radius: 0 15px 15px 0;
        }

        .next {
            /* 如果一个盒子既有left属性也有right属性，默认执行left属性，top、bottom同理，默认执行top */
            right: 0;
            border-radius: 15px 0 0 15px;
        }
```

```html
<div class="tb-promo">
        <img src="img/tb.jpg" alt="">
        <a href="#" class="prev"> &lt; </a>
        <a href="#" class="next"> &gt; </a>
    </div>
```

**3.底侧小圆点**

尺寸大小：放小圆点的外框70x13，距底侧15px，每个li大小8x8，左右间距6px（设置margin仅为3px即可）

注意：

1.该部分用ul、li做

2.不要忘记权重问题，不能直接写.selected选择器，权重不够 

案例代码：

```css
li {
            list-style: none;
        }
.promo-nav {
            position: absolute;
            left: 50%;
            margin-left: -35px;
            bottom: 15px;
            width: 70px;
            height: 13px;
            background: rgba(255, 255, 255, .3);
            border-radius: 7px;
        }

        .promo-nav li {
            float: left;
            width: 8px;
            height: 8px;
            background-color: #fff;
            border-radius: 50%;
            margin: 3px;
        }

        /* 不要忘记权重问题,不能直接写.selected选择器，权重不够 */
        .promo-nav .selected {
            background-color: orange;
        }
```

```html
<ul class="promo-nav">
            <li class="selected"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
```

### 25.网页布局简单总结

通过盒子模型，清楚知道大部分html标签是一个盒子。

通过CSS浮动、定位可以让每个盒子排列成为网页。

一个完整的网页，是标准流、浮动、定位一起完成布局的，每个都有自己的专门用法。（桃园三兄弟结义）

1.标准流

可以让盒子上下排列或者左右排列，**垂直的块级盒子显示就用标准流布局**。

2.浮动

可以让多个块级元素一行显示或者左右对齐盒子，**多个块级盒子水平显示就用浮动布局**。

3.定位
定位最大的特点是有层叠的概念,就是可以让多个盒子前后叠压来显示。**如果元素自由在某个盒子内移动就用定位布局。**

### 26.元素的显示与隐藏

类似网站广告，当我们点击关闭就不见了，但是我们重新刷新页面，会重新出现!

**本质:让一个元素在页面中隐藏或者显示出来**。

1. display显示隐藏
2. visibility 显示隐藏
3. overflow 溢出显示隐藏

#### 26.1display属性

**display**属性用于设置一个元素应如何显示。

●display:none ; 隐藏对象

●display : block ;除了转换为块级元素之外,同时还有显示元素的意思

**display隐藏元素后，不再占有原来的位置。**

后面应用及其广泛，搭配JS可以做很多的网页特效。

案例代码：

给熊大设置隐藏

```css
.box1 {
            display: none;
            width: 100px;
            height: 100px;
            background-color: pink;
        }

        .box2 {
            width: 100px;
            height: 100px;
            background-color: skyblue;
        }
```

![image-20210307105641450](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307105641450.png)

给熊大设置显示

```css
.box1 {
            /* display: none; */
            display: block;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
```

![image-20210307105747438](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307105747438.png)

#### 26.2visibility可见性

**visibility**属性用于指定一个元素应可见还是隐藏。

●visibility : visible;元素可视

●visibility : hidden;元素隐藏

**visibility隐藏元素后,继续占有原来的位置（与display最大的区别）**。

如果隐藏元素想要原来位置,就用visibility : hidden,如果隐藏元素不想要原来位置，就用**display : none (用处更多,重点**)

案例代码：

```css
.box1 {
            visibility: hidden;
            /* display: none; */
            /* display: block; */
            width: 100px;
            height: 100px;
            background-color: pink;
        }

        .box2 {
            width: 100px;
            height: 100px;
            background-color: skyblue;
        }
```

![image-20210307110231393](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307110231393.png)

#### 26.3**overflow**溢出

**overflow**属性指定了如果内容溢出(下图红色框起来部分即为溢出)一个元素的框(超过其指定高度及宽度)时，会发生什么。

| 属性值  | 描述                                     |
| ------- | ---------------------------------------- |
| visible | 不剪切内容也不添加滚动条，即显示溢出内容 |
| hidden  | 不显示超过对象尺寸的内容，即隐藏溢出内容 |
| scroll  | 不管超出内容与否，总是显示滚动条         |
| auto    | 超出自动显示滚动条，不超出不显示滚动条   |

一般情况下,我们都不想让溢出的内容显示出来,因为溢出的部分会影响布局。注意区分auto、scroll

但是如果<u>有定位的盒子，请慎用overflow：hidden</u>，因为它会隐藏多余的部分。如学成在线案例中的new标签，超出盒子一部分，这部分是我们故意超出显示的，不可以隐藏。

![image-20210307112315379](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307112315379.png)

代码案例：

设置overflow: hidden;

````css
.box {
            overflow: hidden;
            width: 200px;
            height: 100px;
            border: 2px solid pink;
        }
````

![image-20210307112230571](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307112230571.png)

设置overflow: scroll;

![image-20210307112412603](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307112412603.png)



设置overflow: auto;并减少文字数量

![image-20210307112515688](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307112515688.png)

#### 26.4案例-土豆网鼠标经过显示遮罩

实现：

![image-20210307113100116](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307113100116.png)

1.练习元素的显示与隐藏

2.练习元素的定位

<u>核心原理:原先半透明的黑色遮罩看不见，鼠标经过大盒子,就显示出来</u>。

遮罩的盒子不占有位置,就需要用绝对定位和display配合使用。

注意：

1.为保证图片、遮罩和背景盒子一样大，可**设置width:100%、height:100%与父盒子一样大**。建议使用百分数而不是数值，方便后期盒子变化大小时不用修改图片、遮罩大小。

2.当我们鼠标经过了tudou这个盒子，就让**里面的mask盒子**显示

案例代码：

```css
.tudou {
            position: relative;
            width: 490px;
            height: 276px;
            background-color: pink;
            margin: 100px auto;
        }

        .tudou img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .tudou .mask {
            /* 影藏遮罩 */
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .4) url(img/download.png) no-repeat center;
        }

        /* 当我们鼠标经过了tudou这个盒子，就让里面的mask盒子显示 */
        .tudou:hover .mask {
            /* 显示元素 */
            display: block;
        }
```

```html
<div class="tudou">
        <img src="img/tudou.jpg" alt="">
        <div class="mask"></div>
    </div>
```

实现结果：

![image-20210307115311133](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307115311133.png)

## CSS进阶

### 1.精灵图

```
1.为什么需要精灵图?
2.精灵图的使用
3.精灵图课堂案例
```

#### 1.1为什么需要精灵图

![image-20210307123338269](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307123338269.png)

一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度。

因此，为了有效地**减少服务器接收和发送请求的次数**，**提高页面的加载速度**，出现了**CSS精灵技术**(也称CSS Sprites、CSS 雪碧)。

**精灵技术目的: 为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度**

**核心原理:将网页中的一些小背景图像整合到一张大图中, 这样服务器只需要一次请求就可以了。**（如下图）

![image-20210307123028137](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307123028137.png)

#### 1.2精灵图( sprites )的使用

使用精灵图核心:

1.精灵技术主要<u>针对于背景图片</u>使用。就是把多个小背景图片整合到一张大图片中。
2.这个大图片也称为sprites 精灵图或者雪碧图
3.移动背景图片位置，此时可以使用**background-position**或**直接使用background，里面定义4个参数（图片路径、是否平铺、x/y坐标）**
4.移动的距离就是这个目标图片的**x和y坐标**。注意网页中的坐标有所不同
5.因为一般情况下都是往上往左移动，所以<u>数值是负值</u>。
6.使用精灵图的时候需要精确测量，每个小背景图片的大小和位置。

注：精灵图可从王者荣耀官网“检查”图片元素下载。

**使用PS测量精灵图方法**：

1.使用切片或选择工具选择所要的图片，打开窗口下的信息，鼠标所在的地方即x/y坐标。

![image-20210307141044201](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307141044201.png)

2.使用切片工具选择所要的图片后右键选择编辑后即可。（推荐该方法，更快更准确）

![image-20210307141453783](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307141453783.png)

案例代码：

```css
.box {
            width: 67px;
            height: 60px;
            background: url(img/sprites.png) no-repeat -182px 0;
            margin: 100px auto;
        }
```

实现结果：

![image-20210307141648386](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307141648386.png)

#### 1.3案例-拼出自己的名字

通过下方的图拼出自己的名字

![image-20210307143347605](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307143347605.png)



注意：

1.span是行内元素，本无法指定宽度和高度，因此需要将它转换为行内块元素

2.在该案例中多次出现使用background插入图片的语句，可以放入span中，节省代码量

```css
<style>
        span {
            display: inline-block;
            background: url(img/abcd.jpg) no-repeat;
        }

        .a {
            width: 121px;
            height: 123px;
            background-position: 0 0;
        }

        .u {
            width: 124px;
            height: 122px;
            background-position: -476px -417px;
        }

        .e {
            width: 129px;
            height: 122px;
            background-position: -471px 0;
        }
    </style>
```

```html
	<span class="a"></span>
    <span class="u"></span>
    <span class="u"></span>
    <span class="e"></span>
```

实现结果：

![image-20210307143313470](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307143313470.png)

### 2.字体图标
#### 2.1字体图标的产生

字体图标使用场景:主要用于显示网页中通用、常用的一些小图标。

精灵图是有诸多优点的，但是缺点很明显。

1.图片文件还是比较大的。

2.图片本身放大和缩小会失真。

3.一旦图片制作完毕想要更换非常复杂。

此时,有一种技术的出现很好的解决了以上问题,就是**字体图标iconfont**.

**字体图标**可以为前端工程师提供一种方便高效的图标使用方式，**展示的是图标,本质属于字体。**

#### 2.2字体图标的优点

●轻量级:一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求

●灵活性:本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等

●兼容性: 几乎支持所有的浏览器,请放心使用

<u>注意</u>:字体图标不能替代精灵技术,只是对工作中图标部分技术的提升和优化。

**总结**:

1.如果遇到一些结构和样式比较简单的小图标，就用字体图标。![image-20210307145016475](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307145016475.png)

2.如果遇到一些结构和样式复杂一点的小图片，就用精灵图。![image-20210307145031858](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307145031858.png)

#### 2.3字体图标的下载

字体图标是一些网页常见的小图标,我们直接网上下载即可。因此使用可以分为 :

1.字体图标的<u>下载</u>

2.字体图标的<u>引入</u>( 引入到我们htm页面中)

3.字体图标的<u>追加</u>(以后添加新的小图标)



推荐下载地址：

●**icomoon 字库http://icomoon.io**  	推荐指数 5星

IcoMoon成立于2011年,推出了第一个自定义图标字体生成器，它允许用户选择所需要的图标，使它们成一字型。 该字库内容种类繁多，非常全面，唯一的遗憾是国外服务器，打开网速较慢，且部分图标需要花钱购买。

（可以下载一个谷歌访问助手，提高加载速度。下载地址：https://www.downkuai.com/soft/123493.html#xzdz，注意选择的是“下载地址”下的“普通下载地址”）

●**阿里iconfont字库http://www.iconfont.cn/** 	 推荐指数 5星

这个是阿里妈妈M2UX的一一个iconfont字体图标字库,包含了淘宝图标库和阿里妈妈图标库。可以使用AI制作图标上传生成。重点是,免费!

#### 2.4字体图标的引入

**下载完毕之后，注意原先的文件不要删,后面会用**。

1.把下载包里面的**fonts**文件夹放入页面根目录下

![image-20210307152237326](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307152237326.png)

2.在CSS样式中全局声明字体:简单理解把这些字体文件通过css引入到我们页面中。
一定注意字体文件路径的问题。(会复制粘贴调用即可，可以从解压文件夹中style.css复制，不用背)

```css
@font-face {
  font-family: 'icomoon';
  src:  url('fonts/icomoon.eot?ov842e');
  src:  url('fonts/icomoon.eot?ov842e#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?ov842e') format('truetype'),
    url('fonts/icomoon.woff?ov842e') format('woff'),
    url('fonts/icomoon.svg?ov842e#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
```

3.点击解压文件中的demo.html，在html标签内添加小图标

![image-20210307153114205](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307153114205.png)

![image-20210307152923480](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307152923480.png)

```css
span {
            font-family: 'icomoon';
        }
```

```html
<span></span>
```

实现结果：

![image-20210307153351279](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307153351279.png)

还可以进行字体大小颜色设置

```css
span {
            font-family: 'icomoon';
            font-size: 50px;
            color: pink;
        }
```

![image-20210307153436744](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307153436744.png)

注：框框看起来长的一样，但其实不一样，每个图标对应一个自己的框框

##### 2.4.1字体文件格式

点开fonts，可以看到4种格式的文件

![image-20210307152332504](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307152332504.png)

不同浏览器所支持的字体格式是不一样的，字体图标之所以兼容，就是因为包含了主流浏览器支持的字体文件。

1. TureType(**.ttf**)格式.ttf字体是Windows和Mac的最常见的字体 ,支持这种字体的浏览器有IE9+、Firefox3.5+.Chrome4+、Safari3+. Opera10+. iOs Mobile、Safari4.2+ ;
2. Web Open Font Format(**.woff**)格式.woff字体,支持这种字体的浏览器有IE9+. Firefox3.5+. Chrome6+.Safari3.6+. Opera11.1+ ;
3. Embedded Open Type( **.eot**)格式.eot字体是IE专用字体,支持这种字体的浏览器有IE4+ ;
4. SVG(**.svg**)格式svg字体是基于SVG字体渲染的一 种格式,支持这种字体的浏览器有Chrome4+. Safari3.1+.Opera10.0+、ios Mobile Safari3.2+ ;

#### 2.5字体图标的追加

如果工作中，原来的字体图标不够用了，我们需要添加新的字体图标到原来的字体文件中。

把压缩包里面的**selection.json重新上传**，然后选中自己想要新的图标,重新下载压缩包，并替换原来的文件即可。

字体图标加载的原理与精灵图加载原理一样，服务器只需请求一次。

以icomoon为例：

![image-20210307154006788](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307154006788.png)

### 3.CSS三角

网页中常见一些三角形，如下图，使用CSS直接画出来就可以，不必做成图片或者字体图标。

![image-20210307154804837](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307154804837.png)

当给盒子设置高宽为0，四条边不一样颜色时

```css
.box {
            width: 0;
            height: 0;
            /* border: 10px solid pink; */
            border-top: 10px solid pink;
            border-left: 10px solid gray;
            border-right: 10px solid skyblue;
            border-bottom: 10px solid green;

        }
```

![image-20210307155058647](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307155058647.png)

由此我们可以发现制作三角形的做法，将一条边设置颜色，其余三条边的颜色设置透明色即可。

```css
.box1 {
            width: 0;
            height: 0;
    		/* 下面两句话是为照顾兼容性，移动端布局不需要 */
            line-height: 0;
            font-size: 0;
            border: 10px solid transparent;
            border-top-color: pink;
            margin: 100px auto;
        }
```

![image-20210307155334101](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307155334101.png)

案例：京东三角

![image-20210307155907336](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307155907336.png)

分析：利用定位

注意：top:-10px而不是-5px的原因：上下两条边框5+5=10px

案例代码：

```css
.jd {
            position: relative;
            width: 100px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
        }

        .jd span {
            position: absolute;
            left: 80px;
            top: -10px;
            width: 0;
            height: 0;
            border: 5px solid transparent;
            border-bottom-color: pink;
        }
```

实现结果：

![image-20210307160449300](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307160449300.png)

### 4.CSS用户界面样式

#### 4.1什么是界面样式

所谓的**界面样式**，就是更改一些用户操作样式，以便提高更好的用户体验。

●更改用户的鼠标样式

●表单轮廓

●防止表单域拖拽

#### 4.2鼠标样式cursor

语法：

```css
li {cursor: pointer; }
```

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

| 属性值      | 描述             |
| ----------- | ---------------- |
| default     | 小白箭头 默认    |
| pointer     | 小手             |
| move        | 移动（十字架状） |
| text        | 文本（I状）      |
| not-allowed | 禁止             |

案例代码：

```html
<ul>
        <li style="cursor: default;">我是默认样式</li>
        <li style="cursor: pointer;">我是小手样式</li>
        <li style="cursor: move;">我是移动样式</li>
        <li style="cursor: text;">我是文本样式</li>
        <li style="cursor: not-allowed;">我是禁止样式</li>
    </ul>
```

截图截不上鼠标...结果略

#### 4.2轮廓线outline

给表单添加outline: 0;或者outline: none;样式之后,就可以去掉默认的蓝色或黑色边框。（其他元素可能也有如textarea，也可以采用该语句取消轮廓线）

<u>建议写input标签时就添加该语句，取消轮廓线。</u>

语法：

```css
input {outline: none; }
```

案例代码：

默认情况

```html
<input type="text">
```

![image-20210307162518440](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307162518440.png)

取消轮廓后

```css
input {
            outline: none;
        }
```

![image-20210307162628016](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307162628016.png)

#### 4.3防止拖拽文本域resize

实际开发中,我们文本域右下角是不可以拖拽的。

<u>建议写textarea标签时就添加该语句和上一语句，取消轮廓线和防止拖拽</u>。

语法：

```css
textarea { resize: none; }
```

**一个小细节**：textarea写在一行上，默认光标在第一行并无间距；若分为两行，则如下图。

```html
<textarea name="" id="" cols="30" rows="10">
    </textarea>
```

![image-20210307163409208](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307163409208.png)

案例代码：

默认情况，可以根据右下角进行拖拽变化文本域的大小，还有默认黑色的轮廓

```html
<textarea name="" id="" cols="30" rows="10"></textarea>
```

![image-20210307163010157](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307163010157.png)

取消轮廓和防止拖拽后

```css
input,
textarea {
            outline: none;
        }

textarea {
            resize: none;
        }
```

![image-20210307163122527](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307163122527.png)

### 5.vertical-align属性应用

CSS的**vertical-align**属性使用场景：经常用于设置图片或者表单(行内块元素)和文字垂直对齐。

官方解释:用于设置一个元素的**垂直对齐方式**，但是它只<u>针对于行内元素或者行内块元素有效</u>,对块级元素无效。

语法：

```
vertical-align : baseline | top | middle
```

| 值       | 描述                                   |
| -------- | -------------------------------------- |
| baseline | 默认。元素放置在父元素的基线上         |
| top      | 把元素的顶端与行中最高元素的顶端对齐   |
| middle   | 把元素放置在父元素的中部               |
| bottom   | 把元素的顶端与行中最低的元素的顶端对齐 |

![image-20210307165405615](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307165405615.png)

#### 5.1图片、表单和文字对齐

<u>图片、表单都属于行内块元素</u>,默认的vertical- align是基线对齐。

此时可以给图片、表单这些行内块元素的**vertical-align属性设置为middle** 就可以让文字和图片垂居中对齐了。

图片案例代码：

默认情况，基线对齐

```html
<img src="img/tb.jpg" alt="">skyblue
```

![image-20210307170056820](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307170056820.png)

设置top

```css
img {
            vertical-align: top;
        }
```

![image-20210307170221618](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307170221618.png)

设置middle

![image-20210307170311530](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307170311530.png)

设置bottom

![image-20210307170343441](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307170343441.png)

表单案例：设置middle

![image-20210307170500744](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307170500744.png)

#### 5.2解决图片底部默认空白缝隙问题

bug :图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。

主要解决方法有两种:

1.给图片添加**vertical- align:middle | top| bottom**等。(只要不是基线对齐都可以，**提倡**使用这种方法)

2.把图片转换为块级元素**display: block;**

案例代码：

bug

```css
 div {
            border: 2px solid red;
        }
```

```html
    <div><img src="img/tb.jpg" alt="">skyblue</div>
```

![image-20210307171835287](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307171835287.png)

解决方法1,给图片添加**vertical- align:middle | top| bottom**等

```css
img {
            vertical-align: top;
        }
```

![image-20210307171939059](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307171939059.png)

解决方法2，把图片转换为块级元素**display: block;**(略影响后面文字)

```css
img {
            /* vertical-align: top; */
            display: block;
        }
```

删除文字：

![image-20210307172141396](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307172141396.png)

未删除文字：

![image-20210307172400412](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307172400412.png)

### 6.溢出的文字省略号显示

1.单行文本溢出显示省略号

![image-20210307191424656](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307191424656.png)

2.多行文本溢出显示省略号

![image-20210307191437090](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307191437090.png)

#### 6.1.单行文本溢出显示省略号

必须满足三个条件:

语法：

```css
/*1.先强制一行内显示文本*/
white-space: nowrap; ( 默认normal 自动换行)
/*2.超出的部分隐藏*/
overflow: hidden;
/*3.文字用省略号替代超出的部分*/
text-overflow: ellipsis;
```

注意：1.ellipsis意思是省略号2.中文会自动换行，而英文不会。

案例代码：

默认情况

```css
div {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin: 100px auto;
        }
```

```html
<div>今天，此处省略一万字</div>
```

![image-20210307191818457](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307191818457.png)

设置省略号

```css
div {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin: 100px auto;
   			 /* 默认normal，意思是自动换行 */
            /* white-space: normal; */
            /* 1.nowrap意思是不换行，单行显示 */
            white-space: nowrap;
            /* 2.隐藏溢出的文字 */
            overflow: hidden;
            /* 3.将溢出的文字改为省略号 */
            text-overflow: ellipsis;
        }
```

![image-20210307192128521](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307192128521.png)

#### 6.2多行文本溢出显示省略号

多行文本溢出显示省略号，有较大兼容性问题（因此了解即可），适合于webKit浏览器或移动端(移动端大部分是webkit内核)

语法：

```css
overflow: hidden;
text-overflow:ellipsis;
/*弹性伸缩盒子模型显示*/
display: -webkit-box;
/*限制在一个块元素显示的文本的行数*/
-webkit-line-clamp: 2;
/*设置或检索伸缩盒对象的子元素的排列方式*/
-webkit-box-orient: vertical;
```

注意：设置显示文本行数为2，则第三行文字仍会出现（如下图），所以需要严格控制盒子高度。

**更推荐让后台人员来做这个效果，因为后台人员可以设置显示多少个字，操作更简单。**

案例代码：

```css
div {
            width: 100px;
            height: 100px;
            background-color: pink;
            margin: 100px auto;
            overflow: hidden;
            text-overflow: ellipsis;
            /*弹性伸缩盒子模型显示*/
            display: -webkit-box;
            /*限制在一个块元素显示的文本的行数*/
            -webkit-line-clamp: 2;
            /*设置或检索伸缩盒对象的子元素的排列方式*/
            -webkit-box-orient: vertical;
        }
```

![image-20210307193111223](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307193111223.png)

将height改为42px后：

![image-20210307193249919](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307193249919.png)

### 7.常见布局技巧

巧妙利用一个技术更快更好的布局:

1.margin负值的运用

2.文字围绕浮动元素

3.行内块的巧妙运用

4.css三角强化

#### 7.1margin负值的运用

1.给每个图片加上边框（外面灰色边框，实现1+1=1的效果）

![image-20210307193805933](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307193805933.png)

案例代码：

默认情况

```css
ul li {
            float: left;
            list-style: none;
            width: 100px;
            height: 100px;
            border: 1px solid red;
        }
```

说明：左右两侧边框为1px，中间4条竖线都为2px（1+1=2）

![image-20210307194110218](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307194110218.png)

利用margin负值解决该问题，添加**margin-left: -1px;**

```css
ul li {
            float: left;
            list-style: none;
            width: 100px;
            height: 100px;
            border: 1px solid red;
            margin-left: -1px;
        }
```

说明：让每个盒子margin往左侧移动-1px，正好压住相邻盒子边框。li是依次出现的，1号li绘制完毕后再绘制2号li，相当于后面4个li都在跑，相对于静止，实现1+1=1的效果，所以li之间也不会有空隙。

![image-20210307194303963](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307194303963.png)

2.鼠标经过盒子显示边框（黄色边框部分）

案例代码：

默认情况

```

```

![image-20210307203231460](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307203231460.png)

说明：右侧边框没有变色，原因5号盒子的左侧边框正好压住了4号盒子边框。

**解决方法**：

1.如果盒子没有定位，则鼠标经过添加相对定位即可（因为相对定位能压住下面盒子）

2.如果li都有定位，则利用z-index提高层级

```css
ul li {
            position: relative;
            float: left;
            list-style: none;
            width: 100px;
            height: 100px;
            border: 1px solid red;
            margin-left: -1px;
        }

        /* 1.如果盒子没有定位，则鼠标经过添加相对定位即可 */
        /* ul li:hover {
            position: relative;
            border: 1px solid blue;
        } */

        /* 2.如果li都有定位，则利用z-index提高层级 */
        ul li:hover {
            z-index: 1;
            border: 1px solid blue;
        }
```

实现结果：

![image-20210307203558031](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307203558031.png)

#### 7.2文字围绕浮动元素

![image-20210307203915218](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307203915218.png)

对于上图情况，以往我们分左右两个盒子实现，但可**巧妙运用浮动元素不会压住文字的特性**实现（更好）

案例代码：

```css
<style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            width: 280px;
            height: 70px;
            background-color: pink;
            margin: 100px auto;
            padding: 5px;
        }

        .box .pic {
            float: left;
            width: 120px;
            height: 60px;
            margin-right: 5px;
        }

        .pic img {
            width: 100%;
        }
    </style>
```

```html
<div class="box">
        <div class="pic">
            <img src="img/img.png" alt="">
        </div>
        <p>[集锦]热身赛-巴西0-1秘鲁内马尔替补两人血染赛场</p>
    </div>
```

![image-20210307205249233](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307205249233.png)

**注意**：

1.<u>将图片img放入div中pic里，而不是直接放入div里，方便后期更改图片</u>

2.注意清除内外边距

3.可为了美观自主设置margin/padding值

#### 7.3行内块的巧妙运用

<u>行内块元素可以设置大小，每个中间有缝隙，还能水平居中，</u>所以可以使用它制作页面导航栏（下图），但实际中并不是用css来制作的，现在只是模仿运用。

应用：

![image-20210307205611016](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307205611016.png)

步骤：

1.先制作1-8，8个方框并进行大小、颜色等样式声明

2.将1和8修改为“上一页”和“下一页”，并设置类名修改宽度（注意权重问题）

3.设置2，6修改样式如图，如背景颜色/边框

4.“共10页 到第...”页面跳转样式制作，使用input和button标签，并修改大小，取消轮廓等

案例代码：

```css
<style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            /* 对行内块的父元素box添加水平居中，里面的行内元素/行内块元素也都会水平居中 */
            text-align: center;
        }

        .box a {
            display: inline-block;
            width: 36px;
            height: 36px;
            font-size: 14px;
            background-color: #f7f7f7;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 36px;
            text-decoration: none;
            color: #333;
        }

        .box .prev,
        .box .next {
            width: 80px;
        }

        .box .current,
        .box .elp {
            border: none;
            background-color: #fff;
        }

        .box input {
            outline: none;
            width: 45px;
            height: 36px;
            border: 1px solid #ccc;
        }

        .box button {
            width: 60px;
            height: 36px;
            background-color: #f7f7f7;
            border: 1px solid #ccc;
        }
    </style>
</head>

<body>
    <div class="box">
        <a href="#" class="prev">&lt;&lt;上一页</a>
        <a href="#">1</a>
        <a href="#" class="current">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#" class="elp">...</a>
        <a href="#" class="next">&gt;&gt;下一页</a>
        共10页 到第
        <input type="text">
        页
        <button>确定</button>
    </div>
```

实现结果：

![image-20210307212509371](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307212509371.png)

#### 7.4三角强化

应用：

![image-20210307212552551](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307212552551.png)

原理：（一个矩形减去一个三角）

![image-20210307212647162](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307212647162.png)

先制作这个非等腰的直角三角形

之前学习的三角形

![image-20210307213536429](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307213536429.png)

```css
仅将下边框设置为0
border-bottom: 0px solid green;
```

![image-20210307213632966](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307213632966.png)

```css
与我们所要的三角形接近了，增加上边框的宽度
.box1 {
            width: 0;
            height: 0;
            border-top: 10px solid pink;
            border-left: 5px solid skyblue;
            border-right: 5px solid gray;
            border-bottom: 0px solid green;
        }
```

![image-20210307213725366](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307213725366.png)

```css
跟我们所要的三角形一样，再将左边框的宽度设置为0
border-left: 0px solid skyblue;
```

![image-20210307213823065](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307213823065.png)

```
再将上或右边框颜色设置为透明即可
border-right: 5px solid transparent;
```

![image-20210307214137173](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307214137173.png)

**总结：**非等腰直角三角形的做法 （上边框宽度即三角形的高度，右边框宽度即三角形的宽度）

```css
width: 0;
height: 0; 
border-color: transparent red transparent transparent;
border-style: solid;
border-width: 22px 8px 0 0;
```

![image-20210307214514645](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307214514645.png)

案例步骤分析：

1.绘制矩形box1，加入两个价格——整体框架

2.对现在价格宽度，字体大小，颜色，背景颜色，位置（水平居中）等样式进行声明，并**添加浮动**——左边价格

3.使用i标签添加三角形，可先设置三角形颜色为蓝色（白色，红色以外的颜色）方便观察位置，通过**绝对定位**放位置——三角形

4.对之前价格字体颜色，大小，删除线等样式进行声明

5.细节（margin等）优化

**注意**：

1.通过对“现在价格”设置背景颜色和浮动实现左边价格，而不用再绘制一个红色矩形进行浮动

2.现在和之前价格的水平居中可直接对父元素price盒子添加line-height

3.将三角形**放入i标签或其他行内标签**内

```css
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>三角强化的运用</title>
    <style>
        .box1 {
            width: 0;
            height: 0;
            /* 把上边框宽度调大 */
            /* border-top: 10px solid pink;
            border-right: 5px solid transparent; */
            /* 左和下边框宽度调为0 */
            /* border-left: 0px solid skyblue;
            border-bottom: 0px solid green; */
            /* 1.只保留右边框有颜色 */
            border-color: transparent red transparent transparent;
            /* 2.样式都为solid */
            border-style: solid;
            /* 3.上边框宽度大，右边框宽度小 */
            border-width: 22px 8px 0 0;
        }

        .price {
            width: 160px;
            height: 24px;
            border: 1px solid red;
            margin: 0 auto;
            line-height: 24px;
        }

        .now {
            position: relative;
            float: left;
            width: 90px;
            height: 100%;
            background-color: red;
            text-align: center;
            color: #fff;
            font-weight: 700;
            margin-right: 8px;
        }

        .now i {
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 0;
            border-color: transparent #fff transparent transparent;
            border-style: solid;
            /* 为什么上边框是24px，等于价格盒子的高度24px，右10px随便定比较小即可 */
            border-width: 24px 10px 0 0;
            font-size: 14px;
            font-weight: 700;
        }

        .before {
            font-size: 12px;
            color: gray;
            text-decoration: line-through;
        }
    </style>
</head>

<body>
    <div class="box1"></div>
    <div class="price">
        <span class="now">
            $1999
            <i></i>
        </span>
        <span class="before">$3999</span>
    </div>
</body>

</html>
```

## 8.CSS初始化

不同浏览器对有些标签的默认值是不同的,为了消除不同浏览器对HTML文本呈现的差异,照顾浏览器的兼容,我们需要对CSS初始化

简单理解: CSS初始化是指重设浏览器的样式。(也称为CSS reset )

每个网页都必须**首先进行CSS初始化**。

这里我们以京东css初始化代码为例。

从京东官网上右键选择“查看源代码”，从link里找到“.css”京东css初始化

![image-20210307224041823](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210307224041823.png)

从中搜索margin:0，从此开始复制到clearfix{*zoom:1}



**Unicode编码字体:**

把中文字体的名称用相应的Unicode编码来代替,这样就可以有效的避免浏览器解释CSS代码时候出现乱码的问题。

比如:

黑体\9ED1\4F53

宋体\5B8B\4F53

微软雅黑\5FAE\8F6F\96C5\9ED1

注意：

每次制作页面时都要首先进行CSS初始化，会复制粘贴即可，不用背。

**CSS初始化插件未安装**

## H5C3提高

### 1.HTML5的新特性

**HTML5**的新增特性主要是针对于以前的不足，增加了一些**新的标签、新的表单和新的表单属性**等。

这些新特性都有<u>兼容性问题</u>，基本是IE9+以上版本的浏览器才支持,如果不考虑兼容性问题,可以大量使用这些新特性。

声明:

1.新特性增加了很多,但是我们专注于开发常用的新特性。

2.这里了解部分新特性,后续了解其他新特性。

#### 1.1 HTML5新增的语义化标签

以前布局,我们基本用div来做，如下，<u>实际工作中div+css的布局也比较常用</u>。div对于搜索引擎来说，是没有语义的。

```html
<div class="header"> </div>
<div class="nav"> </div>
<div class="content"> </div>
<div class="footer"> </div>
```

新增的语义化标签：

```html
<header> :头部标签
<nav> :导航标签
<article> : 内容标签
<section> :定义文档某个区域（可以理解为大号的div）
<aside> :侧边栏标签
<footer> :尾部标签
```

**注意**:

1.这种语义化标准主要是针对**搜索引擎**的

2.这些新标签页面中可以使用**多次**

3.在IE9中,需要把这些元素转换为**块级元素**（在IE中，这些元素默认不是块级元素）

4.其实, 我们移动端更喜欢使用这些标签（移动端中不存在这种兼容性问题）

5.HTML5还增加了很多其他标签,我们后面再慢慢学

![image-20210308092042475](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308092042475.png)

案例代码：

```css
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5新增的语义化标签</title>
    <style>
        header,
        nav {
            width: 800px;
            height: 120px;
            background-color: pink;
            border-radius: 15px;
            margin: 10px auto;
        }

        section {
            width: 400px;
            height: 200px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <header>头部标签</header>
    <nav>导航栏标签</nav>
    <section>某个区域</section>
</body>

</html>
```

实现结果：

![image-20210308092638037](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308092638037.png)

#### 1.2 HTML5新增的多媒体标签

HTML5在不使用插件的情况下,也可以原生的支持视频格式文件的播放,当然,支持的格式是有限的。

新增的多媒体标签主要包含两个:

**1.音频: <audio&gt;**

**2.视频: <video&gt;**

使用它们可以很方便的在页面中嵌入音频和视频，而不再去使用flash和其他浏览器插件。

##### 1.2.1视频video

当前<video&gt;元素支持三种视频格式，<u>但尽量使用mp4格式（兼容性更好些）</u>

| 浏览器            | MP4                                                     | WebM | Ogg  |
| :---------------- | :------------------------------------------------------ | :--- | :--- |
| Internet Explorer | YES                                                     | NO   | NO   |
| Chrome            | YES                                                     | YES  | YES  |
| Firefox           | YES 从 Firefox 21 版本开始 Linux 系统从 Firefox 30 开始 | YES  | YES  |
| Safari            | YES                                                     | NO   | NO   |
| Opera             | YES 从 Opera 25 版本开始                                | YES  | YES  |

语法：

```html
<video src="文件地址" controls=" controls "></video>
```

照顾低版本浏览器的：

```html
<video width="320" height="240" controls=" controls ">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    您的浏览器不支持 video 标签。
</video>
```

**视频<video&gt;——常见属性**

| 属性     | 值                                      | 描述                                                        |
| -------- | --------------------------------------- | ----------------------------------------------------------- |
| autoplay | autoplay                                | 视频就绪自动播放(谷歌浏览器需要添加muted来解决自动播放问题) |
| controls | controls                                | 向用户显示播放控件                                          |
| width    | pixels(像素)                            | 设置播放器宽度                                              |
| height   | pixels(像素)                            | 设置播放器高度                                              |
| loop     | loop                                    | 播放完是否继续播放该视频，循环播放                          |
| preload  | auto (预先加载视频) none (不应加载视频) | 规定是否预加载视频(如果有了autoplay就忽略该属性)            |
| src      | src                                     | 视频url地址                                                 |
| poster   | Ilmgurl                                 | 加载等待的画面图片                                          |
| muted    | muted                                   | 静音播放                                                    |

注:属性可以直接就写“autoplay”，但更建议写“autoplay="autoplay"”，更清晰

案例代码：

```html
    <video src="media/mi.mp4" autoplay="autoplay"></video>
```

在谷歌中：不能自动播放

![image-20210308095843250](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308095843250.png)

在IE中：可以自动播放

![image-20210308095818243](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308095818243.png)

添加muted属性解决谷歌中不能自动播放的问题

```html
    <video src="media/mi.mp4" autoplay="autoplay" muted="muted"></video>
```

![image-20210308100008687](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308100008687.png)

添加播放控件，controls="controls"

谷歌中：

![image-20210308100137276](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308100137276.png)

IE中：

![image-20210308100206455](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308100206455.png)

<u>不同浏览器默认的播放控件不同，因此我们一般不设置该属性，使用js统一设置控件</u>

<u>poster属性：网速太差加载不出来而显示的图片。</u>

```css
poster="media/mi9.jpg"
```

下图是删除了autoplay属性所展示的结果：

![image-20210308100524559](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308100524559.png)



##### 1.2.2音频: <audio&gt;

目前，<audio&gt; 元素支持的3种文件格式：MP3、Wav、Ogg。<u>但尽量使用mp3格式（兼容性更好些）</u>

| 浏览器            | MP3  | Wav  | Ogg  |
| :---------------- | :--- | :--- | :--- |
| Internet Explorer | YES  | NO   | NO   |
| Chrome            | YES  | YES  | YES  |
| Firefox           | YES  | YES  | YES  |
| Safari            | YES  | YES  | NO   |
| Opera             | YES  | YES  | YES  |

语法：

```html
<audio src="文件地址" controls="controls"></ audio>
```

照顾低版本浏览器的：

```html
< audio controls=" controls">
	<source src= "happy.mp3" type="audio/mpeg" >
	<source src= "happy.ogg" type="audio/ogg" >
	您的浏览器暂不支持<audio>标签。
</ audio>
```

**音频<audio&gt;——常见属性**

| 属性     | 值                         | 描述                                                         |
| -------- | -------------------------- | ------------------------------------------------------------ |
| autoplay | autoplay                   | 如果出现该属性，则音频在就绪后马上播放。谷歌不支持，学了js再解决 |
| controls | controls                   | 如果出现该属性，则向用户显示控件，比如播放按钮。             |
| loop     | loop                       | 如果出现该属性，则每当音频结束时重新开始播放。               |
| muted    | muted                      | 如果出现该属性，则音频输出为静音。                           |
| src      | url                        | 要播放的音频的URL                                            |
| preload  | auto<br/>metadata<br/>none | 规定当网页加载时，音频是否默认被加载以及如何被加载。         |

案例代码：

```html
    <audio src="media/music.mp3" controls="controls" autoplay="autoplay"></audio>
```

在谷歌中

![image-20210308103332308](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308103332308.png)

##### 1.2.3总结

1.音频标签和视频标签使用方式基本一致

2.浏览器支持情况不同

3.谷歌浏览器把音频和视频自动播放禁止了

<u>我们可以给视频标签添加muted属性来静音播放视频，音频不可以(可以通过JavaScript解决)</u>

4.<u>视频标签是重点,我们经常设置自动播放,不使用controls控件</u>，循环和设置大小属性</u>

#### 1.3 HTML5新增的input类型

| 属性值        | 说明                                         |
| ------------- | -------------------------------------------- |
| type="email"  | 限制用户输入必须为Email类型                  |
| type="url"    | 限制用户输入必须为URL类型                    |
| type="date"   | 限制用户输入必须为日期类型                   |
| type="time"   | 限制用户输入必须为时间类型                   |
| type="month"  | 限制用户输入必须为月类型                     |
| type="week"   | 限制用户输入必须为周类型                     |
| type="number" | 限制用户输入必须为数字类型，应用：验证码输入 |
| type="tel"    | 手机号码                                     |
| type="search" | 搜索框                                       |
| type="color"  | 生成一个颜色选择表单                         |

<u>重点记住:number、tel、search这三个</u>

案例代码：

```html
<!-- 我们验证的时候必须添加form表单域 -->
    <form action="">
        <ul>
            <li>邮箱:
                <input type="email">
            </li>
            <li>网址:
                <input type="url">
            </li>
            <li>日期：
                <input type="date">
            </li>
            <li>时间：
                <input type="time">
            </li>
            <li>数量：
                <input type="number">
            </li>
            <li>手机号码：
                <input type="tel">
            </li>
            <li>搜索：
                <input type="search">
            </li>
            <li>颜色：
                <input type="color">
            </li>
            <!-- 点击提交按钮验证表单信息 -->
            <li>
                <input type="submit" value="提交">
            </li>
        </ul>
```

实现结果：

注意：只有点击“提交”按钮时才会验证信息并给出提示

![image-20210308105644530](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308105644530.png)

![image-20210308105708478](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308105708478.png)

PC端日期：

![image-20210308105759570](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308105759570.png)

手机端日期：

![image-20210308105827066](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308105827066.png)

PC端时间：

![image-20210308105938061](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308105938061.png)

手机端时间：

![image-20210308105956404](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308105956404.png)

搜索：

![image-20210308110037304](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308110037304.png)

可以点击“x”清空搜索表单内的内容

颜色：

![image-20210308110023429](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308110023429.png)

手机端数量：（显示数字键盘）

![image-20210308110317168](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308110317168.png)

一些缺点/问题：

数量表单内可以填写"e"

![image-20210308110218942](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308110218942.png)

#### 1.4 HTML5新增的表单属性

| 属性         | 值        | 说明                                                         |
| ------------ | --------- | ------------------------------------------------------------ |
| required     | required  | 表单拥有该属性表示其内容不能为空，必填                       |
| **placeholder**  | 提示文本  | 表单的提示信息，存在默认值将不显示                           |
| autofocus    | autofocus | 自动聚焦属性，页面加载完成自动聚焦到指定表单                 |
| autocomplete | off/ on   | 当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。    默认已经打开，如autocomplete="on"，关闭autocomplete ="off"需要放在表单内，同时加上name属性，同时成功提交 |
| **multiple**     | multiple  | 可以多选文件提交                                             |

案例代码：

```html
<form action="">
        <input type="search" name="" id="">
        <input type="submit" value="搜索">
    </form>
```

1.required属性：添加：required="required"

![image-20210308111530140](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308111530140.png)

2.**placeholder**属性：添加：placeholder="pink"

![image-20210308111650604](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308111650604.png)

输入文字后，提示信息消失

![image-20210308111727323](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308111727323.png)

还可以设置提示信息“pink”的样式

```css
<style>
        input::placeholder { 
            color: pink;
        }
    </style>
```

![image-20210308111947094](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308111947094.png)

典型应用：淘宝/京东的搜索框

![image-20210308111821855](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308111821855.png)

3.autofocus属性：添加：autofocus="autofocus"

一刷新页面，光标自动定位到表单内

![image-20210308112202741](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308112202741.png)

4.*autocomplete属性*：1.添加autocomplete="on"2.加上name属性3.成功提交“blue”

```html
<form action="">
        <input type="search" name="sear" id="" required="required" placeholder="pink" autofocus="autofocus" autocomplete="on">
        <input type="submit" value="搜索">
    </form>
```

![image-20210308112418671](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308112418671.png)

<u>由于缺乏隐私性，因此一般设置为autocomplete ="off"</u>

5.**multiple**属性：添加multiple="multiple"。<u>一般应用于选择文件，默认只能选择一个文件。</u>

```html
<input type="file" name="" id="" multiple="multiple">
```

![image-20210308112957280](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308112957280.png)

### 2.CSS3的新特性

#### 2.1 CSS3的现状

●新增的CSS3特性有兼容性问题 , ie9+才支持

●移动端支持优于PC 端。

●不断改进中

●应用相对广泛

●现阶段主要学习 :新增选择器和盒子模型以及其他特性

**CSS3新增选择器**

CSS3给我们新增了选择器，可以更加便捷,更加自由的选择目标元素。

1.属性选择器

2.结构伪类选择器

3.伪元素选择器

#### 2.2属性选择器

属性选择器可以根据<u>元素特定属性</u>来选择元素。这样就可以不用借助于类或者id选择器。

| 选择符           | 简介                                  |
| ---------------- | ------------------------------------- |
| E[att]           | 选择具有att属性的E元素                |
| **E[att="val"]** | 选择具有att属性且属性值等于val的E元素 |
| E[att^="val"]    | 匹配具有att 属性且值以val开头的E元素  |
| E[att$="val"]    | 匹配具有att属性且值以val结尾的E元素   |
| E[att* ="val"]   | 匹配具有att属性且值中含有val的E元素   |

**注意:类选择器、属性选择器、伪类选择器,权重为10。**【】中括号内的才是属性选择器。

如：input[value]权重=1+10=11（标签选择器+属性选择器）

案例代码：

1.E[att]选择符

```css
<style>
        input[value] {
            color: pink;
        }
    </style>

<!-- 1.利用属性选择器就可以不用借助于类或id选择器 -->
    <input type="text" name="" id="" value="请输入">
    <input type="text" name="" id="">
```

![image-20210308114818982](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308114818982.png)

2.**E[att="val"]**

````css
input[type="text"] {
            color: pink;
        }

<!-- 2.利用属性=值的某些元素 重点，务必掌握 -->
    <input type="text" name="" id="">
    <input type="password" name="" id="">
````

![image-20210308115108293](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308115108293.png)

可以看见text输入文字是粉色的，password输入文字还是默认黑色的

3.E[att^="val"]

```css
/* 选择首先是div，然后具有class属性且属性值以icon开头的元素 */
        div[class^="icon"] {
            color: red;
        }
  
 <!-- 3.属性选择器可以选择属性值开头的某些元素 -->
    <div class="icon1">图标1</div>
    <div class="icon2">图标2</div>
    <div class="icon3">图标3</div>
    <div>我是打酱油的</div>
```

![image-20210308120333407](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308120333407.png)

说明：实现让图标颜色都变红，此处不能使用div[class]，因为一个页面中有很多个div.class。

4.E[att$="val"]

```css
/* 选择首先是section，然后具有class属性且属性值以data结尾的元素 */
        section[class$="data"] {
            color: blue;
        }
        
<!-- 4.属性选择器可以选择属性值结尾的某些元素 -->
    <section class="icon1-data">哥斯拉</section>
    <section class="icon2-data">安琪拉</section>
    <section class="icon3-ico">不安了</section>
```



![image-20210308120656589](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308120656589.png)

说明：实现让以“拉”字结尾的元素颜色变红。

5.E[att* ="val"]

```css
/* 选择首先是span，然后具有class属性且属性值里有"an"的元素，不管an在开头结尾还是中间 */
        span[class*="an"] {
            color: green;
        }

<!-- 5.属性选择器可以选择有相同属性值（不管在何处位置）的某些元素 -->
    <span class="gesila">哥斯拉</span>
    <span class="anqila">安琪拉</span>
    <span class="buanle">不安了</span>
```

![image-20210308121441600](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308121441600.png)

说明：实现让带”安“字的颜色变绿。

#### 2.3结构伪类选择器

结构伪类选择器主要根据**文档结构**来选择器元素，常用于根据父级选择器里面的子元素

| 选择符              | 简介                        |
| ------------------- | --------------------------- |
| E :first-child      | 匹配父元素中的第一个子元素E |
| E :last-child       | 匹配父元素中最后一个E元素   |
| **E :nth-child(n)** | 匹配父元素中的第n个子元素E  |
| E :first-of-type    | 指定类型E的第一个           |
| E :last-of-type     | 指定类型E的最后-一个        |
| E :nth-of-type(n)   | 指定类型E的第n个            |

**注意**：

1.E与冒号之间必须要有一个空格

2.如果前面有两个标签如ul li，则与冒号之间没有空格

3.<u>使用ul li:first-child比ul :first-child更安全</u>，如 div p，原因：div里面有很多种类标签元素，这样可以更清晰的指定。

<u>4.**E :nth-child(n)**，n可以是数字,关键字和公式</u>。

●n如果是数字，就是选择第n个子元素，里面数字从1开始...

●n可以是关键字: even偶数, odd奇数

●n可以是公式:常见的公式如下(<u>如果n是公式，则从0开始计算</u>，但是第0个元素或者超出了元素的个数会被忽略)

5.权重问题：ol li:nth-child(2n)的权重为1+1+10=12

6.前三种选择符和后三种选择符相似，但存在**区别：**

1. **nth-child 对父元素里面所有孩子排序选择(序号是固定的)先找到第n个孩子。然后看看是否和E匹配**（先找孩子后元素匹配，以孩子为重child）。更适合用于无序列表（里面只有li标签）。
2. **nth-of-type 对父元素里面指定子元素进行排序选择。先去匹配E . 然后再根据E找第n个孩子**（先找指定元素，后找里面的孩子，以指定元素为重type，执行顺序正好与child相反）。适合多类型盒子嵌套情况。

| 公式 | 取值                          |
| ---- | ----------------------------- |
| 2n   | 偶数,等价于even               |
| 2n+1 | 奇数                          |
| 5n   | 5 10 15...（5的倍数）         |
| n+5  | 从第5个开始(包含第五个)到最后 |
| -n+5 | 前5个(包含第5个)              |

1.E:first-child

```css
<style>
        ul li:first-child {
            color: pink;
        }
    </style>
```

![image-20210308123227607](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308123227607.png)

2.E :last-child

```css
<style>
        ul li:last-child {
            color: pink;
        }
    </style>
```

![image-20210308123509742](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308123509742.png)

3.**E :nth-child(n)** 

**n是数字**

给第二个孩子变蓝色

```css
ul li:nth-child(2) {
            color: blue;
        }
```

![image-20210308123626331](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308123626331.png)

**n是关键字**

给所有奇数孩子变粉色，所有偶数孩子变粉色

```css
/* 选择所有奇数odd孩子 */
        ul li:nth-child(odd) {
            background-color: pink;
        }
/* 选择所有偶数even孩子 */
        ul li:nth-child(even) {
            background-color: green;
        }
```

![image-20210308142701230](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308142701230.png)

**n是公式**

给所有孩子变灰色

```css
/* 括号里只能填n，不能是其他字母，从0开始，每次+1，往后面计算，此处为选择所有孩子 */
        ol li:nth-child(n) {
            background-color: gray;
        }
```

![image-20210308142752090](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308142752090.png)

同样可以实现关键字给偶数、奇数孩子分别设置样式的效果

```css
/* 等价于even */
        ol li:nth-child(2n) {
            background-color: skyblue;
        }
        /* 等价于odd */
        ol li:nth-child(2n+1) {
            background-color: red;
        }
```

![image-20210308144244102](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308144244102.png)

实现前3个孩子为一个样式，后面孩子一个样式

```css
/* 选择前3个孩子 */
        ol li:nth-child(-n+3) {
            background-color: skyblue;
        }

        /* 选择第4个孩子到最后一个孩子 */
        ol li:nth-child(n+4) {
            background-color: red;
        }
```

![image-20210308144514366](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308144514366.png)

4-6与1-3的区别：

实现：让熊大字体为红色。

```css
<style>
        /* nth-child会先给所有的盒子排列标号，执行的时候首先看nth-child(1)，看孩子；然后回去看前面的div，元素是否匹配 */
        section div:nth-child(1) {
            color: red;
        }
    </style>
```

```html
<section>
        <p>光头强</p>
        <div>熊大</div>
        <div>熊二</div>
    </section>
```

![image-20210308145844984](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308145844984.png)

说明：先给盒子排列标号，光头强为1号，熊大为2号，熊二为3号。执行是查找1号孩子即光头强p标签，但与div不匹配，因此不会变色。

```css
/* nth-of-type会先选择出指定的元素，再给指定元素排列标号，执行的时候首先看div 指定的元素，然后在看nth-of-type(1)第几个孩子 */
        section div:nth-of-type(1) {
            color: red;
        }
```

![image-20210308150330159](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308150330159.png)

说明：先选择出指定元素div，再从div中找第一个孩子。因此熊大会变色。



**小结**
●结构伪类选择器一般用于选择父级里面的第几个孩子
●nth-child对父元素里面所有孩子排序选择(序号是固定的)先找到第n个孩子,然后看看是否和E匹配
●nth-of-type 对父元素里面指定子元素进行排序选择。先去匹配E , 然后再根据E找第n个孩子
●关于 nth-child (n)我们要知道n是从0开始计算的,要记住常用的公式
●如果是无序列表，我们肯定用nth-child更多
●类选择器、 属性选择器、伪类选择器,权重为10。

#### <u>2.4伪元素选择器(重点)</u>

伪元素选择器可以帮助我们利用CSS创建新标签元素，而不需要HTML标签,从而简化HTML结构。

| 选择符   | 简介                     |
| -------- | ------------------------ |
| ::before | 在元素内部的前面插入内容 |
| ::after  | 在元素内部的后面插入内容 |

应用如：

![image-20210308151601396](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308151601396.png)

**注意:**
●**before** 和**after**创建一个元素 ,这个元素属于**行内元素**，因此无法设置宽度和高度

●新创建的这个元素在文档树中是找不到的，所以我们称为**伪元素**

●语法**: element::before {}**，注意是两个冒号

●before 和after<u>必须有**content**属性</u>，即使内容为空content:";

●before 在**父元素内容的前面**创建元素, after 在父元素内容的后面插入元素。

![image-20210308152742350](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308152742350.png)

●**伪元素选择器和标签选择器一样,权重为1**。如div::before权重为1+1=2

案例代码:

```css
div {
            width: 200px;
            height: 100px;
            background-color: pink;
        }

        div::before {
            /* content属性必须写 */
            content: '我';
        }

        div::after {
            /* content属性必须写 */
            content: 'auue';
        }
        
  <div>
        是
    </div>
```

实现结果：新创建的这个元素在文档树中是找不到的.

![image-20210308152629915](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308152629915.png)

#### 2.5伪元素选择器使用场景

##### 2.5.1案例一 伪元素字体图标

实现：

![image-20210308153337640](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308153337640.png)

分析步骤：1.box边框制作2.放入图标箭头3.使用<u>绝对定位</u>（浮动好像也可以）放置到合适的位置

案例代码：

```html
<style>
        @font-face {
            font-family: 'icomoon';
            src: url('fonts/icomoon.eot?ov842e');
            src: url('fonts/icomoon.eot?ov842e#iefix') format('embedded-opentype'),
                url('fonts/icomoon.ttf?ov842e') format('truetype'),
                url('fonts/icomoon.woff?ov842e') format('woff'),
                url('fonts/icomoon.svg?ov842e#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
            font-display: block;
        }

        div {
            position: relative;
            width: 200px;
            height: 40px;
            border: 2px solid #ccc;
        }

        div::after {
            position: absolute;
            top: 10px;
            right: 10px;
            font-family: 'icomoon';
            /* 图标也可以写成这种形式方便区分不同的字体图标，/是转义字符 */
            content: "\e900";
            /* content: ''; */
        }
```

![image-20210308154949220](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308154949220.png)

注意：图标也可以写成content: "\e900";（在框框的左边复制）这种形式方便区分不同的字体图标，/是转义字符

##### 2.5.2案例二 土豆遮罩案例改进

注：取消了img的绝对定位（没有必要），删去了mask盒子，将.mask选择器改为.tudou::before ，同理鼠标经过盒子时将里面的before显示出来。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>土豆案例之遮罩</title>
    <style>
        .tudou {
            position: relative;
            width: 490px;
            height: 276px;
            background-color: pink;
            margin: 100px auto;
        }

        .tudou img {
            width: 100%;
            height: 100%;
        }

        .tudou::before {
            content: '';
            /* 隐藏遮罩 */
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .4) url(img/download.png) no-repeat center;
        }

        /* 当我们鼠标经过了tudou这个盒子，就让里面的before盒子显示 */
        .tudou:hover::before {
            /* 显示元素 */
            display: block;
        }
    </style>
</head>

<body>
    <div class="tudou">
        <img src="img/tudou.jpg" alt="">
    </div>
</body>

</html>
```

![image-20210308161327757](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308161327757.png)



##### 2.5.3伪元素清除浮动原理解释

清除浮动有4种方法：

1.额外标签法也称为隔墙法，是W3C推荐的做法。

2.父级添加overflow属性

3.**父级添加after伪元素**

4.**父级添加双伪元素**

后面两种伪元素清除浮动算是第一种额外标签法的一个升级和优化。



3.**父级添加after伪元素**

![image-20210308162210567](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308162210567.png)

4.**父级添加双伪元素**

![image-20210308162330364](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308162330364.png)

![image-20210308162239150](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308162239150.png)

#### 2.6 CSS3盒子模型

CSS3中可以通过**box-sizing**来指定盒子模型,有2个值:即可指定为**content-box、border-box** ,这样我们
计算盒子大小的方式就发生了改变。

可以分成两种情况:

1.box- sizing: content- box盒子大小为width + padding + border ( 以前默认的)

2.**box-sizing: border-box盒子大小为width**，不会撑大盒子，不用做加减法了（yeah）

如果盒子模型我们改为了box-sizing: border-box , 那padding和border就<u>不会撑大盒子</u>了 (前提padding
和border不会超过width宽度)

案例代码：

```css
div {
            width: 200px;
            height: 200px;
            background-color: pink;
            border: 20px solid red;
            padding: 10px;
            box-sizing: content-box;
        }

        p {
            width: 200px;
            height: 200px;
            background-color: pink;
            border: 20px solid red;
            padding: 10px;
            box-sizing: border-box;
        }
```

实现结果：

![image-20210308163511347](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308163511347.png)

以后如无兼容性问题，css第一块代码就可写成

```css
* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
```

#### *2.7 CSS3其他特性*

1.图片变模糊
2.计算盒子宽度width: calc函数

##### 2.7.1图片变模糊

**CSS3滤镜filter**:
filter CSS属性将模糊或颜色偏移等图形效果应用于元素。

语法：

```css
filter:函数();
例如: filter: blur(5px); blur模糊处理 数值越大越模糊.blur是函数，括号内的数值必须加px
```

![image-20210308164138234](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308164138234.png)


案例代码：让图片变模糊，并让鼠标经过时图片变清晰

```css
img {
            /* blur是函数，小括号内的数值越大，图片越模糊，注意数值后一定要加px单位 */
            filter: blur(10px);
        }

        img:hover {
            filter: blur(0px);
        }
```

实现结果：

![image-20210308164522782](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308164522782.png)

鼠标经过

![image-20210308164556211](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308164556211.png)

##### 2.7.2CSS3 calc函数

calc()此CSS函数让你在声明CSS属性值时执行一些计算。

语法：

```css
width: calc(100% - 80px);
```

括号里面可以使用+ -* /来进行计算。

**注意：**

**1.运算符左右需要有空格，否则无效**，不符合运算规则。

2.也适用于高度。

案例代码：让子盒子的宽度始终比父盒子宽少20px

```css
div {
            width: 200px;
            height: 50px;
            background-color: pink;
        }

        p {
            width: calc(100% - 20px);
            height: 20px;
            background-color: skyblue;
        }
```

实现结果：

![image-20210308165402228](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308165402228.png)

![image-20210308165653755](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308165653755.png)

#### <u>2.8CSS3过渡</u>

##### 2.8.1过渡

过渡( transition)是CSS3中具有颠覆性的特征之一，我们可以在不使用Flash 动画或JavaScript的情况下,当元素从一种样式变换为另一种样式时为元素添加效果。

过渡动画:是从一个状态渐渐的过渡到另外一个状态

可以让我们页面更好看,更动感十足,虽然低版本浏览器不支持( ie9以下版本)但是不会影响页面布局。

**我们现在经常和:hover 一起搭配使用**。

语法：

```
transition:要过渡的属性 花费时间 运动曲线 何时开始;
```

四个参数，之间用空格隔开，前两个参数必须写

**记住过渡的使用口诀:谁做过渡，给谁加**

**1.属性**:想要变化的css属性，宽度高度背景颜色内外边距都可以。如果想要所有的属性都变化过渡，写一个**all** 就可以。
**2.花费时间**:单位是秒(必须写单位)比如0.5**s**，**必须写上s单位**
**3.运动曲线**:默认是ease ( 可以省略)
**4.何时开始**: 单位是秒(必须写单位)可以设置延迟触发时间默认是0s ( 可以省略)

<u>注意：最好高度宽度增大/缩小速度（px/s）一样，这样过渡会更流畅。</u>

案例代码：

```css
div {
            width: 200px;
            height: 200px;
            background-color: skyblue;
            /* transition:要过渡的属性 花费时间 运动曲线 何时开始; */
            /* 给div下的宽度进行过渡，因此给div加过渡 */
            /* transition: width 1s; */
            /* 想给多个属性进行过渡，利用逗号进行分割 */
            /* transition: width 1s，height 0.5s; */
            /* 想给多个属性进行过渡，属性直接写all就写，更推荐改种做法 */
            transition: all .5s;
        }

        div:hover {
            width: 400px;
            height: 400px;
            background-color: pink;
        }
```

实现结果：鼠标经过后宽度、高度慢慢变大，颜色变粉

![image-20210308172000176](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308172000176.png)

##### 2.8.2进度条案例

实现：

![image-20210308172237151](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308172237151.png)

1.进度条如何布局——一个父框，一个子框

2.过渡的使用

案例代码：

```css
.father {
            width: 200px;
            height: 20px;
            border: 1px solid red;
            border-radius: 10px;
            padding: 1px;
        }

        .son {
            width: 50%;
            height: 100%;
            background-color: red;
            border-radius: 10px;
            transition: width .7s;
        }

        .father:hover .son {
            width: 100%;
        }
```

实现结果：进度条缓慢过渡到底端

![image-20210308172959914](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308172959914.png)

![image-20210308173024316](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210308173024316.png)

##### 2.8.3课后作业

利用过渡制作小米logo效果



#### 2.9 2D转换

**转换( transform )**是CSS3中具有颠覆性的特征之一,可以实现元素的位移、 旋转、缩放等效果。

转换( transform )你可以简单理解为变形

●移动: translate 

●旋转: rotate

●缩放: scale 

##### 2.9.1二维坐标系

2D转换是改变标签在二维平面上的位置和形状的一种技术，先来学习二维坐标系

##### 2.9.2 2D转换之移动translate

2D移动是2D转换里面的一种功能,可以改变元素在页面中的位置，类似**定位**（更似相对定位）。

语法：

```css
transform: translate(x,y);带px单位，或者分开写
transform: translateX(n) ;
transform: translateY(n) ;
```

**注意:**

1.定义2D转换中的移动,沿着X和Y轴移动元素，**用逗号隔开**。可利用此**实现鼠标经过盒子上移**。

2.translate最大的优点 :**不会影响到其他元素的位置**

3.translate中的**百分比单位**是相对于**自身元素**的 translate:(50%,50%);可利用此**实现盒子水平垂直居中**（改进原先做法，思路大致不变，绝对定位+移动）

4.**对行内标签没有效果**

5.**x,y是代表x轴移动x距离，y轴移动y距离**

案例代码：

只移动x坐标

```css
/* 1.只移动x坐标，两种方法 */
            transform: translate(100px, 0);
            /* transform: translateX(100px); */
```

![image-20210311103433705](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311103433705.png)

同理，只移动y坐标

```css
/* 2.只移动y坐标，两种方法 */
            /* transform: translate(0, 100px); */
            transform: translateY(100px);
```

![image-20210311103619430](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311103619430.png)

translate最大的优点 :不影响到其他元素的位置，并保留原有位置。

```css
 div:first-child {
            background-color: pink;
            transform: translate(50px, 50px);
        }

        div:last-child {
            background-color: purple;
        }
```

![image-20210311103803032](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311103803032.png)

**实现鼠标经过盒子，盒子上移效果**：

```css
div:first-child {
            background-color: pink;
            /* transform: translate(50px, 50px); */
        }

        div:last-child {
            background-color: purple;
        }

        div:first-child:hover {
            transform: translateY(-5px);
        }
```

![image-20210311104135916](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311104135916.png)

<u>**实现盒子水平垂直居中**</u>

```css
div {
            position: relative;
            width: 400px;
            height: 400px;
            background-color: pink;
        }

        p {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200px;
            height: 200px;
            background-color: green;
            /* 原来的做法，数值定死，一旦盒子宽高变化就得改变 */
            /* margin-top: -100px;
            margin-left: -100px; */
            /* 现在的做法，更灵活 */
            transform: translate(-50%, -50%);
        }
```

![image-20210311110152885](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311110152885.png)

对行内元素无效

```css
span {
            transform: translate(300px, 200px);
        }
```

![image-20210311110434516](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311110434516.png)

##### 2.9.3 2D转换之旋转rotate

2D旋转指的是让元素在2维平面内顺时针旋转或者逆时针旋转。

![image-20210311110840456](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311110840456.png)

语法:

```css
transform: rotate (度数)
```

**注意：**
●rotate里面跟度数，单位是deg比如rotate(45deg)，deg是degree度数的缩写

●角度为正时，顺时针；负时，为逆时针

●默认旋转的中心点是元素的中心点

案例代码：

```css
img {
            width: 100px;
            height: 100px;
            transform: rotate(45deg);
        }
```

![image-20210311112208359](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311112208359.png)

案例：实现鼠标经过图片时，图片旋转360°

```css
img {
            width: 100px;
            height: 100px;
            transform: rotate(45deg);
            border: 2px solid pink;
            border-radius: 50px;
            /* 谁做过渡给谁加 */
            transition: all 1s;
        }

        img:hover {
            transform: rotate(360deg);

        }
```

![image-20210311112411957](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311112411957.png)

**案例：三角形箭头**

![image-20210311113250874](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311113250874.png)

三角箭头制作思路：只取四角矩形边框中相连的两条，再进行旋转即可

并实现鼠标经过盒子时，向下的箭头变向上

```css
div {
            position: relative;
            width: 200px;
            height: 30px;
            border: 1px solid #000;
        }

        div::after {
            content: '';
            position: absolute;
            top: 8px;
            right: 14px;
            width: 10px;
            height: 10px;
            border-right: 1px solid #000;
            border-bottom: 1px solid #000;
            transform: rotate(45deg);
            transition: all 0.2s;
        }

        /* 鼠标经过div时，里面的箭头旋转 */
        div:hover::after {
            /* 注意是180+45=225，而不是180 */
            top: 12px;
            transform: rotate(225deg);
        }
```

![image-20210311114340996](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311114340996.png)

![image-20210311114349604](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311114349604.png)

##### 2.9.4 2D转换中心点transform-origin

我们可以用**transform-origin**属性设置元素转换的中心点。

语法：

```css
transform-origin: x y;
```

**注意：**

●注意后面的参数 x和y用**空格隔开**

●x，y默认转换的中心点是**元素的中心点**(50% 50%)

●还可以给x，y设置<u>像素或者方位名词</u>( top bottom left right center )，像素是相对于自身元素的

案例代码：

当鼠标经过盒子时，盒子围绕左下角顶点旋转360°

```css
div {
            width: 200px;
            height: 200px;
            background-color: green;
            margin: 100px auto;
            /* 1.默认转换中心点是50% 50%,等同于center center */
            /* 2.将转换中心点改成左下角顶点 */
            transform-origin: bottom left;
            transition: all 1s;
        }

        div:hover {
            transform: rotate(360deg);
        }
```

![image-20210311120031747](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311120031747.png)

也可将旋转中心改为（50px 50px）

```css
transform-origin: 50px 50px;
```

![image-20210311120013473](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311120013473.png)

**案例：盒子/文字旋转出现（鼠标经过盒子，里面的文字逆时针旋转出现）**<u>经常会用到</u>

思路：需要一个父盒子，一个子盒子，同宽高。先将子盒子旋转到父盒子外围（将转换中心修改为左下角），鼠标经过父盒子时，子盒子**再回到原来的位置（0deg）**。最后给父元素添加overflow即可

```css
div {
            overflow: hidden;
            width: 200px;
            height: 200px;
            border: 1px solid pink;
            margin: 100px auto;
        }

        div::after {
            content: '文字';
            display: block;
            width: 100%;
            height: 100%;
            background-color: grey;
            transform-origin: left bottom;
            transform: rotate(90deg);
            transition: all 1s;
        }

        /* 鼠标经过父盒子时，里面的子盒子复原 */
        /* 注意是复原到原始角度，而不是逆时针旋转，逆时针转 90无法回到初始位置 */
        div:hover::after {
            transform: rotate(0deg);
        }
```

![image-20210311134259997](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311134259997.png)

![image-20210311134317782](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311134317782.png)

从无到有，文字逆时针出现。

##### 2.9.5 2D转换之缩放scale

缩放,顾名思义，可以放大和缩小。只要给元素添加上了这个属性就能控制它放大还是缩小。

语法：

```css
transform: scale(x,y);
```

**注意**:

●注意其中的x和y用**逗号分隔**，**里面的数字不跟单位**，数字即倍数，数字可有小数

●transform:scale(1,1) : 宽和高都放大1倍,相对于没有放大

●transform:scale(2,2) : 宽和高都放大了2倍

●transform:scale(2) :只写一个参数，第二个参数则和第一个参数一样，相当于scale(2，2)，相当于等比例缩放

●transform:scale(0.5,0.5) :缩小

●<u>sacle缩放最大的优势:可以设置转换中心点缩放，默认**以中心点缩放的**，**而且不影响其他盒子</u>**。若通过设置width、height的具体数值来缩放，宽度向左右伸展，而高度只向下伸展，且会影响其他盒子。

●经常与鼠标经过、transition结合使用

●注意下方两个经典案例运用



案例代码：

```css
div {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
        }

        div:hover {
            /* 1.里面写的数字不跟单位，是倍数的意思，1即1倍，2即2倍 */
            /* transform: scale(x,y); */
            /* transform: scale(1, 1); */
            /* 2.将宽度变为原来的2倍，高不变 */
            /* transform: scale(2, 1); */
            /* 3.等比例缩放，同时缩放宽度和高度，里面写一个参数即可 */
            /* transform: scale(2); */
            /* 4.当数值小于1时，变为缩小 */
            transform: scale(0.5);
        }
```

![image-20210311140454395](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311140454395.png)

![image-20210311140508992](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311140508992.png)

可以发现不影响后面盒子“234”的布局。

**图片放大案例**：鼠标经过图片时，图片等比例放大但不超过外边框

```css
		.box {
            overflow: hidden;
        }

		img {
            transition: all .4s;
        }

        .box:hover img {
            transform: scale(1.2);
        }
```

**分页按钮案例**，鼠标经过分页时，该数字所在盒子放大

![image-20210311144803009](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311144803009.png)

```css
		ul li {
            float: left;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid pink;
            border-radius: 50%;
            margin: 10px;
            list-style: none;
            cursor: pointer;
            transition: all .4s;
        }

        li:hover {
            transform: scale(1.2);
        }
```

![image-20210311145307468](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311145307468.png)

**注意：上面两个案例都要与transition结合使用，动画效果更佳**

##### 2.9.6 2D转换综合写法

**注意:**
1.可以同时使用多个转换,其格式为: 中间空格隔开

```css
transform: translate() rotate() scale();
```

2.其顺序会影响转换的效果。( 先旋转会改变坐标轴方向)

3.当我们同时有位移和其他属性的时候，**记得要将位移放到最前面**

案例代码：让盒子旋转着右走

```css
div {
            width: 100px;
            height: 100px;
            background-color: grey;
            transition: all .4s;
        }

        div:hover {
            transform: translate(250px, 50px) rotate(180deg);
        }
```

##### 2.9.7 2D转换总结

●转换transform我们简单理解就是变形有2D和3D之分

●我们暂且学了三个分别是位移、旋转和缩放

●2D 移动translate(x, y)最大的优势是不影响其他盒子,里面参数用% ,是相对于自身宽度和高度来计算的

●可以分开写比如translateX(x)和translateY(y) 

●2D旋转rotate(度数) 可以实现旋转元素度数的单位是deg

●2D 缩放sacle(x,y)里面参数是数字，不跟单位，可以是小数，最大的优势不影响其他盒子

●设置转换中心点 transform-origin:x y;参数可以百分比、像素或者是方位名词

●当我们进行综合写法,同时有位移和其他属性的时候,记得要将位移放到最前

#### 2.10动画

**动画( animation )**是CSS3中具有颠覆性的特征之一,可通过设置多 个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。

相比较过渡，动画可以实现更多变化，更多控制，连续自动播放等效果。

##### 2.10.1动画的基本使用

制作动画分为两步:

1.先定义动画

2.再使用(调用)动画

**1.用keyframes定义动画(类似定义类选择器)**

```css
@keyframes 动画名称{
	0%{
		width: 100px;
	}
	100%{
		width: 200px;
	}
```

**动画序列**
●0% 是动画的**开始**, 100%是动画的**结束**。这样的规则就是动画序列。

●在 **@keyframes**(意思是关键帧)中规定某项CSS样式，就能创建由当前样式逐渐改为新样式的动画效果。

●动画是使元素从一种样式逐渐变化为另一种样式的效果。 可以改变任意多的样式任意多的**次数**。

●用百分比来规定变化发生的时间 ,或用关键词**"from'和"to"** ,**等同于0%和100%。**

**2.元素使用动画**

```css
div {
	width: 200px;
	height: 200px; 
	background-color: aqua;
	margin: 100px auto;
	/*调用动面*/
	animation-name:动画名称; 
	/*持续时间或理解为动画所花费的时间，一定要带单位s*/
	animation-duration:持续时间;
}
```

**案例代码：实现页面一打开，一个盒子自动从左往右水平移动**

```css
/* 利用动画，实现页面一打开，一个盒子自动从左往右水平移动 */
        /* 1.定义动画 */
        @keyframes move {
            /* 开始状态 */
            0% {
                transform: translateX(0px);
            }

            /* 结束状态 */
            100% {
                transform: translateX(1500px);
            }
        }

        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            /* 2.调用动画 */
            /* 动画名称 */
            animation-name: move;
            /* 持续时间 */
            animation-duration: 2s;
        }
```

**案例代码：实现盒子绕页面跑一圈。**

分析：除0%外，还要设置4个状态（不包括0%，100%**/4**=25%，每隔25%设置一个关键帧），共5个状态。

**注意：**

1.可以做多个状态的变化

2.里面的百分比必须是整数

3.百分比就是总的时间（我们这个案例10s）的划分，注意划分数量时，不要包括0%的状态。

4.一定要设置第五个状态100%，否则最后盒子会瞬移回去，没有动画效果。

5.0%状态可写可不写

![image-20210311154751061](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311154751061.png)

```css
@keyframes move {
            0% {
                transform: translate(0px, 0px);
            }

            25% {
                transform: translate(1000px, 0px);
            }

            50% {
                transform: translate(1000px, 500px);
            }

            75% {
                transform: translate(0px, 500px);
            }

            100% {
                transform: translate(0px, 0px);
            }
        }

        div {
            width: 100px;
            height: 100px;
            background-color: pink;
            animation-name: move;
            animation-duration: 10s;
        }
```

##### 2.10.2动画常用属性

| 属性                       | 描述                                                         |
| -------------------------- | ------------------------------------------------------------ |
| @keyframes                 | 规定动画。                                                   |
| animation                  | 所有动画属性的简写属性，除了animation-play-state属性。       |
| animation-name             | 规定@keyframes动画的名称。( 必须的)                          |
| animation-duration         | 规定动画完成个周期所花费的秒或毫秒 ，默认是0。( 必须的)      |
| animation- timing-function | 规定动画的速度曲线，默认是"ease"                             |
| animation-delay            | 规定动画何时开始，默认是0。                                  |
| animation-iteration-count  | 规定动画被播放的次数，默认是1，无限次是infinite              |
| animation-direction        | 规定动画是否在下一周期逆向播放,默认是"normal ",“alternate”逆播放 |
| animation-play-state       | 规定动画是否正在运行或暂停。默认是“running",暂停是"pausde"。与鼠标经过配合使用。 |
| animation-fill-mode        | 规定动画结束后状态，保持forward,s回到起始backwards           |

记住几个常用的即可。

##### 2.10.3 动画简写属性

animation :动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态;（前两个不能省略，后面若取默认值可省略，但顺序不能改变）

```css
animation: myfirst 5s linear 2s infinite alternate;
```

linear:匀速运动

**注意**：

●简写属性里面不包含 animation-play-state

●暂停动画 : animation-play-state: puased; 经常和鼠标经过等其他配合使用

●想要动画走回来 ,而不是直接跳回来: animation-direction : alternate

●盒子动画结束后 ,停在结束位置: animation-fill-mode : forwards

```css
/* animation: name duration timing-function delay iteration-count direction fill-mode; */
animation: move 4s linear infinite alternate;
```

##### 2.10.4热点图例效果实现案例

实现：

![image-20210311173828736](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311173828736.png)

![image-20210311174233845](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311174233845.png)

分析：使用绝对定位找到”北京“，设置四个圆，一个圆心，三个波纹。

<u>需要在放置图片map盒子内插入一个city盒子再放入四个圆。使用city盒子的原因：1.方便后续城市调用2.定位城市的位置，否则四个圆都须定位一次位置。</u>

注意：

**1.波纹的虚实使用盒子阴影制作。**

2.使用0%、70%、100%三种状态，目的是让波纹先慢后快动画，更美观。

3.问题：出现如下图情况。

原因：三个波纹以标准流形式垂直排列，而我们需要他们都以小圆点为圆心层叠在一起。

**解决方法**：使用绝对定位让波纹在父盒子内水平垂直居中。

![image-20210311175756752](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311175756752.png)

4.为三个波纹动画美观，可给其中两个波纹设置延时播放，延时时间为总的时间/3，这样也可使波纹动画时，三个圆圈有一样的间隔。

5.不要用scale放大波纹，原因：它会让阴影变大，且不是以dotted为圆心放大的

6.”台北“”广州“的动画使用**并集选择器层叠**即可，div class="city tb"，在tb中修改绝对定位坐标即可，使用层叠性，其中方位应与city使用的方位一致。

7.opacity意为不透明度， opacity: 1;意思是不透明，opacity: 0;意思是透明。

```css
    <style>
        .map {
            position: relative;
            width: 747px;
            height: 617px;
            background: url(images/map.png) no-repeat #000;
            margin: 0 auto;
        }

        .city {
            position: absolute;
            top: 227px;
            right: 193px;
            /* color: #fff; */
        }

        .tb {
            /* 和city里一致用top和right，用其他方位则无法层叠覆盖 */
            top: 500px;
            right: 80px;
        }

        .dotted {
            width: 8px;
            height: 8px;
            background-color: #09f;
            border-radius: 50%;
        }

        .city div[class^="pulse"] {
            /* 为保证小波纹圆心与dotted重叠，让它在父盒子里面水平垂直居中，放大后就会中心向四周发散 */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            box-shadow: 0 0 12px #009dfd;
            border-radius: 50%;
            animation: pulse 1.2s linear infinite;
        }

        .city div.pulse2 {
            animation-delay: 0.4s;
        }

        .city div.pulse3 {
            animation-delay: 0.8s;
        }

        @keyframes pulse {
            0% {}

            /* 刚开始动画快，后慢，动画更美观 */
            70% {
                width: 40px;
                height: 40px;
                /* 不透明度为1 */
                opacity: 1;
            }

            100% {
                width: 70px;
                height: 70px;
                /* 不透明度为0 */
                opacity: 0;
            }
        }
    </style>
</head>

<body>
    <div class="map">
        <div class="city">
            <div class="dotted"></div>
            <div class="pulse1"></div>
            <div class="pulse2"></div>
            <div class="pulse3"></div>

        </div>
        <div class="city tb">
            <div class="dotted"></div>
            <div class="pulse1"></div>
            <div class="pulse2"></div>
            <div class="pulse3"></div>

        </div>
    </div>
</body>
```

##### 2.10.5速度曲线细节

animation-timing- function :规定动画的速度曲线,默认是"ease"

| 值          | 描述                                           |
| ----------- | ---------------------------------------------- |
| linear      | 动画从头到尾的速度是相同的。匀速               |
| ease        | 默认。动画以低速开始，然后加快，在结束前变慢。 |
| ease-in     | 动画以低速开始。                               |
| ease-out    | 动画以低速结束。                               |
| ease-in-out | ease-in-out                                    |
| steps()     | 指定了时间函数中的间隔数量(步长)               |

steps()，括号内填整数。<u>steps(5)指该动画分5步完成</u>。

**利用steps步长实现打字机效果案例**

```css
@keyframes w {
            0% {
                width: 0px;
            }

            100% {
                width: 100px;
            }
        }

        div {
            overflow: hidden;
            font-size: 20px;
            width: 0px;
            height: 20px;
            line-height: 20px;
            /* white-space: nowrap; */
            background-color: pink;
            animation: w 2s steps(5) forwards;
        }
    </style>

<body>
    <div>上山打老虎</div>
</body>
```

动画效果：”上山打老虎“随着背景颜色依次出现。

**注意**：

1.需要定义animation-fill-mode属性为forwards，否则动画放到倒数第二步时就会返回初始状态，无法显示最后一步。

2.动画变化总宽度为100px，字数为5个字那么步长就为5，要<u>将字体大小设置为100px/5=20px</u>，可以的话再设置行高，好让每一步显示一个文字。动画更美观。

##### 2.10.6奔跑的白熊

实现：(仿百度浏览器)

白熊从左侧跑到中间，然后原地跑。



扒下来的素材：

![image-20210311204320529](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311204320529.png)

**思想**：定义一个盒子，把白熊动作图（精灵图，如上图）装入，一次装入一个白熊动作，再分若干步切换白熊动作。

**注意**：

1.白熊动作图尺寸为1600x100，有8个动作，因此盒子大小为200x100。

2.使用steps步长实现动画，而不是其他，否则是背景图片滑动的过程，并不是白熊奔跑的动画

3.**使用动画移动图片时，应变化背景图片的位置坐标**，从（0 0）到（**-**1600px 0）

4.跑到中间的做法：即使用绝对定位+translate实现。

5.<u>可以添加多个动画，用逗号隔开</u>

6.试图将背景图片放入，并让其向左动画，但**未解决背景图片无缝衔接问题**。

**解决方法**：放置背景图片时**不要加no-repeat，让其平铺**即可.

7.新问题，如何让background图片等比例缩放。背景图片太大了

8.为什么需要根据动作图制作动图效果，而不是直接插入gif图？

原因：根据动作图制作动图可以改变颜色、动画速度等，而gif这方面是定死的，不方便修改。

```css
.bg2 {
            position: relative;
            /* width: 3840px; */
            width: 100%;
            height: 569px;
            background: url(images/bg2.png);
            animation: mmove 20s linear infinite;
        }

        .bg1 {
            position: absolute;
            /* position: relative; */
            top: 50%;
            left: 0;
            width: 100%;
            height: 336px;
            background: url(images/bg1.png);
            animation: mmove 20s linear infinite;
        }

.bear {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 100px;
            background: url(images/bear.png) no-repeat;
            /* 可以添加多个动画，用逗号隔开 */
            animation: bear 1s steps(8) infinite, bmove 4s forwards;
        }

        @keyframes bear {
            0% {
                background-position: 0px 0px;
            }

            100% {
                background-position: -1600px 0px;
            }
        }

        @keyframes bmove {
            0% {
                left: 0;
            }

            100% {
                left: 50%;
                transform: translateX(-50%);
            }
        }
@keyframes mmove {
            0% {}

            100% {
                background-position: -3840px 0;
            }
        }
```

![image-20210312090054472](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312090054472.png)

#### 2.11 3D转换

我们生活的环境是3D的，照片就是3D物体在2D平面呈现的例子。如下图。

3D的特点:
●近大远小。
●物体后面遮挡不可见

当我们在网页上构建3D效果的时候参考这些特点就能产出3D效果。

![image-20210311212147613](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311212147613.png)

##### 2.11.1三维坐标系

三维坐标系其实就是指立体空间,立体空间是由3个轴共同组成的。如下图。

●x轴: 水平向右	**注意: x右边是正值,左边是负值**
●y轴: 垂直向下	**注意: y下面是正值，上面是负值**
●z轴: 垂直屏幕	**注意:往外面是正值,往里面是负值**

![image-20210311215946078](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210311215946078.png)

3D转换我们主要学习工作中最常用的3D位移和3D旋转

**主要知识点**：
●3D位移: translate3d(x,y,z)
●3D旋转: rotate3d(xy,z)
●透视: perspective
●3D显现transfrom-style

##### 2.11.2 3D移动translate3d

3D移动在2D移动的基础。上多加了一个可以移动的方向，就是z轴方向。

●translform:translateX(100px) :仅仅是在x轴上移动

●translform:translateY(100px) :仅仅是在Y轴上移动

●translform:translateZ(100px) :仅仅是在Z轴上移动(**注意: translateZ一般用px单位**)

●transform:translate3d(x,y,z) :其中x、y、z分别指要移动的轴的方向的距离，**三个参数都不可省略**，如果没有就写0。用**逗号隔开**。

```css
div {
            width: 100px;
            height: 100px;
            background-color: purple;
            /* transform: translateX(100px) translateY(100px) translateY(100px); */
            /* 1.translateZ  沿着Z轴移动，后面单位一般跟px */
            /* 2.translateZ(100px)即 向外移动100px，距我更近100px */
            /* 3.3D移动的简写方法 */
            /* transform: translate3d(100px,100px,100px); */
            /* 4.xyz是不能省略的，如果没有就写0 */
            /* 用了透视才能看见3D效果 */
            transform: translate3d(0, 100px, 100px);
        }
```

##### 2.11.3 透视perspective 

在2D平面产生**近大远小**视觉立体,但是只是效果二维的。

●如果想要在网页产生3D效果需要透视 (理解成3D物体投影在2D平面内)。

●模拟人类的视觉位置 ,可认为安排一只眼睛去看

●透视我们也称为视距 :视距就是人的眼睛到屏幕的距离

●距离<u>视觉点越近</u>的在电脑平面<u>成像越大</u> ,越远成像越小

●透视的<u>单位是像素</u>

**<u>透视写在被观察元素的父盒子里面的</u>**，但不要求是父亲，爷爷也可以，并且可以被继承。

**d** :就是视距,视距就是一个距离人的眼睛到屏幕的距离。-perspective
**z**:就是z轴,物体距离屏幕的距离, z轴越大(<u>正值</u>)我们看到的物体就越大。-translateZ

<u>简单理解</u>：相当于人看书上的文字。书本固定不动，**d**是眼睛到书本的距离，眼睛离书距离越近里面字越大，离书距离越远里面字越小；书本固定不动，眼睛也不动，**z**是文字与书本的距离，若文字从书上飘起来了，离书本距离变大，离眼睛也就越近，字也就越大，相当于字飘起来到你眼前，越来越近。

![image-20210312091459603](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312091459603.png)

**注意：**

<u>perspective、translateZ都能产生近大远小的效果，两种有什么不同。</u>

<u>可以设置一样大的perspective，但里面不同的盒子设置不同大小的translateZ，从而实现立体效果</u>



案例代码：（在上一个案例中添加透视）

**未添加透视**

![image-20210312091759924](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312091759924.png)

**perspective:500px**

![image-20210312091847200](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312091847200.png)

**perspective:200px**

![image-20210312091909732](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312091909732.png)

说明近大远小效果，透视距离越小，成像越大

perspective:500px时

```css
body {
            perspective: 500px;
        }

        div {
            width: 100px;
            height: 100px;
            background-color: green;
            margin: 100px auto;
            transform: translateZ(0);
        }
```

translateZ();里面数值越大，图像越大。

##### 2.11.4 3D旋转rotate3d

3D旋转指可以让元素在E维平面内沿着x轴, y轴, z轴或者自定义轴进行旋转。

```
语法
举例
旋转方向判断
```

**语法：**

```
●transform:rotateX(45deg) :沿着x轴正方向旋转45度
●transform:rotateY(45deg) :沿着y轴正方向旋转45deg
●transform:rotateZ(45deg) :沿着Z轴正方向旋转45deg
●transform:rotate3d(x,y,z,deg) :沿着自定义轴旋转deg为角度(了解即可)
xyz是表示旋转轴的矢量，是标示你是否希望沿着该轴旋转，最后一个标示旋转的角度。
●transform:rotate3d(1,0,0,45deg)就是沿着x轴旋转45deg
●transform:rotate3d(1,1,0,45deg)就是沿着对角线（由x,y矢量得出，如下图）旋转45deg
```

![image-20210312105005829](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312105005829.png)

重点是前三个，一般情况沿着一个轴旋转即可，不搞复杂花样。

举例：

1.沿着x轴旋转，最典型的案例就是单杠旋转。

![image-20210312095239620](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312095239620.png)

2.沿着y轴旋转，最典型的案例就是钢管舞。

![image-20210312104107946](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312104107946.png)

3.沿着z轴旋转，最典型的案例就是抽奖盘

![image-20210312104328677](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312104328677.png)



**元素旋转方向的判断**

根据左手准则判断。<u>大拇指的朝向即沿着轴的正方向</u>。

**1.沿着x轴旋转方向判断**

**左手准则**：
●左手的手拇指指向 x轴的正方向
●其余手指的弯曲方向就是该元素沿着x轴旋转的方向

![image-20210312095331300](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312095331300.png)

**2.沿着y轴旋转方向判断**

左手准则
●左手的手拇指指向y轴的正方向
●其余手指的弯曲方向就是该元素沿着y轴旋转的方向(正值)

![image-20210312103843950](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312103843950.png)

案例代码：

**沿着x轴旋转**

实现鼠标经过图片时，图片沿x轴180°旋转

```css
body {
            perspective: 200px;
        }

        img {
            display: block;
            width: 200px;
            height: 200px;
            margin: 100px auto;
            transition: all 2s;
        }

        img:hover {
            transform: rotateX(180deg);
        }
```

初始：

![image-20210312102936561](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312102936561.png)

![image-20210312102624258](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312102624258.png)

说明：图片沿着黑色的轴（x轴）旋转，从两个红色框框可以看出近大远小的效果。

同时，使用透视动画看着更立体。

**设置角度为-45°**，图片向外转。

![image-20210312103020712](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312103020712.png)

**沿着y轴旋转**：

![image-20210312104015077](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312104015077.png)



**沿着Z轴旋转：**

![image-20210312104447335](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312104447335.png)

**沿着对角线旋转**

```css
transform: rotate3d(1, 1, 0, 45deg);
```

![image-20210312105131968](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312105131968.png)



##### 2.11.5 3D呈现transfrom-style

通过实现下面这个案例来理解该属性。

![image-20210312110220331](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312110220331.png)

分析：共需要三个盒子，一个父盒子，里面放置两个盒子（绿盒子和蓝盒子，其中蓝色盒子绕x轴旋转），注意：为了让**两个盒子重叠在一起**，一定要使用**绝对定位**。



将两个盒子重叠在一起，并让蓝色盒子旋转后，得到下图情况。

![image-20210312110846445](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312110846445.png)

由于未添加透视，导致上图较生硬结果，添加透视后：

![image-20210312111139785](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312111139785.png)

但非立体，尝试通过沿着y轴**旋转box盒子**（需要一个父盒子的原因）让其立体，结果：

![image-20210312111611734](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312111611734.png)

仍是二维效果，并非立体。此时我们就需要**transform-style**。

<u>●控制子元素是否开启三维立体环境。</u>

<u>●transform-style: flat；子元素不开启3d立体空间，默认的</u>

<u>●transform-style: preserve-3d;子元素开启立体空间</u>

<u>●**代码写给父级**,但是影响的是子盒子</u>

<u>●这个属性很**重要**,后面必用</u>

开启3d后：

![image-20210312111921165](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312111921165.png)

```css
<style>
        body {
            perspective: 200px;
        }

        .box {
            position: relative;
            width: 100px;
            height: 100px;
            margin: 100px auto;
            transition: all .5s;
            /* 让子元素保持3d */
            transform-style: preserve-3d;
        }

        .box div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: green;
        }

        .box div:last-child {
            background-color: blue;
            transform: rotateX(60deg);
        }

        .box:hover {
            transform: rotateY(60deg);
        }
    </style>
</head>

<body>
    <div class="box">
        <div></div>
        <div></div>
    </div>
</body>
```

#### 2.12 H5C3综合案例

##### 2.12.1.**两面翻转盒子案例**-3D

实现：鼠标经过时旋转展示另一面。类似于翻牌子。

分析：盒子有两面，需要有两个相同的盒子重叠在一起，与上个案例相似。则共需要<u>三个盒子，一个父盒子包含两个盒子的前后两面</u>。**翻转父盒子实现两面翻转效果**，而不是子盒子。



**注意：**

1.问题：旋转180°后back内的文字也会旋转180°，如下图。

**解决方法**：<u>先让back沿着y轴旋转180°</u>，从而**实现与front背对背靠**的效果（如奥利奥），这样父盒子再旋转180°，即共旋转360°，文字显示正常。

![image-20210312114113858](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312114113858.png)

2.让前面盒子先显示，使用z-index提高层次

3.鼠标经过box，让父盒子翻转沿着y轴旋转180°。

4.记得给父级添加transform-style:preserve-3d保留背面紫色盒子的立体空间

5.可设置perspective使立体感更强，更像一个球在翻转

6.若动画过程中，浏览器出现抽搐或抖动情况，解决方法：将perspective数值变大

```css
<style>
        body {
            perspective: 300px;
        }

        .box {
            position: relative;
            width: 200px;
            height: 200px;
            margin: 100px auto;
            transition: all .4s;
            /* 让背面的紫色盒子保留立体空间，给父级添加 */
            transform-style: preserve-3d;
        }

        .box:hover {
            transform: rotateY(180deg);
        }

        .front,
        .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            font-size: 20px;
            color: #fff;
            text-align: center;
            line-height: 200px;
            border-radius: 50%;
        }

        .front {
            background-color: pink;
            z-index: 1;
        }

        .back {
            background-color: purple;
            /* 像奥利奥一样，背靠背旋转 */
            transform: rotateY(180deg);
        }
    </style>
```

鼠标经过前：

![image-20210312123051490](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312123051490.png)

鼠标经过后，翻转得到

![image-20210312123111319](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312123111319.png)

##### 2.12.2 **3D导航栏案例**

实现：鼠标经过导航栏，从一面上翻到另一面，有翻转长方体的感觉。

![image-20210312124627108](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312124627108.png)

分析：仍是一个父盒子里包含两个子盒子，此处两个子盒子布局方式应类似长方体中相连的两面，如下图。front为前面盒子，bottom为底下盒子，同样是对父盒子box进行翻转。

![image-20210312124853290](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312124853290.png)

**注意**：

**1.实现上图效果需要分三步:**

两个盒子重叠在一起

**1）先将底部盒子绕x轴旋转90°，注意为了让文字向下显示，需要<u>逆时针翻转</u>**。

<img src="C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312140346534.png" alt="image-20210312140346534" style="zoom: 80%;" />

<img src="C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312140331191.png" alt="image-20210312140331191" style="zoom: 80%;" />

**2）再进行下移到如下图位置。**使用translate，**下移**：<u>沿着y轴向下走盒子**高度一半**的距离，为**正**值</u>。

![image-20210312141354143](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312141354143.png)

3）注意！！！此时不能让底部盒子**往里走**。

原因：由于立方体旋转默认是围绕着里面的中心点旋转的，而我们所定义是围绕着x轴旋转的。如果往里走，底部盒子会旋转找“小白兔”盒子的下面。具体如图。

![image-20210312142836710](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312142836710.png)

![image-20210312143439415](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312143439415.png)

<img src="C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312143758324.png" alt="image-20210312143758324" style="zoom:80%;" />

**解决方法：将front盒子向前走**<u>高度的一半</u>距离，沿Z走，为正值。使长方体的中心点（红点）处于x轴正上方。

![image-20210312143927720](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312143927720.png)

2.由于导航栏里内容有多块，可以**使用ul、li做导航栏**，将box等放入li中。

3.注意给父级添加perspective和transform-style显示立体效果

4.注意transform先移动后旋转

```css
ul li {
            float: left;
            margin: 0 15px;
            width: 200px;
            height: 50px;
            list-style: none;
            text-align: center;
            line-height: 50px;
            /* box也需要旋转，所以给li添加透视即可，里面子盒子都有透视 */
            perspective: 300px;
        }

        .box {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: all .4s;
        }

        .box:hover {
            transform: rotateX(90deg);
        }

        .front,
        .bottom {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .front {
            background-color: pink;
            z-index: 1;
            transform: translateZ(25px);
        }

        .bottom {
            background-color: purple;
            /* 注意先移动后旋转 */
            transform: translateY(25px) rotateX(-90deg);
        }
```

![image-20210312144410704](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312144410704.png)

##### 2.12.3旋转木马

实现：前面图片大，后面图片小，并旋转播放。鼠标经过，动画停止。

![image-20210312145553321](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312145553321.png)

![image-20210312144714580](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312144714580.png)

<u>核心思想：将6张图片围绕着主轴y轴（蓝色的）旋转，将六张图片放到各自位置即可</u>。6张图片共360°，每张图片旋转60°即可。

![image-20210312145536924](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312145536924.png)

**注意：**

**1.六个盒子的摆放**：

第一个盒子向外走300px（**300px为旋转形成圆的半径**，也是图片的宽度，这个距离较美观）即可。

第二个盒子需要绕y轴旋转60°后再沿着z轴外走300px（**先旋转后移动**），**原因**：<u>旋转或移动都是以盒子本身展开xyz轴</u>，先旋转后展开的xyz轴与先移动后展开的xyz轴完全不一样，因此此处必须先旋转后移动。

第三个盒子绕y轴旋转120°再沿着z轴外走300px。

第四、五、六个依次角度增加60°，沿着z轴走距离不变（因为这个是旋转的半径）

2.选择合适的perspective数值大小，数值太小，图片会过大，不够美观

3.可在父盒子内插入图片，使它自己绕y轴旋转360°

```css
body {
            perspective: 1500px;
        }

        section {
            position: relative;
            width: 300px;
            height: 200px;
            margin: 100px auto;
            transform-style: preserve-3d;
            animation: rotate 4s linear infinite;
            background: url(images/pig.jpg) no-repeat;
        }

        section:hover {
            animation-play-state: paused;
        }

        @keyframes rotate {
            0% {}

            100% {
                transform: rotateY(360deg);
            }
        }


        div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(images/dog.jpg) no-repeat;
        }

        section div:nth-child(1) {
            transform: translateZ(300px);
        }

        section div:nth-child(2) {
            /* 先旋转后移动距离 */
            transform: rotateY(60deg) translateZ(300px);
        }

        section div:nth-child(3) {
            /* 先旋转后移动距离 */
            transform: rotateY(120deg) translateZ(300px);
        }

        section div:nth-child(4) {
            /* 先旋转后移动距离 */
            transform: rotateY(180deg) translateZ(300px);
        }

        section div:nth-child(5) {
            /* 先旋转后移动距离 */
            transform: rotateY(240deg) translateZ(300px);
        }

        section div:nth-child(6) {
            /* 先旋转后移动距离 */
            transform: rotateY(300deg) translateZ(300px);
        }
    </style>
```

![image-20210312153307350](C:\Users\Daii\AppData\Roaming\Typora\typora-user-images\image-20210312153307350.png)

#### 2.13广义的HTML5

1.广义的HTML5是HTML5本身+ CSS3 + JavaScript.

2.这个集合有时称为HTML5和朋友，通常缩写为HTML5。

3.虽然HTML5S的一些特性仍然不被某些浏览器支持，但是它是一种发展趋势。



#### 2.14浏览器私有前缀

浏览器私有前缀是为了兼容老版本的写法,比较新版本的浏览器无须添加。

**1.私有前缀**
●-moz- :代表firefox浏览器私有属性
●-ms- :代表ie浏览器私有属性
●-webkit- :代表safari、chrome 私有属性
●-o-:代表Opera私有属性

**2.提倡的写法**

```css
-moz-border-radius: 10px;
-webkit-border-radius: 1Opx;
-o-border-radius: 10px;
border-radius: 10px;
```



## Web服务

**本知识点的目的**

1.了解什么是 服务器以及相关概念

2.把自己网站上传到服务器上，可以让其他人访问

### 1.什么是Web服务器

我们写的品优购网站，目前是放到自己电脑上的，只能自己访问浏览。

如果想要很多人访问我们的网站，可以<u>把品优购放到服务器</u>上,这样就可以多人访问我们的品优购网站了。

**服务器**(我们也会称之为主机)是提供计算服务的设备，**它也是一台计算机**。 在网络环境下,根据服务器提供的服务类型不同，服务器又分为文件服务器、数据库服务器、应用程序服务器、**Web服务器**等。

**Web服务器一般指网站服务器**，是指驻留于因特网上某种类型计算机的程序，可以向浏览器等Web客户端提供文档，也可以放置网站文件，让全世界浏览;可以放置数据文件,让全世界下载。

以下服务器我们主要指的是Web服务器。

根据服务器在网络中所在的位置不同，又可分为**本地服务器和远程服务器**。

### 3.2本地服务器

我们可以把自己的电脑设置为本地服务器，这样同一个局域网内的同学就可以访问你的品优购网站了。后续学ajax的时候,再进行讲解。

### 3.3远程服务器

本地服务器主要在局域网中访问，如果想要在互联网中访问,可以把品优购网站上传到远程服务器。

**远程服务器**是通常是别的公司为我们提供的一台电脑(主机) , 我们只要把网站项目上传到这台电脑上，任何人都可以利用域名访问我们的网站了。

比如域名（通俗理解即网址）  www.mi.com 可以访问小米网站

### 3.4总结

1.服务器就是一台电脑。因为我们主要是做网站,所以我们主要使用web服务器

2.服务器可以分为本地服务器和远程服务器

3.远程服务器是别的公司为我们提供了一台计算机。

4.我们可以把网站上传到远程服务器里面,别人就可以通过域名访问我们的网站了。

### 3.5将自己的网站上传到远程服务器

**注意:一般稳定的服务器都是需要收费的。 比如:阿里云**

1.去免费空间网站注册账号。
2.记录下主机名、用户名、密码、域名。
3.利用cutftp软件上传网站到远程服务器。
4.在浏览器中输入域名,即可访问我们的品优购网站了。



## 课程总结

**1.HTML我们学的就是常用标签,就是基本盒子**

**2.CSS就是用来美化布局网页。**

**3.HTML+CSS是没有逻辑可言的,基本就是搭积木摆放盒子的过程,你需要的是耐心。**

**4.对同学们来说,现在最困难的是布局结构。欠缺分析页面布局的能力,**

**5.同一个模块,有很多布局方式,能做出来就是好的。**

**6.多看别人写的页面,模仿人家的布局,每次写页面总会有新的收获。**

**7.错误总是在所难免,一定要学会利用chrome调试工具,他们能快速帮我们排查错误。你还需要细心。**

**8.学好定位,对后面学习JavaScript有很大的帮助。**