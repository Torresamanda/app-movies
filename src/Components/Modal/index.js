import React from "react";

import EmailIcon from '../../Img/email.svg'
import InstaIcon from '../../Img/instagram.svg'
import linkedinIcon from '../../Img/linkedin.svg'
import closeIcon from '../../Img/close.svg'
import Avatar from '../../Img/avatar.png'
import reactIcon from '../../Img/react.svg'
import styledComponentIcon from '../../Img/styledComponent.png'
import githubIcon from '../../Img/github.svg'
import vsCode from '../../Img/vscode.svg'

import { ContainerModal, ModalInfo, Img, ImgClose, H3, Sociais, AvatarImg } from './style'

const Modal = props => {

    if (!props.show) {
        return null
    }

    return (
        <>
            <ContainerModal onClick={props.onClick}>
                <ModalInfo onClick={e => e.stopPropagation()}>
                    <AvatarImg src={Avatar} alt="Avatar Icon" />
                    <div>
                        <ImgClose src={closeIcon} alt="close icon" onClick={props.onClick} />

                        <H3>Contato</H3>
                        <Sociais>
                            <a href="mailto:amandakaia@hotmail.com?" target="_blank" rel="noreferrer">
                                <Img src={EmailIcon} alt="contact" />
                            </a>
                        </Sociais>

                        <H3>Redes Sociais</H3>
                        <Sociais>
                            <a href="https://github.com/Torresamanda" target="_blank" rel="noreferrer">
                                <Img src={githubIcon} alt="github icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/torresamandab/" target="_blank" rel="noreferrer">
                                <Img src={linkedinIcon} alt="linkedin icon" />
                            </a>
                            <a href="https://www.instagram.com/srt.a_torres/" target="_blank" rel="noreferrer">
                                <Img src={InstaIcon} alt="instagram icon" />
                            </a>
                        </Sociais>

                        <H3>Ferramentas utilizadas</H3>
                        <Sociais>
                            <Img src={reactIcon} alt="react icons" title="React" />
                            <Img src={styledComponentIcon} alt="styled components icon" title="Styled Components" />
                            <Img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="firebase" title="Firebase" />
                            <Img src={vsCode} alt="react Icon"/>
                        </Sociais>

                    </div>
                </ModalInfo>
            </ContainerModal >
        </>
    )

}

export default Modal