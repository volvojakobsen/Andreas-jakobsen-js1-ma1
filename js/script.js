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

