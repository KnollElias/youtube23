import React, { useReducer, useState } from "react";
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs")
  };

  return (
    <div className="add">
      <div className="container">
        <h1>Neue Dienstleistung erstellen</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Titel</label>
            <input
              type="text"
              name="title"
              placeholder="Ich werde eine Website mit hochmodernem Deisgn erstellen."
              onChange={handleChange}
            />
            <label htmlFor="">Kateorie</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Musik</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Vorschaubild</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Bilder hochladen</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "lädt hoch..." : "Hochladen"}
              </button>
            </div>
            <label htmlFor="">Beschribung</label>
            <textarea
              name="desc"
              id=""
              placeholder="Beschreibung um deinene Dienstleitung den Benutzern vorzustellen."
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Erstellen</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Titel</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="Moderne Website"
              onChange={handleChange}
            />
            <label htmlFor="">Kurzbeschreibung</label>
            <textarea
              name="shortDesc"
              onChange={handleChange}
              id=""
              placeholder="Kurze Beschribung von deiner Dienstleistung."
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Erleldigungsfrist in Tagen.</label>
            <input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">Transaktionsnumber</label>
            <input
              type="number"
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="">Merkmale Hinzufügen</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="z.b. Siten Design" />
              <button type="submit">add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">Preis</label>
            <input type="number" onChange={handleChange} name="price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
