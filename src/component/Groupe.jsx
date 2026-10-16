import { useEffect, useState } from "react";


export default function Groupe(){
    const etudiant=[
    {id:1, prenom:"Yassin", note:"14" , groupId:1},
    {id:2, prenom:"Youssef", note:"16" , groupId:2},
    {id:3, prenom:"Ghita", note:"18" , groupId:3},
    {id:4, prenom:"Amin", note:"20" , groupId:4},
    {id:5, prenom:"Mohamed", note:"12" , groupId:1},
    {id:6, prenom:"Sara", note:"19" , groupId:2}
    ];
    
    const groupes=[
        {id:1,libelle:"DD201"},
        {id:2,libelle:"DD202"},
        {id:3,libelle:"DD203"},
        {id:4,libelle:"DD204"}
    ];

    const [selectedGr,setSelectedGr]=useState(groupes[0].id);
    const [filteredSt,setFilteredSt]=useState([])
    useEffect(()=>{
        if(selectedGr){
            const newList = etudiant.filter((item)=>{
                return item.groupId == selectedGr
            })
            setFilteredSt(newList);
        }
    },[selectedGr])


   
    
    return(
        <>
            <select onChange={(e)=>setSelectedGr(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 bg-white 
                border border-gray-300 rounded-lg focus:outline-none 
                focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                m-3" 
            >
                {groupes.map((item , i)=>{
                    return <option key={i} value={item.id}>{item.libelle}</option>
                })}
            </select>
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