import React, {useState, useEffect} from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import MyButton from '../utils/MyButton';


const Discount = () => {

    const [discountStart, setDiscountStart] = useState(0);
    const discountEnd = 30;

    const countPercentage = () => discountStart < discountEnd ? setDiscountStart(discountStart+1) : null;

    useEffect(() =>{
        setTimeout(() => countPercentage(), 50);
    },[discountStart]);

    
    return (
        <div className="center_wrapper">

            <div className="discount_wrapper">

                <Fade onReveal={countPercentage}>

                    <div className="discount_porcentage">
                        <span>{discountStart}%</span>
                        <span>OFF</span>
                    </div>

                </Fade>

                <Slide right>

                <div className="discount_description">
                    <h3>Purchase Tickets before 20th JUNE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ullam nostrum provident totam omnis adipisci sequi odio, laudantium culpa maiores.</p>
                    <div>
                        <MyButton 
                            text="Purchase tickets"
                            background="#ffa800"
                            color="#fff"
                            link="https:google.com"
                        />
                    </div>
                </div>

            </Slide>

            </div>

            


        </div>
    );
};

export default Discount;