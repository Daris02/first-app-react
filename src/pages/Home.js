import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home text-center">
      <h1>Home Page</h1>
      <NavLink
        to="/list"
        className={({ isActive }) => (isActive ? "activeLink" : undefined)}
      >
        All task list
      </NavLink>
    </div>
  );
}
