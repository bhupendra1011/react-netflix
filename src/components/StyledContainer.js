import styled from "react-emotion";

const StyledContainer = styled("div")`
  background:#333852; /*${props => props.theme.primaryBg};*/
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "NETFLIX";
    position: fixed;
    top: 18vh;
    left: 10vw;
    font-size: 6vw;
    color: rgba(255, 255, 255, 0.33);
  }
`;

export default StyledContainer;
