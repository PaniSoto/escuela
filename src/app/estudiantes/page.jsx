import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
import Link from "next/link";

const prisma = new PrismaClient();

async function PaginaEstudiantes() {

    return (
        <div>
            <h1>Lista de estudiantes</h1>
            <Suspense fallback={"Cargando..."}>
                <Lista_Estudiantes />
            </Suspense>
        </div>
    );
}

export default PaginaEstudiantes;

//------------------------------------------------ componente servidor

async function Lista_Estudiantes() {

    const estudiantes = await prisma.alumno.findMany()
    // console.log(estudiante)

    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold my-4 text-center">Estudiantes</h1>
                <ul className=" pl-8">
                    {estudiantes.map((estudiante) => (
                        <li key={estudiante.id} className="my-2 text-center">
                            <div>
                                <span className="font-bold">Nombre: </span>{estudiante.nombre}
                            </div>
                            <div>
                            <span className="font-bold">Fecha de nacimiento: </span>
                            {estudiante.fecha_nacimiento.toLocaleDateString()}
                            </div>
                            <div>
                                <img src={estudiante.foto}/>
                            </div>
                            <div>
                                <span className="font-bold">Tutor legal: </span>{estudiante.tutor_legal}
                            </div>
                        </li>

                    ))}
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/">Volver al inicio</Link>
                </ul>
            </div>
        </div>
    )
}