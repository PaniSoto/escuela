import { insertarGrupo } from "@/lib/actions";

function GrupoInsertar() {
    return (
        <form action={insertarGrupo} className="space-y-4">
            <input name="nombre" placeholder="Nombre" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
            <input name="tutor" placeholder="Tutor" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
            <input name="aula" placeholder="Aula" className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md">Insertar grupo</button>
        </form>
    );
}

export default GrupoInsertar;