import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="flex flex-col gap-4 p-4 border-2 border-gray-300 rounded-lg">
      <Link href="/grupos" className="block text-2xl font-bold text-blue-500 hover:text-blue-700">
        GRUPOS
      </Link>
      <Link href="/estudiantes" className="block text-2xl font-bold text-blue-500 hover:text-blue-700">
        ESTUDIANTES
      </Link>
      <Link href="/asignaturas" className="block text-2xl font-bold text-blue-500 hover:text-blue-700">
        ASIGNATURAS
      </Link>
    </div>
  );
}
