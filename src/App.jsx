import Header from './component/Header'
import Sidebar from './component/Sidebar'
import Content from './component/Content'
import MyButton from './component/MyButton'
import MyInput from './component/MyInput'
import './App.css'
import { useState } from 'react';

export default function App(){
  const [id,setId]=useState()
  const [prenom,setPrenom]=useState()
  const [note,setNote]=useState()
  const [etudiant,setEtudiant]= useState([
    {id:1,prenom:"Yassin",note:"14"},
    {id:2,prenom:"Youssef",note:"16"},
    {id:3,prenom:"Ghita",note:"18"},
    {id:4,prenom:"Amin",note:"20"},
    {id:5,prenom:"Mohamed",note:"12"},
    {id:6,prenom:"Sara",note:"19"}
  ])

  const MyContentsList=etudiant.map((cont)=>{
    return(
      <Content key={cont.id} prenom={cont.prenom} note={cont.note} />
        
    )
  })
  function ajouter(){
    const newEtudiant ={id: id , prenom: prenom ,note: note}
    setEtudiant([...etudiant,newEtudiant])
  }
  return(
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <MyInput setPrenom={setPrenom} setNote={setNote} setId={setId}/>
          <MyButton ajouter={ajouter}/>
          
          <h2 className="text-3xl font-bold">
            Liste des étudiants
          </h2>
          <div class="mt-6 grid grid-cols-3 gap-5">
            {MyContentsList}
          </div>
        </main>
      </div>
    </div>
  )
}
