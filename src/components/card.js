import react from "react";
import '../css/card.css';


function Card({details}){


    return (

        <div className="card">
            <div className="card-header">
                <p className="shoe-name">{details.name}</p>
                <p className="brand-name">{details.brandname}</p>
            </div>

            <div className="card-image">
                <img className="shoe-image" src={details.image1}></img>
            </div>

            <div className="card-footer">
                <div className='price'>
                    <p className="price-text">Price</p>
                    <p className="price-number">$ {details.price}</p>
                </div>
                <div className="image-switch">
                    <div className="images">
                        <img className="shoe-image-selection" src={details.image1}></img>
                    </div>
                    <div className="images">
                        <img className="shoe-image-selection" src={details.image1}></img>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Card;