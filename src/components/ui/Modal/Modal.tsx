import React, { useEffect, useState } from 'react';
import { IModalProps } from '../../../interfaces';
import '../Modal/Modal.scss'


function Modal ({opened, onCloseModal, children}:IModalProps) {

    const [pending, setPending] = useState(false)
    const [cancelable, setCancelable] = useState(false)

    useEffect(()=>{
        if (!opened){
            setTimeout(()=>{
            setPending(false)
            setCancelable(false)
            }, 900)
        }else{
            setPending(true)
        }
    }, [opened])

    useEffect(()=>{
        if (cancelable){ return}
            setTimeout(()=>{
                setCancelable(true)
                console.log('asdasd');
                
            }, 900)
    },[cancelable])

    return (
        pending ?
        <div className={opened? "modal_background opened_modal_background": 'modal_background closed_modal_background'} onClick={()=>{cancelable&& onCloseModal()} }>
            <div className={opened?"modal_content opened_modal_content":'modal_content closed_modal_content'} onClick={e=>{cancelable&& e.stopPropagation()}}>
                {children}
            </div>
            
        </div>
        : <></>
    )
}

export default Modal