[![Version](https://img.shields.io/badge/version-1.0.3.0-brightgreen.svg)](https://gitee.com/xshuai/weixinxiaochengxu/)
[![作者](https://img.shields.io/badge/%E4%BD%9C%E8%80%85-%E5%B0%8F%E5%B8%85%E4%B8%B6-7AD6FD.svg)](https://www.xsshome.cn/xai)
[![贡献者](https://img.shields.io/badge/%E8%B4%A1%E7%8C%AE%E8%80%85-%E5%87%A4%E5%85%AE-7AD6FD.svg)](https://www.xsshome.cn/xai)

# 微信小程序-微信端源代码 

# 最新代码 https://gitee.com/xshuai/weixinxiaochengxu 
 
# 使用说明
#### 下载源码 用微信开发工具打开  在 **utils-api.js** 替换自己的域名相关信息即可。
#### 后台代码:[https://gitee.com/xshuai/xai](https://gitee.com/xshuai/xai)
### **大家在使用的时候不要猜测作者的接口授权码等信息进行请求，以防服务器宕机** 

```
       ├── imgae                                //所需要的图片
       ├── pages                               
       │       └── animal                  //动物识别页面  
       │       └── car                     //车型识别页面  
       │       └── cardamage               //暂无作用
       │       └── chram                   //魅力值识别页面      
       │       └── common                  //暂无作用
       │       └── dish                    //菜品识别页面  
       │       └── face                    //颜值分析识别页面  
       │       └── facedetectcrossageface  //人脸对比识别页面  
       │       └── facemerge               //疯狂变脸页面
       │       └── index                   //默认的index页面 没用到
       │       └── ingredient              //果蔬食材识别页面  
       │       └── logo                    //LOGO识别页面  
       │       └── logs                    //日志 暂时没用       
       │       └── nine                    //九宫格页面
       │       └── object                  //暂无作用
       │       └── ocr                     //文字识别页面  
       │       └── plant                   //植物识别页面
       │       └── resemble                //暂无作用
       │       └── sample                  //暂无作用
       │       └── subject                 //暂无作用
       │       └── youtuHT                 //手势识别页面
       │       └── flower                  //花卉识别
       │       └── image2ascii             //图片转字符图片	   
       │       └── youtuHW                 //手写识别页面       
       │       └── facecosmetic            //人像美妆页面 
       │       └── facedecoration          //人像变妆页面 
       │       └── facesticker             //大头贴页面 
       │       └── imgfilter               //人像、图片滤镜页面 	   
       ├── utils                                
       │       └── api.js                 //全部的接口url在这里配置
       │       └── util.js                 //暂时没用       
       ├── app.js                                //全局js配置文件
       ├── app.json                              //全局配置json文件
       ├── app.wxss                                 //全局wxss文件
       └── project.config.json                   //工具配置(个性化配置)
```


![二维码](https://gitee.com/uploads/images/2018/0321/090238_ec240de3_131538.jpeg "微信扫一扫体验")

![主页截图](https://images.gitee.com/uploads/images/2018/0913/100407_56df1ab4_131538.jpeg "首页.jpg")![演示截图](https://gitee.com/uploads/images/2018/0321/090627_ac62a47f_131538.jpeg "演示截图")![演示截图](https://gitee.com/uploads/images/2018/0321/090639_bbaa6a41_131538.jpeg "演示截图")

![手写文字识别](https://gitee.com/uploads/images/2018/0323/134845_c4ccd070_131538.jpeg "手写文字识别")![手势识别](https://gitee.com/uploads/images/2018/0323/134911_577fb731_131538.jpeg "手势识别")
![文字识别](https://gitee.com/uploads/images/2018/0702/094502_005d2a2b_131538.jpeg "ocr.jpg")

### 人脸融合

![人脸融合1](https://gitee.com/uploads/images/2018/0528/091126_a5e1e073_131538.jpeg "1.jpg")![人脸融合2](https://gitee.com/uploads/images/2018/0528/091139_49cf2a60_131538.jpeg "2.jpg")![人脸融合3](https://gitee.com/uploads/images/2018/0528/091153_18868301_131538.jpeg "3.jpg")

### 人脸对比

![人脸对比](https://gitee.com/uploads/images/2018/0530/163342_96241413_131538.gif "演示.gif")

### 文字识别复制操作演示
![文字识别复制操作演示](https://gitee.com/uploads/images/2018/0702/105636_86b3f1f6_131538.gif "文字识别复制操作演示")

### 增加联系小帅功能
![联系小帅功能](https://gitee.com/uploads/images/2018/0703/094549_943bd258_131538.png "在线客服功能")

### 百科内容截图

![菜品识别](https://images.gitee.com/uploads/images/2018/0727/085300_ff7047a9_131538.jpeg "菜品识别")![车型识别](https://images.gitee.com/uploads/images/2018/0727/085319_7b2b3bc3_131538.jpeg "车型识别")![动物识别](https://images.gitee.com/uploads/images/2018/0727/085335_34fb1bfb_131538.jpeg "动物识别")


### 图片转字符图片功能
![图片转字符图片](https://wximage-1251091977.cos.ap-beijing.myqcloud.com/xai/%E9%A1%B5%E9%9D%A2%E5%BD%95%E5%B1%8F%E6%98%BE%E7%A4%BA.gif "图片转字符图片功能")

### 新增人像变妆、大头贴功能
![大头贴](https://images.gitee.com/uploads/images/2018/0913/101226_fabb8916_131538.jpeg "大头贴")  ![人像变妆](https://images.gitee.com/uploads/images/2018/0913/100610_472a55d2_131538.jpeg "人像变妆")

### 新增人像|图片滤镜、人像美妆功能
![人像、图片滤镜](https://images.gitee.com/uploads/images/2018/0913/100719_e429e6e7_131538.jpeg "人像、图片滤镜")  ![人像美妆](https://images.gitee.com/uploads/images/2018/0913/100551_8566afa3_131538.jpeg "人像美妆")

### 新增功能操作演示
![功能操作演示](https://worknote-1251091977.cos.ap-beijing.myqcloud.com/%E5%8A%9F%E8%83%BD%E6%BC%94%E7%A4%BA.gif?q-sign-algorithm=sha1&q-ak=AKIDFmeFGGsk5YlIflBRf6xPGoKFP9EiB44m&q-sign-time=1536807830;1536809630&q-key-time=1536807830;1536809630&q-header-list=&q-url-param-list=&q-signature=236b760df97c979987228c81ead50f6c0ac2cfdd&x-cos-security-token=ddad0e84e561a0361cfd13d3b1824888b78bdbc710001&response-content-disposition=attachment "功能演示")
