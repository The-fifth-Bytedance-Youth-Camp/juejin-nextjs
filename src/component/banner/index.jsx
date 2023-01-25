import React, { useState } from 'react';
import banner from './index.module.scss';
import { CloseOutlined } from'@ant-design/icons';

const Banner = () => {
  const [ banners, setBanners ] = useState([
		{
      id: 1,
      banner_img: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e67047a2e2b4187886a0eee2c1e93aa~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp',
      mouse: true,
    },
    {
      id: 2,
      banner_img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d45456b58f08408f9bf0bdd51dcf3bcb~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?',
      mouse: true,
    },
	]);
  const handleClose=(index)=>{
    console.log('lalala:'+index);
    banners.splice(index,1);
    console.log(banners);
    setBanners([ ...banners ]);
  };
	return (
		<div className={banner.box}>
      {
        banners.map((item,index)=>{
          return(
            <div key={item.id} className={banner.box_top} style={{ display:`${ item.mouse }`?'block':'none' }}>
              <img width="240" height="200" src={item.banner_img} />
              <div className={banner.ctrl_box}>
                <CloseOutlined onClick={()=>{ handleClose(index); }} className={banner.close_btn} style={{ color:'#909090',fontSize:'13px' }}/>
                <div className={banner.label}>
                  <span className={banner.adve}>广告</span>
                </div>
              </div>
            </div>
          );
        })
      }
			<div className={banner.bottom}>
				<img width="50" height="50" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" />
				<div className={banner.content_box}>
					<div className={banner.headline}>下载稀土掘金APP</div>
					<div className={banner.desc}>一个帮助开发者成长的社区</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
