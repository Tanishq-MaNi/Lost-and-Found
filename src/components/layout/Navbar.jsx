
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative z-10 flex w-full max-w-7xl justify-end gap-4 px-6 py-4">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/user">User</Link>
    </nav>
  );
};

export default Navbar;
