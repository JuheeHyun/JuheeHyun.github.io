console.log('abcdefg'.length)
var school='그린컴퓨터 아트학원 수원점';
console.log('school', school.length);
console.log('school', school[0]);

var sec1, sec2, sec3, sec4;
sec1="지도";
sec2="희망";
sec3="가계";
sec4="잠자리";
var result=sec1[1]+sec2[1]+sec3[0]+sec4[1];
console.log(result);

console.log(school.slice(2,5)+school.slice(11,-1));

.toUpperCase:대문자로 바꾸기
.toLowerCase:소문자로 바꾸기

var green='green Computer ART school sUWon placE!';
console.log('대문자',green.toUpperCase());
console.log('소문자',green.toLowerCase());

// console.log(green.slice(0,1).toUpperCase()+green.slice(1).toLowerCase());
var first_upper=green.slice(0,1).toUpperCase();
var all_lower=green.slice(1).toLowerCase();
console.log(first_upper+all_lower);