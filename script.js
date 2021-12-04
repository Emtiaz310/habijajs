// var n = 563

// if ( n % 2 === 0){
//     console.log(n + ' is even number')
// }
// else{
//     console.log( n + ' is odd number ');
// }

// var sum = 0 
// for (let i = 1; i <=10 ; i++){
//     console.log(sum + ' + ' + i + '=' + (sum+i) );
//     sum += i;
// }

// console.log('result = ' + sum )

// let sum = 0 
// for (let i = 0 ; i < 100 ; i++ ){
//     if(i % 2 === 0 ){
//         console.log(sum + '+' + i + '=' + (sum+i));
//         sum += i;
//     }
    
// } 

// 1
// 1 2
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5
// 1 2 3 4 5 6
// nestedloop 

let n = 20 
for ( let i = 1 ; i <= n ; i++ ){
    let result = '' ;
    for( let j = 1 ; j <= i ; j++){
        result += j + ' ' ;
    }
    console.log(result);
}

// Sum  

// let x = [ 100,200,300,400,500,600,700,800,900,1000,1,5,7]
// let leng = x.length ;
// let sum = 0 
// for (let i = 0; i < leng; i++ ){
//     if( x [i]% 2 === 1){
//         sum += x[i];
//     }
// }
// console.log(sum);

let arr =[
    [30,40,20,30],
    [40,38,48,50],
    [30,48,50,44],
    [45,49,50,40]
]
// console.log(arr[1]) ;

for ( let i = 0 ; i < arr.length; i++){
    for ( let j = 0; j < arr[i].length ; j++){
        console.log('Element ' + i + ' : ' + arr[i][j])
    }
}



