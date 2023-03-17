import {AppRoutes, AppRoutesTitles} from "../../../constants/AppRoutes";
import CustomBreadcrumbs from "../../../components/molecules/Breadcumbs";

function TestimonialsPage() {

  const breadcrumbsLinks = [
    {
      to: AppRoutes.pages,
      title: AppRoutesTitles.pages
    },
    {
      to: AppRoutes.pagesObject.testimonials,
      title: AppRoutesTitles.pagesObject.testimonials
    },
  ];

  return (
      <>
        <CustomBreadcrumbs links={breadcrumbsLinks}/>
        <h3>Testimonials</h3>
      </>
  );
}

export default TestimonialsPage;
