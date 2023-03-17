import CustomBreadcrumbs from "../../components/molecules/Breadcumbs";
import {AppRoutes, AppRoutesTitles} from "../../constants/AppRoutes";

function AboutPage() {

  const breadcrumbsLinks = [
    {
      to: AppRoutes.about,
      title: AppRoutesTitles.about
    }
  ];

  return (
      <>
        <CustomBreadcrumbs links={breadcrumbsLinks}/>
        <h3>About</h3>
      </>
  );
}

export default AboutPage;
