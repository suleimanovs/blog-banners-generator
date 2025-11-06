import React from 'react';
import { LocaleStrings } from '../locales';

interface SavedStateHandleBannerProps {
  strings: LocaleStrings['savedStateHandle'];
}

export function SavedStateHandleBanner({ strings }: SavedStateHandleBannerProps) {
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
        
        <div className="state-flow-section">
          {/* State flow visualization */}
          <div className="flow-container">
            {/* onSaveInstanceState */}
            <div className="state-box save">
              <div className="state-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                  <polyline points="17 21 17 13 7 13 7 21"/>
                  <polyline points="7 3 7 8 15 8"/>
                </svg>
              </div>
              <div className="state-label">{strings.onSaveInstanceState}</div>
            </div>
            
            {/* Arrow 1 */}
            <div className="flow-arrow">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <defs>
                  <linearGradient id="saveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M10 20 L35 20 M35 20 L28 13 M35 20 L28 27" 
                  stroke="url(#saveGradient1)" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Bundle */}
            <div className="state-box bundle">
              <div className="state-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6M9 15h6"/>
                </svg>
              </div>
              <div className="state-label">{strings.bundle}</div>
            </div>
            
            {/* Arrow 2 */}
            <div className="flow-arrow">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <defs>
                  <linearGradient id="saveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M10 20 L35 20 M35 20 L28 13 M35 20 L28 27" 
                  stroke="url(#saveGradient2)" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* SavedStateHandle */}
            <div className="state-box handle">
              <div className="state-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className="state-label">{strings.savedStateHandle}</div>
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
              <span>{strings.savedStateRegistry}</span>
            </div>
            <div className="component-item primary">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <span>{strings.activityThread}</span>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </div>
              <span>{strings.instrumentation}</span>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <span>{strings.activityClientRecord}</span>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 4v6h6M23 20v-6h-6"/>
                  <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
                </svg>
              </div>
              <span>{strings.lifecycle}</span>
            </div>
          </div>
        </div>
        
        {/* Quote section */}
        <div className="quote-section">
          <div className="quote-mark">"</div>
          <div className="quote-text">{strings.quote}</div>
        </div>
      </div>
      
      <style>{`
        .banner {
          width: 1200px;
          height: 630px;
          margin: 0;
          padding: 0;
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .grid-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
        }
        
        .content {
          position: relative;
          z-index: 1;
          padding: 50px 60px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: calc(100% - 120px);
          min-height: calc(100% - 100px);
        }
        
        .header-section {
          margin-bottom: 20px;
        }
        
        .title-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .main-title {
          font-size: 42px;
          font-weight: 700;
          color: #f8fafc;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .subtitle {
          font-size: 18px;
          color: #94a3b8;
          font-weight: 400;
          letter-spacing: 0.3px;
        }
        
        .state-flow-section {
          display: flex;
          flex-direction: column;
          gap: 30px;
          flex: 1;
          justify-content: center;
        }
        
        .flow-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .state-box {
          background: rgba(30, 41, 59, 0.8);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          min-width: 140px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .state-box.save {
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.2);
        }
        
        .state-box.bundle {
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
        }
        
        .state-box.handle {
          border-color: rgba(16, 185, 129, 0.5);
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.2);
        }
        
        .state-icon {
          width: 40px;
          height: 40px;
          color: #60a5fa;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .state-box.save .state-icon {
          color: #a78bfa;
        }
        
        .state-box.bundle .state-icon {
          color: #60a5fa;
        }
        
        .state-box.handle .state-icon {
          color: #34d399;
        }
        
        .state-label {
          font-size: 13px;
          font-weight: 600;
          color: #e2e8f0;
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
        }
        
        .flow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .components-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }
        
        .component-item {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }
        
        .component-item:hover {
          background: rgba(30, 41, 59, 0.9);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }
        
        .component-item.primary {
          border-color: rgba(59, 130, 246, 0.4);
          background: rgba(30, 41, 59, 0.8);
        }
        
        .component-icon {
          width: 20px;
          height: 20px;
          color: #60a5fa;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .component-item span {
          font-size: 12px;
          color: #cbd5e1;
          font-weight: 500;
          font-family: 'JetBrains Mono', monospace;
        }
        
        .quote-section {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(59, 130, 246, 0.2);
        }
        
        .quote-mark {
          font-size: 48px;
          color: rgba(59, 130, 246, 0.4);
          font-weight: 700;
          line-height: 1;
          font-family: Georgia, serif;
        }
        
        .quote-text {
          font-size: 16px;
          color: #94a3b8;
          font-style: italic;
          line-height: 1.5;
          flex: 1;
        }
      `}</style>
    </div>
  );
}

