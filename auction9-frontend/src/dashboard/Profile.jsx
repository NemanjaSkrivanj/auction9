import React from "react";
import "./Profile.css"
import { TextField } from "@mui/material";

export default function Profile() {
    return (
        <div className="profile">
            <img className="profilepicture"
                src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
                alt="Profile Picture"
                width="150"
                height="150" />
            <div className="userinfo1">
                <TextField
                    id="outlined-read-only-input"
                    label="First Name"
                    defaultValue="Joe"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Last Name"
                    defaultValue="Rogan"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </div>
            <div className="userinfo1">
                <TextField
                    id="outlined-read-only-input"
                    label="Email"
                    defaultValue="joerogan@gmail.com"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Username"
                    defaultValue="xXJoeXx"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </div>
        </div>
    );
}