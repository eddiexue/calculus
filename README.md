# calculus

GOPATH=/Users/eddiexue/Tencent/Projects/gotools:/Users/eddiexue/Tencent/Projects/goworks
export GOPATH

$ 特殊写法，为了支持GOPATH中配置多个目录
PATH=${GOPATH//://bin:}/bin:$PATH