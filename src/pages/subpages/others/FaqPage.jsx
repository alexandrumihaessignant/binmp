import {AppRoutes, AppRoutesTitles} from "../../../constants/AppRoutes";
import CustomBreadcrumbs from "../../../components/molecules/Breadcumbs";

function FaqPage() {

  const breadcrumbsLinks = [
    {
      to: AppRoutes.pages,
      title: AppRoutesTitles.pages
    },
    {
      to: AppRoutes.pagesObject.faq,
      title: AppRoutesTitles.pagesObject.faq
    },
  ];

  return (
      <>
        <CustomBreadcrumbs links={breadcrumbsLinks}/>
        <h3>FAQ</h3>
      </>
  );
}

export default FaqPage;
