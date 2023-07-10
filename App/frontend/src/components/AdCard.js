import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { TextAlignment } from "@cloudinary/url-gen/qualifiers";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AdCard = (props) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dk5czgifq",
    },
  });
  const adImage = props.item.cloudinary_id;
  const myImage = cld.image(adImage);

  myImage.resize(fill().width(605).height(400));

  return (
    
    <Card
      raised="true"
      sx={{
        maxWidth: 605,
        margin: "auto",
        textAlign: "left",
        marginBottom: "50px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.item.headline}
        subheader={props.item.date}
      />
      <CardActionArea>
        <AdvancedImage cldImg={myImage} />
        <CardContent>

          <Typography variant="body2" color="text.secondary">
            {props.item.ad}
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions sx={{backgroundColor:'lightgrey'}}>
        <Button sx={{float:"left"}} size="small" color="primary">
          Ota yhteyttä
        </Button>
        <Typography sx={{float:"right"}}variant="body2" color="text.secondary">
            Kategoria: {props.item.category}
          </Typography>
      </CardActions>
    </Card>
  );
};

export default AdCard;
