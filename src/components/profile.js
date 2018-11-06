import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ME from "../meinwrk.jpg";

const styles = theme => {
    const imageHeight = 100;
    return {
        root: {
            display: "initial"
        },
        imageHolder: {
            height: imageHeight + "px",
            width: imageHeight + "px",
            borderRadius: imageHeight / 2 + "px",
            overflow: "hidden"
        },
        top: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }
    };
};
class profileSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.top}>
                    <h3>Joey Gough</h3>
                    <div className={classes.imageHolder}>
                        <img src={ME} height={"100%"} width="autp" />
                    </div>
                </div>
                <div>
                    <p>
                        You think water moves fast? You should see ice. It moves
                        like it has a mind. Like it knows it killed the world
                        once and got a taste for murder. After the avalanche, it
                        took us a week to climb out. Now, I don't know exactly
                        when we turned on each other, but I know that seven of
                        us survived the slide... and only five made it out. Now
                        we took an oath, that I'm breaking now. We said we'd say
                        it was the snow that killed the other two, but it
                        wasn't. Nature is lethal but it doesn't hold a candle to
                        man.
                    </p>
                </div>
            </div>
        );
    }
}

const styledComponent = withStyles(styles, { withTheme: true })(profileSection);

export default styledComponent;
