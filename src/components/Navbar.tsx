import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const page = { title: "FIFA UT Transfer Coins - React" };

  return (
    <div className="navbar-container">
      <Link to="#">
        <h1 className="page-title">{page.title}</h1>
      </Link>
    </div>
  );
}
