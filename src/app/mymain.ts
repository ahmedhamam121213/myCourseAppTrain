import { test } from './test'; 

let comp = new test(10,true);
comp.onClick();
console.log( 'likeCount:' + comp.likesCount + ' ,Selected:' + comp.isSelected  );