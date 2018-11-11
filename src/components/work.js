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
        console.log("trying to open");
        this.setState({
            dialogOpen: true,
            selectedInst: inst,
            selectedElab: elab
        });
    };

    handleDialogClose = () => {
        this.setState({ dialogOpen: false });
    };

    eductations = [
        {
            institution: "Grant Thornton",
            years: "Jan 2017 - Dec 2017",
            description: "Case Executive",
            image: AIB,
            elaboration: 
                "Positioned in a highly regulated aspect of financial affairs, my \
                role involed the processing of indiviudual cases in line with company \
                policy and the regulatory framework that concerned the nature of the work. \
                During my time here I processed a very high volume of assets, for which I leveraged \
                the power of data analysis software to deliver impactful reports and strategise processes \
                to meet KPIs. This was a highly regulated role, involving high stakes, where thorough \
                research and understnding of content was paramount."
        },
        {
            institution: "Peaceful Programming",
            years: "Jam 2018 - May 2018",
            description: "Product Engineer",
            image: PP,
            elaboration:
                "As co-director and product engineer at Peaceful Programming \
                I had several small projects (websites, simple libraries) \
                and had one large project. The large project, which recently finished (March 2018), \
                involved the construction of a remote data acquisition system, \
                with realtime data visualization. Technologies used include Python, Elixir Phoenix, \
                ReactJs, and C++/Arduino"
        },
        {
            institution: "Initiafy",
            years: "June 2018 - Present",
            description: "Web Developer",
            image: Initiafy,
            elaboration: 
                "Initiafy is an online CRM, which provides services for the pharmaceutical \
                and heavy industries. At initiafy, I provide technical support for the current product. \
                The majority of my time is spent on development on the planned sucessor to the curent product. \
                This is a .NET stack and the majority of my time is spent working on the development of an \
                SPA built with the latest version of Angular."
        }
    ];

    render() {
        const { classes } = this.props;
        const { dialogOpen, selectedInst, selectedElab } = this.state;
        return (
            <div className={classes.holder}>
                {this.eductations.map(e => {
                    return (
                        <Card className={classes.card} key={e.institution}>
                            <CardActionArea
                                disableRipple={true}
                                disableTouchRipple={true}
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
