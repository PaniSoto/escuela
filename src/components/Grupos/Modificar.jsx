import { modificarGrupo } from "@/lib/actions";

function GrupoModificar({grupo}) {
    return ( 
        
        <form action={modificarGrupo}>
            <input type="hidden" name="id" defaultValue={grupo.id} />
            <br /><br />
            <input name="nombre" defaultValue={grupo.nombre} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
            <input name="tutor" defaultValue={grupo.tutor} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
            <input name="aula" defaultValue={grupo.aula} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Modificar</button>
        </form>
    
     );
}

export default GrupoModificar;