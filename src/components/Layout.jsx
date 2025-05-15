// src/components/Layout.jsx
import Header from "./Header";


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />


      <main className="content">{children}</main>

    </div>
  );
};

export default Layout;
