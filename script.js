//Print odd numbers in an array_ IIFE
(function oddNumber(arr){
    for(let i=0; i<arr.lenght; i++) {
        if (arr[i]% 2 != 0){
            console.log(arr[i]);
        }
    }
}) 
([1,2,3,4,5,6,7,8]);

//Print odd numbers in an array_ Anonymous 

let printOddNumber= function(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !=0){
            console.log(arr[i]);
        }
    }
};
printOddNumber([1,2,3,4,5,6,7,8]);

//Print odd numbers in an array_ Arrow functions

let printOddNumber1= (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] %2 !=0){
            console.log(arr[i]);
        }
    }
};
printOddNumber1([1,2,3,4,5,6,7,8]);

//Convert all the strings to title caps in a string array_IIFE

(function (str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        console.log(str[i]);
    }
    return str.join(' ');    
}) ("abc");

//Convert all the strings to title caps in a string array_Anonymous

let deeksha= function (str) {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        console.log(str[i]);
    }
    return str.join(" ");    
}; deeksha("guvi");

//Convert all the strings to title caps in a string array_Arrow functions

let deeksha1= (str) => {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        console.log(str[i]);
    }
    return str.join(" ");    
}; deeksha1("subash");

//Sum of all numbers in an array_IIFE

(function sumNum(sumarr){

    let sum=0
        for (let i=0;i<sumarr.length;i++){
        let b  =(sumarr[i]);
        sum += b;
    }
    console.log(sum);
}
)([1,2,3,4,5]);

//Sum of all numbers in an array_Anonymous

let sumNum1 = function (sumarr){
    let sum1= 0
    for(let i=0; i<sumarr.length; i++){
        let b1 = (sumarr[i]);
        sum1 += b1;
    }
    console.log(sum1);
    }; sumNum1([1,2,3,4,5,6]);

    //Sum of all numbers in an array_ Arrow functions

    let sumNum2 = (sumarr) => {
        let sum2=0
        for(let i=0; i<sumarr.lenght; i++){
            let b2= (sumarr[i]);
            sum2 += b2;
        }
        console.log(sum2);
    };sumNum2([1,2,3,4,5,6]);

    //Return all the prime numbers in an array_IIFE

    (function(arr) {
        function prime(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }
    
        for (let i = 0; i < arr.length; i++) {
            if (prime(arr[i])) {
                console.log(arr[i]);
            }
        }
    })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    //Return all the prime numbers in an array_Anonymous Function

    let primenum =function(arr){
        function prime(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }
    
        for (let i = 0; i < arr.length; i++) {
            if (prime(arr[i])) {
                console.log(arr[i]);
            }
        }
    };
    primenum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    //Return all the prime numbers in an array_Function

    let primeee =(arr)=>{
        function prime(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }
    
        for (let i = 0; i < arr.length; i++) {
            if (prime(arr[i])) {
                console.log(arr[i]);
            }
        }
    };
    primeee([1,2,3,4,5,6,7,8,9,10]);

    // Return all the palindromes in an array_IIFE
   
    let palindromes = (function(arr) {
        function isPalindrome(str) {
            const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            return cleanStr === cleanStr.split('').reverse().join('');
        }
    
        return arr.filter(item => isPalindrome(item));
    })(["mam","sir","malayalam"]);
    
    console.log("Palindromes:", palindromes);

    // Return all the palindromes in an array_Anonymous

    let palindrom =function(arr){
        function isPalindrome(str) {
            const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            return cleanStr === cleanStr.split('').reverse().join('');
        }
    
        return arr.filter(item => isPalindrome(item));
    };
    
    console.log("Palindromes:", palindromes);
    ;
    palindrom(["mam","sir","malayalam"]);

    // Return all the palindromes in an array_Arrow Function

    let palin =(arr)=>{
        function isPalindrome(str) {
            const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
            return cleanStr === cleanStr.split('').reverse().join('');
        }
    
        return arr.filter(item => isPalindrome(item));
    };
    
    console.log("Palindromes:", palin(["level","other","dad","mom"]));

    // Return medium of two sorted arrays of the same size_IIFE
    
    (function(a,b) {
        function median (){
        let c = [...a, ...b].sort((a, b) => a - b);
    
        let length = c.length;
        let middle = Math.floor(length / 2);
    
        if (length % 2 === 0)
        {
            console.log((c[middle - 1] + c[middle]) / 2);
        } 
        else 
        {
            console.log([middle]);
        }
    }
    median();

        })([1,2,3],[4,5,6])

    // Return medium of two sorted arrays of the same size_IIFE_Arrow Function 
    
    let medium =(a,b) => {
        let c = [...a, ...b].sort((a, b) => a - b);
    
        let length = c.length;
        let middle = Math.floor(length / 2);
    
        if (length % 2 === 0)
        {
            console.log((c[middle - 1] + c[middle]) / 2);
        } 
        else 
        {
            console.log([middle]);
        }
    } 
    medium([2,3,4],[5,6,7]);

    // Remove duplicates from an array_IIFE 

    (function(arr){
        function duplicate(){
            let a=[...new Set(arr)];
            console.log(a);
        }
        duplicate();
    })([3,3,4,4,5]);

    // Remove duplicates from an array_anonymous functions

    let duplicate1 = function (arr){
        let a=[...new Set(arr)];
        console.log(a);
    
    };
    duplicate1([1,2,3,4,4]);

    // Rotate an array by k times_IIFE
    
    (function (arr,k){{
        let rotate =[...arr.slice(k), ...arr.slice(0,k)];
        console.log(rotate);
    };
    })([1,2,3,4],2);
