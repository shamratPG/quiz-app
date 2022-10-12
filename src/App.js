import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Stats from './components/Stats/Stats';
import AllQuiz from './components/AllQuiz/AllQuiz';
import NotFound from './components/NotFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/',
          element: <Home></Home>
        }, {
          path: '/blogs',
          loader: async () => fetch('/blogs.json'),
          element: <Blogs></Blogs>
        },
        {
          path: '/stats',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Stats></Stats>
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <AllQuiz></AllQuiz>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
