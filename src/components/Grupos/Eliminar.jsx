import { eliminarGrupo } from "@/lib/actions";

function GrupoEliminar({ grupo }) {
    return (
        <>
            <h1>¿Desea eliminar el grupo {grupo.nombre}?</h1>
            <p>Grupo: {grupo.nombre}</p>
            <p>Tutor: {grupo.tutor}</p>
            <p>Aula: {grupo.aula}</p>
            <form action={eliminarGrupo}>
                <input type="hidden" name="id" value={grupo.id} />
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Eliminar</button>
            </form>
        </>
    );
}

export default GrupoEliminar;