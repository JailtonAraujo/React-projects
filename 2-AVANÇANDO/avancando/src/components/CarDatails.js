const CarDetails = ({brand, km, color, newCar}) =>{
    return(
        <div>
            <ul>
                <li>Marca: {brand}</li>
                <li>Km: {km}</li>
                <li>Color: {color}</li>
            </ul>
            {newCar ?(
                <p>O carro é novo</p>
            ):(
                <p>Carro usado</p>
            )}
        </div>
    )
}
export default CarDetails;