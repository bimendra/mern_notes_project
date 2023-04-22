import React from 'react';
import { Link } from 'react-router-dom';

export default function DashHeader() {
  return (
    <>
      <Link to="/dash/notes">
        <h3>Tech Notes</h3>
      </Link>
      <nav></nav>
    </>
  );
}
