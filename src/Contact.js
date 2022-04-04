import { useState } from 'react'
import styles from './Contact.module.css'
import axios from 'axios'
import logo from '../src/img/grupostra_horizontal_white.png'

function Contact(){ 

    const [name, setName] = useState("");
    const [office, setoffice] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");
    const [qrcode, setQrcode] = useState("qrcode");
    const [tel, setTel] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
    const [address, setaddress] = useState("address");

    const submitFields = () => {
        axios.post("http://localhost:3001/api/insert", {
            userName: name, 
            userOffice: office, 
            userUrl: url, 
            userUrlImg: image, 
            userQrcode: qrcode, 
            userTel: tel, 
            userWpp: whatsapp, 
            userEmail: email, 
            userAddress: address
        }).then(() => {
            alert("Usuário Cadastrado")
        })
        alert("Usuário Cadastrado com sucesso!")
        window.location = window.location.href;
    }

    return(
        <div className={styles.container}>
            <div className={styles.header_logo}>
                <img src={logo}/>
            </div>
           <div className={styles.form}>
                <div className={styles.line_input}>
                    <span>Nome</span>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.line_input}>
                    <span>Cargo</span>
                    <input type="text" name="office" id="office" onChange={(e) => setoffice(e.target.value)}/>
                </div>
                <div className={styles.line_input}>
                    <span>Url</span>
                    <input type="text" name="url" id="url" onChange={(e) => setUrl(e.target.value)}/>
                </div>
                <div className={styles.line_input}>
                    <span>Imagem</span>
                    <input type="text" name="url_img" id="url_img" onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div className={styles.line_input}>
                    <span>QR Code</span>
                    <input type="text" name="qrcode" id="qrcode" value="...." disabled onChange={(e) => setQrcode(e.target.value)}/>
                </div>
                <div className={styles.line_input}>
                    <span>Telefone</span>
                    <input type="text" name="tel" id="tel" onChange={(e) => setTel(e.target.value)}/>
                </div>
                <div className={styles.line_input}>
                    <span>Whatsapp</span>
                    <input type="text" name="whatsapp" id="whatsapp" onChange={(e) => setWhatsapp(e.target.value)}/>
                </div>
                <div className={styles.line_input}>
                    <span>Email</span>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.line_input}>
                    <span>Endereço</span>
                    <input type="text" name="address" id="address" value="Rua Dom Sebastião nº 617 Bairro Vila Real Balneário Camboriú - SC Cep: 88337-110" disabled onChange={(e) => setaddress(e.target.value)}/>
                </div>
                <button className={styles.btn_send} onClick={submitFields}>Cadastrar</button>
            </div>
        </div>
    )

}

export default Contact