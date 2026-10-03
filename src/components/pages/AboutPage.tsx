import React from 'react';
import { PageId } from '../../types';
import { BUSINESS_INFO } from '../../data/businessData';
import { 
  ShieldCheck, 
  User, 
  Phone, 
  Mail, 
  ServerOff, 
  Code2, 
  CheckCircle2, 
  Award,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide">
          <span>Company Identity &amp; Governance</span>
          <span aria-hidden="true">·</span>
          <span>Verified Business Operator</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          About Grock Technologies
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Grock Technologies is a technology development business owned and operated by Gagandeep Singh, dedicated to engineering resilient websites, web applications, Android software, and data pipelines.
        </p>
      </div>

      {/* Main Business Profile Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Operator Details (4 cols) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200/90 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-lg">
                GS
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">{BUSINESS_INFO.owner}</h3>
                <p className="text-xs text-slate-500 font-medium">{BUSINESS_INFO.role}</p>
                <p className="text-xs font-semibold text-cyan-700">{BUSINESS_INFO.name}</p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">DIRECT PHONE</span>
                  <a href={`tel:${BUSINESS_INFO.mobile}`} className="font-semibold text-slate-900 hover:text-cyan-700">
                    +91 {BUSINESS_INFO.mobile}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">OFFICIAL HELPDESK</span>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="font-semibold text-slate-900 hover:text-cyan-700">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px]">BUSINESS OPERATION</span>
                  <span className="font-semibold text-slate-900">Sole Proprietorship</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Contact Gagandeep Singh
              </button>
            </div>
          </div>

          {/* Business Description & Philosophy (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Our Mission &amp; Purpose
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Grock Technologies is a specialized software and website development business owned and operated by Gagandeep Singh. The business focuses on developing and establishing websites, web applications, Android applications, custom software, and data-related solutions according to individual customer requirements, scope, and technical specifications.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe in straightforward engineering without artificial markups, vendor lock-in, or confusing monthly retainers. When you hire Grock Technologies, you work with an experienced software developer who crafts your application, delivers the complete intellectual property, and assists with establishment on your chosen infrastructure.
              </p>
            </div>

            {/* Clear Statement on Hosting */}
            <div className="bg-amber-50/70 border border-amber-200/90 rounded-xl p-5 space-y-2 text-xs text-amber-900">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-950">
                <ServerOff className="w-4 h-4 text-amber-700" />
                <span>Clear Infrastructure &amp; Hosting Boundaries</span>
              </div>
              <p className="leading-relaxed">
                Grock Technologies charges customers strictly for software development and establishment work. The business does not operate as a web-hosting provider and does not sell standalone hosting packages or subscriptions.
              </p>
              <p className="leading-relaxed text-amber-800">
                Customers retain direct control and ownership of their third-party domain names, cloud servers, databases, and app-store accounts. Grock Technologies provides technical configuration and deployment assistance as part of the project scope.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 border border-slate-200 rounded-xl space-y-1.5 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Code &amp; IP Ownership</span>
                </div>
                <p className="text-slate-500 leading-relaxed">
                  Upon final milestone payment, full copyright and repository ownership are transferred to the customer.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl space-y-1.5 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Milestone-Driven Scopes</span>
                </div>
                <p className="text-slate-500 leading-relaxed">
                  Every project has defined deliverables, measurable milestones, and transparent turnaround timelines.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl space-y-1.5 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Responsive &amp; Mobile-First</span>
                </div>
                <p className="text-slate-500 leading-relaxed">
                  All interfaces undergo thorough verification across real mobile, tablet, and desktop viewports.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl space-y-1.5 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Transparent Payment Processing</span>
                </div>
                <p className="text-slate-500 leading-relaxed">
                  Secure checkout handled via authorized Indian payment aggregators (Cashfree Payments) with tax invoices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Details Reference Table */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs">
          Official Business Registry Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1">
            <span className="text-slate-400 block text-[11px]">BUSINESS NAME</span>
            <span className="font-bold text-slate-900">{BUSINESS_INFO.name}</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1">
            <span className="text-slate-400 block text-[11px]">OWNER / OPERATOR</span>
            <span className="font-bold text-slate-900">{BUSINESS_INFO.owner}</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1">
            <span className="text-slate-400 block text-[11px]">CONTACT NUMBER</span>
            <span className="font-bold text-slate-900">+91 {BUSINESS_INFO.mobile}</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-1">
            <span className="text-slate-400 block text-[11px]">OFFICIAL EMAIL</span>
            <span className="font-bold text-slate-900">{BUSINESS_INFO.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
