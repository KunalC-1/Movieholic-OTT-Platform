import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img
                        src="https://i.ibb.co/b6nyH82/Avtar-Icon-PNG-Image.jpg"
                        alt=""
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    );
}
