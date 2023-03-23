function StarShipCard (props) {
    const {shipData} = props;
    console.log(shipData)
    return (
        <div>
            <h3>{shipData.name}</h3>
            <p>crew: {shipData.crew}</p>
            <p>hyperdrive rating: {shipData.hyperdrive_rating}</p>

        </div>
    ) 
}

export default StarShipCard;