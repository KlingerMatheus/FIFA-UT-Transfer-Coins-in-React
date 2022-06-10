import { memo } from "react";
import { numberWithCommasRounded } from "../scripts/formatNumbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type Player = {
  id: number;
  name: string;
  price: number;
  soldBy: number;
  partial: number;
};

function PlayerItem(props: { onRemovePlayer: any; player: Player }) {
  return (
    <tr>
      <td colSpan={2}>{props.player.name}</td>
      <td>{numberWithCommasRounded(props.player.price)}</td>
      <td>{numberWithCommasRounded(props.player.soldBy)}</td>
      <td>{numberWithCommasRounded(props.player.partial)}</td>
      <td>
        <button
          onClick={() => {
            props.onRemovePlayer(props.player.id);
          }}
          className="btn btn-solid danger"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}

export default memo(PlayerItem);
