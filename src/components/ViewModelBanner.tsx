import React from 'react';

export function ViewModelBanner() {
  return (
    <div className="banner">
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Main content */}
      <div className="content">
        <div className="header-section">
          <div className="title-group">
            <h1 className="main-title">ViewModel в Activity под капотом</h1>
            <div className="subtitle">Как она выживает при пересоздании</div>
          </div>
        </div>
        
        <div className="lifecycle-section">
          {/* Lifecycle flow */}
          <div className="flow-container">
            {/* Activity Destroy */}
            <div className="state-box destroy">
              <div className="state-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3l18 18M21 3L3 21"/>
                  <circle cx="12" cy="12" r="9"/>
                </svg>
              </div>
              <div className="state-label">Activity</div>
              <div className="state-desc">destroy()</div>
            </div>
            
            {/* Arrow 1 */}
            <div className="flow-arrow">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <defs>
                  <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M10 20 L35 20 M35 20 L28 13 M35 20 L28 27" 
                  stroke="url(#flowGradient1)" 
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
              <div className="state-label">ViewModelStore</div>
              <div className="state-desc">сохранение</div>
            </div>
            
            {/* Arrow 2 */}
            <div className="flow-arrow">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <defs>
                  <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path 
                  d="M10 20 L35 20 M35 20 L28 13 M35 20 L28 27" 
                  stroke="url(#flowGradient2)" 
                  strokeWidth="2.5" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Activity Recreate */}
            <div className="state-box recreate">
              <div className="state-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 4v6h6M23 20v-6h-6"/>
                  <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
                </svg>
              </div>
              <div className="state-label">Activity</div>
              <div className="state-desc">onCreate()</div>
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
              <span>ViewModelStore</span>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <span>NonConfigurationInstances</span>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span>ActivityThread</span>
            </div>
            <div className="component-item">
              <div className="component-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                </svg>
              </div>
              <span>ActivityClientRecord</span>
            </div>
          </div>
        </div>
        
        {/* Quote */}
        <div className="quote-section">
          <div className="quote-mark">"</div>
          <div className="quote-text">Магия выживания через ViewModelStore</div>
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="corner-accent"></div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .banner {
          width: 1200px;
          height: 630px;
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0d1126 100%);
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
          background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #60a5fa 100%);
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
          border: 2px solid rgba(59, 130, 246, 0.3);
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
          border-color: rgba(59, 130, 246, 0.5);
        }

        .state-box.recreate {
          border-color: rgba(16, 185, 129, 0.4);
        }

        .state-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(59, 130, 246, 0.3);
        }

        .state-icon {
          color: #60a5fa;
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
          filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.4));
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

        .component-item:hover {
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
          background: rgba(30, 20, 50, 0.5);
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
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
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
          background: radial-gradient(circle at top right, rgba(16, 185, 129, 0.12) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
}

