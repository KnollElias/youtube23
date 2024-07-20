import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Kategorien</h2>
            <span>Grafik & Design</span>
            <span>Digitales Marketing</span>
            <span>Text & Übersetzung</span>
            <span>Video & Animation</span>
            <span>Musik & Audio</span>
            <span>Programmierung & Technik</span>
            <span>Daten</span>
            <span>Business</span>
            <span>Persönliches Wachstum & Hobbys</span>
            <span>Fotografie</span>
            <span>End-to-End-Projekte</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Über Uns</h2>
            {/* <span>Karriere</span> */}
            <span>Presse & Neuigkeiten</span>
            <span>Partnerschaften</span>
            <span>Datenschutz</span>
            <span>Nutzungsbedingungen</span>
            <span>Impressum</span>
            <span>Investor:innen</span>
          </div>
          <div className="item">
            <h2>Support und Bildung</h2>
            <span>Hilfe & Support</span>
            <span>Feedback & Kontakt</span>
            {/* <span>Vertrauen & Sicherheit</span> */}
            <span>Qualitätsleitfaden</span>
            <span>Verkaufen auf Sindesi</span>
            <span>Kaufen auf Sindesi</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            {/* <span>Erfolgsgeschichten von Kunden</span> */}
            <span>Community-Hub</span>
            <span>Forum</span>
            <span>Veranstaltungen</span>
            <span>Blog</span>
            <span>Dienstleister</span>
            <span>Affiliate</span>
            <span>Freunde einladen</span>
            <span>Community-Standards</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Sindesi</h2>
            <span>© Sindesi GmbH 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            {/* <div className="link">
              <img src="/img/language.png" alt="" />
              <span>Deutsch</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div> */}
            {/* <img src="/img/accessibility.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
