import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  height: 100%;
  width: 100%;
  gap: 8px;
  color: #B5BFC0;
  /* border: 2px solid red; */
  
`;

export const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  height: 100%;
  width: 100%;
  font-size: 12px;
  margin-bottom: 8px;
`;
export const MiddleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-basis: 60%;
  height: 100%;
  width: 100%;
  margin-bottom: 8px;


  & .grey-img{
   
    width: 273px;
    height: 126px;
  }
`;
export const BottomDiv = styled.div`
  display: flex;  
  flex-direction: row;
  flex-basis: 20%;
  height: 100%;
  width: 100%;
  font-size: 13px;

  & .links{
    text-decoration: none;
    color: #11E3F2;
  }

`;
