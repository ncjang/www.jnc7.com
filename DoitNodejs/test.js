//문자/숫자변수 출력
console.log("안녕하세요!!");
console.log('숫자입니다 %d', 10);
console.log('문자열입니다 %s', '이거슨');

//객체출력
var person = {
    name:'소녀시대1',
    age:20
};
console.log('JSON 객체입니다. %j', person);

console.dir(person);

//실행시간
console.time('duration_time');
var result = 0;
for(var i = 0; i < 10000; i++) {
    result += i;
}
console.timeEnd('duration_time');

//전역변수 __
console.log('파일 이름: %s', __filename); 
console.log('패스 : %s', __dirname);
