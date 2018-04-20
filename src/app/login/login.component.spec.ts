import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthorisationService } from '../services/authorisation.service';
import { LocalStorageService } from '../services/local-storage.service';
import { DebugElement } from '@angular/core';

// create a Fake or Nock service for a service
class MockAuthorisationService extends AuthorisationService {
    authenticated = false;

    isAuthenticated(): boolean {
        return this.authenticated;
    }
}

describe('LoginComponent', () => {

    let component: LoginComponent;

    // Use below when faking or mocking a service
    // let authorisationService: MockAuthorisationService;

    // using the actual service but with Spys (similar to Moq setup and Verify!)
    let authorisationService: AuthorisationService;
    let fixture: ComponentFixture<LoginComponent>;
    let debugElement: DebugElement;
    let authorisationServiceSpy: jasmine.Spy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [
                // Use below when faking or mocking a service
                // { provide: AuthorisationService, useClass: MockAuthorisationService},

                // use actual service if using SpyOn
                AuthorisationService,
                LocalStorageService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;

        // use below 2 lines when using the actual service but with Spys (similar to Moq setup and Verify!) - these two lines very important to get the actual service used
        debugElement = fixture.debugElement;
        authorisationService = debugElement.injector.get(AuthorisationService);

        // Use below when faking or mocking a service
        // authorisationService = TestBed.get(AuthorisationService);
        fixture.detectChanges();
    });

    afterEach(() => {
        authorisationService = null;
        authorisationServiceSpy = null;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should require login when user is not authenticated', () => {

        // Use below when faking or mocking a service
        // authorisationService.authenticated = false;

       // use below when spying on method and want to set what is returned like Moq Setup!
       authorisationServiceSpy = spyOn(authorisationService, 'isAuthenticated').and.returnValue(false);
       // use .and.callThrough()  to actually call the method

       expect(component.loginRequired()).toBeTruthy();
    });

    it('should not require login when user is authenticated', () => {

        // Use below when faking or mocking a service
        // authorisationService.authenticated = true;

        // use below when spying on method and want to set what is returned like Moq Setup!
        spyOn(authorisationService, 'isAuthenticated').and.returnValue(true);
        expect(component.loginRequired()).toBeFalsy();
    });

    it('loginRequired should only call isAuthenticated Once', () => {
        // use .and.callThrough()  to actually call the method defined
        authorisationServiceSpy = spyOn(authorisationService, 'isAuthenticated').and.callThrough();
        // Act
        component.loginRequired();

        // Assert
        expect(authorisationServiceSpy).toHaveBeenCalledTimes(1); // like Verify
    });
});
