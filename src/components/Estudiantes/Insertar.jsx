import { insertarEstudiante } from "@/lib/actions";
import { obtenerGrupos } from "@/lib/data";

function EstudianteInsertar() {
    return (
        <form action={insertarEstudiante} className="space-y-4">
            <input name="nombre" placeholder="Nombre" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
            <input type="date" name="fecha_nacimiento" placeholder="fecha_nacimiento" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />

            <input name="foto" placeholder="foto" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
            <input name="tutor_legal" placeholder="Tutor" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
            <select name="grupoId" id="grupoId">
                {obtenerGrupos().then(grupos => grupos.map(grupo => <option key={grupo.id} value={grupo.id}>{grupo.nombre}</option>))}
                
            </select>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md">Insertar estudiante</button>
        </form>
    );
}

export default EstudianteInsertar;