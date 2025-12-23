import Link from 'next/link'
import React from 'react'
import st from ''

function Navbar() {
  return (
    <div>
        <ul className=''>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar