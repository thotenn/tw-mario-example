const env = {
    header: {
        logo: {
            src: 'assets/img/logo.png',
            alt: 'Mario'
        },
        banner: {
            src: 'assets/img/hero.jpg',
            alt: 'Mario'
        },
        menu: [
        {
            title: 'Home',
            href: '#',
            className: 'link-first'
        },
        {
            title: 'Play Together',
            href: '#'
        },
        {
            title: 'Explore',
            href: '#'
        },
        {
            title: 'Browser',
            href: '#',
            className: 'border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500',
            mobile: {
                className: 'my-4 inline-block border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500'
            }
        },
        {
            title: 'Buy Now',
            href: '#',
            className: 'rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-300',
            mobile: {
                className: 'my-4 inline-block rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-300'
            }
        },
    ]
}
}

export default env;