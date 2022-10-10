export interface IFace {
  take_photo: boolean;
  face_data?: Buffer;
  person_info?: any;
  registered: boolean;
  face_data_uri: string;
}

export interface IUser {
  accessToken: string;
  tenantId: string;
  homeAccountId: string;
  name: string;
  email: string;
  username?: string;
}

export interface IPersonInfo {
  person_id?: string;
  name?: string;
  user_data?: {
    face_id?: string;
    email?: string;
    name?: string;
    tenant_id?: string;
    user_id?: string;
  };
}

export interface IRegisterPhotoProps {
  isAuthenticated: boolean;
  userInfo: IUser;
}

export interface ITakePhotoProps extends IRegisterPhotoProps {
  handleTakePhoto: (dataUri: string) => void;
}

export interface ActionParams {
  info?: any;
  onSuccess?: (param: any) => void;
  onError?: (param: any) => void;
}
