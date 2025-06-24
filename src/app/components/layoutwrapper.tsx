'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import Loader from './Loader ';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;
