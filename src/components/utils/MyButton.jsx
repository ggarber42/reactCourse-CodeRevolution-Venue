import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = ({text, background, color, link})  => {
    return (
        <Button 
            href={link}
                variant="contained"
                size="small"
                style={{
                    background,
                    color
                }}
        >
            <img src={TicketIcon} alt="icon_button" className="iconImage"/>
                {text}
        </Button>
    );
}

export default MyButton;