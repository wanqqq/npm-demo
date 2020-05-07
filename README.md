# 模板工具

## 1、autorender 打包

```
 icon图标打包用传统的node 打包
```

## 2 plop js 模板工具

1、安装

```
// 全局安装
npm i -g plop

// 本地安装
npm i --save-dev plop

// 执行指定配置
plop 配置名称

// 执行指定配置并设置参数
plop 配置名称 输入参数

// 执行 plopfile 文件
--plopfile 文件路径

// 设置工作路径
--cwd

// 帮助
-h, --help

// 全局初始化
-i, --init

// 显示版本
-v, --version
```

2、配置文件

```
// 更目录创建文件 plopfile.js  plop将已该文件作为执行入口

// 导出执行函数
module.exports = function(plop){

    plop.getGenerator("模板名称", {

        description: "操作描述",
        prompts: [], // 交互提示
        actions: [] // 执行操作
    })

}
```

3、注册

```
// plopfile.js

module.exports = (plop)=>{

   plop.getGenerator("VueDemo", {
       description: '创建vue文件',
       prompts: [
           {
               type: 'input',  // 交互类型
               name: 'name',   // 参数名称
               message:'请输入文件名称' // 交互提示
           },
           {
               type: 'input',
               name: 'path',
               message: '请输入文件创建目录'
           }
       ],
       actions: [
           {
               type: 'add', // 动作类型
               path: '{{ path }}/{{ name }}.vue', // '{{  }}' 双大括号内设置动态参数
               templateFile: 'plop-templates/views/vue.hbs' // 模板文件地址， 使用hbs文件
           }
       ]

   })
}

// plop-templates/views/vue.hbs

<template>
    <div class='cmp-{{ name }}' >
    </div>
</template>
<script>
export default {
    name: '{{ name }}'
}
</script>
<style>
</style>
```

4、执行命令

```
plop VueDemo
```

5、plop 官网

```
https://plopjs.com/documentation/#getting-started
```
