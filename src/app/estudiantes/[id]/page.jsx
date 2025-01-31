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

