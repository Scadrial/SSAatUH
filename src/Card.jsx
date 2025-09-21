import ProfilePic from './logo192.png'

function Card(){
    return(
        <div className = "card">
            <img src={ProfilePic} alt="profile pictur">

            </img>
            <h2>
                George Meadows
            </h2>
            <p>
                President of SSA@UH
            </p>
        </div>
    );
}

export default Card;