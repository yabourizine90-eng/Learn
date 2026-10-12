export default function MyButton({ajouter}){
    return(
        <button onClick={ajouter} 
        type="button" className="px-4 py-2 text-sm 
        font-medium text-white bg-blue-600 rounded-lg 
        hover:bg-blue-700 focus:outline-none focus:ring-2 
        focus:ring-blue-500 focus:ring-offset-2 transition-colors 
        m-3">
          ajouter
          </button>
    )
}