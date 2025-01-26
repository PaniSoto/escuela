import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
import Link from "next/link";
import Modal from "@/components/modal";

import { insertarEstudiante, modificarEstudiante, eliminarEstudiante } from "@/lib/actions";

const prisma = new PrismaClient();

async function PaginaEstudiantes() {

    return (
        <div>
            <h1>Lista de estudiantes</h1>
            <Modal texto="Insertar estudiante">
                <p className="text-center font-semibold mb-4">Añadir un nuevo estudiante</p>

                <form action={insertarEstudiante} className="space-y-4">
                    <input name="nombre" placeholder="Nombre" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <input type="date" name="fecha_nacimiento" placeholder="fecha_nacimiento" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />

                    <input name="foto" placeholder="foto" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <input name="tutor_legal" placeholder="Tutor" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md">Insertar estudiante</button>
                </form>
            </Modal>
            <Suspense fallback={"Cargando..."}>
                <Lista_Estudiantes />
            </Suspense>
        </div>
    );
}

export default PaginaEstudiantes;

//------------------------------------------------ componente servidor

async function Lista_Estudiantes() {

    const estudiantes = await prisma.alumno.findMany()
    // console.log(estudiante)

    return (
        <div className="container mx-auto p-4 flex justify-center items-center">
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
                                <img src={estudiante.foto} />
                            </div>
                            <div>
                                <span className="font-bold">Tutor legal: </span>{estudiante.tutor_legal}
                            </div>
                            <Modal texto={"Eliminar estudiante"}>
                                <form action={eliminarEstudiante}>
                                    <h1>¿Desea eliminar el estudiante {estudiante.nombre}?</h1>
                                    <p>Estudiante: {estudiante.nombre}</p>
                                    <p>Fecha nacimiento: {estudiante.fecha_nacimiento.toDateString()}</p>
                                    <p>Foto: {estudiante.foto}</p>
                                    <p>Tutor legal: {estudiante.tutor_legal}</p>
                                    <input type="hidden" name="id" value={estudiante.id} />
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Eliminar</button>
                                </form>
                            </Modal>
                            <Modal texto={"Modificar estudiante"}>
                                <form action={modificarEstudiante}>
                                    <input type="hidden" name="id" defaultValue={estudiante.id} />
                                    <br /><br />
                                    <input name="nombre" defaultValue={estudiante.nombre} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                                    <input name="fecha_nacimiento" defaultValue={estudiante.fecha_nacimiento} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                                    <input name="foto" defaultValue={estudiante.foto} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                                    <input name="tutor_legal" defaultValue={estudiante.tutor_legal} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
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