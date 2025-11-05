import React from 'react';

export function TestingBanner() {
  return (
    <div className="banner">
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Main content */}
      <div className="content">
        <div className="header-section">
          <div className="title-group">
            <h1 className="main-title">Kotlin Testing Philosophy</h1>
            <div className="subtitle">Kotlin · Kotest · JUnit · Test Doubles</div>
          </div>
        </div>
        
        <div className="concepts-section">
          {/* Expect/Actual duality */}
          <div className="duality-container">
            <div className="expect-box">
              <div className="box-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
              </div>
              <div className="box-label">expect</div>
              <div className="box-desc">hypothesis</div>
            </div>
            
            <div className="duality-arrow">
              <svg viewBox="0 0 80 40">
                <defs>
                  <linearGradient id="dualityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M10 20 L70 20 M65 15 L70 20 L65 25" 
                  stroke="url(#dualityGradient)" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  d="M70 20 L10 20 M15 15 L10 20 L15 25" 
                  stroke="url(#dualityGradient)" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            
            <div className="actual-box">
              <div className="box-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className="box-label">actual</div>
              <div className="box-desc">reality</div>
            </div>
          </div>
          
          {/* Test Doubles */}
          <div className="doubles-container">
            <div className="doubles-title">Test Doubles</div>
            <div className="doubles-grid">
              <div className="double-item">
                <div className="double-icon mock">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M9 9h6M9 15h6"/>
                  </svg>
                </div>
                <span>Mock</span>
              </div>
              
              <div className="double-item">
                <div className="double-icon stub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 7v5"/>
                  </svg>
                </div>
                <span>Stub</span>
              </div>
              
              <div className="double-item">
                <div className="double-icon fake">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span>Fake</span>
              </div>
              
              <div className="double-item">
                <div className="double-icon spy">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <span>Spy</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote */}
        <div className="quote-section">
          <div className="quote-mark">"</div>
          <div className="quote-text">Controlled simulations of reality</div>
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="corner-accent"></div>
      
      {/* Animated particles */}
      <div className="particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .banner {
          width: 100%;
          max-width: 1500px;  /* Было 1200px - увеличь */
          height: 650px;      /* Было 600px - увеличь если нужно */
          background: linear-gradient(135deg, #0f0a1e 0%, #1a0f2e 50%, #0a0615 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }

        /* Grid background */
        .grid-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(90deg, rgba(139, 92, 246, 0.06) 1px, transparent 1px),
            linear-gradient(0deg, rgba(139, 92, 246, 0.06) 1px, transparent 1px);
          background-size: 30px 30px;
          background-position: 0 0;
          opacity: 0.6;
        }

        /* Content layout */
        .content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 70px 200px;
          box-sizing: border-box;
        }

        .header-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .title-group {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .main-title {
          font-size: 52px;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, #e0d5ff 50%, #c4b5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1.5px;
          margin: 0;
          line-height: 1.1;
        }

        .subtitle {
          font-size: 16px;
          color: #94a3b8;
          font-weight: 400;
          letter-spacing: 0.3px;
          font-family: 'JetBrains Mono', monospace;
        }

        /* Concepts section */
        .concepts-section {
          display: flex;
          margin-top: 15px;
          flex-direction: column;
          gap: 35px;
          align-items: center;
        }

        .duality-container {
          display: flex;
          align-items: center;
          gap: 30px;
          justify-content: center;
        }

        .expect-box,
        .actual-box {
          background: rgba(30, 20, 50, 0.5);
          border: 2px solid rgba(139, 92, 246, 0.3);
          border-radius: 14px;
          padding: 20px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-width: 150px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .expect-box:hover,
        .actual-box:hover {
          border-color: rgba(139, 92, 246, 0.6);
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(139, 92, 246, 0.2);
        }

        .expect-box {
          border-color: rgba(139, 92, 246, 0.4);
        }

        .actual-box {
          border-color: rgba(59, 130, 246, 0.4);
        }

        .actual-box:hover {
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 6px 24px rgba(59, 130, 246, 0.2);
        }

        .box-icon {
          color: #a78bfa;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .box-icon svg {
          width: 28px;
          height: 28px;
        }

        .actual-box .box-icon {
          color: #60a5fa;
        }

        .box-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
        }

        .box-desc {
          font-size: 12px;
          color: #64748b;
          font-style: italic;
        }

        .duality-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 6px rgba(139, 92, 246, 0.4));
        }
        
        .duality-arrow svg {
          width: 80px;
          height: 40px;
        }

        /* Test Doubles */
        .doubles-container {
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: center;
        }

        .doubles-title {
          font-size: 14px;
          font-weight: 600;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .doubles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .double-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background: rgba(30, 20, 50, 0.3);
          border: 1px solid rgba(100, 116, 139, 0.2);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .double-item:hover {
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-2px);
        }

        .double-item span {
          font-size: 13px;
          font-weight: 500;
          color: #cbd5e1;
          font-family: 'JetBrains Mono', monospace;
        }

        .double-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .double-icon.mock {
          background: rgba(244, 114, 182, 0.1);
          color: #f472b6;
        }

        .double-icon.stub {
          background: rgba(251, 191, 36, 0.1);
          color: #fbbf24;
        }

        .double-icon.fake {
          background: rgba(52, 211, 153, 0.1);
          color: #34d399;
        }

        .double-icon.spy {
          background: rgba(96, 165, 250, 0.1);
          color: #60a5fa;
        }

        .double-item:hover .double-icon {
          transform: scale(1.1);
        }

        /* Quote section */
        .quote-section {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 0;
          justify-content: center;
        }

        .quote-mark {
          font-size: 70px;
          font-weight: 700;
          color: rgba(139, 92, 246, 0.2);
          line-height: 0.6;
          font-family: Georgia, serif;
        }

        .quote-text {
          font-size: 18px;
          font-style: italic;
          color: #94a3b8;
          font-weight: 300;
        }

        /* Corner accent */
        .corner-accent {
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle at top right, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .corner-accent::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
        }

        /* Particles */
        .particles {
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 400px;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0) 70%);
          animation: particleFloat 6s ease-in-out infinite;
        }

        .particle-1 {
          width: 8px;
          height: 8px;
          top: 30px;
          right: 50px;
          animation-delay: 0s;
          animation-duration: 5s;
        }

        .particle-2 {
          width: 6px;
          height: 6px;
          top: 80px;
          right: 120px;
          animation-delay: 1s;
          animation-duration: 6s;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(99, 102, 241, 0) 70%);
        }

        .particle-3 {
          width: 10px;
          height: 10px;
          top: 50px;
          right: 200px;
          animation-delay: 2s;
          animation-duration: 7s;
        }

        .particle-4 {
          width: 5px;
          height: 5px;
          top: 120px;
          right: 80px;
          animation-delay: 0.5s;
          animation-duration: 5.5s;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 70%);
        }

        .particle-5 {
          width: 7px;
          height: 7px;
          top: 40px;
          right: 150px;
          animation-delay: 1.5s;
          animation-duration: 6.5s;
        }

        .particle-6 {
          width: 9px;
          height: 9px;
          top: 100px;
          right: 40px;
          animation-delay: 2.5s;
          animation-duration: 5.8s;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(99, 102, 241, 0) 70%);
        }

        .particle-7 {
          width: 6px;
          height: 6px;
          top: 70px;
          right: 180px;
          animation-delay: 3s;
          animation-duration: 6.2s;
        }

        .particle-8 {
          width: 8px;
          height: 8px;
          top: 90px;
          right: 250px;
          animation-delay: 1.8s;
          animation-duration: 5.3s;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 70%);
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(-10px, -15px) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: translate(5px, -25px) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translate(-5px, -10px) scale(1.05);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
