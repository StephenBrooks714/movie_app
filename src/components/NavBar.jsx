import {Link, Routes, Route} from "react-router-dom";

export default function NavBar(){
    function showMenu(){
        if(document.querySelector(".drop-down-items").style.display === "block"){
            document.querySelector(".drop-down-items").style.display = "none";
        } else {
            document.querySelector(".drop-down-items").style.display = "block";
        }
    }
    function closeMenu(){
        document.querySelector(".drop-down-items").style.display = "none";
    }
    return (
        <>
            <nav className={"bg-light-shadow-gradient top-fixed navbar"}>
                <ul className={"nav-items"}>
                    <li className={"nav-logo"}>
                        <Link to={"/"}>
                            <img src={"http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"}
                                 height={"40"} width={"40"} loading={"lazy"} alt="movie app"/>
                        </Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/"} className={"nav-link"}>About</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/"} className={"nav-link"}>Blogs</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/"} className={"nav-link"}>Apps</Link>
                    </li>
                </ul>
                <ul className={"nav-items"}>
                    <li className={"drop-down-menu"}>
                        <button onClick={showMenu} className={"btn"}>menu</button>
                        <ul className={"drop-down-items fadeInRight"}>
                            <button className={"btn-primary"} onClick={closeMenu}>close</button>
                            <li className={"drop-down-item"}>
                                <Link to={"/"} className={"link"}>About</Link>
                            </li>
                            <li className={"drop-down-item"}>
                                <Link to={"/"} className={"link"}>Blogs</Link>
                            </li>
                            <li className={"drop-down-item"}>
                                <Link to={"/"} className={"link"}>Apps</Link>
                            </li>
                            <li className={"drop-down-item"}>
                                <Link to={"/"} className={"link"}>Help</Link>
                            </li>
                            <li className={"drop-down-item"}>
                                <Link to={"/"} className={"link"}>Login</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={"nav-item"}>
                        <a href="" className={"nav-link"}>Help</a>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/login"} className={"nav-link"}>Login</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path={"/movies/:id"}></Route>
            </Routes>
        </>
    )
}