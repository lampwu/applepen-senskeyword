# applepen-senskeyword

 利用 superagent,superagent-throttle 批量查询 apple pencil 刻字敏感词</br>
 在 ss.txt 填入关键词换行区分，apple 网站貌似不过滤英文和数字</br>
 运行 im.js 生成 message.txt 产生 apple 网站 response</br>
 请根据实际单次响应时间调节 ratePer: 1000 单位为 ms (观察方法：F12 然后在网站 (https://www.apple.com/cn/shop/product/MU8F2) 上输入词组</br>
 以 firefox 为例:</br>
 网络-事件 https://www.apple.com/cn/shop/validate-engraving)--耗时</br>
 生成完毕后运行 fs7.js,sensitivewords.txt 出现敏感词.</br>


