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
        title='Dashboard'
      >
        <div className="py-4">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
        </div>
      </Wrapper>
    </>
  )
}

export default App