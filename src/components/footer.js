import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        paddingTop: "32px",
        paddingBottom: "32px",
        paddingLeft: "16px",
        paddingRight: "16px"
        //borderTop: '1px solid black',
    },
    message: {
        flex: "0 1 340px",
        margin: "8px",
        boxSizing: "border-box"
    },
    contactInfo: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        flex: "0 1 400px",
        justifyContent: "space-between",
        margin: "8px",
        boxSizing: "border-box"
    },
    oneContactInfo: {
        textAlign: "centre",
        whiteSpace: "nowrap",
        paddingTop: '8px',
        paddingBottom: '8px',
        [theme.breakpoints.down("sm")]: {
            flex: "1",
            alignItems: "center",
            textAlign: "center"
        }
        // [theme.breakpoints.up("sm")]: {
        //     flex: "1",
        //     maxWidth: "340px",
        //     alignItems: "flex-start",
        //     fontSize: "72px"
        // }
        //color: theme.palette.secondary.dark,
    },
    fields: {
        color: theme.palette.primary.main,
        float: "left",
        fontWeight: "bolder",
        fontSize: "16px"
    }
});

function footer(props) {
    const { classes, theme } = props;
    console.log(theme);
    return (
        <Paper className={classes.root} elevation={4}>
            <div className={classes.contactInfo}>
                <div className={classes.oneContactInfo}>
                    goughjo02@gmail.com
                </div>
                <div className={classes.oneContactInfo}>+353 87 241 3665</div>
            </div>
        </Paper>
    );
}

const styledComponent = withStyles(styles, { withTheme: true })(footer);

export default styledComponent;
