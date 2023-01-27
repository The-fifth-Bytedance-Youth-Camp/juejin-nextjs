import React, { Component } from 'react';
import style from './index.module.scss';
import logo from '../../../assets/svg/logo-large.svg';
import logo_s from '../../../assets/svg/logo-small.svg';
import SubNav from '../navigation';

 class Header extends Component {
    state = {
        lightH: 1,
        navList: [
            {
                id: 1, name: '首页', path: '/home', tag: '',subMenuList: [
                    { id: 1, name: '综合', path: '/home/', tags: [] },
                    { id: 2, name: '关注', path: '/home/', tags: [] },
                    { id: 3, name: '后端', path: '/home/', tags: [] },
                    { id: 4, name: '前端', path: '/home/', tags: [] },
                    { id: 5, name: 'Android', path: '/home/', tags: [] },
                    { id: 6, name: 'iOS', path: '/home/', tags: [] },
                    { id: 7, name: '人工智能', path: '/home/', tags: [] },
                    { id: 8, name: '开发工具', path: '/home/', tags: [] },
                    { id: 9, name: '代码人生', path: '/home/', tags: [] },
                    { id: 10, name: '阅读', path: '/home/', tags: [] },
                ],
            },
            {
                id: 2, name: '沸点', path: '/pins', tag: '',
            },
            {
                id: 3, name: '课程', path: '/news', tag: '',
            },
            {
                id: 4, name: '直播', path: '/books', tag: '',
            },
            {
                id: 5, name: '活动', path: '/events', tag: '',
            },
            {
                id: 6, name: '竞赛', path: '/events', tag: '',
            },
            {
                id: 7, name: '商城', path: '/events', tag: '',
            },
            {
                id: 8, name: 'APP', path: '/events', tag: '邀请有礼',
            },
            {
                id: 9, name: '插件', path: '/events', tag: '',
            },
        ],
        currentPathIndex: 0,
    }

    navClick =(item) => {
        this.setState({
            lightH: item.id,
        });
        // to path
        // this.router.push(item.path,{id:item.id})
    }

  render() {
    const { navList, currentPathIndex, lightH } = this.state;
    return (
        <div className={style.header}>
            <div className={style.container}>
                {/*logo*/}
                <a href="/">
                    <img src={logo.src} alt="稀土掘金"/>
                </a>
                {/*nav*/}
                <div className={style.nav}>
                    <ul className={style.mainNavList}>
                        {navList.map(item => {
                            return(
                                <li key={item.id} onClick={() => this.navClick(item)}>
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
                        {navList.map((item) => {
                            return (
                                <li key={item.id} onClick={() => this.navClick(item)}>
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
            <div className={style.subNav} > {/* style={{display: this.props.showSubNav ? 'block' : 'none'}} */}
                <SubNav subMenuList={navList[currentPathIndex].subMenuList}/>
            </div>
        </div>
    );
  }
}
export default Header;
