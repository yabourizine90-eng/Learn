import { useState } from "react"
import Header from "./component/Header"
import Sidebar from "./component/Sidebar"
import Content from "./component/Content"
import Groupe from "./component/Groupe"
import "./App.css"



export default function App(){
  

  
  return(
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}