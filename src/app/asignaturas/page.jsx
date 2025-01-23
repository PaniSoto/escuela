import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
import Link from "next/link";

const prisma = new PrismaClient();

async function PaginaAsignaturas() {

    return (
        <div>
            <h1>Lista de asignaturas</h1>
            <Suspense fallback={"Cargando..."}>
                <Lista_Asignaturas />
            </Suspense>
        </div>
    );
}

export default PaginaAsignaturas;

//------------------------------------------------ componente servidor

async function Lista_Asignaturas() {

    const asignaturas = await prisma.asignatura.findMany()
    // console.log(estudiante)

    return (
        <div className="container mx-auto p-4 flex justify-center items-center bg-gray-100 rounded-xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
                <h1 className="text-3xl font-bold my-4 text-center text-blue-500">Asignaturas</h1>
                <ul className=" pl-8">
                    {asignaturas.map((asignatura) => (
                        <li key={asignatura.id} className="my-2 text-center">
                            <div>
                                <span className="font-bold">Nombre: </span>{asignatura.nombre}
                            </div>
                            <div>
                                <span className="font-bold">Profesor: </span>{asignatura.profesor}
                            </div>
                            <div>
                                <span className="font-bold">Numero de horas: </span>{asignatura.num_horas}
                            </div>
                        </li>
                    ))}
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/">Volver al inicio</Link>
                </ul>
            </div>
        </div>
    )
}