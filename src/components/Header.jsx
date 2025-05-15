import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <h2>لوگوی برنامه</h2>
      <nav>
        <button onClick={handleLogout}>خروج</button>
      </nav>
    </header>
  );
};

export default Header;
