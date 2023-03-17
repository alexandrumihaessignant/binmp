export const AppPaths = {
  pages: '/pages'
};


export const AppRoutes = {
  home: '/',
  about: '/about',
  pages: AppPaths.pages,
  pagesObject: {
    notFound: AppPaths.pages + '/404',
    pricing: AppPaths.pages + '/pricing',
    faq: AppPaths.pages + '/faq',
    team: AppPaths.pages + '/team',
    testimonials: AppPaths.pages + '/testimonials'
  },
  blog: '/blog',
  contact: '/contact'
};

export const AppRoutesTitles = {
  home: 'Home',
  about: 'About Us',
  pages: 'Pages',
  pagesObject: {
    notFound: '404',
    pricing: 'Pricing',
    faq: 'FAQ',
    team: 'Team',
    testimonials: 'Testimonials'
  },
  blog: 'Blog',
  contact: 'Contact'
};

