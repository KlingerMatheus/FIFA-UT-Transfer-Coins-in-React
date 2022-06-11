import { useEffect, useState } from "react";
import { numberWithCommasRounded } from "../scripts/formatNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

function ModalCalculator(props: { coinsToBeTransfered: number }) {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [result, setResult] = useState<string>("");
  const [valueOnMarket, setValueOnMarket] = useState<number>(0);
  const [remainingToTransfer, setRemainingToTransfer] = useState<number>(0);

  function calculate() {
    if (valueOnMarket === 0 || remainingToTransfer === 0) return;

    const total: number = valueOnMarket! + remainingToTransfer!;
    return setResult(numberWithCommasRounded(total + total * 0.0527));
  }

  useEffect(() => {
    calculate();
  }, [valueOnMarket, remainingToTransfer]);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-solid btn-icon orange mr"
      >
        <FontAwesomeIcon icon={faCalculator} />
        <span className="tooltip">Calculator</span>
      </button>
      <div className="modal" style={{ display: showModal ? "flex" : "none" }}>
        <div className="modal-container">
          <div className="modal-header">
            <p className="modal-title">Calculator</p>
            <hr />
          </div>
          <div className="modal-body">
            <div className="input-group d-column">
              <label>Its value on the Market</label>
              <input
                type="number"
                placeholder="Type here..."
                min={0}
                max={5000000}
                onChange={(e) => setValueOnMarket(Number(e.target.value))}
                value={valueOnMarket}
              />
            </div>
            <div className="input-group d-column">
              <label>How much to transfer?</label>
              <input
                type="number"
                placeholder="Type here..."
                min={0}
                max={5000000}
                onChange={(e) => setRemainingToTransfer(Number(e.target.value))}
                value={remainingToTransfer}
              />
              <button
                style={{ border: "none", padding: "8px 32px" }}
                className="btn-solid primary"
                onClick={() =>
                  setRemainingToTransfer(props.coinsToBeTransfered)
                }
              >
                Set the remaining amount
              </button>
            </div>
            <div className="alert-amount-of-coins">
              <p>
                {result === "NaN" || result === ""
                  ? 0
                  : `You must buy for: ${result}`}
              </p>
            </div>
          </div>
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
