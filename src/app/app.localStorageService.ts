import { Injectable } from '@angular/core';
@Injectable()
export class LocalStorageService {
  public setItem(key: string, item: string): void {
    localStorage.setItem(key, item);
  }
  public getItem(key: string): string {
    return localStorage.getItem(key);
  }
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
  public removeAllItems(): void {
    localStorage.clear();
  }
}
