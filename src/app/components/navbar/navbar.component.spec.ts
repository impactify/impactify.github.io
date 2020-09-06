import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponentMobile } from './navbar.component.mobile';

describe('NavbarComponent', () => {
  let component: NavbarComponentMobile;
  let fixture: ComponentFixture<NavbarComponentMobile>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponentMobile]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponentMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
