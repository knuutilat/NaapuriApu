import {useState} from 'react';

const ShoppingForm = (props) => {

    const [state,setState] = useState({
        headline:"",
        ad:"",
        email:"",
        phone:""
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
        }}>
            <form className="mb-3" onSubmit={onSubmit}>
                <label htmlFor="headline" className="form-label">Headline</label>
                <input type="text"
                       className="form-control"
                       name="headline"
                       id="headline"
                       onChange={onChange}
                       value={state.headline}/>   
                <label htmlFor="ad" className="form-label">Text</label>
                <textarea type="text"
                       className="form-control"
                       name="ad"
                       id="ad"
                       rows="3"
                       onChange={onChange}
                       value={state.ad}/>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email"
                       className="form-control"
                       name="email"
                       id="email"
                       onChange={onChange}
                       value={state.email}/>
                <label htmlFor="phone" className="form-label">Phone</label>
                 <input type="text"
                       className="form-control"
                       name="phone"
                       id="phone"
                       onChange={onChange}
                       value={state.phone}/>   
                       
                <input type="submit" className="btn btn-primary" value="add"/>         
            </form>
        </div>
    )
}

export default ShoppingForm;