// ARRAY UYGA VAZIFA
// 1-masala
let hayvon=["ot","buqa","sher","qoplon"]
console.log(hayvon);

// 2-masala
let ranglar=["qizil","ko'k","yashil","sariq"]
console.log(ranglar[2]);

// 3-masala
let mevalar=["olma","banan","uzum","anor"]
console.log(mevalar.length-1);

// 4-masala
let meva=["olma","banan","uzum"]
meva[2]="behi"
console.log(meva);

// 5-masala
let kunlar=["Dushanba","Seshanba","Chorshanba","Payshanba","Juma"]
for( let i=0; i<=kunlar.length; i++){
    console.log(kunlar[i]);
}
// 6-masala
let sonlar=[10,20,30]
sonlar.push("80","90")
console.log(sonlar);

// 7-masala
let harflar=["a","b","d","e","f","g"]
harflar.pop("g")
harflar.pop("f")
console.log(harflar);
// 8-masaala
let number=[5,10,15,20,25]
let a=0
for(let i=0;i<number.length;i++){
    a +=number[i]
}
console.log(a);
// 9-masala
let b=0
let son=[10,20,30,40,50]
for (let i = 0; i < son.length; i++) {
b+=son[i]
 c=b/2
}
console.log(c);
// 10-masala
let k=[]
let sonnlar=[3,8,11,4,7,20,25]
for(let i=0;i<sonnlar.length; i++){
    if(sonnlar[i]%2==0){
k.push(sonnlar[i])
    }
}
console.log(k);

// 11-masala
let soonlar=[23,56,12,89,67,34]
let d=soonlar[0]
for(let i=0; i<soonlar.length;i++){
        if(soonlar[i]>d){
            d=soonlar[i]
        }
    }
console.log(d);
// 12-masala
let sonllar=[45,12,78,5,34,23]
let min=sonllar[0]
for(let i=0; i<sonllar.length;i++){
        if(sonllar[i]<min){
            min=sonllar[i]
        }
    }
console.log(min);

// 13-masala
let sonlaar=[-5,10,-3,8,-12,15,0]
for(let i=0; i<sonlaar.length;i++){
        if(sonlaar[i]>0){
         console.log(sonlaar[i]);
        }
    }
// 14-masala
let sonlarr=[3,4,8,10]
let array=[]
for(let i=0;i<sonlarr.length;i++){
    array.push(sonlarr[i]*2)
}
console.log(array);

// 15-masala
let ssonlar=[10,15,25,30,]
for(let i=0;i<ssonlar.length;i++){
    if(ssonlar[i]===25){
      
        console.log("bor"); 
    }

}
// 16-masala
let h=0
let numbers=[4,7,12,9,8,15,20]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        h=numbers[i]
        console.log(h);
        
    }
}
//  17-masala
let arrays=[]
let fruits=["olma","banan","uzum","anor"]  
for(i=0;i<fruits.length;i++){
    if(arrays===fruits[i]){
    }
}
 console.log(arrays);
