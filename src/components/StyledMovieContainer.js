import styled from "react-emotion";
import { devices } from "../utils/styledUtils";

const StyledMovieContainer = styled("section")`
  background: #282a31;
  width: 100%;
  height: 100vh;

  ${devices.md` width: 640px;
    height: 390px;
    border-radius: 15px;
  `};
`;

export default StyledMovieContainer;
