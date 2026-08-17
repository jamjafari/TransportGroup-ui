import {
  MissionListPage,
  MissionCreatePage,
  MissionEditPage,
  MissionDetailsPage,
} from '../modules/missions';
const missionRoutes = [
  {
    path: '/missions',
    element: <MissionListPage />,
  },

  {
    path: '/missions/create',
    element: <MissionCreatePage />,
  },

  {
    path: '/missions/edit/:id',
    element: <MissionEditPage />,
  },

  {
    path: '/missions/:id',
    element: <MissionDetailsPage />,
  },
];

export default missionRoutes;
