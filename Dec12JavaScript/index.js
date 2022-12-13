// let a = 1;

// function inc()
// {
//     // let c=document.getElementById("count-el")
//     // console.log(c);

//     a=a+1
//     console.log(a);
// }

// inc()
// inc()
// inc()

// let c=0

// let c = document.getElementById("count-el").innerText
// let c1=0;
// function inc()
// {
//     console.log(c);
//     c1=parseInt(c)+1;
//     document.getElementById("count-el").innerText=c1
//     console.log(c1);
// }

// let countEl = document.getElementById("count-el")

// console.log(countEl);

// let count = 0;

// function inc()
// {
//     count+=1
//     console.log(count);
//     countEl.innerText=count

// }

// function save()
// {
//     console.log(countEl.innerText);
//     document.getElementById("pre-ent").textContent+= countEl.innerText+"-"
//     count=0;
//     countEl.innerText=0;
// }

// save()

// let wc=document.getElementById("welcome")

// let name= "suhas, "
// let grt="good mrng"

// document.getElementById("welcome").innerText = name+grt;

// function err()
// {
//     document.getElementById("ermsg").innerText="Some"
// }

// let num1=2;
// let num2=7;

// document.getElementById("num1").innerText=num1
// document.getElementById("num2").innerText=num2

// function add()
// {
//     let sum = num1 + num2;
//     document.getElementById("sum").textContent="Sum: "+sum
// }

// function sub()
// {
//     let sub = num1 - num2;
//     document.getElementById("sum").textContent="Sum: "+sub
// }

// ! SECTION 2: BLACK JACK GAME

let fc = getrandomcard();

let sc = getrandomcard();

let cards = [fc, sc]

let sum = fc + sc;
console.log(cards);
let hasblackjack = false;
let isalive = true;

let msgEl = document.querySelector("#message")
let crdEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let pname="Suhas"
let pchips=120

let player={
    pname:"Suhas",
    pchips:120,
    sayhello: function(){
        console.log("fun");
    }
}

console.log(player.sayhello());

let playerEl=document.getElementById("player")
playerEl.textContent=player.pname+" $"+player.pchips

console.log(hasblackjack);

function getrandomcard() {
    // return 5;
    let randomnum = Math.floor(Math.random() * 13) + 1

    // if(randomnum>10)
    // {
    //     return 10;
    // }
    // else if (randomnum===1)
    // {
    //     return 11;
    // }
    return randomnum

}



function startgame() {
    rendergame()
}

let msg = ""
function rendergame() {

    crdEl.textContent = "Cards:"
    for (let i = 0; i <= cards.length - 1; i++) {

        crdEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        console.log("new card?");
        msg = "new card?"
    }
    else if (sum === 21) {
        console.log("yo!");
        msg = "yo!"
        hasblackjack = true;
    }
    else if (sum > 21) {
        console.log("out");
        msg = "out"
        isalive = false
    }

    msgEl.textContent = msg
    // document.querySelector("#message").innerText=msg

    // document.getElementById("cards").innerText=fc+","+sc

    // document.getElementById("sum").innerText=sum

}


function newcard() {
    if (isalive === true && hasblackjack === false) 
    {
        let newcardval = getrandomcard()
        sum += newcardval

        cards.push(newcardval)
        console.log(cards);
        startgame()
    }
}

// ! ARRAY PRACTICE

let featuredposts = [
    "check",
    "project",
    "portfolio"
]

let experience = [
    "engineer",
    "consultant",
    "developer"
]

console.log(experience[0]);

console.log(experience.length);


experience.push("s")

console.log(experience);

experience.pop()

console.log(experience);



for (let a = 10; a <= 100; a += 10) {
    console.log(a);
}

for (i = 0; i <= experience.length; i++) {
    // document.getElementById("here").innerText += "," + experience[i]
}

let p1 = 101
let p2 = 109

function ptime() {
    if (p1 < p2) {
        return p1 + p2
    }
}

ptime()
console.log(ptime());

console.log(Math.random() * 6);

console.log(Math.floor((Math.random() * 6) + 1));

function rolldice() {
    return (Math.floor((Math.random() * 6) + 1));
}

rolldice()

let hascert = true
let givecert = true

if (hascert === true && givecert === true) {
    // if(givecert===true)
    // {
    console.log("genere");
    // }
}

let course={
    title: "Learn CSS",
    lessons: 20
}

console.log(course.title);
console.log(course["title"]);

let airbnb={
    iscastle: true,
    name: "queen's",
    price: 120,
    facilities:[
        "hotwater",
        "internet"
    ]
}

console.log(airbnb.iscastle);
console.log(airbnb.facilities);

let age=17;

if(age<6)
    console.log("free");
else if(age>=6 && age<=17)
    console.log("child disc");
else if(age>=18 && age<=26)
    console.log("Student disc");

let hands=["a","b","c"]

// console.log(hands.random());

function randomhand()
{
    let rn=Math.floor((Math.random()*3))
    console.log( hands[rn])
}

randomhand()

let fruits = ["apple","orange","orange","apple"]

for(let j=0;j<fruits.length;j++)
{
    if(fruits[j]==="apple")
    {
        document.getElementById("ashelf").innerText+=fruits[j]
    }
}