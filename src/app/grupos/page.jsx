import { Suspense } from "react";
import { insertarGrupo } from "@/lib/actions";
import Modal from "@/components/modal";
// import prisma from "@/lib/prisma";
import { Lista } from "@/components/Grupos/Lista";
import GrupoInsertar from "@/components/Grupos/Insertar";

async function PaginaGrupos() {

    return (
        <div>
            <Suspense fallback={"Cargando..."}>
                <Lista />
            </Suspense>
        </div>
    );
}

export default PaginaGrupos;