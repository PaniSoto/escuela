import { modificarEstudiante } from "@/lib/actions";
import { obtenerGrupos } from "@/lib/data";

function EstudianteModificar({estudiante, grupos}) {
    return (
        <form action={modificarEstudiante}>
            <input type="hidden" name="id" defaultValue={estudiante.id} />
            <br /><br />
            <input name="nombre" defaultValue={estudiante.nombre} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
            <input name="fecha_nacimiento" defaultValue={estudiante.fecha_nacimiento} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
            <input name="foto" defaultValue={estudiante.foto} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
            <input name="tutor_legal" defaultValue={estudiante.tutor_legal} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
            <select key={grupos.grupoId} name="grupoId" id="grupoId" defaultValue={estudiante.grupoId}>
               { grupos.map(grupo => <option key={grupo.id} value={grupo.id}>{grupo.nombre}</option>) }
                
            </select>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Modificar</button>
        </form>
    );
}

export default EstudianteModificar;