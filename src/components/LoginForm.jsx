import { useCallback } from 'react'
import Navbar from '../components/NavBar';
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';
import UserList from "./UserList";

const App = () => {
    const { isAuthenticated, isSessionLoading } = useSession()
    const { user, isUserLoading } = useUser()
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
        window.location.href = "/"
    }, [logout])


    return <>
        <header className={"intro"}>
            <Navbar />
            <main className={"container"}>
                <div className={"row justify-content-center"}>
                        {!isAuthenticated &&
                            (
                                <div className={"col-lg-7 col-md-9"}>
                                    <Descope
                                        flowId="sign-up-or-in"
                                        onSuccess={(e) => console.log(e.detail.user)}
                                        onError={(e) => console.log('Could not log in!')}
                                    />
                                </div>
                            )
                        }

                    {
                    (isSessionLoading || isUserLoading) && <p>Loading...</p>
                        }

                        {!isUserLoading && isAuthenticated &&
                            (
                                <>
                                    <div className={"col-lg-10"}>
                                        <h1 className={"display-4 fw-bold mb-2"}>Hello {user.name}</h1>
                                        <p className={"lead mb-2"}>Welcome To YOur Dashboard</p>
                                        <p>
                                            Added to Que:
                                            <span id={"list"}></span>
                                        </p>
                                        <button className={"btn btn-primary"} onClick={handleLogout}>Logout
                                        </button>
                                    </div>
                                    <UserList/>
                                </>
                            )
                        }

                </div>
            </main>
        </header>
    </>;
}

export default App;