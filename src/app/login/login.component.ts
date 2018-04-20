import { Component, OnInit } from '@angular/core';
import { AuthorisationService } from '../services/authorisation.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [
        AuthorisationService]
})
export class LoginComponent implements OnInit {

    constructor(private authorisationService: AuthorisationService) {
       // this.authorisationService.addAuthorisationToken('loginCode001');
    }

    ngOnInit() {
    }

    loginRequired(): boolean {
        const isAuthenticated = !this.authorisationService.isAuthenticated();
        return isAuthenticated;
    }
}
