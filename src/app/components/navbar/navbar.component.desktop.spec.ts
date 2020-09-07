import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarDesktopComponent } from './navbar.component.desktop';

describe('NavbarComponent', () => {
  let component: NavbarDesktopComponent;
  let fixture: ComponentFixture<NavbarDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDesktopComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
