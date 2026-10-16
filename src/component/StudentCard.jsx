export default function StudentCard({item,color,onRemplir}){
    return(
    <div className={`rounded-xl ${color} p-5 shadow hover:bg-blue-400`} onClick={() => onRemplir(item)} key={item.id}> 
        <h3 className="text-lg font-bold">
            {item.prenom}
        </h3>
        <p className="mt-2 text-slate-500">
            Note : {item.note} / 20
        </p>
    </div>
    )
}