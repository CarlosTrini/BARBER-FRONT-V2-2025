import { Link, NavLink, Outlet, useLocation } from "react-router";
import useThemeStore from "../../context/themeContext";
import { Dropdown, Popover } from "antd";

import { menuLanding, menuLandingT } from "../../constants/menuLading";

import './layoutLading.css';
import LogoLight from "../../assets/img/logo-light.png";
import LogoDark from "../../assets/img/logo-dark.png";

// COMPONENTE DE LAYOUT...
const LayoutLanding = () => {

    const params = useLocation();
    
    const theme = useThemeStore((state) => state.theme);
    const setTheme = useThemeStore((state) => state.setTheme);

    const isLinkActive = ({ isActive }: { isActive: boolean }) => {
        return isActive ? 'link-menu-active' : 'link-menu';
    }

    const makeLinkMenu = (item: menuLandingT, index: number) => {
        const items = item?.children?.map(children => {
            return {
                label: (

                    <Link rel="noopener noreferrer" to={children.path}>
                        {
                            children?.icon && children?.icon != '' &&
                            <i className={`${children.icon} me-2  b-text-navy`} ></i>
                        }
                        <span className="b-text-navy font-bold b-font-size-16">

                            {children.label}
                        </span>
                    </Link>
                ),
                key: `${index}-${children.label}`,
            }

        })

        return (
            <Dropdown menu={{ items }}>
                <li key={index} className="link-menu b-font-size-18">
                    <NavLink to={item.path} className={isLinkActive}>{item.label}</NavLink>
                </li>
            </Dropdown>
        )
    }



    return (
        <>
            <section className='b-bg-iron h-[50px] flex items-center'>
                <div className='b-container-85 mx-auto flex justify-between items-center'>
                    <div className="flex items-center font-bold">
                        <p className="mb-0 me-3 b-text-light">Follow us: </p>
                        <a href="https://facebook.com" target="_blank" className='b-zoom' >
                            <i className="fa-brands fa-facebook b-text-light me-2"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" className='b-zoom'>
                            <i className="fa-brands fa-instagram b-text-light"></i>
                        </a>
                    </div>
                    <div className="flex items-center font-bold gap-3">
                        <div className="b-zoom">
                            {
                                theme && theme === 'light'
                                    ? (
                                        <button onClick={() => {
                                            setTheme('dark')
                                        }}>
                                            <i className="fa-solid fa-sun b-text-gold b-font-size-18"></i>
                                        </button>
                                    )
                                    : (
                                        <button onClick={() => {
                                            setTheme('light')
                                        }}>
                                            <i className="fa-solid fa-moon b-text-gray b-font-size-18"></i>
                                        </button>
                                    )
                            }


                        </div>
                        <Popover placement="bottomLeft" content={<span>Inicia sesión</span>}>
                            <Link to='/auth' className="b-zoom">
                                <p className='cursor-pointer'>
                                    <i className="fa-solid fa-circle-user b-text-light b-font-size-20 "></i>
                                </p>
                            </Link>
                        </Popover>
                        <Popover placement="bottomLeft" content={<span>Productos favoritos</span>} >
                            <p className='relative cursor-pointer b-zoom'>
                                <span className="b-text-light b-font-size-10 b-bg-red rounded-full w-[15px] h-[15px] p-1 flex items-center justify-center absolute right-[-50%] top-[-40%]" >0</span>
                                <i className="fa-solid fa-heart b-text-light b-font-size-20"></i>
                            </p>
                        </Popover>
                        <Popover placement="bottomLeft" content={<span>Tu carrito</span>} >
                            <p className='relative cursor-pointer b-zoom'>
                                <span className="b-text-light b-font-size-10 b-bg-red rounded-full w-[15px] h-[15px] p-1 flex items-center justify-center absolute right-[-50%] top-[-40%]" >0</span>
                                <i className="fa-solid fa-cart-shopping b-text-light b-font-size-20"></i>
                            </p>
                        </Popover>
                    </div>



                </div>
            </section>

            <header className="">
                <div className={`h-[70px]  absolute w-full z-10  ${params.pathname !== '/' && 'b-bg-coal'}`}>
                    <div className="b-container-85 mx-auto flex items-center justify-between">
                        <div className="w-[160px] ">
                            <Link to="/" className="h-[70px] overflow-hidden flex items-center justify-center">
                                <img src={theme == 'light' ? LogoDark : LogoLight} alt="logo" className="" />
                            </Link>
                        </div>
                        <div className="w-[70%] max-w-[950px]">
                            <nav className="nav-layout-landing">
                                <ul className="flex items-center justify-between font-bold b-text-light">
                                    {
                                        menuLanding.map((item, index) => (
                                            item?.children && item.children?.length > 0
                                                ?
                                                makeLinkMenu(item, index)
                                                :
                                                <li key={index} className="link-menu b-font-size-18">
                                                    <NavLink to={item.path} className={isLinkActive}>{item.label}</NavLink>
                                                </li>

                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <Outlet />
        </>
    )
}

export default LayoutLanding;