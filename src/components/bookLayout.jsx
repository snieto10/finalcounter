import { Link, Outlet } from "react-router-dom";

export default function BookLayout() {
  return (
    <>
      <ul>
        <li>
          <Link to="/booklist/fire">Fire</Link>
        </li>
        <li>
          <Link to="/booklist/water">Water</Link>
        </li>
        <li>
          <Link to="/booklist/earth">Earth</Link>
        </li>
        <li>
          <Link to="/booklist/new">New Book</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
