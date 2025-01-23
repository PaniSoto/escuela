import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Suspense } from "react";

const prisma = new PrismaClient();

async function PaginaGrupo({ params, searchParams }) {
    const { id } = await params;

    return (
        <div>
            <h1>grupo {id}</h1>
            <Suspense fallback={"Cargando..."}>
                <Lista id={id} />
            </Suspense>
        </div>
    )
}

export default PaginaGrupo;

//----------------- Componente de servidor

async function Lista({ id }) {
    const grupo = await prisma.grupo.findUnique({
        where: {
            id: +Number(id)
        }
    })
    console.log(grupo);
    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold my-4 text-center">{grupo.nombre}</h1>
                <p className="font-bold">Tutor: {grupo.tutor}</p>
                <p className="font-bold">Aula: {grupo.aula}</p>
            </div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/grupos">Volver al inicio</Link>

        </div>
    );
}