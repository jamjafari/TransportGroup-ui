import {
  ExpenseListPage,
  ExpenseCreatePage,
  ExpenseEditPage,
  ExpenseDetailsPage,
} from '../modules/expenses';
const expenseRoutes = [
  {
    path: '/expenses',
    element: <ExpenseListPage />,
  },

  {
    path: '/expenses/create',
    element: <ExpenseCreatePage />,
  },

  {
    path: '/expenses/edit/:id',
    element: <ExpenseEditPage />,
  },

  {
    path: '/expenses/:id',
    element: <ExpenseDetailsPage />,
  },
];

export default expenseRoutes;
