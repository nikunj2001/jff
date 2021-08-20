import styled from "styled-components" 

export const Row=styled.div`
   display: flex;flex-wrap: wrap;
   margin-left:-15px;
   margin-right:-15px;

`

export const Col=styled.div`
    width:${(props)=>(props.col>12? 100 : (100/12) * props.col)}%;
    padding:15px;

`