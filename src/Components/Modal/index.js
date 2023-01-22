import React from "react";

import EmailIcon from '../../Img/email.svg'

const Modal = () => {
    return (
        <div>
            <h3>Redes Sociais</h3>
            <div>

            </div>

            <h3>Ferramentas utilizadas</h3>
            <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="firebase" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VScode" />
          
            </div>

            <h3>Contato</h3>
            <div>
                <a href="amandakaia@hotmail.com">
                    <img src={EmailIcon} alt="contact" />
                </a>
            </div>
        </div>
    )
}

export default Modal