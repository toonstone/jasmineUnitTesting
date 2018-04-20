import { TestBed, inject } from '@angular/core/testing';

import { AuthorisationService } from './authorisation.service';
import { LocalStorageService } from './local-storage.service';

describe('AuthorisationService Unit Tests', () => {

  beforeEach(() => {
    // The TestBed is the most important of the Angular testing utilities.
    // The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
    // To test a service, you set the providers metadata property with an array of the services that you'll test or mock
    TestBed.configureTestingModule({
      providers: [
        AuthorisationService,
        LocalStorageService]
    });
  });

  it('should be created', inject([AuthorisationService], (service: AuthorisationService) => {
    expect(service).toBeTruthy();
  }));
});
