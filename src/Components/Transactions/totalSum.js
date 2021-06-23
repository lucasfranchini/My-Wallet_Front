export default function totalSum(records){
    if(!records) return null;
    return records.reduce((acc,r)=>{
        if(r.type==='expense') return acc-=r.value;
        else return acc +=r.value;
    },0)
}