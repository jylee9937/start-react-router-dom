import { NavLink } from "react-router-dom";

const activeStyle = { color: "green" };

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeStyle={activeStyle}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activeStyle}>
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/about?name=mark" activeStyle={activeStyle}>
          About?name=mark
        </NavLink>
      </li>
    </ul>
  );
}
