import axios from "axios";
import {
    getUsersFailure,
    getUsersStart,
    getUsersSuccess,
} from "./UsersActions";

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("/users", {
            headers: {
                token:
                    "Bearer " +
                    JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        console.log(res);
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    }
};
