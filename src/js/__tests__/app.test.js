import Settings from '../app';

const set = new Settings();

test('changeSetting test', () => {
  set.changeSettings('name', 'light');
  expect(set.settingsUser.has('name')).toBeTruthy();
});
test('getSettings test', () => {
  const item = set.getSettings();
  expect(item.length).toBe(4);
});
