import { obtenerAsignatura } from "@/lib/data";
import Link from "next/link";

export async function Lista({ id }) {
    const asignatura = await obtenerAsignatura(id)

    return (
        <div className="container mx-auto p-4 flex justify-center items-center bg-gray-100 rounded-xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
                <h1 className="text-3xl font-bold my-4 text-center text-blue-500">{asignatura.nombre}</h1>
                <p className="font-bold text-xl">Profesor: <span className="text-gray-600">{asignatura.profesor}</span></p>
                <p className="font-bold text-xl">Numero de horas: <span className="text-gray-600">{asignatura.num_horas}</span></p>
            </div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/asignaturas">Volver al inicio</Link>

        </div>
    );
}