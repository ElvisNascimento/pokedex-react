import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Box, CardActionArea } from '@mui/material';


export default function PokemonCard({ name, image, types }) {
    const typeHendler = () => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        } else {
            return <Badge badgeContent={types[0].type.name} color="secondary" />;
        }
    }
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardMedia component="img" height="300" width="auto" image={image} alt={name}
                />
                <CardContent>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <Typography gutterBottom variant="h4" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                            {typeHendler()}
                        </Typography>
                    </Box>
                    {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}