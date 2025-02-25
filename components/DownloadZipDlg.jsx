import React, { PureComponent } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LinearProgress from "@mui/material/LinearProgress";
import { setZippedFile } from "../actions/index";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class DownloadZipDlg extends PureComponent {
    state = {
        loading: 0,
    };

    componentDidMount(previousProps) {
        this.requestDownloadZip();
    }

    hide = () => {
        this.props.onClose();
    };

    cancel = () => {
        source.cancel("Operation canceled by the user.");
        this.hide();
    };

    requestDownloadZip = () => {
        console.log("this.props.url", this.props.url);
        this.setState({ loading: 0 });
        axios({
            method: "get",
            url: this.props.url,
            responseType: "arraybuffer",
            cancelToken: source.token,
            onDownloadProgress: (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                this.setState({ loading: percentCompleted });
                console.log("loading: ", percentCompleted);
            },
        })
            .then((response) => {
                console.log("response: ", response);
                this.props.setFsZippedFile(response.data);
                this.hide();
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    };

    render() {
        return (
            <div>
                <Dialog open={true} onClose={this.hide}>
                    <DialogTitle>{"Downloading zip archive..."}</DialogTitle>
                    <DialogContent>
                        <LinearProgress variant="determinate" value={this.state.loading} color="secondary" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.cancel}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFsZippedFile: (file) => dispatch(setZippedFile(file)),
    };
};

export default connect(null, mapDispatchToProps)(DownloadZipDlg);
