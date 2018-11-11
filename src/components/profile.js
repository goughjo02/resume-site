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
        },
        textHolder: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        },
        title: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: "0 1 300px",
        },
        text: {
            //maxWidh: "300px",
            flex: "0 1 500px",
            textAlign: 'justify'
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
                <div className={classes.title}>
                    <h3>Joey Gough</h3>
                    <div className={classes.imageHolder}>
                        <img src={ME} height={"100%"} width="autp" />
                    </div>
                    </div>
                </div>
                <div class={classes.textHolder}>
                    <p class={classes.text}>
                        Hello, my name is Joey Gough, I am a web developer, a
                        data-scientist, a creator, and an explorer. In the past
                        I have worked on a variety of different projects,
                        ranging from scientific and academic research to
                        developing engineering and IoT solutions. I am ambitious
                        and hard-working individual, with a thirst for
                        understanding and an enterprising personality. I am
                        always looking for new and exciting opportunities and as
                        such I like to maintain this personal website as a sort
                        of stand-in resume, an up-to-date reference of my
                        experience, and an advertisement of my skills,
                        personality, and interests. Thank you for taking the
                        time to visit my site. Please feel free to get in touch.
                    </p>
                </div>
            </div>
        );
    }
}

const styledComponent = withStyles(styles, { withTheme: true })(profileSection);

export default styledComponent;
