// app.component.spec.ts

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'; // Import for router-outlet

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // We import RouterTestingModule because the component's template uses <router-outlet>
      imports: [AppComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // --- CHANGED TEST CASE ---
  it(`should have the 'student-placement-crud' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Check for the new title
    expect(app.title).toEqual('student-placement-crud');
  });
  // --- END OF CHANGES ---

  // NOTE: The 'should render title' test was removed because your app.component.html
  // does not display the title in an h1 tag. It only contains the <router-outlet>.
});