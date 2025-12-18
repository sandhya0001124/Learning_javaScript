let arr=[10,80,38,20,46];

let polyfillSort=(cb)=>{
        
          for (let j = 0; j < arr.length; j++) {
          
               for (let k = j+1; k < arr.length; k++) {
                
                let x= cb(arr[j],arr[k])
                if(x>0)
                {
                    let temp=arr[j];
                    arr[j]=arr[k];
                    arr[k]=temp;
                }
               }
            
          }
          return arr;

        }

console.log(polyfillSort((a,b)=>{
return b-a

}));