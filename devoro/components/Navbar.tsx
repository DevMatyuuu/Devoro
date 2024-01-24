import React from 'react'
import Search from './Search'

export default function Navbar() {
  return (
    <div>
        <div className='flex py-6 px-8 justify-between border-b border-black'>
            <div>
                Navbar
            </div>
            <Search />
        </div>
    </div>
  )
}
