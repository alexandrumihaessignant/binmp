import CustomBreadcrumbs from "../../components/molecules/Breadcumbs";
import GridOfPosts from "../../components/organisms/blog/GridOfPosts";

import {AppRoutes, AppRoutesTitles} from "../../constants/AppRoutes";
import {BlogPosts} from "../../constants/BlogPosts";

function BlogPage() {

  const breadcrumbsLinks = [
    {
      to: AppRoutes.blog,
      title: AppRoutesTitles.blog
    }
  ];

  return (
      <>
        <CustomBreadcrumbs links={breadcrumbsLinks}/>
        <h3>Blog Posts</h3>
        <GridOfPosts posts={BlogPosts}/>
      </>
  );
}

export default BlogPage;
