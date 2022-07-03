import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex h-10 items-center">
      <div className="ml-10">
        <Link to="/" className="text-2xl">
          Chart Sample
        </Link>
      </div>
      <nav className="ml-10">
        <Link to="/lines" className="text-xl">
          Lines
        </Link>
        <Link to="/doughnuts" className="ml-4 text-xl">
          Doughnuts
        </Link>
        <Link to="/resas" className="ml-4 text-xl">
          RESAS
        </Link>
      </nav>
    </header>
  )
}

export default Header
