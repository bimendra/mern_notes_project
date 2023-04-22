import React from 'react';
import { Outlet } from 'react-router-dom';
import DashHeader from './DashHeader';

export default function DashLayout() {
  return (
    <>
      <div>
        <DashHeader />
        <Outlet />
      </div>
    </>
  );
}
