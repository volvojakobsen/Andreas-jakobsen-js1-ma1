const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//question 1

const cat = {
    complain: function(){
        console.log("meow!")
    }
}

//console.log(cat.complain())


//question 2

var heading = document.querySelector("h3");

heading.innerHTML = "updated heading";

//question 3

heading.style.fontSize = "2rem";

//question 4

heading.className = "subheading";


//question 5

const paragraphs = document.querySelectorAll("p");

for(var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//question 6

const resultContainer = document.querySelector(".results");

resultContainer.innerHTML = " <p>New paragraph</p>";
resultContainer.style.backgroundColor = "yellow";

//question 7

function listLoop (list) {
    for(var i = 0; i < list.length; i++) {
        console.log(list[i].name)
    } 
}

listLoop(cats)

//question 8
var varCat = document.querySelectorAll(".cat-container");
varCat.innerHTML = "jajajaja"

function createCats(cats) {
    for(var i = 0; i < cats.length; i++) {
        varCat.innerHTML = `<div><h5>${cats[i].name}</h5></div>`;
    }
}

createCats(cats)

//newHTML.innerHTML = "<div><h5>cats[i].name</h5></div>";