let num = 9
for(let i = 1; i <= num; i = i + 1){
    console.log(`${num} x ${i} = ${num * i} `);
}
console.log('=========================')

let name = 'Ridan';
let res = "";
for (let i = name.lenght; i >=0; i--){
    res = res + name[i];
}
console.log(res == name);
console.log('=========================')

let numkm = 1;
let numcm = 1000;
let numb = 100_000;
let satuan = "cm"

if (satuan == "cm"){
    numb = numb / numcm + "cm";
}
if (satuan == "km"){
    numb = numb / numkm + 'km';
}
console.log(numb);
console.log('=========================');

let str = "Taka taka taKA";
let result = "";
for(let i = 0; i < str.lenght; i++){
    if(str[i] == str[i].toLocaleLowerCase()){
        result += str[i].toLowerCase();
    }else{
        result += str[i];
    }
}
console.log(result)