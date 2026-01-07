export let a=10;  //! NAMED EXPORT

// export  default function demo() {
    
//     console.log("Exported function");
    
// }  // ! DEFULT EXPORT

let crudOil1="PETROL";
let crudOil2="DIESEL";
let crudOil3="KEROSENE";


export default{
  crudOil1,crudOil2,crudOil3
}


export function add (a,b){
return a+b;

}

export function sub(a,b)
{
    return a-b;
}