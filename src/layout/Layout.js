import Footer from "../component/footer/Footer";
import TopHeader from "../component/topmain/header/TopHeader";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <TopHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
