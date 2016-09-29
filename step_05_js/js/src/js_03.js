// js_03.js:array
// .push() 뒤추가
// .unshift() 앞 추가
// .pop() 뒤 빼기
// .shift() 앞 빼기
// .concat() 앞배열과 뒤배열 합치기
// .indexOf('항목이름') 원하는 항목이름의 위치(순서)를 찾아감
// .join() 배열화 되어있는 형태를 문자로 나열




var coffee = ['스타벅스', '커피빈', '커반', '이디아', '할리스', '투썸'];
// console.log(coffee.length);
// console.log(coffee[1]);
// console.log(coffee.push('이자카야'));
// console.log(coffee.push('홍도사'));
// console.log(coffee.unshift('coffee'),coffee);
// console.log(coffee.pop(),coffee);

var drink=['블랙티', '공차', '밀크티', '태티차', '보이차'];
var brand= coffee.concat(drink);
console.log(brand);
// console.log(brand.slice(2,-4));
console.log(brand[3]);
document.write(brand.indexOf('커반')+1);
console.log(brand.join('-'));
