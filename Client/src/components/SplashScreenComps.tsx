import styled from "styled-components";

export const ImageBackground = styled.div<{ readonly image: string }>`
  background-image: url(${(props) => props.image}) !important;
  height: 100vh;
  background-size: cover;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SplashTitle = styled.h2`
  font-size: 6rem;
  color: #eee;
  margin-bottom: 6rem;
`;
