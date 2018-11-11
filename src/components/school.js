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

import Belvedere from "../belvedere.jpg";
import TCD from "../tcd.jpeg";
import UCD from "../ucd.jpg";

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

class SchoolSection extends Component {
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
            institution: "Belvedere College SJ",
            years: "Sept 2004 - Jun 2010",
            description: "School in Dublin inner city",
            image: Belvedere,
            elaboration:
                "During my time in Belvedere, \
                my study focused primarily in Mathematics \
                (inlcuding Applied Mathematics) and various \
                scientific subjects (including Chemistry and Biology). My extra-curricular \
                activites included stage-crew for \
                the dramatic society, playing rugby, \
                the mathematics club and film club"
        },
        {
            institution: "Trinity College Dublin",
            years: "Sept 2010 - Jun 2015",
            description: "Natural Sciences Degree",
            image: TCD,
            elaboration:
                "In my freshman years, my academic subjects were spread across Mathematics, Biology, and Chemistry.\
                In my Sophister years, my studies focused broadly on Genetics, animal and plant Physiology, \
                and Developmental Biology. This was amongst many other subjects including environemntal biology, \
                chemical signalling in biological organisms, and comparitive studies of ubiquitous mechanisms in the biosphere."
        },
        {
            institution: "University College Dublin",
            years: "Sept 2015 - Jun 2016",
            description: "MSc Biotech & Business",
            image: UCD,
            elaboration: 
                "This course focused primarily on commercial \
                aspects of technology development, \
                inluding marketing, corporate finance, \
                regulatory affairs, and technology development processes, such as \
                management sciences, organisational behvaiour, \
                mergers and collaborations, and team-work excercises. \
                As part of this course, I also performed practical studies \
                in NIBRT, the national institutes for biological research and training, \
                where I studied industrial techniques in the area of biotechnology. "
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

const styledComponent = withStyles(styles, { withTheme: true })(SchoolSection);

export default styledComponent;
