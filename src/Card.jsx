

function Card({name, image, position}){
    return(
        <div style ={{textAlign: 'center'}}>
            <img
                src={image}
                alt=""
            />
            <h2>
                {name}
            </h2>
            <p>
                {position}
            </p>

        </div>
    );
}

export default Card;