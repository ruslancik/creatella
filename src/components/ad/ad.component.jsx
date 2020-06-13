import React from "react";

//style
import {AddContainer, AddImage} from './ad.style'

const Ad = (props) => (
    <AddContainer>
      <AddImage alt='add image' className={props.class} src={props.src} />
    </AddContainer>
  );

export default Ad;