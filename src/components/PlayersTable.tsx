import { useEffect, useState } from "react";
import ModalInsertPlayer from "./ModalInsertPlayer";
import PlayerItem from "./PlayerItem";
import { numberWithCommasRounded } from "../scripts/formatNumbers";
import "../css/PlayersTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faTrash } from "@fortawesome/free-solid-svg-icons";

function PlayersTable(props: { coinsToBeTransfered: number }) {
  const [players, setPlayers] = useState<any>([]);
  const [totalTransfered, setTotalTransfered] = useState<number>(0);
  const [showResetAllPlayersButton, setShowResetAllPlayersButton] =
    useState<boolean>(false);

  useEffect(() => {
    setTotalTransfered(sumPartials());
    setShowResetAllPlayersButton(hasPlayers());
  }, [players]);

  function hasPlayers() {
    if (players.length === 0) {
      return false;
    }
    return true;
  }

  function sumPartials() {
    let sumPartials: number = 0;

    players.map((player: any) => {
      sumPartials += player.partial;
    });

    return sumPartials;
  }

  function removePlayer(id: number) {
    setPlayers(() => {
      function getPlayerIndex(player: any) {
        return player.id !== id;
      }
      return players.filter(getPlayerIndex);
    });
  }

  function renderPlayers() {
    if (players.length === 0)
      return (
        <tr>
          <td className="no-players-alert" colSpan={6}>
            Click on the button below with an <b style={{ fontSize: 26 }}>+</b>{" "}
            to add some player to this list.
          </td>
        </tr>
      );

    return players.map((player: any) => {
      return (
        <PlayerItem
          key={player.id}
          player={{
            id: player.id,
            name: player.name,
            price: player.price,
            soldBy: player.soldBy,
            partial: player.partial,
          }}
          onRemovePlayer={(id: number) => removePlayer(id)}
        />
      );
    });
  }

  function showResults() {
    return (
      <>
        <tr>
          <td colSpan={3}>
            <p>Total Transfered: {numberWithCommasRounded(totalTransfered)}</p>
          </td>
          <td colSpan={3}>
            <p>
              Remaining:{" "}
              {isNaN(props.coinsToBeTransfered - Number(totalTransfered))
                ? 0
                : numberWithCommasRounded(
                    props.coinsToBeTransfered - Number(totalTransfered)
                  )}
            </p>
          </td>
        </tr>
      </>
    );
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <td colSpan={2}>Name</td>
            <td>Value on Market</td>
            <td>Sold by</td>
            <td>Coins Amount</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{renderPlayers()}</tbody>
        <tfoot>{players.length > 0 ? showResults() : null}</tfoot>
      </table>
      <div className="btn-group mt">
        <button
          style={
            showResetAllPlayersButton
              ? { display: "flex" }
              : { display: "none" }
          }
          onClick={() => {
            confirm("Are you sure you want to remove all players?")
              ? setPlayers([])
              : undefined;
          }}
          className="btn btn-solid btn-icon danger mr"
        >
          <span className="tooltip">Remove All Players</span>
          <FontAwesomeIcon icon={faTrash} /> <p></p>
        </button>
        <button className="btn btn-solid btn-icon orange mr">
          <span className="tooltip">Calculator</span>
          <FontAwesomeIcon icon={faCalculator} /> <p></p>
        </button>

        <ModalInsertPlayer
          onInsertPlayer={(player: any) =>
            setPlayers((players: any) => [...players, player])
          }
        />
      </div>
    </>
  );
}

export default PlayersTable;
