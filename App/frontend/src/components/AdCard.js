
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { TextAlignment } from '@cloudinary/url-gen/qualifiers';

const AdCard = (props) => {

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dk5czgifq'
        }
      }); 
    const adImage = props.item.cloudinary_id
    const myImage = cld.image(adImage);

    return(

   /* <div class="card" style={{margin:'auto', width: '60%', marginBottom:'40px'}}>
    <div class="card-body">
    <h5 class="card-title">{props.item.headline}</h5>
    <p class="card-text">{props.item.ad}</p>
    <AdvancedImage cldImg={myImage} />
    </div>
    </div> */
    <div class="card" style={{margin:'auto', width: '60%', marginBottom:'40px'}}>
    <Card raised="true" sx={{ 
      maxWidth: 405,
      
      margin: 'auto',
      textAlign:'left' }}>
    <CardActionArea>
    <AdvancedImage cldImg={myImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.item.headline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.item.ad}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Ota yhteyttä
      </Button>
    </CardActions>
  </Card>
  </div>
           
    )
    
}

export default AdCard;