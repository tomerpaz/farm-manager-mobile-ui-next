// The site the Sites tab shows, remembered per browser so it reopens on the same site.
// Shared so the site form can select a site it just created.
const SITE_STORAGE_KEY = 'siteFields.siteId';

export const readSelectedSiteId = () => {
    try { return localStorage.getItem(SITE_STORAGE_KEY); } catch { return null; }
};

export const storeSelectedSiteId = (id) => {
    if (id == null) return;
    try { localStorage.setItem(SITE_STORAGE_KEY, String(id)); } catch { /* remembered for this visit only */ }
};
