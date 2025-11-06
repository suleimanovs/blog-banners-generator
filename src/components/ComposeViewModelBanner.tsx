import React from 'react';
import { LocaleStrings } from '../locales';
import ComposeLogo from './logos/jetpackcompose-original.svg?url';

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
          {/* Compose and View connection with logo */}
          <div className="platforms-container">
            <div className="platform-box compose">
              <div className="compose-logo-wrapper">
                <img src={ComposeLogo} alt="Jetpack Compose" className="compose-logo" />
              </div>
              <div className="platform-label">{strings.compose}</div>
              <div className="platform-code">{strings.viewModel}</div>
            </div>
            
            <div className="connection-arrow">
              <svg width="100" height="60" viewBox="0 0 100 60">
                <defs>
                  <linearGradient id="composeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#3ddb85', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#4285f4', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3ddb85', stopOpacity: 1 }} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path 
                  d="M15 30 L40 30 M40 30 L33 23 M40 30 L33 37 M60 30 L85 30 M60 30 L67 23 M60 30 L67 37" 
                  stroke="url(#composeGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                />
                <circle cx="50" cy="30" r="4" fill="#4285f4" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            
            <div className="platform-box view">
              <div className="view-logo-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="view-logo">
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
          background: linear-gradient(135deg, #041619 0%, #083042 30%, #0a1a2e 60%, #041619 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        /* Animated background particles */
        .banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(61, 219, 133, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(66, 133, 244, 0.1) 0%, transparent 50%);
          animation: pulse 8s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
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
          background: linear-gradient(135deg, #3ddb85 0%, #ffffff 30%, #4285f4 70%, #3ddb85 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
          letter-spacing: -1.5px;
          margin: 0;
          line-height: 1.1;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
          border-color: rgba(61, 219, 133, 0.5);
          background: rgba(4, 22, 25, 0.7);
          box-shadow: 0 0 20px rgba(61, 219, 133, 0.2);
        }
        
        .compose-logo-wrapper {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(61, 219, 133, 0.1);
          border-radius: 12px;
          padding: 8px;
          margin-bottom: 4px;
        }
        
        .compose-logo {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 8px rgba(61, 219, 133, 0.4));
        }

        .platform-box.view {
          border-color: rgba(16, 185, 129, 0.5);
          background: rgba(4, 22, 25, 0.7);
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
        }
        
        .view-logo-wrapper {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 12px;
          padding: 8px;
          margin-bottom: 4px;
        }
        
        .view-logo {
          width: 100%;
          height: 100%;
          color: #10b981;
          filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.4));
        }

        .platform-box:hover {
          transform: translateY(-3px);
        }
        
        .platform-box.view:hover {
          box-shadow: 0 6px 24px rgba(16, 185, 129, 0.3);
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
          filter: drop-shadow(0 0 12px rgba(66, 133, 244, 0.5));
        }
        
        .connection-arrow svg {
          width: 100px;
          height: 60px;
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
          border-color: rgba(66, 133, 244, 0.4);
          background: rgba(8, 48, 66, 0.4);
        }

        .component-item.di {
          border-color: rgba(61, 219, 133, 0.3);
          background: rgba(4, 22, 25, 0.3);
        }

        .component-item:hover {
          border-color: rgba(66, 133, 244, 0.6);
          transform: translateY(-2px);
          background: rgba(8, 48, 66, 0.6);
        }
        
        .component-item.di:hover {
          border-color: rgba(61, 219, 133, 0.5);
          background: rgba(4, 22, 25, 0.5);
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
          background: rgba(66, 133, 244, 0.15);
          color: #4285f4;
          flex-shrink: 0;
        }

        .component-item.primary .component-icon {
          background: rgba(66, 133, 244, 0.2);
          color: #4285f4;
        }

        .component-item.di .component-icon {
          background: rgba(61, 219, 133, 0.15);
          color: #3ddb85;
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
          color: rgba(61, 219, 133, 0.2);
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
          width: 400px;
          height: 400px;
          background: radial-gradient(circle at top right, rgba(61, 219, 133, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .corner-accent::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle at top right, rgba(66, 133, 244, 0.12) 0%, transparent 70%);
        }
        
        .corner-accent::after {
          content: '';
          position: absolute;
          top: 50px;
          right: 50px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(61, 219, 133, 0.1) 0%, transparent 70%);
          animation: cornerPulse 4s ease-in-out infinite;
        }
        
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

