import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'any' })
export class ApplicationStateService {
  private readonly isMobileResolution: boolean;

  constructor() {
    this.isMobileResolution = window.innerWidth < 768;
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}
