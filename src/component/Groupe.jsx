import { useEffect, useState } from "react";


export default function Groupe(){
    const etudiant=[
    {id:1, prenom:"Yassin", note:"14" , groupLibelle:"DD201"},
    {id:2, prenom:"Youssef", note:"16" , groupLibelle:"DD202"},
    {id:3, prenom:"Ghita", note:"18" , groupLibelle:"DD203"},
    {id:4, prenom:"Amin", note:"20" , groupLibelle:"DD204"},
    {id:5, prenom:"Mohamed", note:"12" , groupLibelle:"DD201"},
    {id:6, prenom:"Sara", note:"19" , groupLibelle:"DD202"}
    ];
    
    const groupes=[
        {id:1,libelle:"DD201"},
        {id:2,libelle:"DD202"},
        {id:3,libelle:"DD203"},
        {id:4,libelle:"DD204"}
    ];

    const [selectedGr,setSelectedGr]=useState(groupes[0].libelle);
    const [filteredSt,setFilteredSt]=useState([])
    const [secondes,setSecondes]=useState(0)

    useEffect(()=>{
        if(selectedGr){
            const newList = etudiant.filter((item)=>{
                return item.groupLibelle == selectedGr
            })
            setFilteredSt(newList);
            document.title =selectedGr
        }
    },[selectedGr])

    useEffect(()=>{
        console.log("mounted !!!")
        const intervalId=setInterval(()=>{
            setSecondes((s)=> s+1)
        },1000)
        // clearup function 
        return()=>{
            console.log("unmounted !!!")
            clearInterval(intervalId)
        }
    },[])


   
    
    return(
        <>
            <select onChange={(e)=>setSelectedGr(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 bg-white 
                border border-gray-300 rounded-lg focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                m-3" 
            >
                {groupes.map((item , i)=>{
                    return <option key={i} value={item.libelle}>{item.libelle}</option>
                })}
            </select>
            {secondes}
            <ul className="w-full px-4 py-2 text-gray-700 bg-white 
                border border-gray-300 rounded-lg focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                m-3" 
            >{filteredSt.map((item , i)=>{
                return <li key={i}>{item.prenom}</li>
            })}</ul>
            
        </>
    )
}