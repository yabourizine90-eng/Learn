export default function MyInput({setPrenom,setNote,setId}){
    return(
        <div>
            <input onChange={(event)=>setPrenom(event.target.value)} type="text" placeholder="Saisir PRENOM" className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 m-3" />
            <input onChange={(event)=>setNote(event.target.value)} type="number" placeholder="Saisir NOTE" className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 m-3" />
            <input onChange={(event)=>setId(event.target.value)} type="number" placeholder="Saisir ID" className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 m-3" />
     
        </div>
    )
}