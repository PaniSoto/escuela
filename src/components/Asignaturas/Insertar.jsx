import { insertarAsignatura } from "@/lib/actions";

function AsignaturaInsertar() {
    return ( 
        <form action={insertarAsignatura} className="space-y-4">
            <input name="nombre" placeholder="Nombre" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
            <input type="date" name="fecha_nacimiento" placeholder="fecha_nacimiento" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />

            <input name="profesor" placeholder="Profesor" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
            <input name="num_horas" placeholder="num_horas" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md">Insertar asignaturas</button>
        </form>
     );
}

export default AsignaturaInsertar;