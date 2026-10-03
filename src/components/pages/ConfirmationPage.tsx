import React, { useRef } from 'react';
import { PageId, OrderItem } from '../../types';
import { BUSINESS_INFO } from '../../data/businessData';
import { 
  CheckCircle2, 
  Printer, 
  ArrowRight, 
  Phone, 
  Mail, 
  FileText, 
  Download,
  ShieldCheck,
  ServerOff
} from 'lucide-react';

interface ConfirmationPageProps {
  order: OrderItem;
  onNavigate: (page: PageId) => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ order, onNavigate }) => {
  const invoiceRef = useRef<HTMLDivElement | null>(null);

  const handlePrintInvoice = () => {
    try {
      window.print();
    } catch (err) {
      console.warn('Print not supported in this container:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. Status Banner */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider block">
              PAYMENT VERIFIED VIA CASHFREE
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Order Received Successfully
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Your development order has been received successfully. Grock Technologies will review the submitted requirements and contact you regarding the next steps.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end shrink-0 gap-2">
          <span className="text-xs text-slate-500 font-mono">ORDER REFERENCE</span>
          <span className="text-lg font-bold font-mono text-slate-900 bg-white px-3 py-1 rounded-lg border border-emerald-200">
            {order.orderId}
          </span>
          <button
            onClick={handlePrintInvoice}
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-900 bg-white border border-emerald-300 px-3 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Tax Invoice</span>
          </button>
        </div>
      </div>

      {/* 2. Formal Tax Invoice Document View */}
      <div
        ref={invoiceRef}
        className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 print:border-none print:shadow-none print:p-0"
      >
        {/* Invoice Header */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-1.5">
            <span className="text-xl font-extrabold tracking-tight text-slate-900 block">
              {BUSINESS_INFO.name}
            </span>
            <p className="text-xs text-slate-500">
              Owner / Operator: <strong className="text-slate-800">{BUSINESS_INFO.owner}</strong>
            </p>
            <p className="text-xs text-slate-500">Business Type: Software &amp; Website Development Services</p>
            <p className="text-xs text-slate-500">Phone: +91 {BUSINESS_INFO.mobile}</p>
            <p className="text-xs text-slate-500">Email: {BUSINESS_INFO.email}</p>
          </div>

          <div className="text-left sm:text-right space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
              TAX INVOICE / RECEIPT
            </span>
            <span className="text-sm font-mono font-bold text-slate-900 block">
              INV-{order.orderId}
            </span>
            <p className="text-xs text-slate-500">
              Date: <span className="font-semibold text-slate-700">{order.paymentDate}</span>
            </p>
            <p className="text-xs text-slate-500">
              Status:{' '}
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                {order.paymentStatus}
              </span>
            </p>
            <p className="text-xs text-slate-500">
              Transaction ID: <span className="font-mono text-slate-700">{order.paymentReference}</span>
            </p>
          </div>
        </div>

        {/* Bill To */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs space-y-1">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
            BILLED TO CUSTOMER
          </span>
          <h4 className="text-sm font-bold text-slate-900">{order.customerName}</h4>
          <p className="text-slate-600">Email: {order.customerEmail}</p>
          <p className="text-slate-600">Mobile: +91 {order.customerMobile}</p>
        </div>

        {/* Line Items Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-mono">
                <th className="py-2.5 font-bold uppercase tracking-wider">Item Description</th>
                <th className="py-2.5 font-bold uppercase tracking-wider text-right">Scope</th>
                <th className="py-2.5 font-bold uppercase tracking-wider text-right">Amount (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4">
                  <span className="font-bold text-slate-900 block text-sm">{order.serviceName}</span>
                  <span className="text-slate-500 text-xs block mt-0.5">{order.packageDescription}</span>
                </td>
                <td className="py-3 text-right text-slate-600 font-medium">Digital Dev Scope</td>
                <td className="py-3 text-right font-mono font-semibold text-slate-900">
                  ₹{order.amount.toLocaleString('en-IN')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="border-t border-slate-200 pt-4 flex justify-end">
          <div className="w-64 space-y-2 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Development Subtotal:</span>
              <span className="font-mono font-medium text-slate-900">
                ₹{order.amount.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Goods &amp; Services Tax (18%):</span>
              <span className="font-mono font-medium text-slate-900">
                ₹{order.taxAmount.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
              <span>Total Paid:</span>
              <span className="font-mono text-cyan-700">₹{order.totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Legal & Infrastructure Footnote */}
        <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
          <div className="flex items-start gap-2">
            <ServerOff className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <p>
              This invoice covers custom digital software development, engineering, and technical establishment work. Grock Technologies does not sell web hosting as a standalone service. Third-party infrastructure expenses (hosting servers, domain registrations, paid APIs, app store developer accounts) remain direct obligations of the customer.
            </p>
          </div>
          <div className="flex justify-between items-center pt-4 text-[10px] text-slate-400">
            <span>Authorized Signatory: Gagandeep Singh</span>
            <span>Grock Technologies · Official Tax Invoice</span>
          </div>
        </div>
      </div>

      {/* 3. Next Steps Timeline */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
          Next Steps in Your Project
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-1">
            <span className="font-mono font-bold text-cyan-700 block">STEP 1 · CONSULTATION</span>
            <p className="text-slate-600">
              Gagandeep Singh will review your contact details and reach out within 2–4 hours.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-1">
            <span className="font-mono font-bold text-cyan-700 block">STEP 2 · ASSETS INTAKE</span>
            <p className="text-slate-600">
              We gather any branding assets, content text, or test infrastructure access.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-1">
            <span className="font-mono font-bold text-cyan-700 block">STEP 3 · DEVELOPMENT SPRINT</span>
            <p className="text-slate-600">
              Active engineering commences according to the agreed milestone schedule.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
          >
            Return to Home
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="px-4 py-2 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
          >
            View More Services
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-600">
          <a
            href={`tel:${BUSINESS_INFO.mobile}`}
            className="flex items-center gap-1.5 hover:text-slate-900 font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-600" />
            <span>+91 {BUSINESS_INFO.mobile}</span>
          </a>
          <span>·</span>
          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-slate-900 font-semibold"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-600" />
            <span>{BUSINESS_INFO.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
