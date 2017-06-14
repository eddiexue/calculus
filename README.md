# 设定含有两个目录的GoPath（UNIX）

GOPATH=/Users/eddiexue/Tencent/Projects/gotools:/Users/eddiexue/Tencent/Projects/goworks
export GOPATH

$ 特殊写法，为了支持GOPATH中配置多个目录
PATH=${GOPATH//://bin:}/bin:$PATH

# Googe Chart离线使用方法

## 大原则
在能访问Google的网络下运行，如果遇到图形加载失败，就到Chrome控制台看看哪个js下载404了，下载到本地`/gchartlib`下相应目录即可

## loader.js
`https://www.gstatic.com/charts`，替换成本地路径`/gchartlib`。注意这里定义了GoogleChart的版本号~~

## version/loader.js
`https://www.gstatic.com/charts`替换成本地路径`/gchartlib`