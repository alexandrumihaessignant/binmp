import {AppRoutes, AppRoutesTitles} from "../../constants/AppRoutes";
import CustomBreadcrumbs from "../../components/molecules/Breadcumbs";

function ContactPage() {

  const breadcrumbsLinks = [
    {
      to: AppRoutes.contact,
      title: AppRoutesTitles.contact
    }
  ];

  return (
      <>
        <CustomBreadcrumbs links={breadcrumbsLinks}/>
        <h3>Contact</h3>
      </>
  );
}

export default ContactPage;
