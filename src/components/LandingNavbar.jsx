import React from 'react'
import DesktopActiveButton from './DesktopActiveButton'
import DesktopActiveButton2 from './DesktopActiveButton2'
import { Link } from 'react-router-dom'

const LandingNavbar = () => {
  return (
    <div>
      <div className="bg-gray-50 py-6 px-4 md:px-12 flex items-center justify-between">
        <Link>
          <img to="/" src="rumahBercerita.png" alt="" className="h-10" />
        </Link>
        <div className="flex gap-x-4">
          <DesktopActiveButton2
            title="Masuk"
            url="/login"
          />
          <DesktopActiveButton
            title="Daftar"
            url="/register"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingNavbar
