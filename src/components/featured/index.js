import React from 'react';
import Carroussel from './Carroussel';
import TimeUntil from './TimeUntil';

const Featured = () => {

    return(
        <div style={{position: 'relative'}}>

            <Carroussel />

                <div className="artist_name">
                    <div className="wrapper">
                        Misha Grande
                    </div>
                </div>

            <TimeUntil />

        </div>

    )
}

export default Featured;