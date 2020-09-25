import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setObj(key: string, obj: any): void{
    localStorage.setItem(key, obj);
  }

  public getObj(key: string): any{
    return localStorage.getItem(key);
  }

  public removeObj(key: string): void {
    localStorage.removeItem(key);
  }

  public containsKey(key: string): boolean {
    const result = localStorage.getItem(key);
    if (result) {
      return true;
    }
    else {
      return false;
    }
  }
}


export const KEYS_LOCALSTORAGE = {
  code: 'code',
  access_token: 'access_token',
  refresh_token: 'refresh_token',
  client_id: 'client_id',
  client_secret: 'client_secret',
  user_name: 'user_name',
  profile_pic: 'profile_pic',
  user_id: 'user_id',
  expires_in: 'expires_in',
  expires_at: 'expires_at'
};
