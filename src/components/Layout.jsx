// src/components/Layout.jsx
import Header from "./Header";
// اگر منو یا Footer هم نیاز دارید، می‌توانید آن‌ها را اضافه کنید
// import Sidebar from './Sidebar';
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />


      <main className="content">{children}</main>

    </div>
  );
};

export default Layout;
