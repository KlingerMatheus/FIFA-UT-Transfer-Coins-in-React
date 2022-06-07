import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const links = [{ path: "/", title: "Home" }];

  const page = { title: "FIFA UT Transfer Coins - React" };

  return (
    <div className="navbar-container">
      <Link to="#">
        <h1 className="page-title">{page.title}</h1>
      </Link>
      {/* <nav>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path} className="btn btn-transparent-primary">
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav> */}
    </div>
  );
}
