import React from 'react';
import { PageId } from '../../types';
import { 
  PRIVACY_POLICY, 
  TERMS_AND_CONDITIONS, 
  REFUND_POLICY, 
  DELIVERY_POLICY 
} from '../../data/legalPolicies';
import { BUSINESS_INFO } from '../../data/businessData';
import { ShieldCheck, FileText, Phone, Mail, ServerOff, ArrowRight } from 'lucide-react';

interface LegalPageProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ currentPage, onNavigate }) => {
  const getPolicyData = () => {
    switch (currentPage) {
      case 'terms':
        return TERMS_AND_CONDITIONS;
      case 'refund':
        return REFUND_POLICY;
      case 'delivery':
        return DELIVERY_POLICY;
      case 'privacy':
      default:
        return PRIVACY_POLICY;
    }
  };

  const policy = getPolicyData();

  const legalTabs: { id: PageId; label: string }[] = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'refund', label: 'Refund & Cancellation' },
    { id: 'delivery', label: 'Delivery Policy (Digital)' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide">
          <span>Official Legal Governance</span>
          <span aria-hidden="true">·</span>
          <span>Cashfree &amp; Regulatory Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          {policy.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Effective Date &amp; Last Updated: {policy.lastUpdated} · Governed by {BUSINESS_INFO.name} (Operator: {BUSINESS_INFO.owner})
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto">
        {legalTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              currentPage === tab.id
                ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Policy Content Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
        {/* Banner about No Hosting */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-600">
          <ServerOff className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
          <p>
            <strong>Core Business Boundary:</strong> Grock Technologies provides software, website, mobile application, and data engineering services. Grock Technologies does not sell web hosting as a standalone service. Third-party hosting, domains, and cloud server accounts are arranged directly by customers.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 divide-y divide-slate-100">
          {policy.sections.map((section, idx) => (
            <div key={idx} className={idx > 0 ? 'pt-6' : ''}>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3 tracking-tight">
                {section.heading}
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line space-y-2">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Block */}
        <div className="pt-6 border-t border-slate-200 bg-slate-50 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-slate-900 block">Questions regarding this policy?</span>
            <p className="text-slate-500">
              Contact Gagandeep Singh directly for clarifications or project agreements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.mobile}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-800 font-semibold hover:border-slate-400"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600" />
              <span>+91 {BUSINESS_INFO.mobile}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-800 font-semibold hover:border-slate-400"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-600" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
