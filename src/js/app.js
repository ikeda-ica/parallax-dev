'use strict';

import '../css/style.scss';

const init = () => {
  let innerList = [];
  for (var i = 0; i < document.querySelectorAll('.para.fix .para_in').length; i++) {
    const height = document.querySelectorAll('.para.fix .para_in')[i].clientHeight;
    innerList.push(height);
  }
  const innerTotal = innerList.reduce((a, b) => {
    return a + b;
  });

  document.getElementById('para_wrap').style.height = innerTotal + 'px';
  scrollEv();
};

const scrollEv = () => {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  let dom;

  document.getElementById('scrY')
    ? dom = document.getElementById('scrY')
    : dom = document.createElement('div');
  dom.id = 'scrY';
  dom.innerHTML = '<p>' + scrollY + '</p>';
  dom.setAttribute('style', 'position: fixed; top: 0; left: 10px; color: #ddd; z-index: 999');
  document.body.appendChild(dom);

  const palaBG = document.querySelectorAll('.para.fix');
  for (var i = 0; i < palaBG.length; i++) {
    let
      data_top = document.querySelectorAll('.para.fix')[i].dataset.parallaxTop,
      data_bottom = document.querySelectorAll('.para.fix')[i].dataset.parallaxBottom;

    if (data_top > scrollY){
      document.querySelectorAll('.para.fix')[i].style.top = (data_top - scrollY) + 'px';
      document.querySelectorAll('.para.fix')[i].querySelector('.para_in').setAttribute('style', 'transform: translateY(0%);');
    }else if(data_top < scrollY && data_bottom > scrollY){
      const per = (data_top - scrollY) / (data_top - data_bottom) * 100;
      document.querySelectorAll('.para.fix')[i].style.top = 0;
      document.querySelectorAll('.para.fix')[i].querySelector('.para_in').setAttribute('style', 'transform: translateY(' + -per +'%);');
    }else if(data_bottom < scrollY){
      document.querySelectorAll('.para.fix')[i].style.top = data_top + 'px';
      document.querySelectorAll('.para.fix')[i].querySelector('.para_in').setAttribute('style', 'transform: translateY(-100%);');
    }
  }
};

window.addEventListener('scroll', scrollEv);

window.addEventListener('resize', init);
window.addEventListener('load', init);
