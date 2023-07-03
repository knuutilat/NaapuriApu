import React from "react";
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from '@cloudinary/url-gen';

// Import required actions.
import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";


const Img = ({uploadedImg}) => {

      // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
        cloudName: 'dk5czgifq'
        }
  }); 

    // Use the image with public ID, 'front_face'.
    const myImage = cld.image(uploadedImg);

    myImage
    .resize(thumbnail().width(200).height(200))

    return(
        <>
        <AdvancedImage cldImg={myImage}/>
        </>
    )
}

export default Img;