import { useState, } from "react";
import Groupe from "./Groupe";
export default function Content(){
    const [etudiants, setEtudiants] = useState({ id: "", prenom: "", note: "",groupe:"" })
  
  const [etudiant, setEtudiant] = useState([
    {id:1, prenom:"Yassin", note:"14" },
    {id:2, prenom:"Youssef", note:"16" },
    {id:3, prenom:"Ghita", note:"18" },
    {id:4, prenom:"Amin", note:"20" },
    {id:5, prenom:"Mohamed", note:"12" },
    {id:6, prenom:"Sara", note:"19" }
  ])

  
  function onInput(event){
    const {name, value} = event.target;
    const newEtudiant = {...etudiants, [name]: value}
    setEtudiants(newEtudiant)
  }

  function ajouter(){
    const newEtudiant = { id: etudiants.id, prenom: etudiants.prenom, note: etudiants.note }
    setEtudiant([...etudiant, newEtudiant])
  }

  function modifier(){
    const newEtudiant = { id: etudiants.id, prenom: etudiants.prenom, note: etudiants.note }
    const updateEtudiant = etudiant.map((item)=>{
      if(item.id == etudiants.id){
        return newEtudiant
      }
      return item
    })
    setEtudiant(updateEtudiant)
  }

  function remplir(data){
    setEtudiants({ id: data.id, prenom: data.prenom, note: data.note })
  }

  function supprimer(){
    if(confirm("Voulez vous supprimer ce stagiaire")){
      const newEtudiants = etudiant.filter((item)=>{
        return item.id != etudiants.id
      })
      setEtudiant(newEtudiants)
    }
  }
    
    return(
        <main className="flex-1 p-8">
            <div>
              <input 
                onChange={onInput} 
                value={etudiants.prenom} 
                type="text" 
                name="prenom"
                placeholder="Saisir PRENOM" 
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 m-3" 
              />
              <input 
                onChange={onInput} 
                value={etudiants.note} 
                type="number" 
                name="note"
                placeholder="Saisir NOTE" 
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 m-3" 
              />
              <input 
                onChange={onInput} 
                value={etudiants.id} 
                type="number" 
                name="id"
                placeholder="Saisir ID" 
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 m-3" 
              />

              <Groupe />
              
              <button onClick={ajouter} 
                type="button" className="px-4 py-2 text-sm 
                font-medium text-white bg-blue-600 rounded-lg 
                hover:bg-blue-700 focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-offset-2 transition-colors 
                m-3">
                ajouter
              </button>
              
              <button onClick={modifier} 
                type="button" className="px-4 py-2 text-sm 
                font-medium text-white bg-blue-600 rounded-lg 
                hover:bg-blue-700 focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-offset-2 transition-colors 
                m-3">
                modifier
              </button>

              <button onClick={supprimer} 
                type="button" className="px-4 py-2 text-sm 
                font-medium text-white bg-blue-600 rounded-lg 
                hover:bg-blue-700 focus:outline-none focus:ring-2 
                focus:ring-blue-500 focus:ring-offset-2 transition-colors 
                m-3">
                supprimer
              </button>
            </div>
          <h2 className="text-3xl font-bold">
            Liste des étudiants
          </h2>

          <div className="mt-6 grid grid-cols-3 gap-5">
            {etudiant.map((item)=>{
              const color = item.note < 10 ? "bg-red-400" : "bg-white";
              return(
                <div className={`rounded-xl ${color} p-5 shadow hover:bg-blue-400`} onClick={() => remplir(item)} key={item.id}> 
                    <h3 className="text-lg font-bold">
                      {item.prenom}
                    </h3>
                    <p className="mt-2 text-slate-500">
                      Note : {item.note} / 20
                    </p>
                </div>
              )
            })}
          </div>
        </main>
    )
}