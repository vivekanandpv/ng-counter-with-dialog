import {AboutComponent} from "../about/about.component";

export const aboutRoutes = {
  path: 'about',
  children: [
    {
      path: '',
      component: AboutComponent
    },
    {
      path: ':country',
      component: AboutComponent
    },
    {
      path: ':country/:year',
      component: AboutComponent
    },
  ]
};
