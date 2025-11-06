import React from 'react';
import { LocaleStrings } from '../locales';

interface FragmentViewModelBannerProps {
  strings: LocaleStrings['fragmentViewModel'];
}

export function FragmentViewModelBanner({ strings }: FragmentViewModelBannerProps) {
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
        
        <div className="lifecycle-section">
          {/* Lifecycle flow */}
          <div className="flow-container">
            {/* Fragment Destroy */}
            <div className="state-box destroy">
              <div className="state-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3l18 18M21 3L3 21"/>
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                </svg>
              </div>
              <div className="state-label">{strings.fragment}</div>
              <div className="state-desc">{strings.destroy}</div>
            </div>
            
            {/* Arrow 1 */}
            <div className="flow-arrow">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <defs>
                  <linearGradient id="fragmentFlowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M10 20 L35 20 M35 20 L28 13 M35 20 L28 27" 
                  stroke="url(#fragmentFlowGradient1)" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* ViewModelStore */}
            <div className="state-box store">
              <div className="state-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6M9 15h6"/>
                </svg>
              </div>
              <div className="state-label">{strings.store}</div>
              <div className="state-desc">{strings.saving}</div>
            </div>
            
            {/* Arrow 2 */}
            <div className="flow-arrow">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <defs>
                  <linearGradient id="fragmentFlowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M10 20 L35 20 M35 20 L28 13 M35 20 L28 27" 
                  stroke="url(#fragmentFlowGradient2)" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Fragment Recreate */}
            <div className="state-box recreate">
              <div className="state-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 4v6h6M23 20v-6h-6"/>
                  <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                </svg>
              </div>
              <div className="state-label">{strings.fragment}</div>
              <div className="state-desc">{strings.onCreate}</div>
            </div>
          </div>
          
          {/* Components list */}
          <div className="components-grid">
            <div className="component-item">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6M9 15h6"/>
                </svg>
              </div>
              <span>{strings.viewmodelStore}</span>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 3v18"/>
                </svg>
              </div>
              <span>{strings.fragmentManagerViewModel}</span>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="8" height="8" rx="1"/>
                  <rect x="14" y="2" width="8" height="8" rx="1"/>
                  <rect x="2" y="14" width="8" height="8" rx="1"/>
                  <rect x="14" y="14" width="8" height="8" rx="1"/>
                </svg>
              </div>
              <span>{strings.childFragments}</span>
            </div>
            <div className="component-item deprecated">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6M9 15h6"/>
                  <path d="M3 3l18 18" strokeWidth="2"/>
                </svg>
              </div>
              <span>{strings.retainFragments}</span>
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
          background: linear-gradient(135deg, #1a0f2e 0%, #2d1b4e 50%, #1a0f2e 100%);
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
            linear-gradient(90deg, rgba(139, 92, 246, 0.06) 1px, transparent 1px),
            linear-gradient(0deg, rgba(139, 92, 246, 0.06) 1px, transparent 1px);
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
          background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #8b5cf6 100%);
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

        /* Lifecycle section */
        .lifecycle-section {
          display: flex;
          flex-direction: column;
          gap: 35px;
          align-items: center;
        }

        .flow-container {
          display: flex;
          align-items: center;
          gap: 20px;
          justify-content: center;
        }

        .state-box {
          background: rgba(30, 20, 50, 0.6);
          border: 2px solid rgba(139, 92, 246, 0.3);
          border-radius: 14px;
          padding: 20px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-width: 140px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .state-box.destroy {
          border-color: rgba(239, 68, 68, 0.4);
        }

        .state-box.store {
          border-color: rgba(139, 92, 246, 0.5);
        }

        .state-box.recreate {
          border-color: rgba(16, 185, 129, 0.4);
        }

        .state-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(139, 92, 246, 0.3);
        }

        .state-icon {
          color: #8b5cf6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .state-box.destroy .state-icon {
          color: #f87171;
        }

        .state-box.recreate .state-icon {
          color: #34d399;
        }
        
        .state-icon svg {
          width: 32px;
          height: 32px;
        }

        .state-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
        }

        .state-desc {
          font-size: 12px;
          color: #64748b;
          font-style: italic;
        }

        .flow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 6px rgba(139, 92, 246, 0.4));
        }
        
        .flow-arrow svg {
          width: 60px;
          height: 40px;
        }

        /* Components grid */
        .components-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          width: 100%;
          max-width: 900px;
        }

        .component-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(30, 20, 50, 0.3);
          border: 1px solid rgba(100, 116, 139, 0.2);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .component-item.deprecated {
          border-color: rgba(239, 68, 68, 0.3);
          opacity: 0.7;
        }

        .component-item:hover {
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-2px);
          background: rgba(30, 20, 50, 0.5);
        }

        .component-item.deprecated:hover {
          border-color: rgba(239, 68, 68, 0.5);
        }

        .component-item span {
          font-size: 13px;
          font-weight: 500;
          color: #cbd5e1;
          font-family: 'JetBrains Mono', monospace;
        }

        .component-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
        }

        .component-item.deprecated .component-icon {
          background: rgba(239, 68, 68, 0.1);
          color: #f87171;
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
      `}</style>
    </div>
  );
}

