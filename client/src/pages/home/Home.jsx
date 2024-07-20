import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      {/* <TrustedBy /> */}
      <Slide title={"Dienstleistungen"} slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Eine menge grandioser Dienstleistungen, eifach abrufbar.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Abgebote für alle Budgets
            </div>
            <p>
              Finde qulitativ hochwertige Services zu allen Preisklassen, kein Stundentarif, nur Projekt-basierte kosten.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Gut und schnell erleldigt.
            </div>
            <p>
              Finde den richtigen Dienstleister und beginne die arbeit deines Projektes in Minuten.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Geschützte bezahlungen, jedes mal.
            </div>
            <p>
              Immer im Voraus wissen, was bezahlt wird.
              Die Zahlung wird erst nach deiner bestätigung der Auftragserledigung an den Käufer ausgezahlt.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <Slide title={"Beliebte Dienstleister"} slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Sindesi <i>Pro</i>
            </h1>
            <h1>
              Eine Businesslösung konzepiert für <i>teams</i>
            </h1>
            <p>
              Erlebe eine besseres arbeiten mit Sindesi mit exklusiven Werkzeugen, und weiteren Vorteilen
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Verbinde dich mit Dienstleistern mit bewiesener Erfahrung.
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Umsatzberichte und Mitarbeiterplanung.
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Empfehlungen von Sindesi Kundenberatern.
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Proirity Support.
            </div>
            <button>Erfahre mehr über Sindesi Pro</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
