import React from 'react';

const getClassName = (menuActive, cName, mobile) => {
    if (menuActive && mobile){
        if (mobile.className) {
            return mobile.className;
        }
    }
    if (cName) return cName;
    return 'link'
}

/**
 * 
 * @param {Array} menuData 
 * @returns {JSX}
 */
export default function Menu({ menuData }) {
    const [menuMobileActive, setMenuMobileActive] = React.useState(false);
    

    return (
        <>
            <div className='hidden links lg:block w-1/6 md:w-4/6'>
                <ul className='menu flex items-center justify-center gap-5'>
                    {menuData.map(({ title, href, className }, key) => (
                        <li key={key}>
                            <a href={href ? href : '#'} className={className ? className : 'link'}>
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='block lg:hidden w-1/6 lg:w-4/6 '>
                <a 
                    className='link'
                    href='#'
                    onClick={() => setMenuMobileActive(!menuMobileActive)}
                >
                    Menu
                </a>
                <ul
                    className={`${!menuMobileActive ? 'hidden' : 'block'} w-full absolute z-50 left-0 text-center bg-gray-800`}
                >
                    {menuData.map(({ title, href, className, mobile }, key) => (
                        <li key={key}>
                            <a
                                href={href ? href : '#'}
                                // className={className ? className : 'link'}
                                className={getClassName(menuMobileActive, className, mobile)}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}