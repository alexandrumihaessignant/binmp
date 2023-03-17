import CustomBreadcrumbs from "../../../components/molecules/Breadcumbs";

import {AppRoutes, AppRoutesTitles} from "../../../constants/AppRoutes";

function TeamPage() {

  const breadcrumbsLinks = [
    {
      to: AppRoutes.pages,
      title: AppRoutesTitles.pages
    },
    {
      to: AppRoutes.pagesObject.team,
      title: AppRoutesTitles.pagesObject.team
    },
  ];

  return (
      <>
        <CustomBreadcrumbs links={breadcrumbsLinks}/>
        <h3>Team</h3>
      </>
  );
}

export default TeamPage;
