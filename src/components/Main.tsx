import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-6">
      <Outlet />
    </main>
  )
}

export default Main
