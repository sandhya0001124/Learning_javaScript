let  arr=[10,20,30,40,50];

let polyfillmap=(cb)=>{
    let temp=[];
    for(let i=0;i<arr.length;i++)
    {
      let x=cb(arr[i],i,arr);
      temp.push(x);
    }
    return temp;
}

console.log(polyfillmap((val,index,arr)=>{
         return val+10;
}));



