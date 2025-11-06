import { SerializationBanner } from './components/SerializationBanner';
import { TestingBanner } from './components/TestingBanner';
import { ViewModelBanner } from './components/ViewModelBanner';
import { FragmentViewModelBanner } from './components/FragmentViewModelBanner';
import { Download, FileImage } from 'lucide-react';
import html2canvas from 'html2canvas';
import { toSvg } from 'html-to-image';
import { useState } from 'react';
import { locales, Language } from './locales';

type ExportFormat = 'png' | 'svg' | 'html';
type BannerType = 'testing' | 'serialization' | 'viewmodel' | 'fragmentViewModel';

export default function App() {
  const [isExporting, setIsExporting] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('png');
  const [selectedBanner, setSelectedBanner] = useState<BannerType>('fragmentViewModel');
  const [language, setLanguage] = useState<Language>('ru');

  const handleExport = async () => {
    setIsExporting(true);
    const element = document.getElementById('banner-container');
    if (element) {
      try {
        // Inject CSS to override oklch colors
        const style = document.createElement('style');
        style.id = 'export-override';
        style.textContent = `
          * {
            --foreground: #252525 !important;
            --card-foreground: #252525 !important;
            --popover-foreground: #252525 !important;
            --primary-foreground: #ffffff !important;
            --ring: #b5b5b5 !important;
            --chart-1: #ff8c42 !important;
            --chart-2: #4ecdc4 !important;
            --chart-3: #556270 !important;
            --chart-4: #f4a261 !important;
            --chart-5: #e76f51 !important;
            --sidebar-foreground: #252525 !important;
            --sidebar-primary-foreground: #fbfbfb !important;
            --sidebar-accent-foreground: #3d3d3d !important;
            --sidebar-ring: #b5b5b5 !important;
            --background: #252525 !important;
            --foreground: #fbfbfb !important;
            --card: #252525 !important;
            --popover: #252525 !important;
            --primary: #fbfbfb !important;
            --secondary: #454545 !important;
            --muted: #454545 !important;
            --muted-foreground: #b5b5b5 !important;
            --accent: #454545 !important;
            --border: #454545 !important;
            --input: #454545 !important;
            --sidebar: #3d3d3d !important;
            --sidebar-primary: #7c3aed !important;
            --sidebar-accent: #454545 !important;
            --sidebar-border: #454545 !important;
          }
        `;
        document.head.appendChild(style);
        
        // Wait for styles to apply
        await new Promise(resolve => setTimeout(resolve, 200));
        
        if (selectedFormat === 'png') {
          const canvas = await html2canvas(element, {
            backgroundColor: '#000000',
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: true,
          });
          
          const link = document.createElement('a');
          link.download = `${selectedBanner}-banner-${language}.png`;
          link.href = canvas.toDataURL('image/png');
          link.click();
        } else if (selectedFormat === 'svg') {
          // Export as SVG
          const dataUrl = await toSvg(element, {
  backgroundColor: '#000000',
  skipAutoScale: true,           // Важно!
  pixelRatio: 1,                 // Не увеличивать разрешение
  filter: (node) => {
    // Игнорируем невидимые элементы
    if (node.style?.opacity === '0' || node.style?.display === 'none') {
      return false;
    }
    return true;
  }
});
          const link = document.createElement('a');
          link.download = `${selectedBanner}-banner-${language}.svg`;
          link.href = dataUrl;
          link.click();
        } else if (selectedFormat === 'html') {
          // Export as HTML
          const bannerElement = element.querySelector('.banner');
          if (bannerElement) {
            const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${selectedBanner === 'testing' ? 'Testing' : selectedBanner === 'serialization' ? 'Serialization' : selectedBanner === 'viewmodel' ? 'ViewModel' : 'Fragment ViewModel'} Banner</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            overflow: hidden;
        }
        body {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        ${bannerElement.querySelector('style')?.textContent || ''}
    </style>
</head>
<body>
    ${bannerElement.outerHTML.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')}
</body>
</html>`;
            
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `${selectedBanner}-banner-${language}.html`;
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
          }
        }
        
        // Clean up injected styles
        const injectedStyle = document.getElementById('export-override');
        if (injectedStyle) {
          document.head.removeChild(injectedStyle);
        }
      } catch (error) {
        console.error('Export failed:', error);
        alert('Export failed. Please try using browser screenshot or "Print to PDF" instead.');
        
        // Clean up in case of error
        const injectedStyle = document.getElementById('export-override');
        if (injectedStyle) {
          document.head.removeChild(injectedStyle);
        }
      }
    }
    setIsExporting(false);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#111827', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '0',
      gap: '24px',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1650px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '24px'
      }}>
        {/* Language selector */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          backgroundColor: '#1f2937', 
          borderRadius: '8px', 
          padding: '4px',
          margin: '0 20px'
        }}>
          <button
            onClick={() => setLanguage('ru')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: language === 'ru' ? '#2563eb' : 'transparent',
              color: language === 'ru' ? '#ffffff' : '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            🇷🇺 RU
          </button>
          <button
            onClick={() => setLanguage('en')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: language === 'en' ? '#2563eb' : 'transparent',
              color: language === 'en' ? '#ffffff' : '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            🇬🇧 EN
          </button>
        </div>

        {/* Banner selector */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          backgroundColor: '#1f2937', 
          borderRadius: '8px', 
          padding: '4px',
          margin: '0 20px'
        }}>
          <button
            onClick={() => setSelectedBanner('testing')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: selectedBanner === 'testing' ? '#2563eb' : 'transparent',
              color: selectedBanner === 'testing' ? '#ffffff' : '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Testing Banner
          </button>
          <button
            onClick={() => setSelectedBanner('serialization')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: selectedBanner === 'serialization' ? '#2563eb' : 'transparent',
              color: selectedBanner === 'serialization' ? '#ffffff' : '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Serialization Banner
          </button>
          <button
            onClick={() => setSelectedBanner('viewmodel')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: selectedBanner === 'viewmodel' ? '#2563eb' : 'transparent',
              color: selectedBanner === 'viewmodel' ? '#ffffff' : '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            ViewModel Banner
          </button>
          <button
            onClick={() => setSelectedBanner('fragmentViewModel')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: selectedBanner === 'fragmentViewModel' ? '#2563eb' : 'transparent',
              color: selectedBanner === 'fragmentViewModel' ? '#ffffff' : '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Fragment ViewModel Banner
          </button>
        </div>

        {/* Banner display */}
        <div id="banner-container" style={{ 
          borderRadius: '8px', 
          overflow: 'visible',
          width: '100%',
          maxWidth: '100%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent'
        }}>
          {selectedBanner === 'testing' ? (
            <TestingBanner strings={locales[language].testing} />
          ) : selectedBanner === 'serialization' ? (
            <SerializationBanner strings={locales[language].serialization} />
          ) : selectedBanner === 'viewmodel' ? (
            <ViewModelBanner strings={locales[language].viewmodel} />
          ) : (
            <FragmentViewModelBanner strings={locales[language].fragmentViewModel} />
          )}
        </div>

        {/* Format selector */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          backgroundColor: '#1f2937', 
          borderRadius: '8px', 
          padding: '4px',
          margin: '0 20px'
        }}>
          <button
            onClick={() => setSelectedFormat('png')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: selectedFormat === 'png' ? '#2563eb' : 'transparent',
              color: selectedFormat === 'png' ? '#ffffff' : '#9ca3af',
              fontSize: '14px',
            }}
          >
            <FileImage size={16} />
            PNG
          </button>
          <button
            onClick={() => setSelectedFormat('svg')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: selectedFormat === 'svg' ? '#2563eb' : 'transparent',
              color: selectedFormat === 'svg' ? '#ffffff' : '#9ca3af',
              fontSize: '14px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            SVG
          </button>
          <button
            onClick={() => setSelectedFormat('html')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: selectedFormat === 'html' ? '#2563eb' : 'transparent',
              color: selectedFormat === 'html' ? '#ffffff' : '#9ca3af',
              fontSize: '14px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M8 13h2M8 17h8M16 13h-2"/>
            </svg>
            HTML
          </button>
        </div>

        {/* Export button */}
        <button
          onClick={handleExport}
          disabled={isExporting}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            backgroundColor: isExporting ? '#4b5563' : '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            cursor: isExporting ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s',
            fontSize: '14px',
            margin: '0 20px'
          }}
          onMouseEnter={(e) => {
            if (!isExporting) {
              e.currentTarget.style.backgroundColor = '#1d4ed8';
            }
          }}
          onMouseLeave={(e) => {
            if (!isExporting) {
              e.currentTarget.style.backgroundColor = '#2563eb';
            }
          }}
        >
          <Download size={20} />
          {isExporting ? 'Exporting...' : `Download as ${selectedFormat.toUpperCase()}`}
        </button>

        <p style={{ 
          color: '#6b7280', 
          fontSize: '14px',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 20px'
        }}>
          Choose format and download the banner. 
          <span style={{ display: 'block', marginTop: '4px', fontSize: '13px', color: '#4b5563' }}>
            PNG - raster image (best for web/social media) • SVG - vector graphic (scalable, editable) • HTML - standalone web page (fully editable)
          </span>
        </p>
      </div>
    </div>
  );
}
