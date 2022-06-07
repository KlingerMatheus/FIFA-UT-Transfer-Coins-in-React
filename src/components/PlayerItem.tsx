import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function PlayerItem(props: any) {
  const numberWithCommas = (value: number) => {
    return value.toLocaleString("en");
  };

  return (
    <tr>
      <td hidden>{props.id}</td>
      <td colSpan={2}>{props.name}</td>
      <td>{numberWithCommas(props.price)}</td>
      <td>{numberWithCommas(props.soldBy)}</td>
      <td>{numberWithCommas(props.partial)}</td>
      <td>
        <button
          onClick={() => {
            props.removePlayer(props.id);
          }}
          className="btn btn-transparent-primary"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}

export default memo(PlayerItem);
