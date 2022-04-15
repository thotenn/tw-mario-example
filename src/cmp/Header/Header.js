import React from 'react'
import Menu from './cmp/Menu'

export const Header = ({ menu, logosrc, logoalt, banner }) => {
    return (
        <>
            <nav className=' flex justify-between lg:justify-start items-center bg-gray-800'>
                <div className='logo flex-initial p-2 w-1/6'>
                    <img className='' src={logosrc} width='100' alt={logoalt} />
                </div>
                <Menu menuData={menu} />
            </nav>
            <section className='header'>
                <img src={banner} alt="" />
            </section>
        </>
    )
}
