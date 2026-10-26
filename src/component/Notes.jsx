export default function Notes() {
  const etudiants = [
    { id: 4, prenom: "Amin", note: "20" },
    { id: 6, prenom: "Sara", note: "19" },
    { id: 3, prenom: "Ghita", note: "18" },
    { id: 2, prenom: "Youssef", note: "16" },
    { id: 1, prenom: "Yassin", note: "14" },
    { id: 5, prenom: "Mohamed", note: "9" }
  ];

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen w-screen">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Notes & Classement</h1>
        <p className="text-gray-500 mt-1">Consultez les performances et les résultats des examens.</p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl">
          <p className="text-sm font-semibold text-emerald-700">Meilleure Note</p>
          <p className="text-3xl font-extrabold text-emerald-900 mt-2">20 / 20 <span className="text-sm font-normal text-emerald-700">(Amin)</span></p>
        </div>
        <div className="p-6 bg-rose-50 border border-rose-200 rounded-2xl">
          <p className="text-sm font-semibold text-rose-700">Note la plus basse</p>
          <p className="text-3xl font-extrabold text-rose-900 mt-2">9 / 20 <span className="text-sm font-normal text-rose-700">(Mohamed)</span></p>
        </div>
      </div>

      {/* Tableau */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">Classement Général</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase font-bold text-xs tracking-wider border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Prénom</th>
                <th className="px-6 py-4">Note</th>
                <th className="px-6 py-4">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {etudiants.map((item) => {
                const isAdmis = Number(item.note) >= 10;
                return (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">#{item.id}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">{item.prenom}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">{item.note} / 20</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${isAdmis ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                        {isAdmis ? "Validé" : "Rattrapage"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}