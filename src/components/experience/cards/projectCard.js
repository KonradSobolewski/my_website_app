import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as classes from './projectCard.module.scss'

const ProjectCard = props => (
    <Card className={classes.card} raised={true}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Company"
                className={classes.media}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="h2" align={"center"}>
                    {props.title}
                </Typography>
                <Typography variant="h5" component="h3" gutterBottom align={"center"}>
                    Technology: {props.technology}
                </Typography>
                <Typography component="p" gutterBottom>
                    {props.description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => props.learnMoreAction(props.website)}>
                Learn More
            </Button>
        </CardActions>
    </Card>
);

export default ProjectCard;