import {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import { FormLabel, InputLabel, Input, TextField, Button, Card } from "@mui/material";

const LoginPage = (props) => {
    
    const [state,setState] = useState({
        username:"",
        password:""
    })

    const onChange = (event) => {
        setState((state) => {
            return {
                ...state,
                [event.target.name]:event.target.value
            }
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(state.username.length < 4 ||state.password.length < 8) {
            props.setError("Username must be atleast 4 characters and password 8 characters long.");
            return;
        }
        let user = {
            ...state
        }
        if(event.target.name === "register") {
            props.register(user);
        } else {
            props.login(user);
        }
    }

    return(
        <div>
            <FormControl sx= {{
                marginTop:'10em'
            }}>
                <FormLabel htmlFor="username">Käyttäjätunnus</FormLabel>
                <TextField type="text"
                       className="form-control"
                       name="username"
                       id="outlined-multiline-flexible"
                       onChange={onChange}
                       value={state.username}/> 
                <FormLabel htmlFor="password">Salasana</FormLabel>
                <TextField type="password"
                       className="form-control"
                       name="password"
                       id="outlined-multiline-flexible"
                       onChange={onChange}
                       value={state.password}/> 
                <Button sx={{marginTop:'10px', marginBottom:'10px'}}name="login" onClick={onSubmit} type="submit" variant="contained">Kirjaudu</Button>  
                <Button name="register" onClick={onSubmit} type="submit" variant="contained">Rekisteröidy</Button>  
                
            </FormControl>
        </div>
    )
}

export default LoginPage;