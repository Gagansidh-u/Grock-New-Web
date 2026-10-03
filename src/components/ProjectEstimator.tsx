import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, AlertCircle, Copy, Sparkles, RefreshCw } from 'lucide-react';
import { PageId } from '../types';

interface ProjectEstimatorProps {
  onSelectPlanForCheckout?: (item: {
    serviceName: string;
    packageDesc: string;
    amount: number;
  }) => void;
  onNavigateToContact?: (brief: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  onSelectPlanForCheckout,
  onNavigateToContact,
}) => {
  const [projectType, setProjectType] = useState<'website' | 'webapp' | 'android' | 'conversion' | 'data'>('website');
  const [screensCount, setScreensCount] = useState<number>(5);
  const [hasAuth, setHasAuth] = useState<boolean>(false);
  const [hasDatabase, setHasDatabase] = useState<boolean>(false);
  const [integrationsCount, setIntegrationsCount] = useState<number>(1);
  const [needsEstablishment, setNeedsEstablishment] = useState<boolean>(true);
  const [copiedQuote, setCopiedQuote] = useState(false);

  const applyPreset = (preset: 'starter' | 'saas' | 'android' | 'data') => {
    if (preset === 'starter') {
      setProjectType('website');
      setScreensCount(5);
      setHasAuth(false);
      setHasDatabase(false);
      setIntegrationsCount(1);
      setNeedsEstablishment(true);
    } else if (preset === 'saas') {
      setProjectType('webapp');
      setScreensCount(8);
      setHasAuth(true);
      setHasDatabase(true);
      setIntegrationsCount(2);
      setNeedsEstablishment(true);
    } else if (preset === 'android') {
      setProjectType('android');
      setScreensCount(8);
      setHasAuth(true);
      setHasDatabase(true);
      setIntegrationsCount(1);
      setNeedsEstablishment(true);
    } else if (preset === 'data') {
      setProjectType('data');
      setScreensCount(4);
      setHasAuth(false);
      setHasDatabase(false);
      setIntegrationsCount(1);
      setNeedsEstablishment(true);
    }
  };

  // Calculation logic based on genuine base fees
  const calculateCost = () => {
    let base = 12999;
    let days = 7;

    if (projectType === 'website') {
      base = 12999 + Math.max(0, screensCount - 4) * 1200;
      days = Math.min(20, 6 + Math.ceil(screensCount * 1.2));
      if (hasAuth) {
        base += 4000;
        days += 3;
      }
      if (hasDatabase) {
        base += 5000;
        days += 4;
      }
    } else if (projectType === 'webapp') {
      base = 28999 + Math.max(0, screensCount - 4) * 2200;
      days = Math.min(35, 14 + Math.ceil(screensCount * 2));
      if (hasAuth) base += 3500;
      if (hasDatabase) base += 5000;
    } else if (projectType === 'android') {
      base = 34999 + Math.max(0, screensCount - 5) * 2500;
      days = Math.min(45, 18 + Math.ceil(screensCount * 2.5));
      if (hasAuth) base += 3500;
      if (hasDatabase) base += 4500;
    } else if (projectType === 'conversion') {
      base = 16999;
      days = 7;
      if (hasAuth) base += 2000;
    } else if (projectType === 'data') {
      base = 14999 + Math.max(0, screensCount - 3) * 1800;
      days = Math.min(20, 5 + Math.ceil(screensCount * 1.5));
    }

    base += Math.max(0, integrationsCount - 1) * 2500;
    if (needsEstablishment) {
      base += 2000;
    }

    const tax = Math.round(base * 0.18);
    const total = base + tax;

    return {
      subtotal: base,
      tax,
      total,
      estimatedDays: days,
    };
  };

  const cost = calculateCost();

  const handleProceedToCheckout = () => {
    if (onSelectPlanForCheckout) {
      const typeLabels: Record<string, string> = {
        website: 'Custom Website Development',
        webapp: 'Custom Web Application Development',
        android: 'Custom Android Application',
        conversion: 'Website-to-Android Conversion',
        data: 'Data Analytics & Processing Solution',
      };

      onSelectPlanForCheckout({
        serviceName: typeLabels[projectType] || 'Custom Development Service',
        packageDesc: `Custom Scope: ~${screensCount} screens/views, Auth: ${hasAuth ? 'Yes' : 'No'}, DB: ${hasDatabase ? 'Yes' : 'No'}, ${integrationsCount} integrations, Establishment on infrastructure: ${needsEstablishment ? 'Yes' : 'No'}.`,
        amount: cost.subtotal,
      });
    }
  };

  const handleDiscussCustomQuote = () => {
    if (onNavigateToContact) {
      const brief = `I calculated a scope for ${projectType.toUpperCase()} with ~${screensCount} screens/pages, Auth: ${hasAuth ? 'Included' : 'None'}, Database: ${hasDatabase ? 'Included' : 'None'}, ${integrationsCount} APIs/Integrations. Estimated base: ₹${cost.subtotal.toLocaleString('en-IN')}. Please contact me to finalize quotation.`;
      onNavigateToContact(brief);
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden">
      <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Project Scope &amp; Fee Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Calculate Your Project Development Scope</h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
            Configure your technical requirements to generate an instant development estimate based on Grock Technologies’ genuine pricing schedule.
          </p>
        </div>
        <div className="text-right shrink-0 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
          <span className="text-[11px] text-slate-400 block">Estimated Development Fee</span>
          <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
            ₹{cost.subtotal.toLocaleString('en-IN')}
          </div>
          <span className="text-[10px] text-slate-400 block mt-0.5">
            + ₹{cost.tax.toLocaleString('en-IN')} GST (Total ₹{cost.total.toLocaleString('en-IN')})
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls: Left 7 columns */}
        <div className="lg:col-span-7 space-y-6">
          {/* Quick Architecture Presets */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Quick Scope Presets</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => applyPreset('starter')}
                className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer text-center"
              >
                Starter Web (5p)
              </button>
              <button
                type="button"
                onClick={() => applyPreset('saas')}
                className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer text-center"
              >
                SaaS MVP (8p)
              </button>
              <button
                type="button"
                onClick={() => applyPreset('android')}
                className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer text-center"
              >
                Android App (8s)
              </button>
              <button
                type="button"
                onClick={() => applyPreset('data')}
                className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer text-center"
              >
                Data Suite (4r)
              </button>
            </div>
          </div>

          {/* 1. Project Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Project Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'website', label: 'Website Dev' },
                { id: 'webapp', label: 'Web Application' },
                { id: 'android', label: 'Android App' },
                { id: 'conversion', label: 'Web-to-Android' },
                { id: 'data', label: 'Data Analytics' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id as any)}
                  className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                    projectType === item.id
                      ? 'border-cyan-600 bg-cyan-50/60 text-cyan-900 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Screens / Pages Count */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Scope Scale ({projectType === 'data' ? 'Datasets / Reports' : 'Pages / Screens'})
              </label>
              <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                {screensCount} {projectType === 'data' ? 'Views/Reports' : 'Pages/Screens'}
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="20"
              value={screensCount}
              onChange={(e) => setScreensCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>Minimal (2-4)</span>
              <span>Standard (5-10)</span>
              <span>Enterprise (12-20)</span>
            </div>
          </div>

          {/* 3. Architecture & Functional Options */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. Architectural Modules
            </label>
            <div className="space-y-2.5">
              <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50/60 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={hasAuth}
                  onChange={(e) => setHasAuth(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-cyan-600 border-slate-300 focus:ring-cyan-500 cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-semibold text-slate-900 block">User Authentication &amp; Sessions</span>
                  <span className="text-slate-500">Sign Up, Sign In, Password Management, and Protected Views.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50/60 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={hasDatabase}
                  onChange={(e) => setHasDatabase(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-cyan-600 border-slate-300 focus:ring-cyan-500 cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-semibold text-slate-900 block">Custom Database Architecture &amp; CRUD</span>
                  <span className="text-slate-500">Structured tables, data models, and admin management functionality.</span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50/60 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={needsEstablishment}
                  onChange={(e) => setNeedsEstablishment(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-cyan-600 border-slate-300 focus:ring-cyan-500 cursor-pointer"
                />
                <div className="text-xs">
                  <span className="font-semibold text-slate-900 block">Establishment on Customer Infrastructure</span>
                  <span className="text-slate-500">Deployment and configuration on your self-purchased hosting or cloud server.</span>
                </div>
              </label>
            </div>
          </div>

          {/* 4. External Integrations */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                4. Third-Party API / Gateway Integrations
              </label>
              <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                {integrationsCount} API{integrationsCount > 1 ? 's' : ''}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setIntegrationsCount(num)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                    integrationsCount === num
                      ? 'border-cyan-600 bg-cyan-600 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {num === 0 ? 'None' : `${num}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Breakdown & Action: Right 5 columns */}
        <div className="lg:col-span-5 bg-slate-50/80 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Quotation Summary Breakdown
              </h4>
              <button
                type="button"
                onClick={() => {
                  const quoteText = `Grock Technologies Scope Estimate:
Type: ${projectType.toUpperCase()}
Scale: ${screensCount} ${projectType === 'data' ? 'Reports' : 'Screens'}
Auth: ${hasAuth ? 'Included' : 'None'}, Database: ${hasDatabase ? 'Included' : 'None'}
APIs: ${integrationsCount}, Infrastructure Establishment: ${needsEstablishment ? 'Included' : 'None'}
Base Fee: ₹${cost.subtotal.toLocaleString('en-IN')} (+ 18% GST = ₹${cost.total.toLocaleString('en-IN')})
Estimated Turnaround: ~${cost.estimatedDays} Business Days
Official Contact: +91 8837767877 | helpdesk.grock@outlook.com`;
                  try {
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                      navigator.clipboard.writeText(quoteText);
                    }
                  } catch {}
                  setCopiedQuote(true);
                  setTimeout(() => setCopiedQuote(false), 2000);
                }}
                className="text-[11px] font-semibold text-slate-500 hover:text-cyan-700 flex items-center gap-1 cursor-pointer transition-colors"
                title="Copy quotation details"
              >
                {copiedQuote ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Scope</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Base Development Scope:</span>
                <span className="font-mono text-slate-900 font-semibold">
                  {screensCount} {projectType === 'data' ? 'Reports' : 'Screens'}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Turnaround:</span>
                <span className="font-mono text-emerald-700 font-semibold">{cost.estimatedDays} Business Days</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Revisions Allowance:</span>
                <span className="font-mono text-slate-900 font-semibold">2 Included Rounds</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Deliverables:</span>
                <span className="text-slate-900 font-medium">Source Code + Builds</span>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-3 space-y-2 text-xs">
              <div className="flex justify-between text-slate-700">
                <span>Net Development Fee:</span>
                <span className="font-mono font-bold text-slate-900">₹{cost.subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Applicable GST (18%):</span>
                <span className="font-mono">₹{cost.tax.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total Payable:</span>
                <span className="font-mono text-cyan-700 text-base">₹{cost.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="bg-amber-50/80 border border-amber-200/80 rounded-lg p-3 text-[11px] text-amber-900 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Zero Hosting Markup:</strong> You purchase third-party domain and server hosting directly at cost. Grock Technologies charges strictly for software engineering and establishment.
              </span>
            </div>
          </div>

          <div className="space-y-2.5 pt-6">
            <button
              onClick={handleProceedToCheckout}
              className="w-full py-2.5 px-4 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Order Estimated Scope Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleDiscussCustomQuote}
              className="w-full py-2 px-4 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Submit for Gagandeep Singh Review</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
