export default function Content({prenom="prenom not exist",note="note not exist"}){
    const color = note<10 ?"bg-red-400":"bg-white";
    return(

        <div className={`rounded-xl ${color} p-5 shadow`} > 
          <h3 className="text-lg font-bold">
            {prenom}
          </h3>

          <p className="mt-2 text-slate-500">
            Note : {note} / 20
          </p>
        </div>
    
    )
}



