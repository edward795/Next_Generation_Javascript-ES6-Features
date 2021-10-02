//spread operator

const arr=[1,2,3,4,5] 
const new_arr=[...arr,6,7,8] 
console.log("Array:",arr,"\nnew array:",new_arr)

const obj={...arr,new_prop:"new_property"} 
console.log("New Object:",obj)

const new_obj={
    ...arr,
    prop:5
}
console.log(new_obj);

//spread ooerator 

const filter=(...args)=>{
    return args.filter(ele => ele===1)
}

console.log(filter(1,2,3,4))

const even=(...args)=>{
    return args.filter(ele => ele%2==0)
}

console.log(even(1,2,3,4))