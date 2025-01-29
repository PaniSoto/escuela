// import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
import Link from "next/link";
import { insertarAsignatura, modificarAsignatura, eliminarAsignatura } from "@/lib/actions";
import Modal from "@/components/modal";
import { obtenerAsignaturas } from "@/lib/data";

// const prisma = new PrismaClient();

async function PaginaAsignaturas() {

    return (
        <div>
            <h1>Lista de asignaturas</h1>
            <Modal texto="Insertar asignatura">
                <p className="text-center font-semibold mb-4">Añadir una nueva asignatura</p>

                
            </Modal>
            <Suspense fallback={"Cargando..."}>
                <Lista_Asignaturas />
            </Suspense>
        </div>
    );
}

export default PaginaAsignaturas;

//------------------------------------------------ componente servidor

async function Lista_Asignaturas() {

    const asignaturas = await obtenerAsignaturas();
    // console.log(estudiante)

    return (
        <div className="container mx-auto p-4 flex justify-center items-center bg-gray-100 rounded-xl shadow-lg">
            <div className="w-full md:w-1/2 p-4">
                <h1 className="text-3xl font-bold my-4 text-center text-blue-500">Asignaturas</h1>
                <ul className=" pl-8">
                    {asignaturas.map((asignatura) => (
                        <li key={asignatura.id} className="my-2 text-center">
                            <div>
                                <span className="font-bold">Nombre: </span>{asignatura.nombre}
                            </div>
                            <div>
                                <span className="font-bold">Profesor: </span>{asignatura.profesor}
                            </div>
                            <div>
                                <span className="font-bold">Numero de horas: </span>{asignatura.num_horas}
                            </div>
                            <Modal texto={"Eliminar asignatura"}>
                                <form action={eliminarAsignatura}>
                                    <h1>¿Desea eliminar el asignatura {asignatura.nombre}?</h1>
                                    <p>Asignaturas: {asignatura.nombre}</p>
                                    <p>Profesor: {asignatura.profesor}</p>
                                    <p>Numero de horas: {asignatura.num_horas}</p>
                                    <input type="hidden" name="id" value={asignatura.id} />
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Eliminar</button>
                                </form>
                            </Modal>
                            <Modal texto={"Modificar asignatura"}>
                                <form action={modificarAsignatura}>
                                    <input type="hidden" name="id" defaultValue={asignatura.id} />
                                    <br /><br />
                                    <input name="nombre" defaultValue={asignatura.nombre} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                                    <input name="profesor" defaultValue={asignatura.profesor} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                                    <input name="num_horas" defaultValue={asignatura.num_horas} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Modificar</button>
                                </form>
                            </Modal>
                        </li>
                    ))}
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/">Volver al inicio</Link>
                </ul>
            </div>
        </div>
    )
}