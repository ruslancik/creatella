import React from "react";
import {CentToDollar, DateFormatter} from '../utils/function'

//style 
import {ItemBlock, ItemFace, ItemDetails, ItemDetailsContainer} from './item.style'

class Item extends React.Component {
 
  render() {
    let {face, price, size, id ,date } = this.props;
    return (
      <ItemBlock>
        <ItemDetails>{DateFormatter(date)} </ItemDetails>
        <ItemFace size={size}> {face} </ItemFace>
        <ItemDetailsContainer>
          <ItemDetails> Size: {size} </ItemDetails>
          <ItemDetails> Price: {CentToDollar(price)} </ItemDetails>
        </ItemDetailsContainer>
      </ItemBlock>
    );
  }
}

export default Item;