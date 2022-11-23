import React from 'react';
import { IModalProps } from '../../../interfaces';
import '../Modal/Modal.scss'



function Modal ({opened, onCloseModal, children}:IModalProps) {
    return (
        opened ?
        <div className='modal_background' onClick={()=>onCloseModal()}>
            <div className="modal_content" onClick={e=>e.stopPropagation()}>
                {children}
            </div>
            
        </div>
        : <></>
    )
}

export default Modal