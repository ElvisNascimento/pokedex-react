import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function PokemonCard({ name, image, types }) {
    const typeHendler = () => {
        if (types[1]) {
            return types[0].type.name + " " + types[1].type.name;
        } else {
            return types[0].type.name;
        }
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia component="img" height="300" width="auto" image={image} alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {typeHendler()}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}