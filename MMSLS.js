/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=28019212&pid=9182b02a377acd5380f2825e87a4f9ec&tid=e468f37b953253234acc500e45b04bde",
    "https://www.maimemo.com/share/page?uid=28019212&pid=9182b02a377acd5380f2825e87a4f9ec&tid=e468f37b953253234acc500e45b04bde",
    "https://www.maimemo.com/share/page?uid=28019212&pid=9182b02a377acd5380f2825e87a4f9ec&tid=e468f37b953253234acc500e45b04bde",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=28019212&pid=03cc38cf42fbc6ac17245055b65ea4a1&tid=d7be0d44fdcb9f9f8d1f11104b073061",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
