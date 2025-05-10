export type menuLandingT = {
    label: string;
    path: string;
    children?: menuLandingT[];
    icon?: string;
}

export const menuLanding = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/services' },
    {
        label: 'Sucursales',
        path: '/branches',
        children: [
            { label: 'Polanco', path: '/branches/polanco', icon: "fa-solid fa-store" },
            { label: 'Condesa', path: '/branches/condesa', icon: "fa-solid fa-store" },
            { label: 'Juárez', path: '/branches/juarez', icon: "fa-solid fa-store" },
            { label: 'Texcoco', path: '/branches/texcoco', icon: "fa-solid fa-store" },
            { label: 'Tlalpan', path: '/branches/tlalpan', icon: "fa-solid fa-store" },
        ],
    },
    { label: 'Tienda', path: '/store' },
    { label: 'Contacto', path: '/contact' },
    { label: 'Agendar cita', path: '/book_appointment' },
];