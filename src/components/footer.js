import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '16px',
        borderTop: '1px solid black',
    },
    message: {
        flex: '0 1 340px',
        margin: '8px',
        boxSizing: 'border-box'
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 1 240px',
        margin: '8px',
        boxSizing: 'border-box'
    },
    oneContactInfo: {
        textAlign: 'right',
        //color: theme.palette.secondary.dark,
    },
    fields: {
        color: theme.palette.primary.main,
        float: 'left',
        fontWeight: 'bolder',
        fontSize: '16px'
    }
});

function footer(props) {
    const { classes, theme } = props;
    console.log(theme)
    return (
        <Paper className={classes.root}>
            <div className={classes.message}>
                Thank you for visiting my profile. If you would like to get in
                touch here are some deets.
            </div>
            <div className={classes.contactInfo}>
            <div className={classes.oneContactInfo}><span className={classes.fields}>Email:</span>     goughjo02@gmail.com</div>
            <div className={classes.oneContactInfo}><span className={classes.fields}>Phone:</span>     +353 87 241 3665</div>
            </div>
        </Paper>
    );
}

const styledComponent = withStyles(styles, { withTheme: true })(footer);

export default styledComponent;
