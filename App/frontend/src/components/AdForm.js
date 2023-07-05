import { useState } from "react";
import axios from "axios";
import Img from "./Img";
import FormControl from '@mui/material/FormControl';
import { FormLabel, InputLabel, Input, TextField, Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const AdForm = (props) => {

    const [category, setCategory] = useState('');
    const [file,setfile] = useState("");
    const[image, setImage] = useState("");
    const[uploadedImg, setUpload] = useState("");
    const [state,setState] = useState({
        headline:"",
        ad:"",
        email:"",
        phone:"",
        cloudinary_id:uploadedImg,
        category:category
    })
    

    function previewFiles(file){
        const reader = new FileReader();
        reader.readAsDataURL(file)

        reader.onloadend = () => {
            setImage(reader.result);
        }
    }

    const onChange = (event) => {
       
        setState((state) => {
            return {
                ...state,
                [event.target.name]:event.target.value
            }
        })
    }

    const handleChange = (e) => {
        const file = (e.target.files[0]);
        setfile(file);
        previewFiles(file)
        
    }


    const onSubmit = async (event) => {
        event.preventDefault();
        
        let item = {
            ...state
        }

        const result = await axios.post("http://localhost:3001", {
            image: image
        })

        try{
            const uploadedImg = result.data.public_id;
            setUpload(uploadedImg);
            console.log(uploadedImg);
            item.cloudinary_id = uploadedImg;
            props.addItem(item);
            setState({
                headline:"",
                ad:"",
                email:"",
                phone:"",
                cloudinary_id:uploadedImg,   
                category:category        
        })
        } catch(err) {
            console.log(err);
        }
       
        
    }

    return(
   <>
            <FormControl>
                <FormLabel htmlFor="fileInput">Lisää kuva</FormLabel>
                <Input type="file"
                        className="form-control"
                        id="outlined-multiline-flexible"
                        onChange={e=> handleChange(e)}
                        required accept="image/png,
                        image/jpeg, image/jpg, image/jfif"/>                    
                <FormLabel htmlFor="headline">Otsikko</FormLabel>
                <TextField type="text"
                       className="form-control"
                       name="headline"
                       id="outlined-multiline-flexible"
                       onChange={onChange}
                       value={state.headline}/>   
                <FormLabel htmlFor="ad" >Teksti</FormLabel>
                <TextField type="text"
                       className="form-control"
                       name="ad"
                       id="outlined-multiline-flexible"
                       multiline
                       rows={6}
                       onChange={onChange}
                       value={state.ad}/>
                <FormLabel htmlFor="category">Kategoria</FormLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.category}
                    label="Category"
                    onChange={onChange}>
                    <MenuItem value={10}>Tarjoa</MenuItem>
                    <MenuItem value={20}>Tarve</MenuItem>
                </Select>            
                <FormLabel htmlFor="email">Sähköposti</FormLabel>
                <TextField type="email"
                       className="form-control"
                       name="email"
                       id="outlined-multiline-flexible"
                       onChange={onChange}
                       value={state.email}/>
                <FormLabel htmlFor="phone" >Puhelin</FormLabel>
                 <TextField type="text"
                       className="form-control"
                       name="phone"
                       id="outlined-multiline-flexible"
                       onChange={onChange}
                       value={state.phone}/>       
                <Button onClick={onSubmit} type="submit" variant="contained">Lisää</Button>      
            </FormControl>
            <img src={image} alt=""/>
            <br/>
            <Img uploadedImg={uploadedImg}/>
            
       
            </>
    )
}

export default AdForm;