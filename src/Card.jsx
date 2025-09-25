

function Card({name, image, position}){
    return(
        <div style ={{textAlign: 'center'}}>
            <img
                src={image}
                alt=""
            />
            <h2 style={{color:'white'}}>
                {name}
            </h2>
            <p style={{color:'white'}}>
                {position}
            </p>

        </div>
    );
}

export default Card;