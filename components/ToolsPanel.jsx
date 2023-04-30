import React, { PureComponent } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { NearMe, Gesture, Rectangle, AutoFixNormal, NorthEast, Compress, ControlCamera, Navigation, ZoomOutMap, ManageSearch, Rotate90DegreesCw, Straighten, Lens } from "@mui/icons-material";

const styleTable = {
    borderCollapse: "collapse",
    width: "120px",
    height: "120px",
};

const styleTableTd = {
    width: "40px",
    height: "40px",
    padding: "3px",
    //border: 'solid 1px black',
};

const iconSize = "1.2rem";
const iconColor = "action";
const activeColor = "success";

class ToolsPanel extends PureComponent {
    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
    }

    componentDidMount() {}

    colorIcon = (tool) => {
        return this.props.toolActive === tool ? activeColor : iconColor;
    };

    render() {
        return (
            <div>
                <table style={styleTable} ref={this.tableRef}>
                    <tbody>
                        <tr>
                            <td style={styleTableTd}>
                                <Tooltip title="No Tool">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("notool")}>
                                        <NearMe size={iconSize} color={this.colorIcon("notool")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                            <td style={styleTableTd}>
                                <Tooltip title="Reference Lines">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("referencelines")}>
                                        <Compress size={iconSize} color={this.props.referenceLines ? activeColor : iconColor} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                            <td style={styleTableTd}>
                                <Tooltip title="Link Series">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("serieslink")}>
                                        <NorthEast size={iconSize} color={this.props.seriesLink ? activeColor : iconColor} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                        <tr>
                            <td style={styleTableTd}>
                                <Tooltip title="WW/WC">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("Wwwc")}>
                                        <ControlCamera size={iconSize} color={this.colorIcon("Wwwc")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                            <td style={styleTableTd}>
                                <Tooltip title="Pan">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("Pan")}>
                                        <Navigation size={iconSize} color={this.colorIcon("Pan")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                            <td style={styleTableTd}>
                                <Tooltip title="Zoom">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("Zoom")}>
                                        <ZoomOutMap size={iconSize} color={this.colorIcon("Zoom")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                        <tr>
                            <td style={styleTableTd}>
                                <Tooltip title="Magnify">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("Magnify")}>
                                        <ManageSearch size={iconSize} color={this.colorIcon("Magnify")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                            <td style={styleTableTd}>
                                <Tooltip title="Length">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("Length")}>
                                        <Straighten size={iconSize} color={this.colorIcon("Length")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                            <td style={styleTableTd}>
                                <Tooltip title="Probe">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("Probe")}>
                                        <AutoFixNormal size={iconSize} color={this.colorIcon("Probe")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                        <tr>
                            <td style={styleTableTd}>
                                <Tooltip title="Angle">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("Angle")}>
                                        <Rotate90DegreesCw size={iconSize} color={this.colorIcon("Angle")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                            <td style={styleTableTd}>
                                <Tooltip title="Elliptical Roi">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("EllipticalRoi")}>
                                        <Lens size={iconSize} color={this.colorIcon("EllipticalRoi")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                            <td style={styleTableTd}>
                                <Tooltip title="Rectangle Roi">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("RectangleRoi")}>
                                        <Rectangle size={iconSize} color={this.colorIcon("RectangleRoi")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                        <tr>
                            <td style={styleTableTd}>
                                <Tooltip title="Freehand Roi">
                                    <IconButton color="inherit" onClick={() => this.props.toolExecute("FreehandRoi")}>
                                        <Gesture size={iconSize} color={this.colorIcon("FreehandRoi")} />
                                    </IconButton>
                                </Tooltip>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ToolsPanel;
