import { eliminarEstudiante } from "@/lib/actions";

function EstudianteEliminar({estudiante}) {
    return (
        <form action={eliminarEstudiante}>
            <h1>¿Desea eliminar el estudiante {estudiante.nombre}?</h1>
            <p>Estudiante: {estudiante.nombre}</p>
            <p>Fecha nacimiento: {estudiante.fecha_nacimiento.toDateString()}</p>
            <p>Foto: {estudiante.foto}</p>
            <p>Tutor legal: {estudiante.tutor_legal}</p>
            <input type="hidden" name="id" value={estudiante.id} />
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Eliminar</button>
        </form>
    );
}

export default EstudianteEliminar;