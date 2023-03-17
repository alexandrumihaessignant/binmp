import CustomBreadcrumbs from "../../../components/molecules/Breadcumbs";
import {AppRoutes, AppRoutesTitles} from "../../../constants/AppRoutes";

function PricingPage() {

  const breadcrumbsLinks = [
    {
      to: AppRoutes.pages,
      title: AppRoutesTitles.pages
    },
    {
      to: AppRoutes.pagesObject.pricing,
      title: AppRoutesTitles.pagesObject.pricing
    },
  ];

  return (
      <>
        <CustomBreadcrumbs links={breadcrumbsLinks}/>
        <h3>Pricing</h3>
      </>
  );
}

export default PricingPage;
