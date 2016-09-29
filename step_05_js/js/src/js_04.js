// js_04.js

// 배열:여러개 나열
// 객체:오브젝트:key:value =>속성:속성값 묶어놓은것

var arr=['아메리카노', '라떼'];
var obj={'아메리카노':'쓰다', '라떼':'달다'};

console.log(obj.length);
console.log(obj[1]);
console.log(obj.라떼);

// var eunjin={'age':24, 'sex':'female', 'hobby':'eatting', 'character':'notBad'};
// var ej=['hair':'brown', 'eye':'tow'];
// console.log(eunjin.age);
// console.log(eunjin.concat(ej));//실행불가능(기능이 없기에)

// var body=document.body;
// var bodyClass=body.className='box';
// console.log(bodyClass);
// console.dir(document.body);

var jae=[
        {'이름':'변은진', '성별':'여'},
        {'이름':'김미애', '성별':'여'},
        {'이름':'이은영', '성별':'여'},
        {'이름':'이재형', '성별':'남'}
        ];
console.log(jae[0].이름);