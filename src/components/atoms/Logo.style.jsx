import styled from 'styled-components';
import {Link} from "react-router-dom";

import logoAsset from './../../assets/logo.png'

export const LogoWrapper = styled(Link)`

`;

export const Logo = styled.div`
  display: inline-block;
  align-self: center;

  height: 26px;
  width: 81px;

  background-image: url(${logoAsset});
  background-size: contain;
  background-repeat: no-repeat;
`
