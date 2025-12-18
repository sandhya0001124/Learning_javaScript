let arr=[10,30, 55,22,56,89];

let plyfillFilter=(cb)=>{
    let temp=[];
    for (let i = 0; i < arr.length; i++) {
    
        let val=cb(arr[i],i,arr)
        if(val==true)
        {
            temp.push(arr[i])
        }
    }
    return temp;


}
console.log(plyfillFilter((val,index,arr)=>{
    return val%2==0
}));