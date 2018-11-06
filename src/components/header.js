import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import ME from "../sdford.jpg";

import School from "./school";
import Work from "./work";
import Projects from "./projects";
import Profile from "./profile";
import Skills from "./skills";

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

const styles = theme => ({
    root: {
        display: "initial"
    },
    headImage: {
        width: "100vw",
        height: "60vh",
        display: "flex",
        justifyContent: "flex-end",
        backgroundImage: `url(${ME})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        [theme.breakpoints.down("sm")]: {
            height: "50vh"
        },
        [theme.breakpoints.only("md")]: {
            height: "60vh"
        },
        [theme.breakpoints.up("md")]: {
            height: "80vh"
        }
    },
    image: {
        width: "100%",
        height: "auto",
        minWidth: "100vw",
        minHeight: "100%"
    },
    appBar: {
        flexGrow: 1,
        position: "-webkit-sticky",
        position: "sticky",
        top: 0,
        zIndex: "999"
    },
    tab: {
        width: "100px"
    },
    text: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            flex: "1",
            alignItems: "center",
            fontSize: "48px"
        },
        [theme.breakpoints.up("sm")]: {
            flex: "1",
            maxWidth: "340px",
            alignItems: "flex-start",
            fontSize: "72px"
        }
    }
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    static defaultProps = {
        title: "header section"
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.headImage}>
                    <div className={classes.text}>
                        <div className={"fancyText"}>Creator</div>
                        <div className={"fancyText"}>Explorer</div>
                    </div>
                </div>
                <Paper className={classes.appBar}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        fullWidth={!isWidthUp("sm", this.props.width)}
                    >
                        <Tab className={classes.tab} label="Profile" />
                        <Tab className={classes.tab} label="Schools" />
                        <Tab className={classes.tab} label="Work" />
                        <Tab className={classes.tab} label="Projects" />
                        <Tab className={classes.tab} label="Skills" />
                    </Tabs>
                </Paper>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <Profile />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <School />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <Work />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <Projects />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <Skills />
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

const styledComponent = withStyles(styles, { withTheme: true })(Header);
const withWidthComponent = withWidth()(styledComponent);

export default withWidthComponent;
