import styled from 'styled-components';


export const CustomButtonContainer = styled.button`
  min-width: 65px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #FFD700;
  color: black;
  border: none;
  margin: 10px 15px;
  outline: none;

  &:hover {
    background-color: black;
    color: #FFD700;
    border: 1px solid black;
  }
`;



export const ButtonContainer = styled.div`
    background-color: #141414;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9999;
    margin-bottom: 100px;
`;