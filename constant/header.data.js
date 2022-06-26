import { CartButton, SearchButton, UserButton, FavoriteButton } from "../components/Buttons"



export const headerData = [
    {
        id: 1,
        label: 'Sunglasses',
        link: '/sunglasses'
    },
    {
        id: 2,
        label: 'Specks',
        link: '/specks'
    },
    {
        id: 3,
        label: 'Round shape',
        link: '/round-shape'
    },
    {
        id: 4,
        label: 'Square shape',
        link: '/square-shape'
    },
    {
        id: 5,
        label: 'Blog',
        link: '/blog'
    },
    {
        id: 6,
        label: 'More',
        link: '/more'
    },
]

export const iconsList = [
    {
        id: 1,
        icon: <SearchButton />,
        title: 'Search',
       
    },
    {
        id: 2,
        icon: <UserButton />,
        title: 'Login',
       
    },
    {
        id: 3,
        icon: <FavoriteButton />,
        title: 'Favorite',
    },
    {
        id: 4,
        icon: <CartButton itemCount={0}/>,
        title: 'Cart',
    },
]