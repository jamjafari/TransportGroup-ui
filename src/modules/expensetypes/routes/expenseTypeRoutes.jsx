import {
  ExpenseTypeListPage,
  ExpenseTypeCreatePage,
  ExpenseTypeEditPage,
  ExpenseTypeDetailsPage,
} from '../modules/drivers';
const expenseTypeRoutes = [
  {
    path: '/expensetypes',
    element: <ExpenseTypeListPage />,
  },

  {
    path: '/expensetypes/create',
    element: <ExpenseTypeCreatePage />,
  },

  {
    path: '/expensetypes/edit/:id',
    element: <ExpenseTypeEditPage />,
  },

  {
    path: '/expensetypes/:id',
    element: <ExpenseTypeDetailsPage />,
  },
];

export default expenseTypeRoutes;
