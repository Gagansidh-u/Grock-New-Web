import React from 'react';
import { PageId } from '../../types';
import { DEVELOPMENT_STEPS, BUSINESS_INFO } from '../../data/businessData';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileCheck, 
  ShieldCheck, 
  Package, 
  HelpCircle,
  PhoneCall
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide">
          <span>End-to-End Methodology</span>
          <span aria-hidden="true">·</span>
          <span>Transparent Engineering Workflow</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          How It Works: Our 10-Step Development Process
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          From the initial requirements discovery to final code handover and infrastructure establishment, every project follows a disciplined 10-step lifecycle to ensure technical accuracy, milestone adherence, and complete customer satisfaction.
        </p>
      </div>

      {/* 10-Step Timeline Flow */}
      <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {DEVELOPMENT_STEPS.map((item, idx) => (
          <div key={item.step} className="relative group">
            {/* Step Marker Node */}
            <div className="absolute -left-[37px] sm:-left-[53px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-cyan-600 text-cyan-700 flex items-center justify-center font-mono font-bold text-xs sm:text-sm shadow-sm group-hover:bg-cyan-600 group-hover:text-white transition-colors">
              {item.step}
            </div>

            {/* Content Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-sm hover:border-slate-300 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-400 font-semibold">
                    STEP {item.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md">
                  {item.shortDesc}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center gap-2 text-xs text-slate-500">
                <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong className="text-slate-700 font-semibold">Stage Milestone:</strong> {item.deliverable}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deliverables Inventory */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
          <Package className="w-4 h-4 text-cyan-600" />
          <span>What You Receive Upon Project Completion</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Comprehensive Final Deliverables
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Depending on your purchased service, final digital delivery is completed through electronic file transfer, repository push, or customer server establishment:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-1.5">
            <h4 className="font-bold text-slate-900">Website Project &amp; Build Files</h4>
            <p className="text-slate-500 leading-relaxed">
              Full unminified frontend source code, compiled production bundle, and static assets.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-1.5">
            <h4 className="font-bold text-slate-900">Android Release Artifacts</h4>
            <p className="text-slate-500 leading-relaxed">
              Signed Android App Bundle (.aab), testing .apk, signing key certificates, and Play Store assets.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-1.5">
            <h4 className="font-bold text-slate-900">Backend &amp; Database Files</h4>
            <p className="text-slate-500 leading-relaxed">
              API routes, database migration scripts, environment variables schema, and schema seed files.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-1.5">
            <h4 className="font-bold text-slate-900">Documentation &amp; Runbooks</h4>
            <p className="text-slate-500 leading-relaxed">
              Admin setup guide, environment configuration instructions, and operational walkthroughs.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-1.5">
            <h4 className="font-bold text-slate-900">Infrastructure Establishment</h4>
            <p className="text-slate-500 leading-relaxed">
              Deployment and live verification directly on the customer’s self-arranged cloud or server.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-1.5">
            <h4 className="font-bold text-slate-900">Source Code Repository Handover</h4>
            <p className="text-slate-500 leading-relaxed">
              Direct transfer of GitHub/GitLab repository ownership ensuring complete client IP rights.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-xl font-bold">Have a Project in Mind? Start with Step 01</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Submit your requirements or speak with Gagandeep Singh to receive a scoped milestone proposal.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
          >
            Start Requirement Discussion
          </button>
          <a
            href={`tel:${BUSINESS_INFO.mobile}`}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
            <span>Call +91 {BUSINESS_INFO.mobile}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
