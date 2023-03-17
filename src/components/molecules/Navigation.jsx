import Link from "../atoms/Link";

import {AppRoutes, AppRoutesTitles} from "../../constants/AppRoutes";

import * as S from './Navigation.style';

function Navigation() {
  return (
      <S.Navigation>
        <li>
          <Link to={AppRoutes.home}>{AppRoutesTitles.home}</Link>
        </li>
        <li>
          <Link to={AppRoutes.about}>{AppRoutesTitles.about}</Link>
        </li>
        <li>
          <Link to={AppRoutes.pagesObject.team}>{AppRoutesTitles.pagesObject.team}</Link>
        </li>
        <li>
          <Link to={AppRoutes.blog}>{AppRoutesTitles.blog}</Link>
        </li>
        <li>
          <Link to={AppRoutes.contact}>{AppRoutesTitles.contact}</Link>
        </li>
      </S.Navigation>
  );
}

export default Navigation;
