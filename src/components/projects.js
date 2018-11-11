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

import Rise from "../rise.png";
import GWK from "../gwk.jpeg";
import Thesis from "../thesis.jpeg";

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
    }
});

class ProjectsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedInst: "",
            selectedElab: "",
            dialogOpen: false
        };
    }

    componentDidMount = () => {
        // const topRect = document
        //     .getElementById("tabBar")
        //     .getBoundingClientRect().top;
        const topParent = window.scrollY;
        // TODO: fix this magic number
        if (topParent > 278) {
            document.getElementById("projects").scrollIntoView(true);
            window.scrollBy(0, -48);
        }
    };

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

    eductations = [
        {
            institution: "Wave energy testing GWK",
            years: "October 2018",
            description: "Data Acquisition Lead",
            image: GWK,
            elaboration:
                "Following the development of a bespoke data-acquisition and remote monitoring system \
                (described in the careers section under Peaceful Programming), I travelled to \
                Hannover Germany to install the system in a flume tank, to ensure that it was fully operational, \
                and to make any last minute modifications neccessary to accomodate the research team. \
                This was a very useful excercise as it provided us with alot of useful feedback as to how \
                the system is being used, the sort of expectations that users have, and ultimately any design \
                modifications that will be useful in the next iteration of this product."
        },
        {
            institution: "Undergraduate Research",
            years: "Mar 2009 - Jun 2010",
            description: "Mechanotransduction",
            image: Thesis,
            elaboration: 
                "During my undergraduate final-year project, I investigated the effects of \
                mechanical stimulation on the development of articular cartilage. \
                During this project I was responsible for receiving biological samples, \
                dissecting and storing organs, preparing organs with parafin wax embedding, \
                performing microtome sectioning of embedded organs, and performing histology \
                and immunohistochemistry on the sectioned samples. Data was collected on the samples using \
                basic microscopy and fluorescent microscopy (for immunohistochemical samples). \
                Preparation for this project was based on work-to-date at the time, and through discusion with \
                my research supervisor we decided where my effors would be best placed. Following the \
                practical aspect of this project, I organised the most relevant results into a comprehensive report, \
                which highlighted the relevance of the results for that particular field of research, \
                and I drew conclusions and inspiration for future work based on a thorough literature review "
        },
        {
            institution: "Rise Rwanda",
            years: "Feb 2017 - present",
            description: "Volunteer",
            image: Rise,
            elaboration:
                "Working closely with martketing professionals and graphic designers, \
                I develop and maintain the charity's website. In addition to this, in 2017, \
                we made a large push for funding to fund the organisations micro-financing project. \
                I was heavily involved in the writing of funding applications and we \
                had a remarkably high success rate, receiving funding from The RTE One World Fund \
                and The UDG Healthcare CSR Fund, amongst many others. From this we received enough seed funding \
                to begin the micro-finance project which initiated early in 2018 when participants received their \
                first micro-financing loans."
        }
    ];

    render() {
        const { classes } = this.props;
        const { dialogOpen, selectedInst, selectedElab } = this.state;
        return (
            <div className={classes.holder} id='projects'>
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
                                    className={classes.media}
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
                                    <Typography
                                        gutterBottom
                                        component="p"
                                    >
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

const styledComponent = withStyles(styles, { withTheme: true })(ProjectsSection);

export default styledComponent;
