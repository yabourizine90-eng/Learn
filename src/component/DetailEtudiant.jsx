import { useParams } from "react-router";

export default function DetailEtudiant() {
  const etudiants = [
    { id: 1, prenom: "Yassin", note: "14" },
    { id: 2, prenom: "Youssef", note: "16" },
    { id: 3, prenom: "Ghita", note: "18" },
    { id: 4, prenom: "Amin", note: "20" },
    { id: 5, prenom: "Mohamed", note: "9" },
    { id: 6, prenom: "Sara", note: "19" },
  ];
  const { id } = useParams();

  return (
    <div className="flex items-center pl-100 ">
      {etudiants.map((item) => {
        const isLow = Number(item.note) < 10;
        if (item.id == id) {
          return (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between ${isLow ? "bg-rose-50 border-rose-200" : "bg-white border-gray-200"}`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg">
                    ID: {item.id}
                  </span>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-lg ${isLow ? "bg-rose-200 text-rose-800" : "bg-emerald-100 text-emerald-800"}`}
                  >
                    {isLow ? "Échoué" : "Validé"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.prenom}
                </h3>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm text-gray-500 font-medium">
                  Note obtenue :
                </span>
                <span className="text-lg font-extrabold text-gray-900">
                  {item.note} / 20
                </span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
