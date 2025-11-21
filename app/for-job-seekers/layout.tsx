import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Job Seekers | Hands of Grace Health Staffing',
  description: 'Apply to join our team of healthcare professionals. Flexible scheduling, competitive pay, and professional development opportunities.',
};

export default function ForJobSeekersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

