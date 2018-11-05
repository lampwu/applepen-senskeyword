# applepen-senskeyword

利用superagent,superagent-throttle批量查询 apple pencil 刻字敏感词
在ss.txt填入关键词换行区分，apple网站貌似不过滤英文和数字
运行im.js 生成 message.txt 产生apple网站response
请根据实际单次响应时间调节ratePer: 1000 单位为ms (观察方法：F12 然后在网站上输入词组，以firefox为例:
网络-事件(https://www.apple.com/cn/shop/validate-engraving)-耗时)
生成完毕后运行fs7.js console.log 出现敏感词.


