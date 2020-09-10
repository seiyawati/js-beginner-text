/**
 * 非同期処理の書き方
 */

//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

//関数
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

function addList(user) {
    const list = document.createElement("li");
    list.innerHTML = user.name;
    lists.appendChild(list);
}

async function listUsers() {
    const users = await getUsers();
    users.forEach(addList);
}

//イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);

// async function callApi() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();
//     console.log(users);
//     return users;
// }

// function callApi() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(function(res) {
//             return res.json();
//         })
//         .then(function (users) {
//             console.log(users);
//         });
// }

// function callApi() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//     xhr.responseType = "json";
//     xhr.send();
//     xhr.onload = function () {
//         console.log(xhr.response);
//     };
// }

// callApi();