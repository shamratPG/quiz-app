import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Stats from './components/Stats/Stats';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/',
          element: <Home></Home>
        }, {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/stats',
          element: <Stats></Stats>
        }
      ]
    }

  ])
  return (
    <div className="App bg-dark">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
