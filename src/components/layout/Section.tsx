import React, { ReactNode } from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'primary' | 'secondary' | 'glass' | 'gradient';
  minHeight?: 'auto' | 'screen' | 'partial';
}

const paddingStyles = {
  none: { padding: '0' },
  sm: { padding: 'clamp(1.5rem, 3vw, 1.5rem) 0' },
  md: { padding: 'clamp(2rem, 4vw, 3rem) 0' },
  lg: { padding: 'clamp(3rem, 5vw, 4rem) 0' },
  xl: { padding: 'clamp(4rem, 6vw, 6rem) 0' },
};

const backgroundStyles = {
  transparent: { backgroundColor: 'transparent' },
  primary: { backgroundColor: 'var(--color-midnight)' },
  secondary: { backgroundColor: 'var(--color-midnight-light)' },
  glass: { 
    backgroundColor: 'rgba(26, 26, 46, 0.8)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  gradient: { 
    background: 'linear-gradient(135deg, var(--color-midnight) 0%, var(--color-midnight-dark) 100%)'
  },
};

const minHeightStyles = {
  auto: { minHeight: 'auto' },
  screen: { minHeight: '100vh' },
  partial: { minHeight: '50vh' },
};

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  padding = 'md',
  background = 'transparent',
  minHeight = 'auto',
  style,
  ...rest
}) => {
  const combinedStyle = {
    ...paddingStyles[padding],
    ...backgroundStyles[background],
    ...minHeightStyles[minHeight],
    ...style,
  } as React.CSSProperties;

  const combinedClassName = [
    'w-full',
    'relative',
    'overflow-hidden',
    className,
  ].join(' ');

  return (
    <section {...rest} style={combinedStyle} className={combinedClassName}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(0.5rem, 5vw, 2rem)',
          paddingRight: 'clamp(0.5rem, 5vw, 2rem)',
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
