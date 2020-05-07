const fs = require('fs');
const path = require('path');

// 读取模板文件，并修改内容
const template = fs.readFileSync(path.join(__dirname, './iconfont.json'), 'utf8');

// console.log('template', JSON.parse(template).glyphs);
const arr = JSON.parse(template).glyphs;

const iconList = [];
for (let i = 0; i < arr.length; i += 1) {
  const item = arr[i];
  // console.log('item', item);
  const d = {
    icon: `iconfont icon-${item.font_class}`,
  };
  iconList.push(d);
}
// console.log('item', JSON.stringify(iconList));

fs.writeFileSync('../src/components/sql/iconfont.json', JSON.stringify(iconList));

// 创建一个长度为 10、且用零填充的 Buffer。
const buf1 = Buffer.alloc(10);
const buf2 = new Uint16Array(Buffer.from('Node.js中文网'));
console.log('buff', buf2);
