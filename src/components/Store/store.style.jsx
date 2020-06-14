import styled from 'styled-components'

export const PageContainer = styled.div`
    z-index: 999;
    display: flex;
    justify-content: center;
`

export const ItemContainer = styled.div`
    width: 1081px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px );
    justify-content: center;
    align-content: center;
    grid-gap: 0 15px;
`

export const LoadingContainer = styled.div`
    clear: both;
    margin: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1/ -1;
`

export const EndCtlg = styled.h1`
    width: 100%;
    text-align: center;
    color: #FFD700;
    margin: 0 auto;
    grid-column: 1/-1;
`