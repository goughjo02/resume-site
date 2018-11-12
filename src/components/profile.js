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
            //flexWrap: 'wrap',
            flexDirection: 'column',
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: '8px',
            paddingBottom: '8px'
        },
        title: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flex: "0 1 300px"
        },
        text: {
            maxWidth: "500px",
            alignSelf: 'stretch',
            margin: 'auto',
            //flex: "0 1 500px",
            textAlign: "justify",
            paddingTop: '8px',
            paddingBottom: '8px'
        }
    };
};
class profileSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        // const topRect = document
        //     .getElementById("tabBar")
        //     .getBoundingClientRect().top;
        const topParent = window.scrollY;
        // TODO: fix this magic number
        if (topParent > 278) {
            document.getElementById("profile").scrollIntoView(true);
            window.scrollBy(0, -64);
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <div id="profile">
                <div className={classes.top}>
                    <div className={classes.title}>
                        <h3>Joey Gough</h3>
                        <div className={classes.imageHolder}>
                            <img className='blackWhiteImg' src={ME} height={"100%"} width="autp" />
                        </div>
                    </div>
                </div>
                <div className={classes.textHolder}>
                    <p className={classes.text}>
                        Hello, My name is Joey Gough. I am a web developer, a data-scientist, an engineer, and a researcher. In the past I have worked on a variety of different projects, ranging from academic laboratory research to developing engineering and IoT solutions. I am ambitious and hard-working. With a thirst for understanding and an enterprising personality, I am always looking for new and exciting opportunities.
                    </p>
                    <p className={classes.text}>
                        I maintain this personal website to serve as a resume.
                        Thank you for visiting my site. Please get in touch.
                    </p>
                </div>
            </div>
        );
    }
}

const styledComponent = withStyles(styles, { withTheme: true })(profileSection);

export default styledComponent;
