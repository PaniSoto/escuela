import { eliminarAsignatura } from "@/lib/actions";

function AsignaturaEliminar({asignatura}) {
    return (
        <form action={eliminarAsignatura}>
            <h1>¿Desea eliminar el asignatura {asignatura.nombre}?</h1>
            <p>Asignaturas: {asignatura.nombre}</p>
            <p>Profesor: {asignatura.profesor}</p>
            <p>Numero de horas: {asignatura.num_horas}</p>
            <input type="hidden" name="id" value={asignatura.id} />
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Eliminar</button>
        </form>
    );
}

export default AsignaturaEliminar;