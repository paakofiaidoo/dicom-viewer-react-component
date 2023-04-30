import React, { PureComponent } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LinearProgress from "@mui/material/LinearProgress";

class OpenUrlDlg extends PureComponent {
    hide = () => {
        this.props.onClose();
    };

    cancel = () => {
        window.stop();
        this.hide();
    };

    render() {
        return (
            <div>
                <Dialog open={true} onClose={this.hide} aria-labelledby="alert-dialog-title">
                    <DialogTitle id="alert-dialog-title">{"Downloading file ..."}</DialogTitle>
                    <DialogContent>
                        <LinearProgress variant="determinate" value={this.props.progress} color="secondary" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.cancel}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default OpenUrlDlg;
