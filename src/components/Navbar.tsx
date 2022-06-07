import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const page = { title: "FIFA Transfer Coins" };

  return (
    <div className="navbar-container">
      <Link to="#">
        <h1 className="page-title">{page.title}</h1>
      </Link>
      <h4>
        Developed by:{" "}
        <span style={{ color: "var(--main-color)", fontSize: "18px" }}>
          Klinger Matheus
        </span>{" "}
        in{" "}
        <span style={{ color: "var(--main-color)", fontSize: "18px" }}>
          React
        </span>
      </h4>
    </div>
  );
}
