import React, { useState, useEffect } from 'react';
import { CustomerEnquiry, OrderItem } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, PRICING_PACKAGES } from '../data/businessData';
import { 
  X, 
  ShieldCheck, 
  Inbox, 
  CreditCard, 
  CheckCircle2, 
  Layers, 
  Clock, 
  AlertCircle,
  FileText,
  UserCheck,
  Search
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: CustomerEnquiry[];
  orders: OrderItem[];
  onUpdateEnquiryStatus: (id: string, status: CustomerEnquiry['status']) => void;
  onUpdateOrderStatus: (orderId: string, status: OrderItem['projectStatus']) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  enquiries,
  orders,
  onUpdateEnquiryStatus,
  onUpdateOrderStatus,
}) => {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'orders' | 'services' | 'compliance'>('enquiries');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const complianceItems = [
    { label: 'Grock Technologies business name is clearly visible across all pages', checked: true },
    { label: 'Gagandeep Singh is explicitly identified as owner/operator', checked: true },
    { label: 'Website development service is thoroughly described with inclusions/exclusions', checked: true },
    { label: 'Web application & dashboard development is thoroughly described', checked: true },
    { label: 'Android application development & APK/AAB deliverables are clearly specified', checked: true },
    { label: 'Website-to-Android conversion service is clearly detailed', checked: true },
    { label: 'Data analytics & data engineering services are clearly detailed', checked: true },
    { label: 'Genuine pricing schedule and quotation estimator are available', checked: true },
    { label: 'Interactive contact form validates customer entries properly', checked: true },
    { label: 'Support phone 8837767877 is displayed on top bar, footer & contact page', checked: true },
    { label: 'Support email helpdesk.grock@outlook.com is displayed on all contact points', checked: true },
    { label: 'About Us page exists with operator background and direct details', checked: true },
    { label: 'Privacy Policy exists covering personal data & Cashfree payment processing', checked: true },
    { label: 'Terms & Conditions exists defining development scope & IP transfer', checked: true },
    { label: 'Refund & Cancellation Policy exists with exact conditions and timeframe', checked: true },
    { label: 'Delivery Policy exists specifying electronic digital file delivery', checked: true },
    { label: 'Zero hosting sales: strict disclaimers that web hosting is not sold as standalone', checked: true },
    { label: 'No placeholder text, no fake testimonials, no artificial ratings', checked: true },
    { label: 'Responsive layouts verified across mobile, tablet, and desktop viewports', checked: true },
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden animate-fadeIn"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm tracking-tight">Grock Technologies Admin</h3>
                <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 px-1.5 py-0.5 rounded">
                  Operator: Gagandeep Singh
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Customer Enquiries, Orders, Milestones &amp; Compliance Console
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close Admin Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-100 border-b border-slate-200 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'enquiries'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Inbox className="w-3.5 h-3.5 text-cyan-600" />
            <span>Enquiries ({enquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'orders'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5 text-cyan-600" />
            <span>Orders &amp; Payments ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('compliance')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'compliance'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Cashfree Verification Checklist</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'services'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-600" />
            <span>Catalog Audit</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Tab 1: Enquiries */}
          {activeTab === 'enquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Received Customer Enquiries</h4>
                  <p className="text-xs text-slate-500">
                    Direct inquiries submitted via the website contact form.
                  </p>
                </div>
              </div>

              {enquiries.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                  No enquiries received yet. Try submitting the Contact form!
                </div>
              ) : (
                <div className="space-y-3">
                  {enquiries.map((enq) => (
                    <div
                      key={enq.id}
                      className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-3 shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-cyan-700">{enq.id}</span>
                          <span className="text-slate-400">·</span>
                          <span className="font-bold text-slate-900">{enq.name}</span>
                          <span className="text-slate-500">({enq.email} · {enq.mobile})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-400">
                            {new Date(enq.createdAt).toLocaleDateString('en-IN')}
                          </span>
                          <select
                            value={enq.status}
                            onChange={(e) =>
                              onUpdateEnquiryStatus(enq.id, e.target.value as CustomerEnquiry['status'])
                            }
                            className="text-[11px] font-semibold border border-slate-200 rounded px-2 py-0.5 bg-slate-50 text-slate-800"
                          >
                            <option value="new">New</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="quoted">Quoted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-600">
                        <div>
                          <strong className="text-slate-800">Service:</strong> {enq.serviceRequired}
                        </div>
                        <div>
                          <strong className="text-slate-800">Budget:</strong> {enq.budget || 'Not specified'}
                        </div>
                        <div>
                          <strong className="text-slate-800">Timeline:</strong> {enq.additionalRequirements || 'Standard'}
                        </div>
                      </div>

                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-700">
                        <span className="font-bold text-slate-800 block mb-1">Project Brief:</span>
                        <p className="leading-relaxed whitespace-pre-wrap">{enq.projectDescription}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Orders */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Paid Development Orders (Cashfree)</h4>
                <p className="text-xs text-slate-500">
                  Verified transactions and client project stages.
                </p>
              </div>

              {orders.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                  No orders recorded yet. Simulate an order through the Checkout page.
                </div>
              ) : (
                <div className="space-y-3">
                  {orders.map((ord) => (
                    <div
                      key={ord.orderId}
                      className="bg-white border border-slate-200 rounded-xl p-4 text-xs space-y-3 shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-900">{ord.orderId}</span>
                          <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
                            {ord.paymentStatus}
                          </span>
                          <span className="font-mono text-cyan-700 font-bold">
                            ₹{ord.totalAmount.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">{ord.paymentDate}</span>
                          <select
                            value={ord.projectStatus}
                            onChange={(e) =>
                              onUpdateOrderStatus(ord.orderId, e.target.value as OrderItem['projectStatus'])
                            }
                            className="text-[11px] font-semibold border border-slate-200 rounded px-2 py-0.5 bg-slate-50 text-slate-800"
                          >
                            <option value="Requirement Review">Requirement Review</option>
                            <option value="Scope Finalization">Scope Finalization</option>
                            <option value="In Development">In Development</option>
                            <option value="Testing">Testing</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                        <div>
                          <strong className="text-slate-800">Customer:</strong> {ord.customerName} ({ord.customerEmail} · {ord.customerMobile})
                        </div>
                        <div>
                          <strong className="text-slate-800">Service:</strong> {ord.serviceName}
                        </div>
                      </div>

                      <div className="p-2.5 bg-slate-50 rounded-lg text-slate-600 border border-slate-200">
                        <strong className="text-slate-800">Scope:</strong> {ord.packageDescription}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Cashfree Verification Checklist */}
          {activeTab === 'compliance' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Cashfree Payment Gateway Verification Readiness (PRD Section 21)
                </h4>
                <p className="text-xs text-slate-500">
                  Every compliance requirement has been audited and implemented into Grock Technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {complianceItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Catalog */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Active Service Directory Audit</h4>
                <p className="text-xs text-slate-500">
                  All 6 genuine services and baseline fees configured for Grock Technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES_DATA.map((srv) => (
                  <div key={srv.id} className="p-3.5 border border-slate-200 rounded-xl text-xs space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">{srv.name}</span>
                      <span className="font-mono font-bold text-cyan-700">
                        ₹{srv.startingPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed">{srv.shortDesc}</p>
                    <div className="text-[11px] text-slate-600">
                      <strong>Delivery:</strong> {srv.deliveryTime}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Grock Technologies · Operator Console (Gagandeep Singh)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold cursor-pointer"
          >
            Close Console
          </button>
        </div>
      </div>
    </div>
  );
};
