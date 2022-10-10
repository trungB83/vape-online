export const GET_POST = "GET_POST";
export const GET_POSTS = "GET_POSTS";
export const GET_POST_CATEGORY = "GET_POST_CATEGORY";
export const GET_POST_CATEGORIES = "GET_POST_CATEGORIES";

export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY";
export const GET_PRODUCTS_CATEGORIES = "GET_PRODUCTS_CATEGORIES";

export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";

export function getUser(params:any, callback:void) {
    return {
      type: GET_USER,
      params,
      callback,
    };
  }
  
  export function getUsers(params:any, callback:void) {
    return {
      type: GET_USERS,
      params,
      callback,
    };
  }

  export function getPost(params:any, callback:void) {
    return {
      type: GET_POST,
      params,
      callback,
    };
  }
  
  export function getPosts(params:any, callback:void) {
    return {
      type: GET_POSTS,
      params,
      callback,
    };
  }

  export function getPostCategory(params:any, callback:void) {
    return {
      type: GET_POST_CATEGORY,
      params,
      callback,
    };
  }
  
  export function getPostCategories(params:any, callback:void) {
    return {
      type: GET_POST_CATEGORIES,
      params,
      callback,
    };
  }

  export function getProduct(params:any, callback:void) {
    return {
      type: GET_PRODUCT,
      params,
      callback,
    };
  }
  
  export function getProducts(params:any, callback:void) {
    return {
      type: GET_PRODUCTS,
      params,
      callback,
    };
  }

  export function getProductCategory(params:any, callback:void) {
    return {
      type: GET_PRODUCTS_CATEGORY,
      params,
      callback,
    };
  }
  
  export function getProductCategories(params:any, callback:void) {
    return {
      type: GET_PRODUCTS_CATEGORIES,
      params,
      callback,
    };
  }
