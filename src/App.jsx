import { useState } from 'react'
import Wrapper from './components/Wrapper'

import {
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Users', href: '#', icon: UsersIcon, current: false },
]

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Wrapper
        navigation={navigation}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </>
  )
}

export default App
