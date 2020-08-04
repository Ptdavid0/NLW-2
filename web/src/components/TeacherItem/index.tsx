import React from "react";
import "./styles.css";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import reigenImage from "../../assets/images/circle-cropped.png";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src={reigenImage} alt="Faceless" />
        <div>
          <strong>Reigen</strong>
          <span>Exorcist</span>
        </div>
      </header>
      <p>
        I am the greatest exorcist this world has ever seen.
        <br />
        <br />I have changed the life of more than 200.000 humans, during my 30
        years as an exorcist.
      </p>

      <footer>
        <p>
          Price/Hour<strong>US$ 150.00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Get in touch" />
          Get in touch
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
