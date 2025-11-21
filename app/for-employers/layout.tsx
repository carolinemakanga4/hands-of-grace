import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Employers | Hands of Grace Health Staffing',
  description: 'Request healthcare staff for your facility or home. Book a consultation and connect with qualified, vetted healthcare professionals.',
};

export default function ForEmployersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

