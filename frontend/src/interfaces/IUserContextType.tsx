import { IUserData } from "./IUserData";

export interface IUserContextType {
    userData: IUserData;
    setUserData: (data: IUserData) => void;
  }