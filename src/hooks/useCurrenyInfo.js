import { useEffect,useState } from "react";



function useCurrecyInfo(curreny){

    const [data,setDate]=useState({})

    //API CALLING
    useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curreny}.json`)
        .then((res)=>res.json())
        .then((res)=>setDate(res[curreny]))
    }, [curreny])// jab bhi currency ki value change ho tab useEffect run kar do 
     console.log(data);
    return data// data is having the javascript object
    //cuureny ka andhar kabhi bhi chnage ho to ma issa call karwna chugaa

}

export default useCurrecyInfo;