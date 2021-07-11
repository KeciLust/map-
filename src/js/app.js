export default class Settings {
  constructor() {
    this.settings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.settingsUser = new Map();
  }

  changeSettings(setting) {
    this.settingsUser.set(setting);
  }

  getSettings() {
    const settingsFinish = [...this.settings, ...this.settingsUser];
    return settingsFinish;
  }
}
