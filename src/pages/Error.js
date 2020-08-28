import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section className="section error-section">
      <div className="error-container">
        <h1>oops! it's a dead link</h1>
        <Link to="/" className="btn btn-primary">
          return to home page
        </Link>
      </div>
    </section>
  );
}
