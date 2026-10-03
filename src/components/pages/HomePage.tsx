import React from 'react';
import { PageId } from '../../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../../data/businessData';
import { ProjectEstimator } from '../ProjectEstimator';
import { TechMarquee } from '../TechMarquee';
import { TechStackSandbox } from '../TechStackSandbox';
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Smartphone, 
  Layers, 
  Database, 
  ShieldCheck, 
  ServerOff, 
  PhoneCall, 
  Mail,
  RefreshCw,
  FileCheck2,
  Workflow,
  Cpu,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (serviceId: string) => void;
  onSelectPlanForCheckout: (item: {
    serviceName: string;
    packageDesc: string;
    amount: number;
  }) => void;
  onNavigateToContact: (brief?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
  onSelectPlanForCheckout,
  onNavigateToContact,
}) => {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative pt-8 sm:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Unboxed Metadata (Zero Pill Rule) */}
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide">
                <span>Owned &amp; Operated by Gagandeep Singh</span>
                <span aria-hidden="true">·</span>
                <span>Software &amp; Digital Establishment Services</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] text-balance">
                Digital Engineering &amp; Software Development Tailored to Your Business
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Grock Technologies delivers custom websites, web applications, Android mobile apps, and data systems. We charge strictly for software engineering and technical establishment—zero hosting markups.
              </p>

              {/* Action Zone */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('pricing')}
                  className="px-6 py-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>View Pricing &amp; Packages</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.mobile}`}
                  className="px-4 py-3 bg-cyan-50 hover:bg-cyan-100 text-cyan-800 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-cyan-600" />
                  <span>Call {BUSINESS_INFO.mobile}</span>
                </a>
              </div>

              {/* Key Trust Signals (No Pill Enclosures) */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Client Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No Recurring Hosting Markups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Operator Communication</span>
                </div>
              </div>
            </div>

            {/* Right Visual Carrier (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src="/src/assets/images/hero_software_engineering_1791010637943.jpg"
                  alt="Grock Technologies modern software development environment"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-xs text-cyan-300 font-mono">
                    <Code2 className="w-4 h-4" />
                    <span>PRODUCTION-READY CODE</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Grock Technologies Engineering
                  </h3>
                  <p className="text-xs text-slate-200 mt-1">
                    Operated by Gagandeep Singh. Delivering digital software, Android bundles &amp; clean web architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Live Marquee */}
      <TechMarquee />

      {/* 2. Business Model & Operator Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8 space-y-3">
              <div className="flex items-center gap-2 text-cyan-700 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Business Model Statement</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Grock Technologies
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {BUSINESS_INFO.modelStatement}
              </p>
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p><strong>Owner / Operator:</strong> {BUSINESS_INFO.owner}</p>
                <p><strong>Primary Contact:</strong> +91 {BUSINESS_INFO.mobile}</p>
                <p><strong>Official Email:</strong> {BUSINESS_INFO.email}</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <ServerOff className="w-4 h-4 text-amber-600" />
                <span>Our Core Operating Principle: Pure Development &amp; Establishment</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {BUSINESS_INFO.infrastructureNotice}
              </p>

              {/* Business Flow Pipeline */}
              <div className="pt-2">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Transparent Delivery Lifecycle
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="font-mono text-cyan-700 font-bold block text-[11px]">01. SCOPE</span>
                    <span className="text-slate-800 font-medium">Requirements &amp; Quote</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="font-mono text-cyan-700 font-bold block text-[11px]">02. AGREEMENT</span>
                    <span className="text-slate-800 font-medium">Deposit &amp; Terms</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="font-mono text-cyan-700 font-bold block text-[11px]">03. BUILD</span>
                    <span className="text-slate-800 font-medium">Code &amp; QA Testing</span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="font-mono text-cyan-700 font-bold block text-[11px]">04. HANDOVER</span>
                    <span className="text-slate-800 font-medium">Source &amp; Establishment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide">
            <span>Specialized Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Production Grade Implementations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Digital Development Services
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Each service is engineered to customer specifications with defined milestone deliverables, included revisions, and comprehensive handover documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const icons = {
              'web-dev': Code2,
              'webapp-dev': Layers,
              'android-dev': Smartphone,
              'conversion-dev': RefreshCw,
              'data-services': Database,
              'custom-software': Workflow,
            };
            const Icon = icons[service.id as keyof typeof icons] || Code2;

            return (
              <div
                key={service.id}
                className="glass-panel flex flex-col justify-between tech-card-hover"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    0{idx + 1}. Capability
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Delivery Time:</span>
                      <span className="font-medium text-slate-700">{service.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Starting From:</span>
                      <span className="font-mono font-bold text-slate-900">
                        ₹{service.startingPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onSelectService(service.id);
                      onNavigate('services');
                    }}
                    className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Full Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() =>
                      onSelectPlanForCheckout({
                        serviceName: service.name,
                        packageDesc: service.shortDesc,
                        amount: service.startingPrice,
                      })
                    }
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg cursor-pointer transition-colors"
                  >
                    Order Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Code & Architecture Workbench */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide mb-1">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Interactive Engineering Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Production Code Samples</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Transparent Code Quality &amp; Clean Implementation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Inspect our production code patterns across Web, Android, Backend, and Data Engineering. Grock Technologies delivers fully documented, unencrypted, customer-owned source repositories.
            </p>
          </div>
        </div>

        <TechStackSandbox />
      </section>

      {/* 4. Visual Spotlight: Mobile & Web App Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center glass-panel tech-grid-bg">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700">
              <Smartphone className="w-4 h-4" />
              <span>Mobile &amp; Web Synchronization</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight text-balance">
              Website-to-Android App Conversion &amp; Native Mobile Engineering
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Expand your digital footprint. If you already operate an active website, Grock Technologies converts it into an installable Android Application (.apk &amp; .aab) featuring branded splash screens, hardware navigation handlers, and offline detection.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Signed Android App Bundle (.aab) ready for Google Play upload</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Optimized webview engine with pull-to-refresh &amp; camera uploads</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No recurring lock-in; full mobile project source code delivered</span>
              </li>
            </ul>
            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => {
                  onSelectService('conversion-dev');
                  onNavigate('services');
                }}
                className="px-4 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
              >
                Learn About App Conversion
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Request Compatibility Check
              </button>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img
              src="/src/assets/images/service_web_mobile_1791010651889.jpg"
              alt="Website to Android conversion and mobile application engineering"
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. Interactive Cost & Scope Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectEstimator
          onSelectPlanForCheckout={onSelectPlanForCheckout}
          onNavigateToContact={onNavigateToContact}
        />
      </section>

      {/* 6. Contact & Direct Operator Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <PhoneCall className="w-4 h-4" />
              <span>Direct Developer Consultation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Discuss Your Project Scope?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Consult directly with Gagandeep Singh to evaluate your website, web application, Android app, or data automation project. Get an honest quotation and clear milestone delivery schedule.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Send Project Brief
              </button>
              <a
                href={`tel:${BUSINESS_INFO.mobile}`}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs sm:text-sm font-semibold border border-slate-700 transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>Call +91 {BUSINESS_INFO.mobile}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs sm:text-sm font-semibold border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
