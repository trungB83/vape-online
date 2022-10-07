export interface ILoginResponse {

}
export interface IInforUser {
    ten_tai_khoan: string;
    mat_khau: string;
}

export interface IInforUserRegister {
    ten_tai_khoan: string;
    ten_nhan_vien: string;
    email: string;
    mat_khau: string;
    xac_nhan_mat_khau: string;
}

export interface IContentNotification {
    message: string
    description: string
}