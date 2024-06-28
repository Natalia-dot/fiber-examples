import { createBrowserRouter } from 'react-router-dom'
import { Pieces } from '../Pieces'
import { App } from '../App'
import { FullSword } from '../FullSword'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/sword',
        element: <FullSword />
      },
      {
        path: '/pieces',
        element: <Pieces />
      }
    ]
  }
])
