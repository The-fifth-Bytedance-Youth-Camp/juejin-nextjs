import React, { useState , useEffect } from 'react';
import style from './index.module.scss';
import logo from '../../../assets/svg/logo-large.svg';
import logo_s from '../../../assets/svg/logo-small.svg';

const Header = ({ menuList , children }) => {
    const [ lightH, setLightH ] = useState(1);
    const currentPathIndex = 0;
    const navClick = (item) => setLightH(item.id);
    const handleScroll = ()=>{
        let scrollTop = document.documentElement.scrollTop;
        const header = document.querySelector('div[class^="header"]');
        if(scrollTop<=500){
            header.className = `${ style.header }`;
        }
        else header.className = `${ style.header }  ${ style.hide }`;
    };
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
    },[]);

    return (
        <>
            <div className={style.header}>
                <div className={style.container}>
                    {/*logo*/}
                    <a href="/">
                        <img src={logo.src} alt="稀土掘金"/>
                    </a>
                    {/*nav*/}
                    <div className={style.nav}>
                        <ul className={style.mainNavList}>
                            {menuList.map(item => {
                                return(
                                    <li key={item.id} onClick={() => navClick(item)}>
                                        <a to={item.path} exact='true' className={item.id === lightH ? `${ style.active }` : '' } key={item.id}>
                                            {item.name}
                                        </a>
                                        <span className={item.tag==='' ? '' : style.tag}>
                                            {item.tag}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* phone */}
                    <div className={style.phone}>
                        {/*logo*/}
                        <a href="/">
                            <img src={logo_s.src} alt="掘金"/>
                        </a>
                        <div className={style.phoneMenu}>
                            首页
                            <span className={style.arrow}></span>
                        </div>
                        <ul className={style.phoneNavList}>
                            {menuList.map((item) => {
                                return (
                                    <li key={item.id} onClick={() => navClick(item)}>
                                        <a
                                            to={item.path}
                                            exact="true"
                                            className={item.id === lightH ? `${ style.active }` : ''}
                                            key={item.id}
                                        >
                                            {item.name}
                                            <span className={item.tag==='' ? '' : style.tag}>
                                                {item.tag}
                                            </span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            {children}
        </>
    );
};

export default Header;
