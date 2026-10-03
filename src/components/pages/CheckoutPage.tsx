import React, { useState } from 'react';
import { PageId, OrderItem } from '../../types';
import { BUSINESS_INFO } from '../../data/businessData';
import { 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  Lock, 
  AlertCircle, 
  Building, 
  Smartphone,
  ArrowRight,
  FileText,
  ServerOff,
  Clock,
  Sparkles,
  PhoneCall,
  Mail,
  Printer,
  ChevronRight,
  RefreshCw
} from 'lucide-react';

interface CheckoutPageProps {
  initialService?: {
    serviceName: string;
    packageDesc: string;
    amount: number;
  };
  onNavigate: (page: PageId) => void;
  onOrderCompleted: (order: OrderItem) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  initialService = {
    serviceName: 'Starter Business Website',
    packageDesc: 'Up to 5 Pages (Home, About, Services, Contact, Terms), responsive layouts, contact form, establishment on customer hosting.',
    amount: 14999,
  },
  onNavigate,
  onOrderCompleted,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerMobile, setCustomerMobile] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showGatewayComingSoon, setShowGatewayComingSoon] = useState(false);
  const [createdOrderRef, setCreatedOrderRef] = useState<string>('');

  // Financial calculations
  const devFee = initialService.amount;
  const taxAmount = Math.round(devFee * 0.18);
  const totalAmount = devFee + taxAmount;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!customerName.trim() || customerName.trim().length < 2) {
      errs.customerName = 'Please enter your full billing name.';
    }
    if (!customerEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.trim())) {
      errs.customerEmail = 'Please enter a valid billing email address.';
    }
    const cleanPhone = customerMobile.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      errs.customerMobile = 'Please enter a valid 10-digit mobile number.';
    }
    if (!agreedTerms) {
      errs.agreedTerms = 'You must agree to the Terms & Conditions and Refund Policy.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const orderRef = `GRK-CF-${Math.floor(100000 + Math.random() * 900000)}`;
    setCreatedOrderRef(orderRef);

    // Save order in system state
    const orderItem: OrderItem = {
      orderId: orderRef,
      serviceId: 'srv-' + Date.now(),
      serviceName: initialService.serviceName,
      packageDescription: initialService.packageDesc,
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim(),
      customerMobile: customerMobile.trim(),
      amount: devFee,
      taxAmount: taxAmount,
      totalAmount: totalAmount,
      paymentStatus: 'PENDING',
      paymentMethod: selectedMethod.toUpperCase(),
      paymentReference: 'CASHFREE-ONBOARDING',
      paymentDate: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      projectStatus: 'Requirement Review',
      notes: 'Customer submitted payment form. Gateway currently in Cashfree merchant onboarding.',
    };

    onOrderCompleted(orderItem);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowGatewayComingSoon(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 700);
  };

  // If user completed form and reached the payment gateway coming soon screen:
  if (showGatewayComingSoon) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
        {/* Animated High-Tech Gateway Announcement Box */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Animated background high-tech radar grid */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

          {/* Central High-Tech Orbit Animation */}
          <div className="flex flex-col items-center text-center space-y-6 relative z-10">
            {/* Animated Orbit Radar */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-ping opacity-30" />
              {/* Spinning tech dashed circle */}
              <div className="absolute inset-1 rounded-full border-2 border-dashed border-cyan-600 animate-spin [animation-duration:12s]" />
              {/* Inner glowing circle */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-900 to-cyan-900 text-cyan-300 flex items-center justify-center shadow-lg transform rotate-3">
                <CreditCard className="w-8 h-8" />
              </div>
              {/* Floating orbit node */}
              <div className="absolute -top-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs animate-bounce" />
            </div>

            {/* Title & Core Message */}
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
                <span>Cashfree Merchant Integration Status</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
                Payment Gateway Is Coming Very Shortly
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We are currently completing merchant onboarding with <strong>Cashfree Payments</strong> to provide automated instant digital checkouts. Direct online gateway processing will be live in a few moments.
              </p>
            </div>

            {/* High-Tech Onboarding Progress Pipeline */}
            <div className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 text-left space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-2">
                <span className="font-mono font-semibold text-slate-700">INTEGRATION PIPELINE</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Active Onboarding
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {/* Step 1 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>1. Business KYC</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Grock Technologies credentials &amp; policies verified.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-3.5 rounded-xl border border-cyan-400 ring-2 ring-cyan-500/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-700 font-bold">
                    <RefreshCw className="w-4 h-4 animate-spin shrink-0" />
                    <span>2. Gateway Onboarding</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Cashfree merchant API &amp; production webhooks configuring now.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-400 font-semibold">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>3. Live Direct Checkout</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    UPI, Cards &amp; NetBanking auto-clearing activating shortly.
                  </p>
                </div>
              </div>
            </div>

            {/* Reserved Order Summary Card */}
            <div className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 text-left space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    PROJECT RESERVATION REFERENCE
                  </span>
                  <span className="font-mono text-lg font-bold text-slate-900">{createdOrderRef}</span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    TOTAL PAYABLE QUOTATION
                  </span>
                  <span className="font-mono text-xl font-extrabold text-cyan-700">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-slate-400 block">(Includes 18% GST)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div>
                  <strong className="text-slate-900">Purchased Service:</strong> {initialService.serviceName}
                </div>
                <div>
                  <strong className="text-slate-900">Client Contact:</strong> {customerName} (+91 {customerMobile})
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-100 leading-relaxed">
                <strong className="text-slate-900">Agreed Scope:</strong> {initialService.packageDesc}
              </div>
            </div>

            {/* Direct Connect Options: Settle milestone directly with Gagandeep Singh */}
            <div className="w-full bg-slate-900 text-white rounded-2xl p-6 sm:p-8 text-left space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <PhoneCall className="w-4 h-4" />
                <span>Instant Project Initiation Available</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                Start Your Project Immediately Without Waiting
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                While Cashfree automated checkout is completing onboarding, Gagandeep Singh can directly initiate your project upon receipt of this order. You can confirm via direct official UPI / Bank transfer and receive your formal tax receipt immediately.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.mobile}`}
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Gagandeep Singh (+91 {BUSINESS_INFO.mobile})</span>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}?subject=Project%20Order%20${createdOrderRef}&body=Hello%20Gagandeep,%20I%20have%20submitted%20the%20order%20form%20for%20${initialService.serviceName}%20(Reference:%20${createdOrderRef}).%20Please%20send%20direct%20payment%20details%20to%20start%20development.`}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs sm:text-sm border border-slate-700 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Email Helpdesk ({BUSINESS_INFO.email})</span>
                </a>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('confirmation')}
                className="px-4 py-2 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-700" />
                <span>View Order Proforma Invoice</span>
              </button>

              <button
                onClick={() => onNavigate('home')}
                className="px-4 py-2 text-slate-500 hover:text-slate-800 text-xs transition-colors cursor-pointer"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 tracking-wide">
          <span>Checkout &amp; Service Initiation</span>
          <span aria-hidden="true">·</span>
          <span>Cashfree Payment Gateway Integration</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Order Review &amp; Development Payment
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Review the service scope, customer details, and tax breakdown below. Grock Technologies charges strictly for software engineering and technical establishment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Customer Info & Terms (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <form onSubmit={handleFormSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                1. Customer &amp; Billing Information
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Invoices and project milestones will be addressed to this contact.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Customer / Business Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Gagandeep Enterprise"
                  className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white text-slate-900 focus:outline-none transition-colors ${
                    errors.customerName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-cyan-600'
                  }`}
                />
                {errors.customerName && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.customerName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white text-slate-900 focus:outline-none transition-colors ${
                      errors.customerEmail ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-cyan-600'
                    }`}
                  />
                  {errors.customerEmail && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.customerEmail}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Mobile Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={customerMobile}
                    onChange={(e) => setCustomerMobile(e.target.value)}
                    placeholder="10-digit phone number"
                    className={`w-full px-3.5 py-2 text-xs rounded-lg border bg-white text-slate-900 focus:outline-none transition-colors ${
                      errors.customerMobile ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 focus:border-cyan-600'
                    }`}
                  />
                  {errors.customerMobile && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.customerMobile}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Select Preferred Payment Mode (Cashfree Gateway)
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedMethod('upi')}
                  className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                    selectedMethod === 'upi'
                      ? 'border-cyan-600 bg-cyan-50/60 text-cyan-900 ring-1 ring-cyan-500/30'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-cyan-700" />
                  <span>UPI / QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod('card')}
                  className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                    selectedMethod === 'card'
                      ? 'border-cyan-600 bg-cyan-50/60 text-cyan-900 ring-1 ring-cyan-500/30'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-cyan-700" />
                  <span>Cards</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMethod('netbanking')}
                  className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                    selectedMethod === 'netbanking'
                      ? 'border-cyan-600 bg-cyan-50/60 text-cyan-900 ring-1 ring-cyan-500/30'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Building className="w-4 h-4 text-cyan-700" />
                  <span>NetBanking</span>
                </button>
              </div>
            </div>

            {/* Terms and Refund Policy Acceptance */}
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-cyan-600 border-slate-300 focus:ring-cyan-500 cursor-pointer"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I have read and agree to Grock Technologies’{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('terms')}
                    className="text-cyan-700 underline font-semibold hover:text-cyan-800"
                  >
                    Terms &amp; Conditions
                  </button>
                  ,{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('refund')}
                    className="text-cyan-700 underline font-semibold hover:text-cyan-800"
                  >
                    Refund &amp; Cancellation Policy
                  </button>
                  , and{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('delivery')}
                    className="text-cyan-700 underline font-semibold hover:text-cyan-800"
                  >
                    Digital Delivery Policy
                  </button>
                  . I understand that third-party hosting/domain infrastructure is not included as a standalone service.
                </span>
              </label>
              {errors.agreedTerms && (
                <p className="text-[11px] text-rose-600">{errors.agreedTerms}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs sm:text-sm font-bold transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Generating Payment Order...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <span>Proceed to Payment (₹{totalAmount.toLocaleString('en-IN')})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Order Summary Breakdown (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                PAYMENT TO
              </span>
              <h3 className="text-base font-bold text-slate-900">{BUSINESS_INFO.name}</h3>
              <p className="text-xs text-slate-500">
                Operated by {BUSINESS_INFO.owner} · {BUSINESS_INFO.mobile}
              </p>
            </div>

            {/* Service & Scope Description */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Purchased Development Service
              </span>
              <h4 className="text-sm font-bold text-slate-900">{initialService.serviceName}</h4>
              <p className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200 leading-relaxed">
                {initialService.packageDesc}
              </p>
            </div>

            {/* Transparent Cost Breakdown */}
            <div className="space-y-2 text-xs border-t border-slate-200 pt-3">
              <div className="flex justify-between text-slate-600">
                <span>Development &amp; Establishment Fee:</span>
                <span className="font-mono font-semibold text-slate-900">
                  ₹{devFee.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Applicable GST (18%):</span>
                <span className="font-mono text-slate-900">₹{taxAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-slate-900 pt-3 border-t border-slate-200">
                <span>Total Payable Amount:</span>
                <span className="font-mono text-cyan-700">₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Hosting Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 flex items-start gap-2">
              <ServerOff className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>No Hosting Standalone Sales:</strong> Grock Technologies provides software engineering work. Third-party hosting, domains, and cloud server expenses are arranged directly by the customer.
              </span>
            </div>

            {/* Security Assurance */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>128-bit SSL Encrypted Transaction · Cashfree Integration Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
