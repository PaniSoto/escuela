import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
import Link from "next/link";

import { insertarGrupo, eliminarGrupo, modificarGrupo } from "@/lib/actions";
import Modal from "@/components/modal";

const prisma = new PrismaClient();

async function PaginaGrupos() {

    return (
        <div>
            <h1 className="text-3xl font-bold my-4 text-center">Listado de grupos</h1>
            <Modal texto="Insertar grupo">
                <p className="text-center font-semibold mb-4">Añadir un nuevo grupo</p>

                <form action={insertarGrupo} className="space-y-4">
                    <input name="nombre" placeholder="Nombre" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <input name="tutor" placeholder="Tutor" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <input name="aula" placeholder="Aula" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md">Insertar grupo</button>
                </form>
            </Modal>

            <Suspense fallback={"Cargando..."}>
                <Lista />
            </Suspense>
        </div>
    );
}

export default PaginaGrupos;

//------------------------------------------------ componente servidor


async function Lista() {

    const grupos = await prisma.grupo.findMany()
    //console.log(grupos)

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 py-6">

            <form action={insertarGrupo} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                <input name="nombre" placeholder="Nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                <input name="tutor" placeholder="Tutor" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                <input name="aula" placeholder="Aula" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Insertar grupo</button>
            </form>

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
                            <form action={eliminarGrupo}>
                                <h1>¿Desea eliminar el grupo {grupo.nombre}?</h1>
                                <p>Grupo: {grupo.nombre}</p>
                                <p>Tutor: {grupo.tutor}</p>
                                <p>Aula: {grupo.aula}</p>
                                <input type="hidden" name="id" value={grupo.id} />
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Eliminar</button>
                            </form>
                        </Modal>
                        <Modal texto={"Modificar grupo"}>
                            <form action={modificarGrupo}>
                                <input type="hidden" name="id" defaultValue={grupo.id} />
                                <br /><br />
                                <input name="nombre" defaultValue={grupo.nombre} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                                <input name="tutor" defaultValue={grupo.tutor} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                                <input name="aula" defaultValue={grupo.aula} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Modificar</button>
                            </form>
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