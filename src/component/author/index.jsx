import React, { useState } from 'react';
import styles from './index.module.scss';
import { RightOutlined } from'@ant-design/icons';

const Author = () => {
  const users = [
    {
        name: '子奕',
        avatar: 'https://p3-passport.byteimg.com/img/user-avatar/c2187f61d1fe229e6da86541432ba7d3~100x100.awebp',
        rank: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png',
        position: '前端 @ Alibaba',
    }, 
    {
        name: 'lala',
        avatar: 'https://p3-passport.byteimg.com/img/user-avatar/c2187f61d1fe229e6da86541432ba7d3~100x100.awebp',
        rank: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png',
        position: '前端 @ Alibaba',
    }, 
  ];
  return(
    <div className={styles.author}>
      <div className={styles.header}>🎖️作者榜</div>
          {
            users.map((item,index)=>{
              return (
                <div key={users.name} className={styles.user_list}>
                  <div className={styles.avatar}><img className={styles.avatar_img} src={users[0].avatar} alt="" /></div>
                  <div className={styles.user_info}>
                    <div className={styles.user_name}>
                      <span>{item.name}</span>
                      <img className={styles.rank} src={item.rank} alt="" />
                    </div>
                    <div className={styles.user_position}>{item.position}</div>
                  </div>
                </div>
              );
            })
          }
      
      
        <div className={styles.more}>
          <span>完整榜单&nbsp;</span>
          <RightOutlined />
      </div>
    </div>
  );
};
export default Author;