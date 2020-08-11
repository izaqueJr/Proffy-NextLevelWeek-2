import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://i.pinimg.com/originals/81/9f/b8/819fb8b2baa84564043bfb1d81e7c323.jpg"
          alt=""
        />

        <div>
          <strong>Tony Stark</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Apaixonado por armaduras e I.A.
        <br /> <br />
        Especialista na criação de armaduras com nanotecnologia, ultimamente
        estudando as teorias de viagem no tempo!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$250,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Wpp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
