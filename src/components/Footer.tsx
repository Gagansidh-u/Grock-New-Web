import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Mail, Phone, ShieldCheck, FileText, CheckCircle2, ServerOff } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin }) => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20 relative z-10">
      {/* Important Infrastructure & Scope Transparency Banner */}
      <div className="bg-slate-100/90 border-b border-slate-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-medium text-slate-800">
            <ServerOff className="w-4 h-4 text-cyan-600 shrink-0" />
            <span>Digital Development &amp; Establishment Notice:</span>
          </div>
          <p className="max-w-4xl leading-relaxed text-slate-600">
            Grock Technologies charges strictly for software, website, and mobile development work. We do not sell or operate web hosting as a standalone service. Domain names, hosting, cloud servers, paid APIs, and app-store developer accounts are maintained directly by the customer.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Brand & Ownership */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Grock Technologies</h3>
              <p className="text-xs font-medium text-slate-500">
                Owned and operated by <strong className="text-slate-700 font-semibold">{BUSINESS_INFO.owner}</strong>
              </p>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 max-w-sm">
              Custom software engineering, modern responsive website development, Android mobile applications, website-to-Android conversion, and data analytics solutions tailored to business requirements.
            </p>
            <div className="space-y-2 pt-1 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.mobile}`} className="hover:text-slate-900 font-semibold">
                  +91 {BUSINESS_INFO.mobile}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-slate-900 font-semibold">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-500 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Operating Hours: {BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Services</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  Web Applications &amp; Dashboards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  Android App Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  Website-to-Android Conversion
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  Data Analytics &amp; Processing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  Custom Software Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Process */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  10-Step Development Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  Transparent Pricing &amp; Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  Project Cost Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  About Gagandeep Singh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left"
                >
                  Contact &amp; Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Policy Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Legal &amp; Policies</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-slate-400" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-slate-400" />
                  <span>Terms &amp; Conditions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('refund')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-slate-400" />
                  <span>Refund &amp; Cancellation Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('delivery')}
                  className="hover:text-cyan-700 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-slate-400" />
                  <span>Delivery Policy (Digital Delivery)</span>
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="text-[11px] text-slate-400 hover:text-slate-700 flex items-center gap-1"
              >
                <ShieldCheck className="w-3 h-3" />
                <span>Operator Access</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Grock Technologies. Owned &amp; Operated by Gagandeep Singh. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Development &amp; Establishment Services</span>
            <span>·</span>
            <span>Digital Delivery Only</span>
            <span>·</span>
            <span>Cashfree Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
