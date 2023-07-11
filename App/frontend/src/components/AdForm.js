import { useState } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import {
  TextField,
  Button,
  InputBase,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";

const AdForm = (props) => {
  const [file, setfile] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImg, setUpload] = useState("");
  const [state, setState] = useState({
    headline: "",
    ad: "",
    email: "",
    phone: "",
    cloudinary_id: uploadedImg,
    category: "",
    date: "",
  });

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  }

  const onChange = (event) => {
    setState((state) => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setfile(file);
    previewFiles(file);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    let item = {
      ...state,
    };

    const result = await axios.post("http://localhost:3001", {
      image: image,
    });

    try {
      const uploadedImg = result.data.public_id;
      setUpload(uploadedImg);
      item.cloudinary_id = uploadedImg;
      item.date = date;
      props.addItem(item);
      setState({
        headline: "",
        ad: "",
        email: "",
        phone: "",
        cloudinary_id: uploadedImg,
        category: "",
        date: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormControl>
      {image ? (
        <img
          style={{
            objectFit: "cover",
            margin: "auto",
            height: "300px",
            width: "640px",
          }}
          src={image}
          alt=""
        />
      ) : (
        <Skeleton
          variant="rect"
          sx={{ margin: "auto" }}
          width={640}
          height={300}
        ></Skeleton>
      )}
      <InputBase
        type="file"
        className="form-control"
        id="outlined-multiline-flexible"
        onChange={(e) => handleChange(e)}
        required
        accept="image/png, image/jpeg, image/jpg, image/jfif"
        sx={{ margin: "auto", padding: "10px" }}
      />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          className="form-control"
          name="headline"
          label="Otsikko"
          id="outlined-multiline-flexible"
          onChange={onChange}
          value={state.headline}
          sx={{ margin: "auto" }}
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="category"
          label="Kategoria"
          onChange={onChange}
          value={state.category}
        >
          <MenuItem value={"Tarjoa"}>Tarjoa</MenuItem>
          <MenuItem value={"Tarve"}>Tarve</MenuItem>
        </Select>
      </Box>
      <TextField
        type="text"
        className="form-control"
        name="ad"
        id="outlined-multiline-flexible"
        label="Ilmoitusteksti"
        multiline
        rows={6}
        onChange={onChange}
        value={state.ad}
        sx={{ margin: "auto", width: "630px", marginTop: "10px" }}
      />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35.4ch", marginTop: "20px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="email"
          className="form-control"
          label="Sähköposti"
          name="email"
          id="outlined-multiline-flexible"
          onChange={onChange}
          value={state.email}
        />
        <TextField
          type="text"
          className="form-control"
          name="phone"
          label="Puhelin"
          id="outlined-multiline-flexible"
          onChange={onChange}
          value={state.phone}
        />
      </Box>
      <Button
        sx={{ m: "auto", width: "40ch", marginTop: "20px" }}
        onClick={onSubmit}
        type="submit"
        variant="contained"
      >
        Lisää
      </Button>
    </FormControl>
  );
};

export default AdForm;
