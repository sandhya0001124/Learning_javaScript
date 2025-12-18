let arr=[10,20,30,40];

let polyfillreduce=(cb)=>{

    let acc=0;
    for (let i = 0; i < arr.length; i++) {
     acc=cb(arr[i],i,arr,acc)
        
    }
     return acc;
}
console.log(polyfillreduce((val,index,arr,acc)=>{
return acc+=val;
}));
