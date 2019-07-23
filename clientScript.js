

const getNum = async query => {
    const request = new Request();
    // const header = new Headers({
    //     "Content-Type": "application/"
    // });
    console.log("TCL: query", query)
    const queryString = `?query=${query}`;
    return await fetch(`http://localhost:4000/graphql${queryString}`, {
        credentials: "include",
    }).then(res => res.json()).then(json => json.data);
}

const body = document.querySelector("body");
const div = document.createElement("div");
div.setAttribute("class", "main-div");
const h1 = document.createElement("h1");

getNum("{magic_number}").then(data => {
    console.log("TCL: data", data)
    const magic_number = data.magic_number;
    h1.innerText =`magic number is: ${magic_number}`;
    div.appendChild(h1);
    body.appendChild(div);
})

// console.log("TCL: num", num)

// h1.innerText =`magic number is: ${magNum}`;
// div.appendChild(h1);
// console.log("TCL: body", body)
// body.appendChild(div);