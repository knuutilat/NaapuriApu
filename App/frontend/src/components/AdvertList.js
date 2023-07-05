import AdCard from './AdCard';

const AdvertList = (props) => {

    let items = props.list.map((item,index) => {
      
        return(
            <AdCard key={item._id} item={item} index={index} />
        )
    })

    return(
       <div>
        <h3>Ilmoitukset</h3>
        {items}
        </div>
    )

}

export default AdvertList;