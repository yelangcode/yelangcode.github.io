下面的一段HTML代码将作为例子被多次用到.这是 爱丽丝梦游仙境的 的一段内容(以后内容中简称为 爱丽丝 的文档):
```
html_doc = """
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;
The Dormouse's story
&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p class="title"&gt;
&lt;b&gt;
The Dormouse's story
&lt;/b&gt;
&lt;/p&gt;
&lt;p class="story"&gt;
Once upon a time there were three little sisters; and their names were
&lt;a class="sister" href="http://example.com/elsie" id="link1"&gt;
Elsie
&lt;/a&gt;
,
&lt;a class="sister" href="http://example.com/lacie" id="link2"&gt;
Lacie
&lt;/a&gt;
and
&lt;a class="sister" href="http://example.com/tillie" id="link3"&gt;
Tillie
&lt;/a&gt;
;
and they lived at the bottom of a well.
&lt;/p&gt;
&lt;p class="story"&gt;
...
&lt;/p&gt;
"""```
使用BeautifulSoup解析这段代码,能够得到一个 BeautifulSoup 的对象,并能按照标准的缩进格式的结构输出:
```
from bs4 import BeautifulSoup
soup = BeautifulSoup(html_doc, 'html.parser')

print(<span class="ibk">soup.prettify()</span>)
#
&lt;html&gt;
#
&lt;head&gt;
#
&lt;title&gt;
#    The Dormouse's story
#
&lt;/title&gt;
#
&lt;/head&gt;
#
&lt;body&gt;
#
&lt;p class="title"&gt;
#
&lt;b&gt;
#     The Dormouse's story
#
&lt;/b&gt;
#
&lt;/p&gt;
#
&lt;p class="story"&gt;
#    Once upon a time there were three little sisters; and their names were
#
&lt;a class="sister" href="http://example.com/elsie" id="link1"&gt;
#     Elsie
#
&lt;/a&gt;
#    ,
#
&lt;a class="sister" href="http://example.com/lacie" id="link2"&gt;
#     Lacie
#
&lt;/a&gt;
#    and
#
&lt;a class="sister" href="http://example.com/tillie" id="link2"&gt;
#     Tillie
#
&lt;/a&gt;
#    ; and they lived at the bottom of a well.
#
&lt;/p&gt;
#
&lt;p class="story"&gt;
#    ...
#
&lt;/p&gt;
#
&lt;/body&gt;
#
&lt;/html&gt;
```
几个简单的浏览结构化数据的方法:
```
soup.{{title}}
#
&lt;title&gt;
The Dormouse's story
&lt;/title&gt;
soup.<span class="ibk">title.name</span>
# u'title'

soup.<span class="ibk">title.string</span>
# u'The Dormouse's story'

soup.<span class="ibk">title.parent.name</span>  # head&gt;title
# u'head'

soup.<span class="ibk">p</span>
#
&lt;p class="title"&gt;
&lt;b&gt;
The Dormouse's story
&lt;/b&gt;
&lt;/p&gt;
soup.<span class="ibk">p['class'] </span># class="title"
# u'title'

soup.<span class="ibk">a</span>
#
&lt;a class="sister" href="http://example.com/elsie" id="link1"&gt;
Elsie
&lt;/a&gt;
soup.<span class="ibk">find_all('a')</span>
# [
&lt;a class="sister" href="http://example.com/elsie" id="link1"&gt;
Elsie
&lt;/a&gt;
,
#
&lt;a class="sister" href="http://example.com/lacie" id="link2"&gt;
Lacie
&lt;/a&gt;
,
#
&lt;a class="sister" href="http://example.com/tillie" id="link3"&gt;
Tillie
&lt;/a&gt;
]

soup.{{find(id="link3")}} # id="link3"
#
&lt;a class="sister" href="http://example.com/tillie" id="link3"&gt;
Tillie
&lt;/a&gt;
```

从文档中找到所有
&lt;a&gt;
标签的链接:
```
for link in <span class="ibk">soup.find_all('a')</span>:
print(link.get('href'))
# http://example.com/elsie
# http://example.com/lacie
# http://example.com/tillie```
从文档中获取所有文字内容:
```
print(soup.<span class="ibk">get_text()</span>)
# The Dormouse's story
#
# The Dormouse's story
#
# Once upon a time there were three little sisters; and their names were
# Elsie,
# Lacie and
# Tillie;
# and they lived at the bottom of a well.
#
# ...```
&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;