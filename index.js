let findMax= async (Arr)=>{
    if(Arr instanceof Array){
        return Math.max(...Arr)
    }else {
        throw new Error(`this is not an Array`)
    }
}
let final= async ()=>{
    try{
        let result= await findMax([1,2,3,4,5,6])
        console.log(result)
    }
    catch(error) {
        console.log(error)
    }
}
final()