"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">MyStore</Link>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          {session ? (
            <>
              <Link href="/dashboard/add-product" onClick={() => setOpen(false)}>Add Product</Link>
              <button className="btn-red" onClick={() => signOut()}>Logout</button>
            </>
          ) : (
            <button className="btn-green" onClick={() => signIn("google")}>Login</button>
          )}
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? "✖️" : "☰"}
        </button>
      </div>

      <style jsx>{`
        nav.navbar {
          background: #fff;
          border-bottom: 1px solid #ccc;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #0070f3;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-links.open {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .nav-links a {
          text-decoration: none;
          color: #333;
        }
        .btn-green {
          background: #28a745;
          color: #fff;
          border: none;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .btn-green:hover { background: #218838; }
        .btn-red {
          background: #dc3545;
          color: #fff;
          border: none;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .btn-red:hover { background: #c82333; }
        .theme-btn {
          background: none;
          border: 1px solid #333;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          cursor: pointer;
        }
        .hamburger {
          display: none;
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            width: 100%;
            flex-direction: column;
            gap: 0.5rem;
          }
          .hamburger {
            display: block;
          }
        }
        body.dark {
          background: #121212;
          color: #eee;
        }
        body.dark .nav-links a { color: #eee; }
        body.dark .theme-btn { border-color: #eee; color: #eee; }
      `}</style>
    </nav>
  );
}
