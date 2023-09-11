
//基准大小
const baseSize = 14
//rem函数
export const setRem = () => {
  const scale = document.documentElement.clientWidth / 1920
  const fontsize = baseSize * Math.min(scale, 4)
  document.documentElement.style.fontSize = `${fontsize >= 12 ? fontsize : 12}px`
};

setRem();
window.onresize = function () {
  setRem();

}