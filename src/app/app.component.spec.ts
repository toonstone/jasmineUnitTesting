import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LocalStorageService } from './services/local-storage.service';
describe('AppComponent', () => {

const appTitle = 'Jasmine Unit Testing';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent
      ],
      providers: [
        LocalStorageService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
