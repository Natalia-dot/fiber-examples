import { createBrowserRouter } from 'react-router-dom'
import { Pieces } from '../Pieces'
import { App } from '../App'
import { FullSword } from '../FullSword'
import { KameHouse } from '../KameHouse'

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
      },
      {
        path: '/kame',
        element: <KameHouse />
      }
    ]
  }
])
