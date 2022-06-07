import { useEffect, useState } from "react";
import ModalInsertPlayer from "./ModalInsertPlayer";
import "../css/PlayersTable.css";
import PlayerItem from "./PlayerItem";

function PlayersTable(props: { coinsToBeTransfered: number }) {
  const [players, setPlayers] = useState<any>([]);
  const [totalTransfered, setTotalTransfered] = useState<number>(0);

  useEffect(() => {
    setTotalTransfered(sumPartials());
  }, [players]);

  function numberWithCommas(value: number) {
    return value.toLocaleString("en");
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
            Click on the button below do add some player to this list.
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
            <p>Total Transfered: {numberWithCommas(totalTransfered)}</p>
          </td>
          <td colSpan={3}>
            <p>
              Remaining:{" "}
              {isNaN(props.coinsToBeTransfered - Number(totalTransfered))
                ? 0
                : numberWithCommas(
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
      <ModalInsertPlayer
        onRemoveAllPlayers={() => setPlayers([])}
        hasPlayersOnTable={() => {
          if (players.length > 0) return true;
          else return false;
        }}
        onInsertPlayer={(player: any) =>
          setPlayers((players: any) => [...players, player])
        }
      />
    </>
  );
}

export default PlayersTable;
