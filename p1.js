// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("IT LODED");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.height);
// };

// req.onerror = function () {
//     console.log("ERROR");
//     console.log(this);
// };
// req.open("GET", "https://swapi.dev/api/planets/1/");
// req.send();


fetch("https://swapi.dev/api/planets/1/")
    .then(res => {
        console.log("resolved", res);
        res.json().then((data) => console.log("jsondone", data));
    })
    .catch((e) => {
        console.log("EROR", e);
    })