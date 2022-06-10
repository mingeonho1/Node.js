const path = require('path');

console.log(__dirname);     // 디렉토리 이름
console.log(__filename);    // 파일 이름

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));     // 파일 정보만
console.log(path.basename(__filename, '.js'));  // 파일 이름에 확장자 뺴고

// dirname
console.log(path.dirname(__filename));  // 디렉토리 이름

//extension
console.log(path.extname(__filename));  // 확장자만 

// parse
const parsed = path.parse(__filename);  
console.log(parsed);    // 오브젝트 형태로 하나씩
parsed.root
parsed.name

const str = path.format(parsed);
console.log(str);   // 스트링 형태로

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));     // 절대경로
console.log('isAbsolute?', path.isAbsolute('../'));     // 상대경로

// normalize
console.log(path.normalize('./folder//////sub'));   // 이상한 경로를 알아서 고쳐줌

// join
console.log(__dirname + path.sep + 'image');    
console.log(path.join(__dirname, 'image'));     // 조인을 사용하면 자동으로 경로를 만들어줌

// 경로를 직접 넣기보다는 path를 사용해서 운영체제별로 경로를 만드는게 좋음