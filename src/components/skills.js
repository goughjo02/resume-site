import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";

const styles = theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    }
});

function SkillsSection(props) {
    const webTechnologies = [
        {
            title: "HTML5 / CSS3 / Javascript"
        },
        {
            title: "ReactJS / Redux"
        },
        {
            title: "Angular 7"
        },
        {
            title: "Websockets / RESTful APIs"
        },
        {
            title: "Data Visualisation / D3"
        },
        {
            title: "C# / .NET"
        },
        {
            title: "Python Flask / Django"
        },
        {
            title: "linux"
        },
        {
            title: "NGINX"
        },
    ]
    const embedded = [
        {
            title: "C++ / Arduino"
        },
        {
            title: "Python GPIO / PyQtGraph"
        },
        {
            title: "Linux"
        },
    ]
    const statistics = [
        {
            title: "R"
        },
        {
            title: "Python Numpy / Pandas"
        },
        {
            title: "Applied Mathematics"
        },
        {
            title: "Excel"
        }
    ];
    const laboratory = [
        {
            title: "Dissection"
        },
        {
            title: "Biological Sample Husbandary"
        },
        {
            title: "Parafin Wax Embedding"
        },
        {
            title: "Microtome Sectioning"
        },
        {
            title: "Histology / Immunohistochemistry"
        },
        {
            title: "Microscopy (fluorescent)"
        },
        {
            title: "Column Chromatography"
        },
        {
            title: "Bioreactor Maintenance"
        }
    ];
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                        Web Technologies
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        {webTechnologies.map(e => {
                            return <div key={e.title}>{e.title}</div>;
                        })}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                        Engineering / Embedded Technologies
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        {embedded.map(e => {
                            return <div key={e.title}>{e.title}</div>;
                        })}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                        Statistics
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        {statistics.map(e => {
                            return <div key={e.title}>{e.title}</div>;
                        })}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                        Scientific Laboratory
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        {laboratory.map(e => {
                            return <div key={e.title}>{e.title}</div>;
                        })}
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

SkillsSection.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SkillsSection);
