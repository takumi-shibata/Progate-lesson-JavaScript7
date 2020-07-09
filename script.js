// 1.コールバック関数(関数を呼び出す際に、関数が引数に代入される)
const printWanko = () => {
  console.log("にんじゃわんこ");
};

// 関数callにcallbackという名前の引数を追加してください
// ②関数printWankoが引数callbackに代入される
const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  // ③引数に渡したcallbackを呼び出してください。※呼び出す時は()をつける
  callback();
  // →コールバック関数を呼び出します。
  // →にんじゃわんこ
};
// ①関数printWankoを引数に渡して関数callを実行してください
// 定数名call(定数名printWanko);
call(printWanko);


// 2.直接引数の中で定義した関数
const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
  // →コールバック関数を呼び出します。
  // →ひつじ仙人
};

// 引数で関数を定義して渡してください
// アロー関数とcallの合体版
call(() => {
  console.log("ひつじ仙人");
});


// 3.コールバック関数の引数
const call = (callback) => {
  callback("にんじゃわんこ", 14);
};

// 関数callの引数の中で2つの引数を取る関数を追加してください
call((name,age) => {
  console.log(`${name}は${age}歳です。`);
});
// →にんじゃわんこは14歳です