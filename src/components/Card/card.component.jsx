import React from 'react'
import styled from 'styled-components';
import './card.css'

const Card = ({items }) => {
    
    const {id, size, price, date, face} = items;

    const FaceSize = styled.span`
    font-size: ${size}px
`

    //cent to dollars formatter function
    const CentToDollar = amount => {
        var dollars = amount / 100;
        dollars = dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
        return dollars;
    }
    // formatting date 
    const formatDate = date => {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
    
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
    
        return `${day} ${monthNames[monthIndex]} ${year}`;
    }

    //relative date formatter function
    const DateFormatter = dateStr => {
        const date = new Date(dateStr);
        const now = Date.now();
        const diff = parseInt((now - date.getTime()) / 1000);
        if (diff > 24 * 3600 * 7) {
            return formatDate(date);
        } else {
            if (diff < 3600) {
                const count = parseInt(diff / 60);
                return `${count} minute${count > 1 ? "s" : ""} ago`;
            } else if (diff < 3600 * 24) {
                const count = parseInt(diff / 3600);
                return `${count} hour${count > 1 ? "s" : ""} ago`;
            } else {
                const count = parseInt(diff / (3600 * 24));
                return `${count} day${count > 1 ? "s" : ""} ago`;
            }
        }
    };

    return (
        <div className='card-container'>
            <span>price: {CentToDollar(price)}</span>
            <span>Size: {size}</span>
            <FaceSize>{face}</FaceSize>
            <span>Date: {DateFormatter(date)}</span>
        </div>
    )
}

export default Card

