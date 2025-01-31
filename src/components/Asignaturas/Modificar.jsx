import { modificarAsignatura } from "@/lib/actions";

function AsignaturaModificar({asignatura}) {
    return (
        <form action={modificarAsignatura}>
            <input type="hidden" name="id" defaultValue={asignatura.id} />
            <br /><br />
            <input name="nombre" defaultValue={asignatura.nombre} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
            <input name="profesor" defaultValue={asignatura.profesor} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
            <input name="num_horas" defaultValue={asignatura.num_horas} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" />
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Modificar</button>
        </form>
    );
}

export default AsignaturaModificar;