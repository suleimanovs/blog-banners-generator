import React from 'react';

export function SerializationBanner() {
  return (
    <div className="banner">
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Main content */}
      <div className="content">
        <div className="left-section">
          <div className="title-group">
            <h1 className="main-title">Serialization</h1>
            <div className="subtitle">in JVM • Android • Kotlin Multiplatform</div>
          </div>
          
          <div className="tech-tags">
            <span className="tag">Serializable</span>
            <span className="tag">Externalizable</span>
            <span className="tag">Parcelable</span>
            <span className="tag">kotlinx.serialization</span>
          </div>
        </div>
        
        <div className="visual-section">
          {/* Object Box */}
          <div className="object-box">
            <div className="box-header">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="label">Object</span>
            </div>
            <div className="box-content">
              <div className="code-line">
                <span className="key">class</span>
                <span className="val">User</span>
              </div>
              <div className="code-line">
                <span className="key">val</span>
                <span className="prop">name</span>
                <span className="punct">:</span>
                <span className="type">String</span>
              </div>
              <div className="code-line">
                <span className="key">val</span>
                <span className="prop">age</span>
                <span className="punct">:</span>
                <span className="type">Int</span>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="arrow-container">
            <svg width="60" height="60" viewBox="0 0 60 60" className="arrow">
              <defs>
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path 
                d="M10 30 L35 30 M35 30 L28 23 M35 30 L28 37" 
                stroke="url(#arrowGradient)" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="45" cy="30" r="2" fill="url(#arrowGradient)">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          
          {/* Bytes Box */}
          <div className="bytes-box">
            <div className="box-header">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="label">Bytes</span>
            </div>
            <div className="box-content bytes">
              <div className="byte-line">
                <span className="hex">0x</span>
                <span className="byte">AC</span>
                <span className="byte">ED</span>
                <span className="byte">00</span>
                <span className="byte">05</span>
              </div>
              <div className="byte-line">
                <span className="hex">0x</span>
                <span className="byte">73</span>
                <span className="byte">72</span>
                <span className="byte">00</span>
                <span className="byte">04</span>
              </div>
              <div className="byte-line">
                <span className="hex">0x</span>
                <span className="byte">55</span>
                <span className="byte">73</span>
                <span className="byte">65</span>
                <span className="byte">72</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="corner-accent"></div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .banner {
          width: 1200px;
          height: 630px;
          background: #000000;
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
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(0deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
        }

        /* Content layout with safe-area */
        .content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 50px;
          gap: 60px;
          box-sizing: border-box;
          /* Safe-area: минимум 40px от краев для предотвращения обрезания */
          min-width: calc(100% - 80px);
          min-height: calc(100% - 80px);
        }

        .left-section {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .title-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .main-title {
          font-size: 72px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -2px;
          margin: 0;
          line-height: 1;
        }

        .subtitle {
          font-size: 24px;
          color: #64748b;
          font-weight: 400;
          letter-spacing: 0.5px;
        }

        .tech-tags {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 8px 16px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 14px;
          font-weight: 500;
          font-family: 'JetBrains Mono', monospace;
        }

        /* Visual section */
        .visual-section {
          display: flex;
          align-items: center;
          gap: 30px;
          justify-content: center;
        }

        .object-box,
        .bytes-box {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(71, 85, 105, 0.5);
          border-radius: 12px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          min-width: 240px;
        }

        .box-header {
          background: rgba(30, 41, 59, 0.8);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(71, 85, 105, 0.3);
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(100, 116, 139, 0.6);
        }

        .dots span:nth-child(1) {
          background: rgba(239, 68, 68, 0.6);
        }

        .dots span:nth-child(2) {
          background: rgba(245, 158, 11, 0.6);
        }

        .dots span:nth-child(3) {
          background: rgba(34, 197, 94, 0.6);
        }

        .label {
          color: #94a3b8;
          font-size: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 500;
        }

        .box-content {
          padding: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          line-height: 1.8;
        }

        .code-line {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .key {
          color: #c084fc;
        }

        .val {
          color: #fbbf24;
        }

        .prop {
          color: #60a5fa;
        }

        .punct {
          color: #64748b;
        }

        .type {
          color: #34d399;
        }

        /* Bytes styling */
        .box-content.bytes {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .byte-line {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .hex {
          color: #64748b;
          font-size: 12px;
        }

        .byte {
          color: #3b82f6;
          font-weight: 500;
          font-size: 13px;
        }

        /* Arrow */
        .arrow-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow {
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
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
          width: 200px;
          height: 200px;
          background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
}

