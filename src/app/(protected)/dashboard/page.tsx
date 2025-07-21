import React from 'react';
import { auth } from '@/lib/actions/authSetup';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
  const session = await auth();
  if (!session?.user) redirect('/');
  return (
    <div>
      <h1>Hi, {session?.user?.name}</h1>
    </div>
  );
};

export default DashboardPage;
