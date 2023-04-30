import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const HeaderItem = ({ name, value }) => {
    return (
        <ListItem dense={true}>
            <ListItemText primary={name} secondary={value} />
        </ListItem>
    );
};

export default HeaderItem;
