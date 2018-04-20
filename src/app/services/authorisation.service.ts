import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

const AuthorisationTokenKey = 'AuthorisationCodeKey001';

@Injectable()
export class AuthorisationService {

  constructor(private localStorageService: LocalStorageService) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(AuthorisationTokenKey);
  }

  addAuthorisationToken(code: string) {
    this.localStorageService.Add(AuthorisationTokenKey, code);
  }

  removeAuthorisationToken(code: string) {
    this.localStorageService.Remove(AuthorisationTokenKey);
  }
}
