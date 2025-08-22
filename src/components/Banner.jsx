"use client";
export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Welcome to MyStore</h1>
        <p>Your one-stop shop for amazing products!</p>
        <a href="/products">
          <button>Shop Now</button>
        </a>
      </div>

      <style jsx>{`
        .banner {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          position: relative;
          text-align: center;
        }
        .banner-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .banner-content p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }
        .banner-content button {
          background: #fff;
          color: #2575fc;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s, background 0.3s;
        }
        .banner-content button:hover {
          transform: translateY(-3px);
          background: #f0f0f0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .banner {
            height: 300px;
            padding: 0 1rem;
          }
          .banner-content h1 {
            font-size: 2rem;
          }
          .banner-content p {
            font-size: 1rem;
          }
          .banner-content button {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}
