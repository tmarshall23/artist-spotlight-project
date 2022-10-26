import { Outlet } from "react-router-dom";
import Header from "./HeaderComponent";
import '../header.css';


const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;