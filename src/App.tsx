import { Page, Section, Panel } from './components/layout';
import { useScrollSync } from './hooks/useScrollSync';
import { useScrollProgress } from './hooks/useScrollProgress';

function App() {
  const { progress } = useScrollProgress();
  
  useScrollSync({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    onUpdate: (progress) => {
      console.log('Scroll progress:', progress);
    },
  });

  return (
    <Page>
      {/* Hero Section */}
      <Section 
        minHeight="screen" 
        background="gradient"
        className="flex items-center justify-center"
      >
        <div style={{ textAlign: 'center' }} role="region" aria-label="Hero section">
          <h1 style={{ 
            fontSize: 'var(--font-size-6xl)',
            fontWeight: 'var(--font-weight-extrabold)',
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-wider)',
            background: 'linear-gradient(135deg, var(--color-cyan-primary) 0%, var(--color-gray-100) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 'var(--spacing-lg)',
            minHeight: 'auto',
          }}>
            SPA Foundation
          </h1>
          <p style={{ 
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-semibold)',
            lineHeight: 'var(--line-height-snug)',
            letterSpacing: 'var(--letter-spacing-wide)',
            color: 'var(--color-gray-200)',
            marginBottom: 'var(--spacing-xl)',
            maxWidth: '90vw',
            margin: '0 auto var(--spacing-xl) auto',
          }}>
            A modern single-page application foundation with Vite, React, TypeScript, and GSAP
          </p>
          <p 
            style={{ 
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-wide)',
              color: 'var(--color-cyan-primary)',
            }}
            aria-live="polite"
          >
            Scroll Progress: {Math.round(progress * 100)}%
          </p>
        </div>
      </Section>

      {/* Features Section */}
      <Section padding="xl" background="primary">
        <div 
          role="region" 
          aria-label="Features"
          style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 400px), 1fr))',
            gap: 'var(--spacing-xl)'
          }}
        >
          <Panel variant="glass" style={{ padding: 'var(--spacing-xl)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-wide)',
              color: 'var(--color-gray-100)',
              marginBottom: 'var(--spacing-md)'
            }}>Design System</h3>
            <p style={{ 
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-wide)',
              color: 'var(--color-gray-200)'
            }}>
              Deep midnight background palette with electric cyan accent tokens. 
              Modern wide-tracked typography with comprehensive spacing and depth layers.
            </p>
          </Panel>
          
          <Panel variant="glow" style={{ padding: 'var(--spacing-xl)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-wide)',
              color: 'var(--color-gray-100)',
              marginBottom: 'var(--spacing-md)'
            }}>Layout Components</h3>
            <p style={{ 
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-wide)',
              color: 'var(--color-gray-200)'
            }}>
              Shared Page, Section, and Panel shells with multiple variants 
              including glass morphism and glow effects.
            </p>
          </Panel>
          
          <Panel variant="solid" style={{ padding: 'var(--spacing-xl)' }}>
            <h3 style={{ 
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-tight)',
              letterSpacing: 'var(--letter-spacing-wide)',
              color: 'var(--color-gray-100)',
              marginBottom: 'var(--spacing-md)'
            }}>Scroll Utilities</h3>
            <p style={{ 
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: 'var(--line-height-relaxed)',
              letterSpacing: 'var(--letter-spacing-wide)',
              color: 'var(--color-gray-200)'
            }}>
              Utility hooks for scroll syncing with GSAP ScrollTrigger, 
              supporting complex storytelling sections and animations.
            </p>
          </Panel>
        </div>
      </Section>

      {/* Typography Showcase */}
      <Section padding="xl" background="secondary">
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-4xl)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-wide)',
            color: 'var(--color-gray-100)',
            marginBottom: 'var(--spacing-3xl)',
            textAlign: 'center'
          }}>Typography System</h2>
          
          <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
            <div>
              <p style={{ 
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-normal)',
                letterSpacing: 'var(--letter-spacing-widest)',
                color: 'var(--color-gray-400)',
                textTransform: 'uppercase',
                marginBottom: 'var(--spacing-sm)'
              }}>Display Heading</p>
              <h1 style={{ 
                fontSize: 'var(--font-size-6xl)',
                fontWeight: 'var(--font-weight-extrabold)',
                lineHeight: 'var(--line-height-tight)',
                letterSpacing: 'var(--letter-spacing-wider)',
                background: 'linear-gradient(135deg, var(--color-cyan-primary) 0%, var(--color-gray-100) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>The Quick Brown Fox</h1>
            </div>
            
            <div>
              <p style={{ 
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-normal)',
                letterSpacing: 'var(--letter-spacing-widest)',
                color: 'var(--color-gray-400)',
                textTransform: 'uppercase',
                marginBottom: 'var(--spacing-sm)'
              }}>Headline</p>
              <h2 style={{ 
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 'var(--line-height-tight)',
                letterSpacing: 'var(--letter-spacing-wide)',
                color: 'var(--color-gray-100)'
              }}>Jumps Over the Lazy Dog</h2>
            </div>
            
            <div>
              <p style={{ 
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-normal)',
                letterSpacing: 'var(--letter-spacing-widest)',
                color: 'var(--color-gray-400)',
                textTransform: 'uppercase',
                marginBottom: 'var(--spacing-sm)'
              }}>Title</p>
              <h3 style={{ 
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'var(--font-weight-semibold)',
                lineHeight: 'var(--line-height-snug)',
                letterSpacing: 'var(--letter-spacing-wide)',
                color: 'var(--color-gray-200)'
              }}>Typography with Wide Tracking</h3>
            </div>
            
            <div>
              <p style={{ 
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-normal)',
                letterSpacing: 'var(--letter-spacing-widest)',
                color: 'var(--color-gray-400)',
                textTransform: 'uppercase',
                marginBottom: 'var(--spacing-sm)'
              }}>Body Text</p>
              <p style={{ 
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 'var(--line-height-relaxed)',
                letterSpacing: 'var(--letter-spacing-wide)',
                color: 'var(--color-gray-200)'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            
            <div>
              <p style={{ 
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-normal)',
                letterSpacing: 'var(--letter-spacing-widest)',
                color: 'var(--color-gray-400)',
                textTransform: 'uppercase',
                marginBottom: 'var(--spacing-sm)'
              }}>Monospace</p>
              <div style={{ 
                fontFamily: 'var(--font-family-mono)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 'var(--line-height-normal)',
                color: 'var(--color-gray-300)',
                backgroundColor: 'var(--color-midnight-dark)',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-gray-700)'
              }}>
                <div>const message = "Hello, World!";</div>
                <div>console.log(message);</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Page>
  );
}

export default App;
