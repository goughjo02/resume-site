import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from 'prop-types';
import ME from "../sdford.jpg";

const styles = theme => ({
    headImage: {
        width: '100vw',
        height: '50vh',
        maxHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
    },
    root: {
        flexGrow: 1
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
            <div>
            <div className={classes.header}>
                <img src={ME} width={'100%'} height={'auto'} alt="header" />
                </div>
                <Paper className={classes.root}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </Paper>
            </div>
        );
    }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledComponent = withStyles(styles, { withTheme: true })(Header);

export default styledComponent;
