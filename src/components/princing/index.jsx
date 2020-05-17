import React from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

const Pricing = () => {
    
    const boxes = {
        prices: [100,50,250],
        positions: ['Balcony','Medium','Star'],
        linkTo: ['https://sales/b','https://sales/m','https://sales/s'],
        delay: [500,0,500]
    };

    const desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium iste facere tenetur in nostrum illo iusto inventore fugiat delectus rerum.';

    const showBoxes = () => (
        boxes.prices.map((price, index) => (
            <Zoom key={index} delay={boxes.delay[index]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${price}</span>
                            <span>{boxes.positions[index]}</span>
                        </div>
                        <div className="pricing_description">
                                {desc}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton 
                                text="Purchase"
                                background="#ff8a00"
                                color="#fff"
                                link={boxes.linkTo[index]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    );
    
    return(
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">

                        {showBoxes()}

                    </div>

                </div> 
            </div>
        );
    };

export default Pricing;