import { Lista } from "@/components/Grupos/Item";
import { Suspense } from "react";

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