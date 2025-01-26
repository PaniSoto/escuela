'use server'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function insertarGrupo(formData) {
    const nombre = formData.get('nombre')
    const tutor = formData.get('tutor')
    const aula = formData.get('aula')

    await prisma.grupo.create({
        data: {
            nombre: nombre,
            tutor: tutor,
            aula: aula,
        }
    })

    revalidatePath('/grupos')
}

export async function modificarGrupo(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const tutor = formData.get('tutor')
    const aula = formData.get('aula')

    await prisma.grupo.update({
        where: {
            id
        },
        data: {
            nombre: nombre,
            tutor: tutor,
            aula: aula
        }
    })

    revalidatePath('/grupos')
}

export async function eliminarGrupo(formData) {
  const id = Number(formData.get('id'))

  await prisma.grupo.delete({
    where: {id}
  })

  revalidatePath('/grupos')
}

/*---------------------------------- Estudiante --------------------------------------- */

export async function insertarEstudiante(formData) {
    const nombre = formData.get('nombre')
    const fecha = new Date(formData.get('fecha_nacimiento'))
    const foto = formData.get('foto')
    const tutor = formData.get('tutor_legal')

    await prisma.alumno.create({
        data: {
            nombre: nombre,
            fecha_nacimiento: fecha,
            foto: foto,
            tutor_legal: tutor
        }
    })

    revalidatePath('/estudiantes')
}

export async function modificarEstudiante(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const fecha = new Date(formData.get('fecha_nacimiento'))
    const foto = formData.get('foto')
    const tutor = formData.get('tutor_legal')

    await prisma.alumno.update({
        where: {
            id
        },
        data: {
            nombre: nombre,
            tutor_legal: tutor,
            fecha_nacimiento: fecha,
            foto: foto
        }
    })

    revalidatePath('/estudiantes')
}

export async function eliminarEstudiante(formData) {
    const id = Number(formData.get('id'))
  
    await prisma.alumno.delete({
      where: {id}
    })
  
    revalidatePath('/estudiantes')
  }

  export async function insertarAsignatura(formData) {
    const nombre = formData.get('nombre')
    const profesor = formData.get('profesor')
    const num_horas = formData.get('num_horas')

    await prisma.asignatura.create({
        data: {
            nombre: nombre,
            profesor: profesor,
            num_horas: +num_horas,
        }
    })

    revalidatePath('/asignaturas')
}

export async function modificarAsignatura(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const profesor = formData.get('profesor')
    const num_horas = formData.get('num_horas')

    await prisma.asignatura.update({
        where: {
            id
        },
        data: {
            nombre: nombre,
            profesor: profesor,
            num_horas: +num_horas,
        }
    })

    revalidatePath('/asignaturas')
}

export async function eliminarAsignatura(formData) {
    const id = Number(formData.get('id'))
  
    await prisma.asignatura.delete({
      where: {id}
    })
  
    revalidatePath('/asignaturas')
  }