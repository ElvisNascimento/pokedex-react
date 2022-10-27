import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Box, CardActionArea } from '@mui/material';
import { type } from '@testing-library/user-event/dist/type';
import { color } from '@mui/system';


export default function PokemonCard({ name, image, types }) {
    const typeHendler = () => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        } else {
            return types[0].type.name;
        }
    }
    if (type.name === "fire") {
        color = 'red';
    }
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardMedia component='img' height='160' image={image} sx={{ objectFit: 'contain' }} alt={name} />
                <CardContent>
                    <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                        <Typography gutterBottom variant="h4" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                            {typeHendler()}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}