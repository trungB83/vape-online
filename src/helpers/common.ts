import moment from 'moment';

export const convertToSlug = (string: string) => {
  const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
  const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');
  return string
    .toString()
    .toLowerCase()
    .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    .replace(/đ/gi, 'd')
    .replace(/\s+/g, '-')
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const removeHtmlTag = (excerpt: string) => {
  if (!excerpt) return '';
  const regex = /(<([^>]+)>)/gi;
  return excerpt.replace(regex, '');
};

export const formatedDate = (dateVal: string) => {
  return moment(dateVal).isValid() ? moment(dateVal).format('DD-MM-YYYY') : '--';
};

export const formatedPrice = (price: number) => {
  if (!price) return null;
  return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const buildUrl = (url: string, parameters: any) => {
  let qs = '';
  for (let key in parameters) {
    let value = parameters[key];
    if (value !== '') {
      qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
    }
  }
  if (qs.length > 0) {
    qs = qs.substring(0, qs.length - 1);
    url = url + '?' + qs;
  }
  return url;
};

export const getUserInformation = () => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) return userInfo;
};

export const shouldHaveAccessPermission = (key: string, sub: string) => {
  const user: any = getUserInformation();
  if (!user || !user.userCategories || !user.userCategories.permissions) {
    return false;
  }

  const permissions = JSON.parse(user.userCategories.permissions);
  if (sub) {
    if (permissions[key] && permissions[key].length > 0 && permissions[key].includes(sub)) {
      return true;
    }
  } else {
    if (permissions[key] && permissions[key].length > 0) {
      return true;
    }
  }
  return true;
};

export const cryptoUnHash = (key: string) => {
  try {
    // let mykey = crypto.createDecipher('aes-128-cbc', 'demo-app');
    // let mystr = mykey.update(key, 'hex', 'utf8');
    // mystr += mykey.final('utf8');
    // return mystr;
    return '';
  } catch (error) {
    console.log(error);
  }
};

export const recursiveTableData = (categories: any, originCategories: any, characters = ' --- ', countLoops = 0, currentArr: any = []) => {
  countLoops++;
  let char = '';
  for (let index = 0; index < countLoops; index++) {
    char += characters;
  }
  if (countLoops === 1) {
    const roots = categories.filter((cate: any) => !cate.parent);
    roots.forEach((category: any) => {
      currentArr.push({ ...category, titleLevel: category.title });
      const subs: any = [];
      categories.forEach((item: any) => {
        if (item.parent === category._id) {
          currentArr.push({ ...item, titleLevel: `${char} ${item.title}` });
          subs.push(item);
        }
      });
      if (subs.length > 0) recursiveTableData(subs, originCategories, ' --- ', countLoops, currentArr);
    });
  } else {
    categories.forEach((category: any) => {
      const subs: any = [];
      originCategories.forEach((item: any) => {
        if (item.parent === category._id) {
          currentArr.push({ ...item, titleLevel: `${char} ${item.title}` });
          subs.push(item);
        }
      });
      if (subs.length > 0) recursiveTableData(subs, originCategories, ' --- ', countLoops, currentArr);
    });
  }
  return currentArr;
};

export const renderYoutubeVideo = (url = '') => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  let youtubeUrl = match && match[7].length == 11 ? match[7] : false;
};

export const formatCurrency = (num: number = 0) => {
  const formatNumber: string = num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  return formatNumber;
};

export const recursiveCates = (categories: any, originCategories: any, cateField: any, cateParentField: any, characters = ' --- ', countLoops = 0, currentArr: any = []) => {
  countLoops++;
  let char = '';
  for (let index = 0; index < countLoops; index++) {
    char += characters;
  }
  if (countLoops === 1) {
    const roots = categories.filter((cate: any) => !cate[cateParentField] || cate[cateParentField] === 'null');
    roots.forEach((category: any) => {
      currentArr.push({ ...category, titleLevel: category.ten_nhom });
      const subs: any = [];
      categories.forEach((item: any) => {
        if (item[cateParentField] === category[cateField]) {
          currentArr.push({ ...item, titleLevel: `${char} ${item.ten_nhom}` });
          subs.push(item);
        }
      });
      if (subs.length > 0) recursiveCates(subs, originCategories, cateField, cateParentField, ' --- ', countLoops, currentArr);
    });
  } else {
    categories.forEach((category: any) => {
      const subs: any = [];
      originCategories.forEach((item: any) => {
        if (item[cateParentField] === category[cateField]) {
          currentArr.push({ ...item, titleLevel: `${char} ${item.ten_nhom}` });
          subs.push(item);
        }
      });
      if (subs.length > 0) recursiveCates(subs, originCategories, cateField, cateParentField, ' --- ', countLoops, currentArr);
    });
  }
  const sortedArray = currentArr.reduce((accumulator: any, currentValue: any) => {
    let item = accumulator.find((x: any) => x[cateField] === currentValue[cateParentField]);
    let index = accumulator.indexOf(item);
    index = index !== -1 ? index + 1 : accumulator.length;
    accumulator.splice(index, 0, currentValue);
    return accumulator;
  }, []);

  return sortedArray;
};

export const cutString = (str = '', length = 20) => {
  let cut = str.indexOf(' ', length);
  if (cut === -1) return str;
  return str.substring(0, cut);
};

export const secondsToMinutes = (time: number) => {
  let min: any = Math.floor(time / 60);
  min = min < 10 ? `0${min}` : min;

  let sec: any = Math.floor(time % 60);
  sec = sec < 10 ? `0${sec}` : sec;

  return min + ':' + sec;
};