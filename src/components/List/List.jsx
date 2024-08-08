import React from "react";
import { Typography, InputLabel, MenuItem, FormControl, Select, Grid } from '@mui/material';
import "./styles.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, type, setType, rating, setRating }) => {
  return (
    <div className="container" style={{ marginTop: '1px' }}>
      <Typography variant="h4" style={{ fontSize: '15px', color: '#051650', fontWeight: 'bold' }}>
        Attractions, Hotels, and Restaurants Around You
      </Typography>
      <div className="filters">
        <FormControl className="formControl">
          <InputLabel>Select Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="customSelect"
            style={{width: '140px'}}
          >
            <MenuItem value="attractions">Attractions</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="restaurants">Restaurants</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="formControl">
          <InputLabel>Select Rating</InputLabel>
          <Select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="customSelect"
            style={{width: '140px'}}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={3} className="list" style={{ marginTop: '10px' }}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;