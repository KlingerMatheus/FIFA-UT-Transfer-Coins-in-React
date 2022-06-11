import { useState } from "react";
import "../css/Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ModalInsertPlayer(props: any) {
  type Player = {
    name: string;
    soldBy: number;
    price: number;
  };

  const [showModal, setShowModal] = useState<Boolean>(false);
  const [player, setPlayer] = useState<Player>();

  function validateForm() {
    if (
      (document.getElementById("textName") as HTMLInputElement).value === "" ||
      (document.getElementById("textSoldBy") as HTMLInputElement).value ===
        "" ||
      (document.getElementById("textPrice") as HTMLInputElement).value === ""
    ) {
      return false;
    }

    return true;
  }

  function getPartial() {
    if (player !== undefined) {
      const sellTax = Number(player.soldBy) * 0.05;
      return Number(player.soldBy) - sellTax - Number(player.price);
    }
  }

  function clearTextFields() {
    const nameFields = ["textName", "textSoldBy", "textPrice"];

    for (let name of nameFields) {
      (document.getElementById(name) as HTMLInputElement).value = "";
    }
  }

  function onInsertPlayer() {
    if (validateForm()) {
      props.onInsertPlayer(
        Object.assign(player!, { id: Math.random(), partial: getPartial() })
      );
      clearTextFields();
      setShowModal(false);
    } else return alert("You must fill all the fields.");
  }

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) setShowModal(false);
  });

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-solid btn-icon primary"
      >
        <FontAwesomeIcon icon={faPlus} />
        <span className="tooltip">Insert a Player</span>
      </button>
      <div className="modal" style={{ display: showModal ? "flex" : "none" }}>
        <div className="modal-container">
          <div className="modal-header">
            <p className="modal-title">Insert Player</p>
            <hr />
          </div>
          <div className="modal-body">
            <div className="input-group">
              <input
                type="text"
                id="textName"
                placeholder="Player Name..."
                onChange={(e) => {
                  setPlayer((state: any) => {
                    return { ...state, name: e.target.value };
                  });
                }}
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                id="textPrice"
                placeholder="His Price..."
                onChange={(e) => {
                  setPlayer((state: any) => {
                    return { ...state, price: e.target.value };
                  });
                }}
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                id="textSoldBy"
                placeholder="Sold By..."
                onChange={(e) => {
                  setPlayer((state: any) => {
                    return { ...state, soldBy: e.target.value };
                  });
                }}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => onInsertPlayer()}
              className="btn btn-solid primary"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="btn btn-solid danger"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalInsertPlayer;
