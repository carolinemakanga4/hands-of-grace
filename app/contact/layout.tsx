import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Hands of Grace Health Staffing',
  description: 'Get in touch with Hands of Grace Health Staffing. Contact us for staffing solutions, job opportunities, or general inquiries.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

