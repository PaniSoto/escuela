import { Lista } from "@/components/Asignaturas/Item";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";

const prisma = new PrismaClient();

async function PaginaAsignatura({ params, searchParams }) {
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

export default PaginaAsignatura;

//----------------- Componente de servidor

