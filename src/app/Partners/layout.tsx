import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners & Sponsors | PHDCC Pharma',
  description: 'Our valued partners and sponsors supporting PHDCC Pharma initiatives',
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}