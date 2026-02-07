// // data type =ma'lumot turlari:
// // 1.String-doim ""ni ichida yoziladi.
// let fullName ="Murodjon"
// // 2.Number-oddiy sonlar 
// let age ="2"
// let year = 2025;
// // 3.boolean- dan doim 2ta qiymat qaytaradi
// // Ular: false,true 
// // False: 0, false,undefined,NaN,null 
// let rostYolgon = Boolean(null)
// // console.log(rostYolgon) 
// let ages = boolean()
// console.log(ages)

// for(let i=3; i<100; i++){
//     if (i%3==0) {
//         console.log(i);
        
//     }
// }
let elinp = document.querySelector(".inp")
let elput = document.querySelector(".put")
let elbutton = document.querySelector(".btn")
let eldiv= document.querySelector(".javas")

elinp.addEventListener("click", ()=> {
    eldiv.innerHTML=`<h2> ${elinp.value}</h2> <p> ${elput.value} </p> `
    eldiv.style.border ="1px solid black"
    eldiv.style.padding ="20px"
    eldiv.style.marginTop="10px"    
}


)