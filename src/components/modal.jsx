'use client'

import { useRef } from "react";

function Modal( {texto, children}) {

    const refModal = useRef()

    const openModal = () => refModal.current?.showModal()
    const closeModal = () => refModal.current?.close()

    return (
        <>
        {/* <div onClick={openModal}>{icono}</div> */}
            <div onClick={openModal}>
                {texto}
            </div>

            <dialog ref={refModal}>

                {children}

                <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mx-auto" style={{ width: 'fit-content' }} onClick={closeModal}>Cerrar</div>
            </dialog>
        </>
    );
}

export default Modal;