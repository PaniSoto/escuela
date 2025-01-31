// import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
import Link from "next/link";
import Modal from "@/components/modal";
import { PaginaEstudiante } from "@/components/Estudiantes/Lista";

// const prisma = new PrismaClient();

async function PaginaEstudiantes() {

    return (
        <div>
            <h1>Lista de estudiantes</h1>
            
            <Suspense fallback={"Cargando..."}>
                <PaginaEstudiante />
            </Suspense>
        </div>
    );
}

export default PaginaEstudiantes;

//------------------------------------------------ componente servidor

