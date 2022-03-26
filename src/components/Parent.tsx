import { Route, useLocation } from "react-router-dom";
import Categories from "../Categories/Categories";
import Services from "../Services/Services";
import Welcome from "../welcome/Welcome";
import Feed from "../Feed/Feed";
import Tabs from "./Tabs";

export default function Parent() {
    const location = useLocation();
    const path = location.pathname;
    const { slug }: any = location?.state || { slug: '' };

    return (
        <>
            <div className="content">
                {path === "/home" && <Feed />}
                {path === "/discover" && <Welcome />}
                {!slug && path === "/categories" && <Categories />}
                {!!slug && path.includes('/categories') && <Services />}
            </div>
            <Tabs />
        </>
    );
}