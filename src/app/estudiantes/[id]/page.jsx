import { PrismaClient } from "@prisma/client";
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
    const estudiante = await prisma.estudiante.findUnique({
        where: {
            id: +Number(id)
        }
    })
    console.log(estudiante);
    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold my-4 text-center">{estudiante.nombre}</h1>
                <p className="font-bold">Fecha de nacimiento: {estudiante.fecha_nacimiento}</p>
                <p className="font-bold">Foto: {estudiante.foto}</p>
                <p className="font-bold">Tutor legal: {estudiante.tutor_legal}</p>
            </div>
        </div>
    );
}