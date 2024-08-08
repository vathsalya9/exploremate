import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Chip, CardActions, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Rating } from '@mui/material';
import './styles.css';

const PlaceDetails = ({ place}) => {
    return (
        <Card elevation={6} className="scrollable" style={{  marginRight: '2px', position: 'relative', marginBottom: '10px' }}>
            <CardMedia 
               style={{height: 180}}
               image={place.photo ? place.photo.images.large.url : 'https://wallpapercave.com/wp/wp1874173.jpg'}
               title={place.name}
            />
            <CardContent style={{height: '200px'}}>
                <Typography gutterBottom variant="h7">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                <Rating size="small" value={Number(place.rating)} readOnly></Rating>
                    <Typography gutterBottom variant="body2" style={{ fontSize: '11px' }}>out of {place.num_reviews}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2" style={{ fontSize: '11px' }}>Price</Typography>
                    <Typography gutterBottom variant="body2" style={{ fontSize: '11px' }}>{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2" style={{ fontSize: '11px' }}>Ranking</Typography>
                    <Typography gutterBottom variant="body2" style={{ fontSize: '11px' }}>{place.ranking}</Typography>
                </Box>
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" style={{ alignItems: 'left', fontSize: '11px', backgroundColor: '#051650', color: '#ffffff', marginRight: '5px' }} label={name} className="chip" />
                ))}
                {place.address && (
    <Typography gutterBottom variant="body2" style={{ marginTop: '2px', fontSize: '11px' }} color="textSecondary" className="subtitle">
        <LocationOnIcon style={{ verticalAlign: 'middle', fontSize: '12px' }} /> {place.address}
    </Typography>
)}
{place?.phone && (
    <Typography gutterBottom variant="body2" style={{ marginTop: '2px', fontSize: '11px' }} color="textSecondary" className="subtitle">
        <PhoneIcon style={{ verticalAlign: 'middle', fontSize: '12px' }} /> {place.phone}
    </Typography>
)}
                <CardActions style={{alignItems: 'left'}}>
                    <Button size="small" color="primary" style={{ fontSize: '11px' }} onClick={() => window.open(place.web_url, '_blank')}>
                        Travel Advisor
                    </Button>
                    <Button size="small" color="primary" style={{ fontSize: '11px' }} onClick={() => window.open(place.website, '_blank')}>
                    Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;