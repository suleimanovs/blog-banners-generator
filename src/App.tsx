import { SerializationBanner } from './components/SerializationBanner';
import { TestingBanner } from './components/TestingBanner';
import { ViewModelBanner } from './components/ViewModelBanner';
import { FragmentViewModelBanner } from './components/FragmentViewModelBanner';
import { ComposeViewModelBanner } from './components/ComposeViewModelBanner';
import { Download, FileImage } from 'lucide-react';
import html2canvas from 'html2canvas';
import { toSvg } from 'html-to-image';
import { useState } from 'react';
import { locales, Language } from './locales';

type ExportFormat = 'png' | 'svg' | 'html';
type BannerType = 'testing' | 'serialization' | 'viewmodel' | 'fragmentViewModel' | 'composeViewModel';

export default function App() {
  const [isExporting, setIsExporting] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('png');
  const [selectedBanner, setSelectedBanner] = useState<BannerType>('composeViewModel');
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
            // Get banner HTML and replace img tags with inline SVG
            let bannerHTML = bannerElement.outerHTML.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
            
            // Replace img tags with SVG content for Compose logo
            const composeLogoImg = bannerElement.querySelector('.compose-logo');
            if (composeLogoImg && composeLogoImg instanceof HTMLImageElement) {
              try {
                // Load SVG from the image src and inline it
                const imgSrc = composeLogoImg.src;
                if (imgSrc) {
                  const response = await fetch(imgSrc);
                  const svgText = await response.text();
                  // Extract just the SVG content (remove XML declaration if present)
                  const svgContent = svgText.replace(/<\?xml[^>]*\?>/i, '').trim();
                  // Replace the img tag with the SVG content
                  bannerHTML = bannerHTML.replace(
                    /<img[^>]*class="compose-logo"[^>]*>/gi,
                    `<div class="compose-logo">${svgContent}</div>`
                  );
                }
              } catch (e) {
                console.error('Failed to inline Compose logo:', e);
                // Fallback: use hardcoded SVG
                const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><g fill="none"><path fill="#083042" d="M41.226 76.778a4 4 0 0 1-.47-1.29c.09.452.25.887.47 1.29m.578.713c.222.22.472.411.749.548l18.88 10.565l-18.88-10.565a2.9 2.9 0 0 1-.747-.548z"/><path fill="#083042" d="M64.342 101.967h-.14a8.3 8.3 0 0 1-4.014-1.016l-28.182-15.75c-1.663-.932-2.686-2.66-2.686-4.527V48.628c0-1.373.249-2.69.83-3.842L8.114 32.522c-.913 1.92-1.383 4.088-1.356 6.366v52.927a8.68 8.68 0 0 0 4.458 7.49l46.481 26.012c2.05 1.152 4.347 1.701 6.617 1.701v-.027c.055-3.32.028-16.628.028-25.023z"/><path fill="#3ddb85" d="m86.46 50.6l-.167-.246c-.138-.192-.275-.357-.413-.548c.138.164.275.356.413.547a1 1 0 0 1 .167.247M63.262 37.76c.14 0 .251-.027.39-.027c-.139.027-.278.027-.39.027"/><path fill="#3ddc84" d="M30.122 44.757a7.2 7.2 0 0 1 2.825-3.072l26.52-15.503a8.07 8.07 0 0 1 8.03-.082l26.798 15.009a9 9 0 0 1 3.018 2.743L118.99 31.04a14.9 14.9 0 0 0-4.955-4.5L69.766 1.764a13.32 13.32 0 0 0-13.233.137L12.765 27.472a11.7 11.7 0 0 0-4.651 5.049l22.009 12.236z"/><path fill="#3ddb85" d="M62.157 37.983c.057-.028.114-.028.17-.056c-.056.028-.113.028-.17.056m-20.88 12.949c.056-.11.111-.22.168-.3c-.057.109-.111.19-.168.3l-.082.246z"/><path fill="#4285f4" d="M118.962 31.04L97.285 43.852c.83 1.207 1.329 2.633 1.355 4.089v30.51a7.88 7.88 0 0 1-3.93 6.914L68.188 100.87a8.1 8.1 0 0 1-3.849 1.097c.029 8.369.029 21.677-.027 24.997v.027a13.53 13.53 0 0 0 6.617-1.812l43.769-25.599c4.07-2.387 6.562-6.723 6.506-11.415V37.817c-.028-2.442-.858-4.774-2.242-6.777"/><path fill="#4285f4" d="M86.963 75.187c-.028.056-.028.111-.056.168a.4.4 0 0 0 .056-.168m-.278-24.227c-.057-.138-.14-.248-.223-.385c.083.137.166.275.222.385zM66.807 88.576L84.58 78.178c.111-.054.195-.138.306-.192c-.111.054-.195.138-.306.192l-17.773 10.4zM86.74 75.818c-.056.138-.139.275-.196.413c.057-.165.112-.303.196-.413"/><path fill="#d6f0ff" d="M41.198 51.178a5.5 5.5 0 0 0-.415 1.675c-.028.218-.028.438-.028.686v21.483c0 .164 0 .302.028.467c.056.465.222.905.47 1.29c.167.274.36.492.555.712c.222.22.47.411.746.55l18.882 10.563a5.5 5.5 0 0 0 2.684.685h.195a5.16 5.16 0 0 0 2.492-.74L84.58 78.15c.111-.055.194-.138.305-.192c.194-.137.388-.275.554-.44q.391-.354.719-.768c.138-.192.277-.383.388-.576c.082-.136.139-.274.193-.412c.056-.135.14-.301.195-.465c.027-.056.027-.111.055-.165a5.4 5.4 0 0 0 .249-1.647V53.044c0-.383-.056-.74-.138-1.096c-.055-.248-.14-.468-.222-.688l-.166-.328c-.055-.138-.14-.247-.222-.385l-.166-.246c-.138-.193-.277-.357-.415-.549a5.6 5.6 0 0 0-1.606-1.29L66.337 38.394a6 6 0 0 0-.97-.44a6 6 0 0 0-1.385-.246h-.36c-.137 0-.248 0-.386.026a5.7 5.7 0 0 0-.942.165c-.055.027-.11.027-.166.056c-.415.11-.803.301-1.191.52l-17.773 10.4a4.6 4.6 0 0 0-1.33 1.18c-.137.192-.276.384-.387.576c-.055.11-.11.192-.166.302l-.083.246Z"/><path fill="#083042" d="M64.312 89.288h-.194a5.5 5.5 0 0 1-2.686-.684L42.552 78.04a3.7 3.7 0 0 1-.748-.549a3.3 3.3 0 0 1-.554-.714a4 4 0 0 1-.47-1.29c-.029-.163-.029-.301-.029-.465V53.537c0-.219 0-.465.029-.686c.053-.575.192-1.14.415-1.674L36.1 48.078l-5.98-3.32c-.554 1.152-.83 2.468-.83 3.841v32.047a5.32 5.32 0 0 0 2.685 4.528l28.157 15.776a8 8 0 0 0 4.014 1.016h.14c0-4.089-.029-6.997-.029-6.997l.055-5.68z"/><path fill="#041619" d="M64.312 89.288h-.194a5.5 5.5 0 0 1-2.686-.684L42.552 78.04a3.7 3.7 0 0 1-.748-.549a3.3 3.3 0 0 1-.554-.714a4 4 0 0 1-.47-1.29c-.029-.163-.029-.301-.029-.465V53.537c0-.219 0-.465.029-.686c.053-.575.192-1.14.415-1.674L36.1 48.078l-5.98-3.32c-.554 1.152-.83 2.468-.83 3.841v32.047a5.32 5.32 0 0 0 2.685 4.528l28.157 15.776a8 8 0 0 0 4.014 1.016h.14c0-4.089-.029-6.997-.029-6.997l.055-5.68z"/><path fill="#3ddb85" d="m94.266 41.109l-26.799-15.01a8.07 8.07 0 0 0-8.029.083l-26.52 15.504a7.05 7.05 0 0 0-2.826 3.073l6.01 3.32l5.093 3.099l.082-.246c.056-.111.111-.22.166-.302c.111-.192.25-.384.388-.576c.36-.467.803-.85 1.33-1.18l17.772-10.4q.57-.32 1.191-.52c.056-.027.111-.027.166-.056q.463-.126.941-.164c.138 0 .249-.028.388-.028h.36c.469.03.933.111 1.384.246q.512.162.969.441l17.966 10.07a6 6 0 0 1 1.608 1.289c.137.164.277.357.414.548l.167.246l4.595-3.044l6.229-3.704c-.803-1.071-1.827-2.032-3.045-2.69z"/><path fill="#37bf6e" d="m94.266 41.109l-26.799-15.01a8.07 8.07 0 0 0-8.029.083l-26.52 15.504a7.05 7.05 0 0 0-2.826 3.073l6.01 3.32l5.093 3.099l.082-.246c.056-.111.111-.22.166-.302c.111-.192.25-.384.388-.576c.36-.467.803-.85 1.33-1.18l17.772-10.4q.57-.32 1.191-.52c.056-.027.111-.027.166-.056q.463-.126.941-.164c.138 0 .249-.028.388-.028h.36c.469.03.933.111 1.384.246q.512.162.969.441l17.966 10.07a6 6 0 0 1 1.608 1.289c.137.164.277.357.414.548l.167.246l4.595-3.044l6.229-3.704c-.803-1.071-1.827-2.032-3.045-2.69z"/><path fill="#4285f4" d="M86.46 50.602c.083.136.139.246.221.384l.167.329a4.8 4.8 0 0 1 .36 1.783V73.54a5.4 5.4 0 0 1-.25 1.646c-.027.054-.027.11-.055.164a3.4 3.4 0 0 1-.193.468c-.057.135-.14.273-.195.41c-.11.193-.249.384-.388.577a6 6 0 0 1-.719.767c-.166.165-.36.302-.554.44c-.111.054-.193.137-.304.192L66.776 88.602a5.84 5.84 0 0 1-2.492.742v5.679s0 2.909.028 6.997a7.8 7.8 0 0 0 3.849-1.097l26.52-15.504c2.465-1.453 3.96-4.088 3.932-6.913V47.995c-.027-1.482-.525-2.882-1.355-4.089l-6.231 3.705z"/><path fill="#3870b2" d="M86.46 50.602c.083.136.139.246.221.384l.167.329a4.8 4.8 0 0 1 .36 1.783V73.54a5.4 5.4 0 0 1-.25 1.646c-.027.054-.027.11-.055.164a3.4 3.4 0 0 1-.193.468c-.057.135-.14.273-.195.41c-.11.193-.249.384-.388.577a6 6 0 0 1-.719.767c-.166.165-.36.302-.554.44c-.111.054-.193.137-.304.192L66.776 88.602a5.84 5.84 0 0 1-2.492.742v5.679s0 2.909.028 6.997a7.8 7.8 0 0 0 3.849-1.097l26.52-15.504c2.465-1.453 3.96-4.088 3.932-6.913V47.995c-.027-1.482-.525-2.882-1.355-4.089l-6.231 3.705z"/><path fill="#d6f0ff" d="M62.155 37.982c-.416.11-.804.302-1.19.52l-17.774 10.4l17.772-10.398a4.5 4.5 0 0 1 1.19-.52z"/><path fill="#000" d="M62.155 37.982c-.416.11-.804.302-1.19.52l-17.774 10.4l17.772-10.398a4.5 4.5 0 0 1 1.19-.52z" opacity=".1"/><path fill="#d6f0ff" d="M85.88 49.806a5.6 5.6 0 0 0-1.605-1.29l-17.968-10.07l17.967 10.07a5.6 5.6 0 0 1 1.606 1.29"/><path fill="#000" d="M85.88 49.806a5.6 5.6 0 0 0-1.605-1.29l-17.968-10.07l17.967 10.07a5.6 5.6 0 0 1 1.606 1.29" opacity=".1"/><path fill="#d6f0ff" d="M86.848 51.289a7 7 0 0 1 .22.684c-.055-.219-.14-.438-.222-.684z"/><path fill="#000" d="M86.848 51.289a7 7 0 0 1 .22.684c-.055-.219-.14-.438-.222-.684z" opacity=".1"/><path fill="#d6f0ff" d="M86.956 75.186a5.3 5.3 0 0 0 .249-1.646V53.098V73.54a5.3 5.3 0 0 1-.25 1.646z"/><path fill="#000" d="M86.956 75.186a5.3 5.3 0 0 0 .249-1.646V53.098V73.54a5.3 5.3 0 0 1-.25 1.646z" opacity=".1"/></g></svg>`;
                bannerHTML = bannerHTML.replace(
                  /<img[^>]*class="compose-logo"[^>]*>/gi,
                  `<div class="compose-logo">${svgContent}</div>`
                );
              }
            }
            
            const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${selectedBanner === 'testing' ? 'Testing' : selectedBanner === 'serialization' ? 'Serialization' : selectedBanner === 'viewmodel' ? 'ViewModel' : selectedBanner === 'fragmentViewModel' ? 'Fragment ViewModel' : 'Compose ViewModel'} Banner</title>
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
        .compose-logo-wrapper .compose-logo {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .compose-logo-wrapper .compose-logo svg {
          width: 100%;
          height: 100%;
        }
    </style>
</head>
<body>
    ${bannerHTML}
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
          <button
            onClick={() => setSelectedBanner('composeViewModel')}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: selectedBanner === 'composeViewModel' ? '#2563eb' : 'transparent',
              color: selectedBanner === 'composeViewModel' ? '#ffffff' : '#9ca3af',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Compose ViewModel Banner
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
          ) : selectedBanner === 'fragmentViewModel' ? (
            <FragmentViewModelBanner strings={locales[language].fragmentViewModel} />
          ) : (
            <ComposeViewModelBanner strings={locales[language].composeViewModel} />
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
