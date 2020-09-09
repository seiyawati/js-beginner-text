/**
 * 変数の使い方
 * 値を保存しておく箱のようなもの。
 */

//何回も使うDOMを変数に入れておく
const foo = document.getElementById("foo");

//要素の横幅
const fooWidth = foo.offsetWidth;

//要素の縦幅
const fooHeight = foo.offsetHeight;

//面積
const fooArea = fooWidth * fooHeight;


/**
 * Q.どうやって変数を宣言するか？
 * A. const 変数名 = 初期値;
 *    let 変数名 = 初期値;
 *    var 変数名 = 初期値;
 */

 //変数に予約後は宣言できない...ex.if, for, while
 const fooWidth = 100; //キャメルケース→jsではこちらを推奨
 const foo_width = 100; //スネークケース

 /**
  * constの特徴
  * 再代入、再定義できない
  * しかし、オブジェクトの中の値を変えることはできたりするため、厳密には定数ではない
  */
const obj = {
    foo: 123
};
console.log(obj.foo);//123
obj.foo = 456;
console.log(obj.foo);//456

/**
 * letの特徴
 * 再代入できる、再定義できない
 */
let letNumber = 100;
letNumber = 200;//できる
let letNumber = 200;//できない

/**
 * varの特徴
 * 再代入できる、再定義できる。
 */
var varNumber = 100;
var varNumber = 200;



 



