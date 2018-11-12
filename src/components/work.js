import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Dialog from "./dialog";

import AIB from "../aib.jpg";
import PP from "../pp.png";
import Initiafy from "../initiafy.jpeg";

const styles = theme => ({
    holder: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    card: {
        maxWidth: 270,
        margin: "8px"
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: "cover"
    },
    contain: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: "contain"
    }
});

class WorkSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedInst: "",
            selectedElab: "",
            dialogOpen: false
        };
    }

    handleDialogOpen = (inst, elab) => {
        this.setState({
            dialogOpen: true,
            selectedInst: inst,
            selectedElab: elab
        });
    };

    handleDialogClose = () => {
        this.setState({ dialogOpen: false });
    };

    componentDidMount = () => {
        // const topRect = document
        //     .getElementById("tabBar")
        //     .getBoundingClientRect().top;
        const topParent = window.scrollY;
        // TODO: fix this magic number
        if (topParent > 278) {
            document.getElementById("work").scrollIntoView(true);
            window.scrollBy(0, -48);
        }
    };

    eductations = [
        {
            institution: "Peaceful Programming",
            years: "Jan - May 2018",
            description: "Product Engineer",
            image: PP,
            elaboration:
                "As co-director and product engineer at Peaceful Programming I had several small projects and one large project. The large project, which recently finished (March 2018), involved the construction of a bespoke remote data acquisition system and a companion web dashboard for a novel wave energy technology developed by Blue Power energy. This product included a real time data visualization website. Technologies used included Python, Elixir Phoenix, ReactJs, and C++/Arduino."
        },
        {
            institution: "Initiafy",
            years: "June 2018 - Present",
            description: "Web Developer",
            image: Initiafy,
            elaboration:
                "Initiafy is an online contractor management software, which provides services primarily for the pharmaceutical and construction industries. At initiafy, I provide technical support for the current platform. The majority of my time is spent on developing an SPA, which is intended to  succeed the current platform. This is a .NET stack and the majority of my time is spent working with the latest version of Angular."
        },
        {
            institution: "Grant Thornton",
            years: "Jan - Dec 2017",
            description: "Case Executive",
            image: AIB,
            elaboration:
                "Positioned in a highly regulated area of financial affairs, I acted as a case executive, investigating the regulatory framework surrounding cases and performing high level data analysis. During my time I processed a very high volume of assets, for which I leveraged the power of data analysis software to deliver impactful reports and strategise processes to meet KPIs. This was a highly regulated role, involving high stakes, where thorough research and understanding of content was paramount."
        }
    ];

    render() {
        const { classes } = this.props;
        const { dialogOpen, selectedInst, selectedElab } = this.state;
        return (
            <div className={classes.holder} id="work">
                {this.eductations.map(e => {
                    return (
                        <Card className={classes.card} key={e.institution}>
                            <CardActionArea
                                disableRipple={true}
                                disableTouchRipple={true}
                                onClick={() =>
                                    this.handleDialogOpen(
                                        e.institution,
                                        e.elaboration
                                    )
                                }
                            >
                                <CardMedia
                                    component="img"
                                    alt={e.institution}
                                    className={
                                        e.institution == "Peaceful Programming"
                                            ? classes.contain
                                            : classes.media
                                    }
                                    height="140"
                                    image={e.image}
                                    title={e.institution}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {e.institution}
                                    </Typography>
                                    <Typography gutterBottom component="p">
                                        {e.years}
                                    </Typography>
                                    <Typography component="p">
                                        {e.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={() =>
                                        this.handleDialogOpen(
                                            e.institution,
                                            e.elaboration
                                        )
                                    }
                                >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })}
                <Dialog
                    open={dialogOpen}
                    handleClose={() => this.handleDialogClose()}
                    inst={selectedInst}
                    elab={selectedElab}
                />
            </div>
        );
    }
}

const styledComponent = withStyles(styles, { withTheme: true })(WorkSection);

export default styledComponent;
