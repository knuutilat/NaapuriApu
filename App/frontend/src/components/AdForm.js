import { useState } from "react";
import axios from "axios";
import Img from "./Img";



const AdForm = (props) => {

    const [file,setfile] = useState("");
    const[image, setImage] = useState("");
    const[uploadedImg, setUpload] = useState("");
    
    const [state,setState] = useState({
        headline:"",
        ad:"",
        email:"",
        phone:""
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post("http://localhost:3001", {
            image: image
        })
        try{
            const uploadedImg = result.data.public_id;
            setUpload(uploadedImg);
        } catch(err) {
            console.log(err);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        let item = {
            ...state
        }
        props.addItem(item);
        setState({
            headline:"",
            ad:"",
            email:"",
            phone:""
            
        })
    }

    return(
        <div style={{
            "margin":"auto",
            "width":"40%",
        }}> <form onSubmit={e=>handleSubmit(e)}>
                <label htmlFor="fileInput">Lisää kuva</label>
                <input type="file"
                        className="form-control"
                        id="fileinput"
                        onChange={e=> handleChange(e)}
                        required accept="image/png,
                        image/jpeg, image/jpg, image/jfif"/>    
                <button className="btn btn-primary">Submit</button>
        </form>
            <form className="mb-3" onSubmit={onSubmit}>
                             
                <label htmlFor="headline" className="form-label">Otsikko</label>
                <input type="text"
                       className="form-control"
                       name="headline"
                       id="headline"
                       onChange={onChange}
                       value={state.headline}/>   
                <label htmlFor="ad" className="form-label">Teksti</label>
                <textarea type="text"
                       className="form-control"
                       name="ad"
                       id="ad"
                       rows="3"
                       onChange={onChange}
                       value={state.ad}/>
                <label htmlFor="email" className="form-label">Sähköposti</label>
                <input type="email"
                       className="form-control"
                       name="email"
                       id="email"
                       onChange={onChange}
                       value={state.email}/>
                <label htmlFor="phone" className="form-label">Puhelin</label>
                 <input type="text"
                       className="form-control"
                       name="phone"
                       id="phone"
                       onChange={onChange}
                       value={state.phone}/>   
                       
                <input type="submit" className="btn btn-primary" value="add"/>         
            </form>
            <img src={image} alt=""/>
            <Img uploadedImg={uploadedImg}/>
            
        </div>
        
    )
}

export default AdForm;