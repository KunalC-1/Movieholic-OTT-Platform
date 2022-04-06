import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { ListContextProvider } from "./context/listContext/ListContext";
import { UsersContextProvider } from "./context/usersContext/UsersContext";

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <UsersContextProvider>
                <MovieContextProvider>
                    <ListContextProvider>
                        <App />
                    </ListContextProvider>
                </MovieContextProvider>
            </UsersContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
