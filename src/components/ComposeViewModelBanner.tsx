import React from 'react';
import { LocaleStrings } from '../locales';

interface ComposeViewModelBannerProps {
  strings: LocaleStrings['composeViewModel'];
}

export function ComposeViewModelBanner({ strings }: ComposeViewModelBannerProps) {
  return (
    <div className="banner">
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Main content */}
      <div className="content">
        <div className="header-section">
          <div className="title-group">
            <h1 className="main-title">{strings.title}</h1>
            <div className="subtitle">{strings.subtitle}</div>
          </div>
        </div>
        
        <div className="architecture-section">
          {/* Compose and View connection */}
          <div className="platforms-container">
            <div className="platform-box compose">
              <div className="platform-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6M9 15h6"/>
                  <circle cx="12" cy="12" r="1"/>
                </svg>
              </div>
              <div className="platform-label">{strings.compose}</div>
              <div className="platform-code">{strings.viewModel}</div>
            </div>
            
            <div className="connection-arrow">
              <svg width="80" height="40" viewBox="0 0 80 40">
                <defs>
                  <linearGradient id="composeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M10 20 L35 20 M35 20 L28 13 M35 20 L28 27 M45 20 L70 20 M45 20 L52 13 M45 20 L52 27" 
                  stroke="url(#composeGradient)" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            <div className="platform-box view">
              <div className="platform-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6M9 15h6"/>
                </svg>
              </div>
              <div className="platform-label">{strings.view}</div>
              <div className="platform-code">{strings.viewModel}</div>
            </div>
          </div>
          
          {/* Components grid */}
          <div className="components-grid">
            <div className="component-item primary">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6M9 15h6"/>
                </svg>
              </div>
              <span>{strings.viewModelStoreOwner}</span>
            </div>
            <div className="component-item primary">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <span>{strings.localViewModelStoreOwner}</span>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span>{strings.viewHierarchy}</span>
            </div>
            <div className="component-item di">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <span>{strings.hiltViewModel}</span>
            </div>
            <div className="component-item di">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <span>{strings.koinViewModel}</span>
            </div>
          </div>
        </div>
        
        {/* Quote */}
        <div className="quote-section">
          <div className="quote-mark">"</div>
          <div className="quote-text">{strings.quote}</div>
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="corner-accent"></div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .banner {
          width: 1200px;
          height: 630px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
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
            linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px),
            linear-gradient(0deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.5;
        }

        /* Content layout with safe-area */
        .content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 50px 60px;
          box-sizing: border-box;
          min-width: calc(100% - 120px);
          min-height: calc(100% - 100px);
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
          font-size: 48px;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1.5px;
          margin: 0;
          line-height: 1.1;
        }

        .subtitle {
          font-size: 20px;
          color: #94a3b8;
          font-weight: 400;
          letter-spacing: 0.3px;
          font-family: 'JetBrains Mono', monospace;
        }

        /* Architecture section */
        .architecture-section {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
        }

        .platforms-container {
          display: flex;
          align-items: center;
          gap: 30px;
          justify-content: center;
        }

        .platform-box {
          background: rgba(30, 41, 59, 0.6);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 14px;
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          min-width: 160px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .platform-box.compose {
          border-color: rgba(139, 92, 246, 0.5);
        }

        .platform-box.view {
          border-color: rgba(16, 185, 129, 0.4);
        }

        .platform-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(59, 130, 246, 0.3);
        }

        .platform-icon {
          color: #60a5fa;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .platform-box.compose .platform-icon {
          color: #a78bfa;
        }

        .platform-box.view .platform-icon {
          color: #34d399;
        }
        
        .platform-icon svg {
          width: 36px;
          height: 36px;
        }

        .platform-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
        }

        .platform-code {
          font-size: 13px;
          color: #64748b;
          font-family: 'JetBrains Mono', monospace;
          font-style: italic;
        }

        .connection-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));
        }
        
        .connection-arrow svg {
          width: 80px;
          height: 40px;
        }

        /* Components grid */
        .components-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          width: 100%;
          max-width: 1000px;
        }

        .component-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: rgba(30, 41, 59, 0.3);
          border: 1px solid rgba(100, 116, 139, 0.2);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .component-item.primary {
          border-color: rgba(59, 130, 246, 0.4);
          background: rgba(30, 41, 59, 0.5);
        }

        .component-item.di {
          border-color: rgba(139, 92, 246, 0.3);
        }

        .component-item:hover {
          border-color: rgba(59, 130, 246, 0.5);
          transform: translateY(-2px);
          background: rgba(30, 41, 59, 0.6);
        }

        .component-item span {
          font-size: 12px;
          font-weight: 500;
          color: #cbd5e1;
          font-family: 'JetBrains Mono', monospace;
        }

        .component-icon {
          width: 30px;
          height: 30px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          flex-shrink: 0;
        }

        .component-item.primary .component-icon {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .component-item.di .component-icon {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
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
          color: rgba(59, 130, 246, 0.2);
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
          background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .corner-accent::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle at top right, rgba(139, 92, 246, 0.12) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
}

