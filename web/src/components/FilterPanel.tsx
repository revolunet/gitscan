"use client";

import { useState } from "react";

interface FilterPanelProps {
  organizations: string[];
  languages: string[];
  audiences: string[];
  components: string[];
  authMethods: string[];
  selectedOrgs: string[];
  selectedLanguages: string[];
  selectedAudiences: string[];
  selectedComponents: string[];
  selectedAuthMethods: string[];
  hasDocsOnly: boolean;
  onOrgChange: (orgs: string[]) => void;
  onLanguageChange: (languages: string[]) => void;
  onAudienceChange: (audiences: string[]) => void;
  onComponentChange: (components: string[]) => void;
  onAuthMethodChange: (methods: string[]) => void;
  onHasDocsChange: (value: boolean) => void;
  stats: {
    byOrg: Record<string, number>;
    byLanguage: Record<string, number>;
    byAudience: Record<string, number>;
    byComponent: Record<string, number>;
    byAuthMethod: Record<string, number>;
  };
}

export function FilterPanel({
  organizations,
  languages,
  audiences,
  components,
  authMethods,
  selectedOrgs,
  selectedLanguages,
  selectedAudiences,
  selectedComponents,
  selectedAuthMethods,
  hasDocsOnly,
  onOrgChange,
  onLanguageChange,
  onAudienceChange,
  onComponentChange,
  onAuthMethodChange,
  onHasDocsChange,
  stats,
}: FilterPanelProps) {
  const [showAllComponents, setShowAllComponents] = useState(false);
  const componentLimit = 15;

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

  const handleComponentToggle = (component: string) => {
    if (selectedComponents.includes(component)) {
      onComponentChange(selectedComponents.filter((c) => c !== component));
    } else {
      onComponentChange([...selectedComponents, component]);
    }
  };

  const handleAuthMethodToggle = (method: string) => {
    if (selectedAuthMethods.includes(method)) {
      onAuthMethodChange(selectedAuthMethods.filter((m) => m !== method));
    } else {
      onAuthMethodChange([...selectedAuthMethods, method]);
    }
  };

  const visibleComponents = showAllComponents
    ? components
    : components.slice(0, componentLimit);

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

      {/* Components */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-slate-700 mb-3">
          Composants techniques
        </h3>
        <div className="space-y-2">
          {visibleComponents.map((component) => (
            <label
              key={component}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedComponents.includes(component)}
                onChange={() => handleComponentToggle(component)}
                className="checkbox"
              />
              <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors flex-1">
                {component}
              </span>
              <span className="text-xs text-slate-400 tabular-nums">
                {stats.byComponent[component] || 0}
              </span>
            </label>
          ))}
        </div>
        {components.length > componentLimit && (
          <button
            onClick={() => setShowAllComponents(!showAllComponents)}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium mt-2"
          >
            {showAllComponents
              ? "Voir moins"
              : `Voir plus (${components.length - componentLimit})`}
          </button>
        )}
      </div>

      {/* Auth Methods */}
      {authMethods.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-slate-700 mb-3">
            Authentification
          </h3>
          <div className="space-y-2">
            {authMethods.map((method) => (
              <label
                key={method}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedAuthMethods.includes(method)}
                  onChange={() => handleAuthMethodToggle(method)}
                  className="checkbox"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors flex-1">
                  {method}
                </span>
                <span className="text-xs text-slate-400 tabular-nums">
                  {stats.byAuthMethod[method] || 0}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

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
