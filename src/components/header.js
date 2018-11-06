import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import ME from "../sdford.jpg";

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
        zIndex: '999'
    },
    tab: {
        width: "100px"
    },
    text: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "72px",
        [theme.breakpoints.down("sm")]: {
            flex: "1",
            alignItems: "center"
        },
        [theme.breakpoints.up("sm")]: {
            flex: "1",
            maxWidth: "340px",
            alignItems: "flex-start"
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

    render() {
        const { classes } = this.props;
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
                        <Tab className={classes.tab} label="School" />
                        <Tab className={classes.tab} label="Work" />
                        <Tab className={classes.tab} label="Projects" />
                    </Tabs>
                </Paper>
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
