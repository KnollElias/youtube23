import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Neuen Account erstellen</h1>
          <label htmlFor="">Benutzername</label>
          <input
            name="username"
            type="text"
            placeholder="Benutzername"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="">Passwort</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Profil Foto</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Land</label>
          <input
            name="country"
            type="text"
            placeholder="Schweiz"
            onChange={handleChange}
          />
          <button type="submit">Registrieren</button>
        </div>
        <div className="right">
          <h1>Ich möchte Dienstleistungen anbieten</h1>
          <div className="toggle">
            <label htmlFor="">Werde Service Provider</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Telefon Nummer</label>
          <input
            name="phone"
            type="text"
            placeholder="+41 079 111 22 33"
            onChange={handleChange}
          />
          <label htmlFor="">Profil Beschribung</label>
          <textarea
            placeholder="Eine kurze Beschreibung über dich"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
