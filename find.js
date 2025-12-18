let arr=[10,20,30,40];

let polyfillFind=(cb)=>{
for (let i = 0; i < arr.length; i++) {
    let val=cb(arr[i],i,arr)
 if(val)
    {
        return arr[i];
    }    
}

}

console.log(polyfillFind((val,index,arr)=>{
return val>25;
}));