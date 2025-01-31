import Link from "next/link";
import Modal from "@/components/modal";
import { obtenerEstudiantes } from "@/lib/data";
import EstudianteInsertar from "./Insertar";
import EstudianteModificar from "./Modificar";
import EstudianteEliminar from "./Eliminar";

export async function PaginaEstudiante() {

    const estudiantes = await obtenerEstudiantes()
    // console.log(estudiante)

    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
             <Modal texto="Insertar grupo">
                <EstudianteInsertar />
            </Modal>
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
                                <img className="w-[300px] h-[200px]" src={estudiante.foto} />
                            </div>
                            <div>
                                <span className="font-bold">Tutor legal: </span>{estudiante.tutor_legal}
                            </div>
                            <Modal texto={"Eliminar estudiante"}>
                                <EstudianteEliminar estudiante={estudiante} />
                            </Modal>
                            <Modal texto={"Modificar estudiante"}>
                               <EstudianteModificar estudiante={estudiante} />
                            </Modal>
                        </li>

                    ))}
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/">Volver al inicio</Link>
                </ul>
            </div>
        </div>
    )
}