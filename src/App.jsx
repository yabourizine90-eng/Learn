import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
import Etudiants from "./component/Etudiants";
import Notes from "./component/Notes";
import DetailEtudiant from "./component/DetailEtudiant";
import Error from "./component/Error";
import { Route, Routes } from "react-router";
import "./App.css";

export default function App() {
  
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/accueil" element={<Content />} />
          <Route path="/etudiants" element={<Etudiants />} />
          <Route path="*" element={<Error />} />
          <Route path="/etudiants/:id" element={<DetailEtudiant />} />
          <Route path="/notes" element={<Notes />} />
          <Route />
        </Routes>
      </div>
    </div>
  );
}
