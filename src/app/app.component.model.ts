export class AppComponentModel {
  public isToShowUserProfile: boolean;

  constructor() {
    this.isToShowUserProfile = false;
  }

  public clone(): AppComponentModel {
    const model: AppComponentModel = new AppComponentModel();

    model.isToShowUserProfile = this.isToShowUserProfile;

    return model;
  }
}
