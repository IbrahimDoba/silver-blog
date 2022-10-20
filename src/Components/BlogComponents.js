import React from "react";
import {
  MainContainer,
  TopDiv,
  MiddleDiv,
  BottomDiv,
} from "./BlogComponentsStyles";
import grey from "./greyimg.jpg";

const BlogComp = () => {
  return (
    <>
      <MainContainer>
        <TopDiv>
          <h1> How Tubr Gets You More Views You Get? </h1>
          <h4>Dec 20, 2022</h4>
        </TopDiv>
        <MiddleDiv>
          <img className="grey-img" src={grey}   alt="grey image" />
        </MiddleDiv>
        <BottomDiv>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus, dolores. <a className="links" href="https://google.com">Read More....</a>
          </p>
          
        </BottomDiv>
      </MainContainer>
    </>
  );
};

export default BlogComp;
