import React, { useState, useMemo } from 'react';
import { PageId } from '../../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../../data/businessData';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  FileCode, 
  HelpCircle, 
  ArrowRight, 
  PhoneCall, 
  ServerOff, 
  Layers, 
  Sparkles,
  ShieldCheck,
  Search,
  X,
  Filter
} from 'lucide-react';

interface ServicesPageProps {
  selectedServiceId?: string;
  onNavigate: (page: PageId) => void;
  onSelectPlanForCheckout: (item: {
    serviceName: string;
    packageDesc: string;
    amount: number;
  }) => void;
  onNavigateToContact: (brief?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  selectedServiceId,
  onNavigate,
  onSelectPlanForCheckout,
  onNavigateToContact,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(
    selectedServiceId || 'web-dev'
  );

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Websites' },
    { id: 'webapp', label: 'Web Applications' },
    { id: 'android', label: 'Android Apps' },
    { id: 'conversion', label: 'Web-to-Android' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'custom', label: 'Custom Software' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((s) => {
      const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.shortDesc.toLowerCase().includes(q) ||
        s.fullDesc.toLowerCase().includes(q) ||
        s.idealFor.some((item) => item.toLowerCase().includes(q)) ||
        s.included.some((item) => item.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        {/* Unboxed Metadata (Anti-slop rule) */}
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide">
          <span>Official Service Catalog</span>
          <span aria-hidden="true">·</span>
          <span>Scope Specifications &amp; Deliverables</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Digital Development &amp; Establishment Services
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Grock Technologies delivers specialized software engineering services. Every service follows an explicit contractual scope with defined inclusions, exclusions, milestone checkpoints, and complete code deliverables.
        </p>

        {/* Clear hosting disclaimer banner */}
        <div className="bg-slate-100/90 border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-700">
          <ServerOff className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
          <p>
            <strong>Third-Party Infrastructure Note:</strong> Grock Technologies provides software development and technical establishment on infrastructure arranged by the customer. We do not sell web hosting as a standalone service. Domain registration, hosting servers, cloud infrastructure, and app store accounts are maintained directly by the customer.
          </p>
        </div>
      </div>

      {/* Interactive Search & Category Filter Controls */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search capabilities (e.g. mobile, PostgreSQL, AAB, dashboard)..."
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-600 transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1.5 self-end sm:self-center">
            <Filter className="w-3.5 h-3.5 text-cyan-600" />
            <span>Showing {filteredServices.length} of {SERVICES_DATA.length} services</span>
          </div>
        </div>

        {/* Interactive Category Filter Bar */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl overflow-x-auto border border-slate-200/80">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Directory */}
      <div className="space-y-8">
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center bg-white border border-dashed border-slate-300 rounded-2xl space-y-3">
            <Search className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No Services Match Your Search</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn't find any services matching "{searchQuery}". Try different keywords or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          filteredServices.map((service, idx) => {
          const isExpanded = expandedServiceId === service.id;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`bg-white border rounded-2xl transition-all overflow-hidden ${
                isExpanded
                  ? 'border-cyan-500/80 shadow-md ring-1 ring-cyan-500/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Card Summary Header */}
              <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span>SERVICE 0{idx + 1}</span>
                    <span aria-hidden="true">/</span>
                    <span className="capitalize text-cyan-700 font-semibold">{service.category}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {service.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-4 shrink-0">
                  <div className="text-left md:text-right">
                    <span className="text-[11px] text-slate-400 block">Baseline Development Fee</span>
                    <span className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
                      ₹{service.startingPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      + 18% GST · Milestone Quotation
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      {isExpanded ? 'Hide Specifications' : 'Full Specifications'}
                    </button>
                    <button
                      onClick={() =>
                        onSelectPlanForCheckout({
                          serviceName: service.name,
                          packageDesc: service.shortDesc,
                          amount: service.startingPrice,
                        })
                      }
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span>Order Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              {isExpanded && (
                <div className="border-t border-slate-100 bg-slate-50/50 p-6 sm:p-8 space-y-8 animate-fadeIn">
                  {/* Two Column Grid: Inclusions vs Exclusions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* What is Included */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>What Is Included in Standard Scope</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {service.included.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold mt-0.5">•</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What is Excluded */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>What Is Excluded by Default</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {service.excluded.map((exc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-rose-500 font-bold mt-0.5">✕</span>
                            <span>{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 3 Columns: Process, Requirements, Deliverables */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Step-by-Step Development Process */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                        <Clock className="w-4 h-4 text-cyan-600" />
                        <span>Development Process</span>
                      </div>
                      <ol className="space-y-2 text-xs text-slate-600 list-decimal list-inside">
                        {service.process.map((step, i) => (
                          <li key={i} className="leading-relaxed">
                            <span className="text-slate-800 font-medium">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Customer Requirements */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                        <HelpCircle className="w-4 h-4 text-cyan-600" />
                        <span>Customer Requirements</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {service.customerRequirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-600 font-bold mt-0.5">›</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Final Deliverables & Revisions */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                        <FileCode className="w-4 h-4 text-cyan-600" />
                        <span>Final Deliverables</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-600 mb-3">
                        {service.deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-600 font-bold mt-0.5">✓</span>
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                        <strong>Revision Policy:</strong> {service.revisionPolicy}
                      </div>
                    </div>
                  </div>

                  {/* Action Bar inside Expanded Service */}
                  <div className="bg-cyan-50/60 border border-cyan-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-700">
                      <span className="font-semibold text-slate-900 block">
                        Estimated Delivery: {service.deliveryTime}
                      </span>
                      <span>Pricing method: {service.pricingModel}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          onNavigateToContact(
                            `I am requesting a formal quotation for "${service.name}". Please review my project requirements.`
                          )
                        }
                        className="px-4 py-2 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                      >
                        Request Custom Scope Discussion
                      </button>

                      <button
                        onClick={() =>
                          onSelectPlanForCheckout({
                            serviceName: service.name,
                            packageDesc: service.shortDesc,
                            amount: service.startingPrice,
                          })
                        }
                        className="px-4 py-2 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Initiate Project (₹{service.startingPrice.toLocaleString('en-IN')})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })
      )}
      </div>

      {/* Bottom Service Helpdesk */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold">Need a Custom Software Solution Outside These Scopes?</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Contact Gagandeep Singh directly for a bespoke architecture quotation tailored to your exact tech stack.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.mobile}`}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
            <span>Call +91 {BUSINESS_INFO.mobile}</span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
          >
            Contact Helpdesk
          </button>
        </div>
      </div>
    </div>
  );
};
