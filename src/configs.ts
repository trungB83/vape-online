export const APP_ENV = 'development';

const ENV = {
  development: {
    API_URL: 'https://exam-dev-api.web5days.com:5001',
    UPLOAD_API_URL: 'https://exam-dev-api.web5days.com:5001',
    VERSION: process.env.REACT_APP_APP_VERSION,
    APP_UI_CONFIG: {
      HIDE_HEADER: false,
      HIDE_FOOTER: false,
      CENTERLIZE_BREADCRUMB: false,
      COLOR: '#faad14',
    },
  },
  lite_site_1: {
    API_URL: 'https://exam-dev-api.web5days.com:5001',
    UPLOAD_API_URL: 'https://exam-dev-api.web5days.com:5001',
    VERSION: process.env.REACT_APP_APP_VERSION,
    APP_UI_CONFIG: {
      HIDE_HEADER: true,
      HIDE_FOOTER: true,
      CENTERLIZE_BREADCRUMB: true,
      COLOR: '#faad14',
      TRY_IT_LINK: '/exam-category/3',
      TITLE: 'KHOÁ ĐỀ LUYỆN THI ĐÁNH GIÁ NĂNG LỰC',
      LANDING_TITLE: 'THÔNG TIN KHOÁ ĐỀ LUYỆN THI ĐÁNH GIÁ NĂNG LỰC',
      BANNER_IMAGE: 'uploads/2022/5/v1-1651571860769.png'
    },
  },
  lite_site_2: {
    API_URL: 'https://exam-dev-api.web5days.com:5001',
    UPLOAD_API_URL: 'https://exam-dev-api.web5days.com:5001',
    VERSION: process.env.REACT_APP_APP_VERSION,
    APP_UI_CONFIG: {
      HIDE_HEADER: true,
      HIDE_FOOTER: true,
      CENTERLIZE_BREADCRUMB: true,
      COLOR: '#01ad30',
      TRY_IT_LINK: 'exam-category/1',
      TITLE: 'KHOÁ ĐỀ LUYỆN THI TỐT NGHIỆP THPT',
      LANDING_TITLE: 'THÔNG TIN KHOÁ ĐỀ LUYỆN THI TỐT NGHIỆP THPT',
      BANNER_IMAGE: 'uploads/2022/5/v2-1651570843431.png'
    },
  },
  production: {
    API_URL: 'https://exam-dev-api.web5days.com:5001',
    UPLOAD_API_URL: 'https://exam-dev-api.web5days.com:5001',
    VERSION: process.env.REACT_APP_APP_VERSION,
    APP_UI_CONFIG: {
      HIDE_HEADER: false,
      HIDE_FOOTER: false,
      CENTERLIZE_BREADCRUMB: false,
      COLOR: '#faad14',
    },
  },
};

const getEnvVars = (env = 'development') => {
  let envConfigs = ENV.development;
  if (env === 'production') {
    envConfigs = ENV.production;
  } else if (env === 'lite_site_1') {
    envConfigs = ENV.lite_site_1;
  } else if (env === 'lite_site_2') {
    envConfigs = ENV.lite_site_2;
  } else {
    envConfigs = ENV.development;
  }
  console.warn('===> Exam App Configs: ', envConfigs);
  return envConfigs;
};

let configs: any = getEnvVars(APP_ENV);
configs = { ...configs, APP_ENV };

export default configs;
