import { Link } from "react-router";
export default function Sidebar() {
  return (
    <div className="flex">
      <aside className="min-h-screen w-64 bg-slate-900 p-5 text-white">
        <h2 className="mb-5 font-bold">Menu</h2>

        <ul className="space-y-3">
          <Link to="/accueil">
            <li>Accueil</li>
          </Link>
          <Link to="/etudiants">
            <li>Étudiants</li>
          </Link>
          <Link to="/notes">
            <li>Notes</li>
          </Link>
        </ul>
      </aside>
    </div>
  );
}
