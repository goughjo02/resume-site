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

import Belvedere from "../belvedere.jpg";
import TCD from "../tcd.jpeg";
import UCD from "../ucd.jpg";

const styles = theme => ({
    holder: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    card: {
        maxWidth: 270,
        margin: '8px'
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
            selected: ""
        };
    }

    static defaultProps = {};

    eductations = [
        {
            institution: "Belvedere College SJ",
            years: "Sept 2004 - Jun 2010",
            description: "School in Dublin inner city",
            image: Belvedere
        },
        {
            institution: "Trinity College Dublin",
            years: "Sept 2010 - Jun 2015",
            description: "Natural Sciences Degree",
            image: TCD
        },
        {
            institution: "University College Dublin",
            years: "Sept 2015 - Jun 2016",
            description: "MSc Biotech & Business",
            image: UCD
        }
    ];

    render() {
        const { classes } = this.props;
        console.log(this.eductations)
        return (
            <div className={classes.holder}>
                {this.eductations.map(e => {
                    return (
                        <Card className={classes.card} key={e.institution}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    className={classes.media}
                                    height="140"
                                    image={e.image}
                                    title="Contemplative Reptile"
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
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })}
            </div>
        );
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    componentDidCatch(error, info) {}
}

const styledComponent = withStyles(styles, { withTheme: true })(SchoolSection);

export default styledComponent;
