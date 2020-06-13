import styled from 'styled-components'


export const ItemFace = styled.span`
    font-size: ${props => props.size}px
`

export const ItemDetails = styled.p`
    margin: 10px 10px;
`

export const ItemDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ItemBlock = styled.div`
    
        width: 252px;
        height: 200px;
        float: left;
        margin-right: 4px;
        margin-left: 8px;
        margin-bottom: 40px;
        /*background-color: #1B1B1B;*/
        background-color: #2d3436;
        background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%); 
        border-radius: 3px;
        border-width: 0;
        color: #FFD700;
        text-decoration: none;
        overflow: hidden;
        box-shadow: 0 1px 5px -1px rgba(0, 0, 0, 0.13);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: all .3s;
        
        &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 6px -2px rgba(255,215,0, 0.3);
    }
`