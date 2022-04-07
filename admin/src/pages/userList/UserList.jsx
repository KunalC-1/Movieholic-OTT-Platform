import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { UsersContext } from "../../context/usersContext/UsersContext";
import { getUsers } from "../../context/usersContext/apiCalls";

export default function UserList() {
    const { users, dispatch } = useContext(UsersContext);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);
    console.log(users);
    const columns = [
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img
                            className="userListImg"
                            src="https://i.ibb.co/b6nyH82/Avtar-Icon-PNG-Image.jpg"
                            alt=""
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={users}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                getRowId={(r) => r._id}
            />
        </div>
    );
}
