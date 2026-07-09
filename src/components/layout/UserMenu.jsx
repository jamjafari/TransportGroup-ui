import {
 Avatar,
 Menu,
 MenuItem,
 IconButton
}
from "@mui/material";

import {
 useState
}
from "react";

import {
 useAuth
}
from "../../auth/AuthContext";

function UserMenu()
{
    const { user } =
        useAuth();

    const [anchorEl,
        setAnchorEl]
            = useState(null);

    const logout = () => {

        localStorage
            .removeItem(
                "token");

        window.location.href =
            "/login";
    };

    return (

        <>

            <IconButton
                onClick={
                    e =>
                    setAnchorEl(
                        e.currentTarget)
                }
            >

                <Avatar>

                    {user?.userName?.[0]}

                </Avatar>

            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() =>
                    setAnchorEl(null)}
            >

                <MenuItem>

                    {user?.userName}

                </MenuItem>

                <MenuItem
                    onClick={logout}
                >
                    Logout
                </MenuItem>

            </Menu>

        </>
    );
}

export default UserMenu;