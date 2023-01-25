import React from "react";

import EmailIcon from '../../Img/email.svg'
import InstaIcon from '../../Img/instagram.svg'
import linkedinIcon from '../../Img/linkedin.svg'
import closeIcon from '../../Img/close.svg'

import { ContainerModal, ModalInfo, Img } from './style'

const Modal = props => {

    if (!props.show) {
        return null
    }

    return (
        <>
            <ContainerModal className="teste">
                <ModalInfo>
                    <Img src={closeIcon} alt="close icon" onClick={props.onClick}/>
                    <h3>Redes Sociais</h3>
                    <div>
                        <a href="https://www.instagram.com/srt.a_torres/">
                            <Img src={InstaIcon} alt="instagram icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/torresamandab/">
                            <Img src={linkedinIcon} alt="linkedin icon" />
                        </a>
                    </div>

                    <h3>Ferramentas utilizadas</h3>
                    <div>
                        <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="firebase" />
                        <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VScode" />

                    </div>

                    <h3>Contato</h3>
                    <div>
                        <a href="amandakaia@hotmail.com">
                            <Img src={EmailIcon} alt="contact" />
                        </a>
                    </div>
                </ModalInfo>
            </ContainerModal >
        </>
    )

}

export default Modal