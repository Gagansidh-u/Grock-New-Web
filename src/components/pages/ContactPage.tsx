import React, { useState } from 'react';
import { CustomerEnquiry } from '../../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../../data/businessData';
import { 
  Phone, 
  Mail, 
  CheckCircle2, 
  Send, 
  AlertCircle, 
  ShieldCheck, 
  Clock, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  initialBrief?: string;
  onEnquirySubmitted?: (enquiry: CustomerEnquiry) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialBrief = '',
  onEnquirySubmitted,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    serviceRequired: 'Website Development',
    projectDescription: initialBrief || '',
    budget: '',
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<CustomerEnquiry | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (cleanMobile.length < 10) {
      errs.mobile = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 15) {
      errs.projectDescription = 'Please describe your project requirements in at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newEnquiry: CustomerEnquiry = {
        id: `GRK-ENQ-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        serviceRequired: formData.serviceRequired,
        projectDescription: formData.projectDescription.trim(),
        budget: formData.budget.trim(),
        additionalRequirements: formData.additionalRequirements.trim(),
        createdAt: new Date().toISOString(),
        status: 'new',
      };

      setSubmittedEnquiry(newEnquiry);
      setIsSubmitting(false);

      if (onEnquirySubmitted) {
        onEnquirySubmitted(newEnquiry);
      }
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide">
          <span>Official Communication Channel</span>
          <span aria-hidden="true">·</span>
          <span>Fast Turnaround Consultation</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Contact Grock Technologies
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Discuss your website, web application, Android app, or data engineering project directly with Gagandeep Singh. We respond promptly with technical feedback and detailed milestone quotations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Info & Support Box (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel space-y-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                Direct Contact
              </span>
              <h2 className="text-xl font-bold text-slate-900">Operator Information</h2>
              <p className="text-xs text-slate-500">
                Grock Technologies is owned and operated by {BUSINESS_INFO.owner}.
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Phone className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Customer Support Phone
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.mobile}`}
                    className="font-bold text-sm text-slate-900 hover:text-cyan-700"
                  >
                    +91 {BUSINESS_INFO.mobile}
                  </a>
                  <span className="text-[11px] text-slate-500 block">
                    Available for project scoping &amp; status queries
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Mail className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Official Helpdesk Email
                  </span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="font-bold text-sm text-slate-900 hover:text-cyan-700"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <span className="text-[11px] text-slate-500 block">
                    Send RFP briefs, design assets &amp; specifications
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Operating Hours
                  </span>
                  <span className="font-semibold text-slate-800">{BUSINESS_INFO.workingHours}</span>
                  <span className="text-[11px] text-slate-500 block">
                    Standard response time within 2 to 4 business hours
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
              <p>
                <strong>Business Nature:</strong> Software &amp; Website Development Services.
              </p>
              <p>
                <strong>Delivery Model:</strong> Digital delivery of source code and application builds.
              </p>
            </div>
          </div>

          {/* Quick FAQ item */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 text-xs text-slate-600 space-y-2">
            <h4 className="font-bold text-slate-900">What happens after I send an enquiry?</h4>
            <p className="leading-relaxed">
              Gagandeep Singh will review your project description, evaluate architectural requirements, and contact you via phone or email with clarifying questions and a transparent scope quotation.
            </p>
          </div>
        </div>

        {/* Right: Validated Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-panel">
            {submittedEnquiry ? (
              <div className="space-y-6 py-6 text-center sm:text-left">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto sm:mx-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Enquiry Submitted Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                    Thank you, <strong>{submittedEnquiry.name}</strong>. Your project brief has been logged with reference identifier:
                  </p>
                  <div className="inline-block bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg font-mono text-cyan-800 font-bold text-sm">
                    {submittedEnquiry.id}
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 space-y-2">
                  <h4 className="font-bold text-slate-900">Next Steps:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>1. Grock Technologies will review your requirement ({submittedEnquiry.serviceRequired}).</li>
                    <li>2. We will contact you at <strong>{submittedEnquiry.email}</strong> or <strong>{submittedEnquiry.mobile}</strong>.</li>
                    <li>3. We will discuss functionality, delivery timeline, and provide a formal quotation.</li>
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setSubmittedEnquiry(null);
                      setFormData({
                        name: '',
                        email: '',
                        mobile: '',
                        serviceRequired: 'Website Development',
                        projectDescription: '',
                        budget: '',
                        additionalRequirements: '',
                      });
                    }}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
                  >
                    Submit Another Requirement
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.mobile}`}
                    className="px-4 py-2 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Call Support ({BUSINESS_INFO.mobile})</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    Project Consultation Form
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below to receive a scoped project proposal and timeline estimate.
                  </p>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white text-slate-900 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-cyan-600'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white text-slate-900 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-cyan-600'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Mobile & Service Required Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Mobile Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="10-digit mobile number"
                      className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white text-slate-900 focus:outline-none transition-colors ${
                        errors.mobile ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-cyan-600'
                      }`}
                    />
                    {errors.mobile && <p className="text-[11px] text-rose-600 mt-1">{errors.mobile}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Required <span className="text-rose-600">*</span>
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:border-cyan-600 transition-colors"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="Custom Architecture & Integration">Custom Architecture &amp; Integration</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Project Description &amp; Scope <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Briefly describe what you want built (features, target screens, reference websites, or database requirements)..."
                    className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white text-slate-900 focus:outline-none transition-colors ${
                      errors.projectDescription
                        ? 'border-rose-400 bg-rose-50/20'
                        : 'border-slate-200 focus:border-cyan-600'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.projectDescription}</p>
                  )}
                </div>

                {/* Budget & Additional Requirements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Estimated Budget (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. ₹15,000 - ₹35,000"
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:border-cyan-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Timeline / Deadline (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.additionalRequirements}
                      onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                      placeholder="e.g. Within 2 weeks"
                      className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:border-cyan-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Validating &amp; Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Project Requirement</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center">
                  By submitting, you agree to our Terms &amp; Conditions and Privacy Policy. All project data is held strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
