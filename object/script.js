let mevalar={
apelsin:{
nomi:"apelsin",
rangi:"olovrang",
shakli:"dumaloq",
soni: 10,
holati:"toza",
isIndia:false
},




}


let meva ={
    nomi:"banan",
rangi:"sariq",
shakli:"yarim oysimon",
soni:10,
holati:"toza",
isIndia:true,
manzil:[
    "O'zbekiston,tojikiston,qirg'iziston,qozog'iston,afg'oniston,turkmaniston."
],
meva:{
nomi:"olma",
rangi:"qizil",
shakli:"yumaloq",
soni:10,
holati:"toza",
isIndia:false,
manzil:[
    "O'zbekiston","tojikiston","hindiston","rossiya"
],

function () {
    console.log("Mevalar olami"+this.nomi);
    
},

}





}
// console.log(Object.keys(meva));
// console.log(Object.values(meva));
console.log(Object.entries(meva));

for (let key in meva){
console.log( key + ":" + meva[key])
}
