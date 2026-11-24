// The sites the Sites tab shows (ticked in its site menu), remembered per browser so
// it reopens on the same sites. Shared so the site and field forms can make sure the
// site they just saved is shown.
const SITES_STORAGE_KEY = 'siteFields.siteIds';
// Stored in place of the ids for "All Sites", so sites added or registered later are included too.
export const ALL_SITES = 'all';
const OLD_SITE_STORAGE_KEY = 'siteFields.siteId';   // before several sites could be ticked

export const readSelectedSiteIds = () => {
    try {
        const stored = JSON.parse(localStorage.getItem(SITES_STORAGE_KEY));
        if (Array.isArray(stored)) return stored.map(String);
        const old = localStorage.getItem(OLD_SITE_STORAGE_KEY);
        return old ? [old] : [];
    } catch {
        return [];
    }
};

export const storeSelectedSiteIds = (ids) => {
    try { localStorage.setItem(SITES_STORAGE_KEY, JSON.stringify(ids.map(String))); } catch { /* remembered for this visit only */ }
};

// Adds the site to the ticked ones (keeping the others), so it's shown on return.
export const storeSelectedSiteId = (id) => {
    if (id == null) return;
    const ids = readSelectedSiteIds();
    if (!ids.includes(ALL_SITES) && !ids.includes(String(id))) storeSelectedSiteIds([...ids, String(id)]);
};
