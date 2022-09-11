import React from 'react';

type PrivateLayoutProps = {
  children: React.ReactNode;
};

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
  return <div>{children}</div>;
};

export default PrivateLayout;
