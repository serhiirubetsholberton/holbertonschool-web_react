import { getFullYear, getFooterCopy, getLatestNotification, latestNotificationText } from './utils';

describe('utils', () => {
  it('Should create current year', () => {
    const expectedYear = new Date().getFullYear();
    const actualYear = getFullYear();

    expect(actualYear).toBe(expectedYear);
  });

  it('Should return correct body text', () => {
    const expectedIndexText = 'Holberton School';
    const expectedDashboardText = 'Holberton School main dashboard';

    let isIndexPage = true;
    expect(getFooterCopy(isIndexPage)).toBe(expectedIndexText);
    
    isIndexPage = false;
    expect(getFooterCopy(isIndexPage)).toBe(expectedDashboardText);
  });

  it('Should return correct notification text', () => {
    expect(getLatestNotification()).toBe(latestNotificationText);
  })
});
