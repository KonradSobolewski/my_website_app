import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as classes from './sellions.module.css'
import SellionsLogo from '../../../assets/images/cropped-logo.png'

const Sellions = props => (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                className={classes.media}
                height="140"
                width="300"
                image={SellionsLogo}
                title="Sellions"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Sellions
                </Typography>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
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

export default Sellions;