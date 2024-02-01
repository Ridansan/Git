let num = String(1000);
let count = 1;
let reverseRes = "";
let res = "";
    for( let i = num.lenght -1; i >=0; i--){
        if(counter % 3 === 0 && counter != num.lenght){
            reverseRes += num[i] +".";
        } else {
            reverseRes += num[i];
        }
        counter++;
    }
    console.log(reverseRes);
