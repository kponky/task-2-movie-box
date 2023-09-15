import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root, {loader as rootLoader} from './routers/root/root'
import MovieList, {loader as movieListLoader} from '../src/routers/movie-lists/movie-list'
import MovieDetails, {loader as movieLoader} from '../src/routers/movie-detail/movie-detail'
import ErrorPage from '../src/routers/error-page/error-page'
import { MovieProvider } from './context/movies-content'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader
  },
  {
    path: '/movies/:movieId',
    element: <MovieDetails />,
    errorElement: <ErrorPage />,
    loader: movieLoader
  },
  {
    path: '/movies',
    element: <MovieList />,
    errorElement: <ErrorPage />,
    loader: movieListLoader
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </React.StrictMode>,
)
