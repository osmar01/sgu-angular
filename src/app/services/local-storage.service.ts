import { Injectable } from '@angular/core';
import SecureLS from 'secure-ls';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private _ls = new SecureLS({ encodingType: 'aes' });

  constructor() { }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  encrypt(key: string, value: any): any {
    this._ls.set(key, value);
  }

  removeLs(key: string): any {
    this._ls.remove(key);
  }

  decrypt(key: string): any {
    return this._ls.get(key);
  }

  clearLs(): any {
    this._ls.removeAll();
  }
}
