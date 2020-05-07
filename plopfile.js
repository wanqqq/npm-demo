module.exports = (plop) => {
  plop.setGenerator('moduls', {
    // 这里的wxfile是一个自己设定的名字，在执行命令行的时候会用到
    description: '创建vue文件',
    prompts: [
      {
        type: 'input', // 交互类型
        name: 'name', // 参数名称
        message: '请输入文件名称', // 交互提示
      },
      {
        type: 'input',
        name: 'path',
        message: '请输入文件创建目录',
      },
      {
        type: 'input', // 问题的类型
        name: 'fileName', // 问题对应得到答案的变量名，可以在actions中使用该变量
        message: 'your fileName is', // 在命令行中的问题
        default: 'page', // 问题的默认答案
      },
    ],
    actions: [
      {
        type: 'add', // 操作类型，这里是添加文件
        path: '{{path}}/{{name }}.vue', // 添加的文件的路径
        templateFile: 'plopTemplate/vue.hbs', // 模板文件的路径
      },
      {
        type: 'add', // 操作类型，这里是添加文件
        path: '{{path}}/{{fileName}}.js', // 添加的文件的路径
        templateFile: 'plopTemplate/temp.js', // 模板文件的路径
      },
    ],
  });
};
