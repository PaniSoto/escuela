import { insertarEstudiante } from "@/lib/actions";

function EstudianteInsertar() {
    return (
        <>
            <p className="text-center font-semibold mb-4">Añadir un nuevo estudiante</p>

            <form action={insertarEstudiante} className="space-y-4">
                <input name="nombre" placeholder="Nombre" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <input type="date" name="fecha_nacimiento" placeholder="fecha_nacimiento" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />

                <input name="foto" placeholder="foto" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <input name="tutor_legal" placeholder="Tutor" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                
                <input type="number" name="grupoId" />

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md">Insertar estudiante</button>
            </form>
        </>
    );
}

export default EstudianteInsertar;