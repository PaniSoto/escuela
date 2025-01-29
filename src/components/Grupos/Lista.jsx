import Link from "next/link";
import Modal from "@/components/modal";
import { insertarGrupo, eliminarGrupo, modificarGrupo } from "@/lib/actions";
import { obtenerGrupos } from "@/lib/data";
import GrupoInsertar from "./Insertar";
import GrupoModificar from "./Modificar";
import GrupoEliminar from "./Eliminar";

export async function Lista() {

    const grupos = await obtenerGrupos()
    //console.log(grupos)

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 py-6">

            <Modal texto="Insertar grupo">
                <GrupoInsertar />
            </Modal>
            <div className="w-full max-w-4xl grid grid-cols-3 gap-4">
                <h1 className="col-span-3 text-4xl font-extrabold my-6 text-center text-gray-800">Grupos</h1>
                {grupos.map((grupo, index) => (
                    <div key={grupo.id} className="bg-white p-6 rounded-lg shadow-md text-gray-800 max-w-sm">
                        <div>
                            <span className="font-semibold">Nombre: </span>{grupo.nombre}
                        </div>
                        <div>
                            <span className="font-semibold">Tutor: </span>{grupo.tutor}
                        </div>
                        <div>
                            <span className="font-semibold">Aula: </span>{grupo.aula}
                        </div>

                        <Modal texto={"Eliminar grupo"}>
                            <GrupoEliminar grupo={grupo} />
                        </Modal>

                        <Modal texto={"Modificar grupo"}>
                            <GrupoModificar grupo={grupo} />
                        </Modal>
                    </div>
                ))}
                <div className="col-span-3">
                    <Link className="inline-block mt-4 text-blue-500 hover:text-blue-700 font-bold" href="/">Volver al inicio</Link>
                </div>
            </div>
        </div>
    )
}