import React, { useState, useEffect } from 'react';
import { PageId, CustomerEnquiry, OrderItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HighTechBackground } from './components/HighTechBackground';
import { HomePage } from './components/pages/HomePage';
import { ServicesPage } from './components/pages/ServicesPage';
import { PricingPage } from './components/pages/PricingPage';
import { HowItWorksPage } from './components/pages/HowItWorksPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { CheckoutPage } from './components/pages/CheckoutPage';
import { ConfirmationPage } from './components/pages/ConfirmationPage';
import { LegalPage } from './components/pages/LegalPage';
import { AdminModal } from './components/AdminModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('web-dev');
  const [initialContactBrief, setInitialContactBrief] = useState<string>('');
  const [adminOpen, setAdminOpen] = useState(false);

  // Checkout state
  const [checkoutItem, setCheckoutItem] = useState<{
    serviceName: string;
    packageDesc: string;
    amount: number;
  }>({
    serviceName: 'Starter Business Website',
    packageDesc: 'Up to 5 Pages (Home, About, Services, Contact, Terms), responsive layouts, contact form, establishment on customer hosting.',
    amount: 14999,
  });

  // Recent completed order
  const [latestOrder, setLatestOrder] = useState<OrderItem | null>(null);

  // Persistent enquiries and orders in state
  const [enquiries, setEnquiries] = useState<CustomerEnquiry[]>([
    {
      id: 'GRK-ENQ-928174',
      name: 'Vikas Malhotra',
      email: 'vikas.malhotra@zenithsupply.in',
      mobile: '9811234567',
      serviceRequired: 'Web Application Development',
      projectDescription: 'We need an internal order dispatch dashboard with role-based auth for our warehouse team. Around 6 screens with PostgreSQL database.',
      budget: '₹35,000 - ₹50,000',
      additionalRequirements: 'Within 3 weeks',
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      status: 'reviewed',
    },
    {
      id: 'GRK-ENQ-819203',
      name: 'Pooja Verma',
      email: 'pooja.verma@craftworks.co',
      mobile: '9788765432',
      serviceRequired: 'Website-to-Android Conversion',
      projectDescription: 'We have an existing Shopify/Next.js store and want an installable Android app with native splash screen and Google Play ready AAB.',
      budget: '₹18,000',
      additionalRequirements: 'Need APK for testing first',
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
      status: 'quoted',
    },
  ]);

  const [orders, setOrders] = useState<OrderItem[]>([
    {
      orderId: 'CF-GRK-718294',
      serviceId: 'srv-web-01',
      serviceName: 'Starter Business Website',
      packageDescription: 'Up to 5 Pages responsive website development with SEO metadata and contact form.',
      customerName: 'Amanpreet Singh',
      customerEmail: 'aman@apextechsolutions.in',
      customerMobile: '9876543210',
      amount: 14999,
      taxAmount: 2700,
      totalAmount: 17699,
      paymentStatus: 'PAID',
      paymentMethod: 'UPI',
      paymentReference: 'TXN-98234710',
      paymentDate: 'Oct 2, 2026, 11:30 AM',
      projectStatus: 'In Development',
      notes: 'Design review completed. Drafting responsive React components.',
    },
  ]);

  // Handle URL hash navigation or back/forward if needed
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    navigateTo('services');
  };

  const handleSelectPlanForCheckout = (item: {
    serviceName: string;
    packageDesc: string;
    amount: number;
  }) => {
    setCheckoutItem(item);
    navigateTo('checkout');
  };

  const handleNavigateToContact = (brief?: string) => {
    setInitialContactBrief(brief || '');
    navigateTo('contact');
  };

  const handleOrderCompleted = (order: OrderItem) => {
    setOrders((prev) => [order, ...prev]);
    setLatestOrder(order);
    navigateTo('confirmation');
  };

  const handleEnquirySubmitted = (enquiry: CustomerEnquiry) => {
    setEnquiries((prev) => [enquiry, ...prev]);
  };

  const handleUpdateEnquiryStatus = (id: string, status: CustomerEnquiry['status']) => {
    setEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, status } : e))
    );
  };

  const handleUpdateOrderStatus = (orderId: string, status: OrderItem['projectStatus']) => {
    setOrders((prev) =>
      prev.map((o) => (o.orderId === orderId ? { ...o, projectStatus: status } : o))
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col relative selection:bg-cyan-500/20 selection:text-cyan-900 font-sans">
      {/* High-Tech Animated Canvas Background */}
      <HighTechBackground />

      {/* Main Top Navigation (Top Bar Contract: 3 Zones) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectService={handleSelectService}
            onSelectPlanForCheckout={handleSelectPlanForCheckout}
            onNavigateToContact={handleNavigateToContact}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            selectedServiceId={selectedServiceId}
            onNavigate={navigateTo}
            onSelectPlanForCheckout={handleSelectPlanForCheckout}
            onNavigateToContact={handleNavigateToContact}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onNavigate={navigateTo}
            onSelectPlanForCheckout={handleSelectPlanForCheckout}
            onNavigateToContact={handleNavigateToContact}
          />
        )}

        {currentPage === 'how-it-works' && (
          <HowItWorksPage onNavigate={navigateTo} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialBrief={initialContactBrief}
            onEnquirySubmitted={handleEnquirySubmitted}
          />
        )}

        {currentPage === 'checkout' && (
          <CheckoutPage
            initialService={checkoutItem}
            onNavigate={navigateTo}
            onOrderCompleted={handleOrderCompleted}
          />
        )}

        {currentPage === 'confirmation' && latestOrder && (
          <ConfirmationPage order={latestOrder} onNavigate={navigateTo} />
        )}

        {currentPage === 'confirmation' && !latestOrder && orders.length > 0 && (
          <ConfirmationPage order={orders[0]} onNavigate={navigateTo} />
        )}

        {(currentPage === 'privacy' ||
          currentPage === 'terms' ||
          currentPage === 'refund' ||
          currentPage === 'delivery') && (
          <LegalPage currentPage={currentPage} onNavigate={navigateTo} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Operator Console (Gagandeep Singh) */}
      <AdminModal
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        enquiries={enquiries}
        orders={orders}
        onUpdateEnquiryStatus={handleUpdateEnquiryStatus}
        onUpdateOrderStatus={handleUpdateOrderStatus}
      />
    </div>
  );
}
