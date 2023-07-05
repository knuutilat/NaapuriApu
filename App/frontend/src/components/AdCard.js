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
  );
};

export default AdCard;
