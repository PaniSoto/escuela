// import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
import Link from "next/link";
import { insertarAsignatura, modificarAsignatura, eliminarAsignatura } from "@/lib/actions";
import Modal from "@/components/modal";
import { obtenerAsignaturas } from "@/lib/data";
import { Lista_Asignaturas } from "@/components/Asignaturas/Lista";

// const prisma = new PrismaClient();

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

