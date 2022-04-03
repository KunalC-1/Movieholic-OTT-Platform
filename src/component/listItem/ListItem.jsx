import "./listItem.scss";
import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({ index }) {
    return (
        <div className="listItem">
            <img src="https://i.ibb.co/q77Lt0g/maxresdefault.jpg" alt="" />
        </div>
    );
}
