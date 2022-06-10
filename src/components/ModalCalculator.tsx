import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ModalCalculator(props: any) {
  const [showModal, setShowModal] = useState<Boolean>(false);

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
            <p className="modal-title">Calculator</p>
            <hr />
          </div>
          <div className="modal-body"></div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="btn btn-solid danger"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalCalculator;
