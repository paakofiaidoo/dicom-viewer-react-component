import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
// import packageJson from '../../package.json'

const AboutDlg = ({ onClose }) => {
    const urlRepository = "https://github.com/webnamics/u-dicom-viewer/";

    const linkRepository = (
        <Typography variant="body2">
            <Link href={urlRepository} target="_blank" style={{ color: "#999999" }}>
                https://github.com/webnamics/u-dicom-viewer
            </Link>
        </Typography>
    );

    const version = (
        <Typography variant="body2" style={{ color: "#999999" }}>
            {/* {packageJson.version} */}
        </Typography>
    );

    return (
        <div>
            <Dialog onClose={onClose} open={true}>
                <DialogTitle onClose={onClose} disableTypography={true}>
                    <Typography variant="h6">
                        About <strong>U</strong> <strong>D</strong>icom <strong>V</strong>iewer
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <List>
                        <ListItem>
                            <ListItemText primary="Repository URL:" secondary={linkRepository} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Version:" secondary={version} />
                        </ListItem>
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={onClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AboutDlg;
