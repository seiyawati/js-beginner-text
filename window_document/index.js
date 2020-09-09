let youtuber = {
    list: {
        business:{
            youtuber: [
                {name: "しまぶー", age: 20, teachPrograming() {}},
                {name: "あっちゃん", age: 37, teachHistory() {}}
            ],
            teach() {}
        },
        entertaiment: {
            youtuber: [{name: "ヒカキン"}, {name: "はじめしゃちょー"}],
            makeSmile() {}
        },
    },
    plan() {},
    uploadVideo() {}
};

console.log(youtuber.list.business.youtuber[0].name)

//windowオブジェクトは省略されている
window.alert
window.console
window.document

export default youtuber;

