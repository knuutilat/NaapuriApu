import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { fill } from "@cloudinary/url-gen/actions/resize";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const AdCard = (props) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dk5czgifq",
    },
  });
  const adImage = props.item.cloudinary_id;
  const myImage = cld.image(adImage);

  myImage.resize(fill().width(400).height(200));

  return (
    <Card
      raised="true"
      sx={{
        maxWidth: 400,
        maxHeight: 500,
        margin: "auto",
        textAlign: "left",
        marginBottom: "50px",
      }}
    >
      <CardHeader
        sx={{ backgroundColor: "lightgrey" }}
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
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
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
            }}
            variant="body2"
            color="text.secondary"
          >
            {props.item.ad}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            Yhteystiedot: <br />
            Puhelin: {props.item.phone} <br />
            Sähköposti: {props.item.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ backgroundColor: "lightgrey" }}>
        <Button sx={{ float: "left" }} size="small" color="primary">
          Lue lisää
        </Button>
        <Typography
          sx={{ marginLeft: "400px" }}
          variant="body2"
          color="text.secondary"
        >
          Kategoria: {props.item.category}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default AdCard;
