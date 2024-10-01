// function hello(){
//     console.log("inside Hello function");
//     console.log("Hello World");
// }
// function demo(){
//     console.log("calling hello function");
//     hello();
// }

// console.log("calling demo fucntion");
// demo();
// console.log("done bye  ");


// const hello = () =>{
//     console.log("inside Hello function");
//     console.log("Hello World");

// }

// const demo = () =>{
//     console.log("calling hello function");
//     hello();

// }

// console.log("calling demo fucntion");
// demo();
// console.log("done bye  "); 


// function one (){
//     return 1;
// }

// function two (){
//     return one() + one ();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// setTimeout(function (){
//     console.log("Hello World")
// },2000)

// setTimeout(function (){
//     console.log("This is Anil Yadav")
// },2000)

// console.log("Hey");

// let a = 20 ;
// console.log(a);
// let b = 33;
// console.log(b);
// console.log(a+b);

// let h1 = document.querySelector("h1");
// setTimeout(() =>{
//     h1.style.color ="Green";
// },2000);

// setTimeout(() =>{
//     h1.style.color ="Yellow";
// },3000);

// setTimeout(() =>{
//     h1.style.color ="Orange";
// },5000);
// let h1 = document.querySelector("h1");
// function changeColor(color , delay){
//     return new Promise ((resolve ,reject) =>{
//         setTimeout(() =>{
//             let num = Math.floor(Math.random()*5) +1;
//             if(num >3){
//                 reject ("promise rejected")
//             }
//             h1.style.color = color;
//             resolve("color change");
//         } ,delay)
//     })
// }

// async function demo(){
//     try{await changeColor("red" ,1000);
//         await changeColor("green" ,1000);
//         await changeColor("yellow" ,1000);
//         await changeColor("blue" ,1000);
//         await changeColor("orange" ,1000);}
//     catch (err){
//         console.log("error caught");
//         console.log(err);
//     }

//    a = 5;
//    console.log(a);
//    console.log(a+3);
// }

// changeColor("red" , 1000)
// .then(() =>{
//     console.log("red color was completed");
//     return changeColor("green" , 1000)
// })

// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("yellow" , 1000)
// })

// .then(()=>{
//     console.log("yellow color was completed");
//     return changeColor("blue" , 1000)
// })

// .then(()=>{
//     console.log("blue color was completed");
// })

// changeColor("red" ,1000 ,()=>{
//     changeColor("green" ,1000 ,() =>{
//         changeColor("yellow" ,1000 ,() =>{
//             changeColor("blue" ,1000);
//         });
//     });
// });



// function savetodb (data , success , failure){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetodb(
//     "Anil Yadav", 
//     ()=>{
//     console.log("Success : your data was saved"); 
//     savetodb("Rohit Habibikar" , () =>{
//         console.log("Success : your data was saved"); 
//         savetodb("jatin" , ()=>{
//             console.log("Success : your data was saved");
//         } ,()=>{
//             console.log("Failure : Your data was not saved");
//         } )  

//     },
//     ()=>{
//         console.log("Failure : Your data was not saved");
//     }
// )
//      }, 
//     ()=>{
//     console.log("Failure : Weak Connection try again");

//     }
// );


// let internetspeed = Math.floor(Math.random () *10) +1;
// function savetodb (data) {
//     return new Promise ((resolve , reject) =>{

//         if(internetspeed >4){
//             resolve("success");
//         } else{
//             reject("failure");
//         }

//     })
// }

// savetodb("Anil Yadav")
// .then((result) => {
//     console.log("Data1 saved, promise was resolved");
//     console.log("Result of promise",result);
//     return savetodb("Rohit Habibkar");
// })
// .then(() =>{
//     console.log("Data2 saved, promise was resolved");
//     console.log("Result of promise",result);
//     returnsavetodb ("Jatin vaity");
// })
// .then(()=>{
//     console.log("Data3 saved, promise was resolved");
//     console.log("Result of promise",result);
// })
// .catch((error) =>{
//     console.log("promise was rejected");
//     console.log("Error of promise" ,error);



// Part 12

// async function greet(){
//     throw "Weak connection"

//     return "hello world";
// }

// greet()
// .then((result) =>{
//     console.log("promise was solved");
//     console.log("Result of promise",result);
// })
// .catch((error) =>{
//     console.log("promise was rejected");
//     console.log("Error of promise" ,error);
// })

// let demo = async() =>{
//     return 5;
// }

// demo();

// function getNum(){
//     return new Promise((resolve ,reject) =>{
//         setTimeout(() =>{let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);      
//     });
// }
// async function demo(){
//    await  getNum();
//     await getNum();
//     await getNum();
// }




// let jsonRes = '{"fact":"Kittens remain with their mother till the age of 9 weeks.","length":57}';
// let validRes = JSON.parse(jsonRes);
// console.log(validRes .fact);
// let student = {
//     name: "Anil",
//     age: 20,
//     subjects: ["Math","Science"],
//     grade: 85
// }

// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((result) =>{
//     console.log("response" , result);
//     console.log(result.json());
// })
// .catch((error) =>{
//     console.log("error" , error);
// })

// async function getFacts(){
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data.fact);
//     }
//     catch (error) {
//         console.log("error" , error);
//     }
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     let p = document.querySelector("#Fact");
//     p.textContent = fact;
// });

// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (error) {
//         console.log("error", error);
//         return "Error fetching fact";
//     }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getjoke(){
//     try{
//         const config = {headers :{Accept :"application/json"}};
//         let res = await axios.get(url , config);
//         console.log(res.data);
//     }
//     catch(err){
//         console.log("error found",err);
//     }
// }

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country =  document.querySelector("input").value;
    console.log(country);

    let colArr = await getcolleges(country);
    Show(colArr);

});

async function getcolleges (country){
    try{
    let res = await axios.get(url +country);
    return res.data;
    }catch(err){
        console.log("error detected", err);
    }
}

function Show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}