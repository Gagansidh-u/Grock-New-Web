import React from 'react';
import { PageId } from '../../types';
import { PRICING_PACKAGES, BUSINESS_INFO } from '../../data/businessData';
import { ProjectEstimator } from '../ProjectEstimator';
import { CheckCircle2, ArrowRight, ServerOff, HelpCircle, PhoneCall } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onSelectPlanForCheckout: (item: {
    serviceName: string;
    packageDesc: string;
    amount: number;
  }) => void;
  onNavigateToContact: (brief?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onSelectPlanForCheckout,
  onNavigateToContact,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide">
          <span>Genuine Pricing &amp; Milestone Scopes</span>
          <span aria-hidden="true">·</span>
          <span>Zero Artificial Markups</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Transparent Development Pricing
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Grock Technologies charges exclusively for professional software development and technical establishment work. We do not sell hosting subscriptions or mark up third-party services.
        </p>

        {/* Third Party Infrastructure Notice */}
        <div className="bg-slate-100/90 border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-700">
          <ServerOff className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
          <p>
            <strong>Important Infrastructure Transparency:</strong> The development fees below represent our dedicated engineering work. Third-party recurring costs such as domain names, hosting servers, cloud storage, Google Play developer accounts ($25), or commercial API quotas are purchased directly by you from their respective providers. Grock Technologies provides technical establishment on your selected infrastructure.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRICING_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-white border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
              pkg.isPopular
                ? 'border-cyan-500 shadow-md ring-1 ring-cyan-500/20'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1">
                  <span>{pkg.serviceCategory}</span>
                  {pkg.isPopular && (
                    <span className="text-cyan-700 font-sans font-bold">Featured Scope</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{pkg.name}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{pkg.description}</p>
              </div>

              {/* Price */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 block font-medium">Development Fee</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                    ₹{pkg.developmentFee.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-slate-500">+ 18% GST</span>
                </div>
                <span className="text-[11px] text-emerald-700 block font-medium mt-0.5">
                  Est. Delivery: {pkg.deliveryTime}
                </span>
              </div>

              {/* Scope Metrics */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs space-y-1.5 text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400">Scale:</span>
                  <span className="font-semibold text-slate-800 text-right">{pkg.pagesOrScreens}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Revisions:</span>
                  <span className="font-semibold text-slate-800">{pkg.revisions}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block">
                  Included in Scope:
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables & Additional charges */}
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1.5">
                <p>
                  <strong className="text-slate-700">Deliverables:</strong> {pkg.deliverables.join(', ')}.
                </p>
                <p>
                  <strong className="text-slate-700">Scope Additions:</strong> {pkg.additionalDevFee}.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
              <button
                onClick={() =>
                  onSelectPlanForCheckout({
                    serviceName: pkg.name,
                    packageDesc: `${pkg.pagesOrScreens}. ${pkg.description}`,
                    amount: pkg.developmentFee,
                  })
                }
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Select &amp; Proceed to Order</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() =>
                  onNavigateToContact(
                    `I am inquiring about the "${pkg.name}" package (₹${pkg.developmentFee.toLocaleString('en-IN')}). Let's discuss requirements.`
                  )
                }
                className="w-full py-2 px-4 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 rounded-lg text-xs font-medium transition-colors cursor-pointer"
              >
                Request Custom Consultation
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Projects Requirement from PRD */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
            <HelpCircle className="w-4 h-4 text-cyan-600" />
            <span>Custom Projects &amp; Enterprise Architecture</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Need Custom Architecture, Multi-Role Portals, or Unique Business Logic?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
            «Contact Grock Technologies for a customized quotation based on your project requirements.»
          </p>
          <p className="text-xs text-slate-500">
            We evaluate complex database models, enterprise integrations, automation flows, and high-load backend requirements with formal technical milestone contracts.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-5 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
          >
            Request Custom Quotation
          </button>
          <a
            href={`tel:${BUSINESS_INFO.mobile}`}
            className="w-full sm:w-auto px-4 py-2.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-cyan-600" />
            <span>Call +91 {BUSINESS_INFO.mobile}</span>
          </a>
        </div>
      </div>

      {/* Project Scope & Fee Estimator */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Interactive Project Cost Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Customize every module, screen count, and authentication criteria to view real-time milestone pricing.
          </p>
        </div>
        <ProjectEstimator
          onSelectPlanForCheckout={onSelectPlanForCheckout}
          onNavigateToContact={onNavigateToContact}
        />
      </div>
    </div>
  );
};
