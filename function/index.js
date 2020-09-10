/**
 * メソッドの定義の仕方
 */
const foo = {
    alert: function () {}
    // alert() {} 短縮記法
}

//returnがある例
function isTweetable(text) {
    return text.length <= 140;
}

//無名関数
const isTweetable = function(text) {
    return text.length <= 140;
}

function alertTweetable(text) {
    if (text.length <= 140) {
        alert("you can tweet!");
    }
}

alertTweetable("foo");

//コールバック関数
function unfollow() {
    console.log("フォローを外しました");
}

function cancelTweet() {
    console.log("ツイートをキャンセルしました");
}

function confirmed(fn) {
    if (window.confirm("実行しますか？")) {
        fn();
    }
}

confirmed(unfollow);

function confirmed(fn) {
    const input = window.prompt("実行しますか？");
    if(input === "実行") {
        fn();
    }
}

function confirmed(fn) {
    const input = window.prompt("実行しますか？");
    fn(input);
}

confirmed(function(input) {
    if(input === "実行") {
        console.log("リポジトリを削除");
    }
});

const btn = document.getElementById("button");

btn.addEventListener("click", function() {
    console.log("フォローを解除");
});

const foods = ["にんじん", "じゃがいも", "玉ねぎ"];

foods.forEach(function(food) {
    console.log(food);
});

