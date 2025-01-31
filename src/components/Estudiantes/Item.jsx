import { obtenerEstudiante } from "@/lib/data";
import Link from "next/link";

async function Lista({id}) {
    const alumno = await obtenerEstudiante(id)
    return ( 
        <div className="container mx-auto p-4 flex justify-center items-center">
        <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold my-4 text-center">{alumno.nombre}</h1>
            <p className="font-bold">Fecha de nacimiento: {alumno.fecha_nacimiento}</p>
            <p className="font-bold">Foto: {alumno.foto}</p>
            <p className="font-bold">Tutor legal: {alumno.tutor_legal}</p>
            <p className="font-bold">Id del grupo: {alumno.grupoId}</p>
        </div>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/grupos">Volver al inicio</Link>
    </div>
     );
}

export default Lista;