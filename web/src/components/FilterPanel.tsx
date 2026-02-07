"use client";

interface FilterPanelProps {
  organizations: string[];
  languages: string[];
  audiences: string[];
  selectedOrgs: string[];
  selectedLanguages: string[];
  selectedAudiences: string[];
  hasDocsOnly: boolean;
  onOrgChange: (orgs: string[]) => void;
  onLanguageChange: (languages: string[]) => void;
  onAudienceChange: (audiences: string[]) => void;
  onHasDocsChange: (value: boolean) => void;
  stats: {
    byOrg: Record<string, number>;
    byLanguage: Record<string, number>;
    byAudience: Record<string, number>;
  };
}

export function FilterPanel({
  organizations,
  languages,
  audiences,
  selectedOrgs,
  selectedLanguages,
  selectedAudiences,
  hasDocsOnly,
  onOrgChange,
  onLanguageChange,
  onAudienceChange,
  onHasDocsChange,
  stats,
}: FilterPanelProps) {
  const handleOrgToggle = (org: string) => {
    if (selectedOrgs.includes(org)) {
      onOrgChange(selectedOrgs.filter((o) => o !== org));
    } else {
      onOrgChange([...selectedOrgs, org]);
    }
  };

  const handleLanguageToggle = (lang: string) => {
    if (selectedLanguages.includes(lang)) {
      onLanguageChange(selectedLanguages.filter((l) => l !== lang));
    } else {
      onLanguageChange([...selectedLanguages, lang]);
    }
  };

  const handleAudienceToggle = (audience: string) => {
    if (selectedAudiences.includes(audience)) {
      onAudienceChange(selectedAudiences.filter((a) => a !== audience));
    } else {
      onAudienceChange([...selectedAudiences, audience]);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h2 className="text-lg font-semibold text-slate-900 mb-5">Filters</h2>

      {/* Organizations */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-slate-700 mb-3">
          Organizations
        </h3>
        <div className="space-y-2">
          {organizations.map((org) => (
            <label
              key={org}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedOrgs.includes(org)}
                onChange={() => handleOrgToggle(org)}
                className="checkbox"
              />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors flex-1">
                {org}
              </span>
              <span className="text-xs text-slate-400 tabular-nums">
                {stats.byOrg[org] || 0}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Audience */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-slate-700 mb-3">Audience</h3>
        <div className="space-y-2">
          {audiences.map((audience) => (
            <label
              key={audience}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedAudiences.includes(audience)}
                onChange={() => handleAudienceToggle(audience)}
                className="checkbox"
              />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors flex-1">
                {audience}
              </span>
              <span className="text-xs text-slate-400 tabular-nums">
                {stats.byAudience[audience] || 0}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-slate-700 mb-3">Languages</h3>
        <div className="space-y-2">
          {languages
            .filter((l) => stats.byLanguage[l] > 3)
            .sort((a, b) => stats.byLanguage[b] - stats.byLanguage[a])
            .map((lang) => (
              <label
                key={lang}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(lang)}
                  onChange={() => handleLanguageToggle(lang)}
                  className="checkbox"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors flex-1">
                  {lang}
                </span>
                <span className="text-xs text-slate-400 tabular-nums">
                  {stats.byLanguage[lang] || 0}
                </span>
              </label>
            ))}
        </div>
      </div>
      {/* Other Filters */}
      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-3">Options</h3>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={hasDocsOnly}
            onChange={(e) => onHasDocsChange(e.target.checked)}
            className="checkbox"
          />
          <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
            With documentation only
          </span>
        </label>
      </div>
    </div>
  );
}
