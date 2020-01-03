import LoginPage from '../page/LoginPage'
import HomePage from '../page/HomePage'
import homeChildren from './home-children'

export default [
  {
    path: '/',
    name: 'Root',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    redirect: '/home/welcome',
    children: [
      ...homeChildren
    ]
  }
]
