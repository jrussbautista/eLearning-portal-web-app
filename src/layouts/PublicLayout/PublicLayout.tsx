import React from 'react';

type PublicLayoutProps = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return <div>{children}</div>;
};

export default PublicLayout;
