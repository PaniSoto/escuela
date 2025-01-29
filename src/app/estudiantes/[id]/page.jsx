import { obtenerEstudiante } from "@/lib/data";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Suspense } from "react";

const prisma = new PrismaClient();

async function PaginaEstudiante({ params, searchParams }) {
    const { id } = await params;

    return (
        <div>
            <h1>estudiante {id}</h1>
            <Suspense fallback={"Cargando..."}>
                <Lista id={id} />
            </Suspense>
        </div>
    )
}

export default PaginaEstudiante;

//----------------- Componente de servidor

async function Lista({ id }) {
    const estudiante = await obtenerEstudiante(id)
    console.log(estudiante);
    return (
        <div className="container mx-auto p-4 flex justify-center items-center bg-gray-100 rounded-xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
                <h1 className="text-3xl font-bold my-4 text-center text-blue-500">{estudiante.nombre}</h1>
                <p className="font-bold text-lg text-gray-700">Fecha de nacimiento: {estudiante.fecha_nacimiento.toDateString()}</p>
                <img className="w-1/2 rounded-full mx-auto my-4" src={estudiante.foto} alt={`Foto de ${estudiante.nombre}`} />
                <p className="font-bold text-lg text-gray-700">Tutor legal: {estudiante.tutor_legal}</p>
            </div>

            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/estudiantes">Volver al inicio</Link>

        </div>

    );
}