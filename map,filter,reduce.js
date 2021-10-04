
//map

arr=[1,2,3,4,5,6,7,8,9,10] 

const even=function(num){
   if(num%2==0){
       return num
   }
}

new_arr=arr.map(even);

console.log(new_arr);


//filter 

arr=[1,2,3,4,5,10,20,30,40,50] 

function greater(num){
    return num>=10
}

new_arr=arr.filter(greater)
console.log(new_arr)


//reduce 

const numbers=[1,2,3,4,5] 

function sum(s,num){
  return s+num
}

total=numbers.reduce(sum)
console.log(total)