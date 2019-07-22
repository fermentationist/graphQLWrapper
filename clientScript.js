console.log("client script loaded.");

const getNum = async () => {
    return await fetch("https://localhost:4000/", {credentials: "include"}).then(res => res);
}
const num = fetch("http://localhost:4000/", {credentials: "include"}).then(x => {
    console.log("øøø", x);
    return x;
}).catch(e => console.log(e));
// const num = getNum().then(x => console.log("øøø", x)).catch(e => console.log(e))
console.log("TCL: num", num)
const magNum = num || 3;
const body = document.querySelector("body");
console.log("TCL: body", body)
const div = document.createElement("div");
console.log("TCL: div", div)
div.setAttribute("class", "main-div");
const h1 = document.createElement("h1")
h1.innerText =`magic number is: ${magNum}`;
div.appendChild(h1);
console.log("TCL: body", body)
body.appendChild(div);