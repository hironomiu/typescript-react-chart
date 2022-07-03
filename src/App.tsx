import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from './components/Layout'
import Main from './components/Main'
import Home from './components/Home'
import Doughnuts from './components/Chart/Doughnuts'
import Lines from './components/Chart/Lines'
import Resas from './components/Resas'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Home />} />
              <Route path="/doughnuts" element={<Doughnuts />} />
              <Route path="/lines" element={<Lines />} />
              <Route path="/resas" element={<Resas />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
