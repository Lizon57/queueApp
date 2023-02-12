import { QueryClientProvider, QueryClient } from 'react-query'
import 'normalize.css'
import './styles/main.scss'

import { AppHeader } from './cmps/layout/app-header'
import { UserSetting } from './pages/_user-setting'


export function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="app-layout-container">
        <AppHeader />

        {/* Pages should be implement with react-router. */}
        <UserSetting />
      </div>
    </QueryClientProvider>
  )
}