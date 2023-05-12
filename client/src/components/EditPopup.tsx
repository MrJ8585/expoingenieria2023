import React from "react";
import Popup from "reactjs-popup";
import "../css/EditPopup.css";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface myProps {
  proyId: number;
  correo: string;
}

function EditPopup({ proyId, correo }: myProps) {
  const navigate = useNavigate();

  const [links, setLinks] = useState<{ [key: string]: string }>({
    link_video: "",
    link_zoom: "",
    correo: `${correo}`,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await fetch(`/proyecto/${proyId}/links`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          link_video: links.link_video,
          link_zoom: links.link_zoom,
          correo: links.correo,
        }),
      });

      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  const euouaeo = () => {
    if (correo == "unverified") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Popup
      trigger={
        <button className="pu-button">
          <img src="https://i.ibb.co/zHYxwxy/edit.png" alt="edit-button" />
        </button>
      }
      modal
      position="right center"
    >
      <div className="pop-main">
        <form onSubmit={handleSubmit}>
          <div className="upper-box">
            <div className="input-box">
              <label htmlFor="yt">
                <span>Link Youtube</span>
              </label>

              <input
                required
                id="yt"
                name="link_video"
                onChange={(e) => {
                  setLinks((links) => ({
                    ...links,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </div>

            <div className="input-box">
              <label htmlFor="zoom">
                <span>Link Google Meet</span>
              </label>

              <input
                required
                id="zoom"
                name="link_zoom"
                onChange={(e) => {
                  setLinks((links) => ({
                    ...links,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </div>
          </div>

          <div className="bottom-box">
            {euouaeo() ? (
              <button type="submit">Enviar</button>
            ) : (
              <span>Hecho y desarrollado enteramente por Daniel Morales</span>
            )}
          </div>
        </form>
      </div>
    </Popup>
  );
}

export default EditPopup;
