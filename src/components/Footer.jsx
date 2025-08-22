"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>MyStore</h2>
          <p>Delivering amazing products worldwide.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link href="/products">Products</Link>
          <Link href="/dashboard/add-product">Add Product</Link>
          <Link href="/login">Login</Link>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"></a>
            <a href="#" aria-label="Twitter"></a>
            <a href="#" aria-label="Instagram"></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </div>

      <style jsx>{`
        .footer {
          background: #222;
          color: #fff;
          padding: 2rem 1rem 1rem;
        }
        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          gap: 2rem;
        }
        .footer h2, .footer h3 {
          margin-bottom: 0.5rem;
        }
        .footer-brand p {
          font-size: 0.9rem;
        }
        .footer-links, .footer-social {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .footer-links a, .footer-social a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover, .footer-social a:hover {
          color: #2575fc;
        }
        .social-icons a {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.85rem;
          border-top: 1px solid #444;
          padding-top: 1rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
