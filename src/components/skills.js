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
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

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
    const skills = [
        {
            title: "Web Technologies",
            skills: [
                {
                    title: "ReactJS / Redux"
                },
                {
                    title: "Angular 7"
                },
                {
                    title: "React Native"
                },
                {
                    title: "Websockets / RESTful APIs"
                },
                {
                    title: "Data Visualisation / D3"
                },
                {
                    title: "SQL"
                },
                {
                    title: "Python Flask / uWSGI"
                },
                {
                    title: "linux / NGINX"
                }
            ]
        },
        {
            title: "Web Techniques",
            skills: [
                {
                    title: "Internationalization and localisation"
                },
                {
                    title: "Lazy Loading / Code Splitting"
                },
                {
                    title: "SEO"
                },
                {
                    title: "Server Side Rendering"
                }
            ]
        },
        {
            title: "Programming Techniques",
            skills: [
                {
                    title: "Creating standalone reusable code"
                },
                {
                    title: "DRY (don't repeat yourself)"
                },
                {
                    title: "Writing human-readable code"
                },
                {
                    title: "Git"
                }
            ]
        },
        {
            title: "Engineering / Embedded Technologies",
            skills: [
                {
                    title: "C++ / Arduino"
                },
                {
                    title: "Python GPIO / PyQtGraph"
                },
                {
                    title: "Electronic Circuit design"
                },
                {
                    title: "Sensor Applications"
                }
            ]
        },
        {
            title: "Data Science Skills",
            skills: [
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
            ]
        },
        {
            title: "Research Techniques",
            skills: [
                {
                    title: "Dissection"
                },
                {
                    title: "Sample Husbandry"
                },
                {
                    title: "Paraffin Wax Embedding"
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
                    title: "Chromatography"
                }
            ]
        }
    ];
    const { classes } = props;
    return (
        <div className={classes.root}>
            {skills.map(e => {
                return (
                    <ExpansionPanel key={e.title}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>
                                {e.title}
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails id={`details${e.title}`}>
                            <List>
                                {e.skills.map((f, i) => {
                                    if (i === 0) {
                                        return (
                                            <React.Fragment>
                                                <Divider />
                                                <ListItem key={f.title}>
                                                    <ListItemText
                                                        primary={f.title}
                                                    />
                                                </ListItem>
                                                <Divider />
                                            </React.Fragment>
                                        );
                                    } else {
                                        return (
                                            <React.Fragment>
                                                <ListItem key={f.title}>
                                                    <ListItemText
                                                        primary={f.title}
                                                    />
                                                </ListItem>
                                                <Divider />
                                            </React.Fragment>
                                        );
                                    }
                                })}
                            </List>
                            <Divider />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                );
            })}
        </div>
    );
}

SkillsSection.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SkillsSection);
