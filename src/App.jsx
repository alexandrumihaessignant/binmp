import "./styles/index.css";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from "./pages/Root";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/error/PageNotFound";
import AboutPage from "./pages/subpages/AboutPage";
import PricingPage from "./pages/subpages/others/PricingPage";
import FaqPage from "./pages/subpages/others/FaqPage";
import TestimonialsPage from "./pages/subpages/others/TestimonialsPage";
import BlogPage from "./pages/subpages/BlogPage";
import TeamPage from "./pages/subpages/others/TeamPage";
import ContactPage from "./pages/subpages/ContactPage";

import {AppRoutes} from "./constants/AppRoutes";

const router = createBrowserRouter([
  {
    path: AppRoutes.home,
    element: <Root/>,
    errorElement: <PageNotFound/>,
    children: [
      {
        index: true,
        path: AppRoutes.home,
        element: <HomePage/>
      },
      {
        path: AppRoutes.about,
        element: <AboutPage/>
      },
      {
        element: <Layout/>,
        children: [
          {
            path: AppRoutes.pagesObject.notFound,
            element: <PageNotFound/>
          },
          {
            path: AppRoutes.pagesObject.pricing,
            element: <PricingPage/>
          },
          {
            path: AppRoutes.pagesObject.faq,
            element: <FaqPage/>
          },
          {
            path: AppRoutes.pagesObject.team,
            element: <TeamPage/>
          },
          {
            path: AppRoutes.pagesObject.testimonials,
            element: <TestimonialsPage/>
          }
        ]
      },
      {
        path: AppRoutes.blog,
        element: <BlogPage/>
      },
      {
        path: AppRoutes.contact,
        element: <ContactPage/>
      }
    ]
  }
]);

function App() {
  return (
      <>
        <RouterProvider router={router}/>
      </>
  );
}

export default App;
