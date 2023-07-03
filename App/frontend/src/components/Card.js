const Card = (props) => {

    return(

    <div class="card" style={{margin:'auto', width: '60%', marginBottom:'40px'}}>
    <div class="card-body">
    <h5 class="card-title">{props.item.headline}</h5>
    <p class="card-text">{props.item.ad}</p>
    <a href="#" class="card-link">Card link {props.item._id}</a>
    <a href="#" class="card-link">Another link</a>
    </div>
    </div>
           
    )
    
}

export default Card;