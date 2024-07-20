import {Link, Routes, Route} from "react-router-dom";
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';
import {useCallback} from "react";

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
    const { isAuthenticated } = useSession()
    const { user } = useUser()
    const { logout } = useDescope()

    const exampleFetchCall = async () => {
        const sessionToken = getSessionToken();

        // example fetch call with authentication header
        fetch('https://auth.descope.io/P2hwIdyL38KIgwdClKN9PiPfzF9g?flow=sign-up-or-in', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + sessionToken,
            }
        })
    }

    const handleLogout = useCallback(() => {
        logout()
        // redirect to home after logout
        window.location.href = "/"
    }, [logout])
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
                        <Link to={"/about"} className={"nav-link"}>About</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/blogs"} className={"nav-link"}>Blogs</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/apps"} className={"nav-link"}>Apps</Link>
                    </li>
                </ul>
                <ul className={"nav-items"}>
                    <li className={"drop-down-menu"}>
                        <button onClick={showMenu} className={"btn"}>menu</button>
                        <ul className={"drop-down-items fadeInRight"}>
                            <button className={"btn-primary"} onClick={closeMenu}>close</button>
                            <li className={"drop-down-item"}>
                                <Link to={"/about"} className={"link"}>About</Link>
                            </li>
                            <li className={"drop-down-item"}>
                                <Link to={"/blogs"} className={"link"}>Blogs</Link>
                            </li>
                            <li className={"drop-down-item"}>
                                <Link to={"/apps"} className={"link"}>Apps</Link>
                            </li>
                            <li className={"drop-down-item"}>
                                {!isAuthenticated &&
                                    (
                                        <Link to={"/login"} className={"nav-link"}>Login</Link>
                                    )
                                }
                                {isAuthenticated &&
                                    (
                                        <>
                                            <Link to={"/login"} className={"nav-link"}>
                                                <span style={{marginRight: "10px", fontWeight: "bold"}}>Profile</span>
                                            </Link>
                                            <br/><br/>
                                            <button className={"btn btn-primary"} onClick={handleLogout}>Logout
                                            </button>
                                        </>
                                    )
                                }
                            </li>
                        </ul>
                    </li>
                    <li className={"nav-item"}>
                        {!isAuthenticated &&
                            (
                                <Link to={"/login"} className={"nav-link"}>Login</Link>
                            )
                        }
                        {isAuthenticated &&
                            (
                                <>
                                    <Link to={"/login"} className={"nav-link"}>
                                        <span style={{marginRight: "10px"}}>Profile</span>
                                    </Link>
                                    <button className={"btn btn-primary"} onClick={handleLogout}>Logout
                                    </button>
                                </>
                            )
                        }
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path={"/movies/:id"}></Route>
            </Routes>
        </>
    )
}