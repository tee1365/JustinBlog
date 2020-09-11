import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { AppDispatch } from "../app/redux/rootStore";
import { fetchImage, getCommon } from "../app/redux/slice/commonSlice";
import {
  HomeContainer,
  HomeTitle,
  ImageBackground,
  Overlay,
} from "../components/HomepageComps";

const Homepage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  let image = window.localStorage.getItem("splashPageImage");
  useEffect(() => {
    if (!image) {
      dispatch(fetchImage());
    }
  }, [image, dispatch]);
  return (
    <ImageBackground image={image}>
      <Overlay>
        <HomeContainer>
          <HomeTitle>Justin's Blog</HomeTitle>
          <Button size="huge" inverted>
            Explore
          </Button>
        </HomeContainer>
      </Overlay>
    </ImageBackground>
  );
};

export default Homepage;
