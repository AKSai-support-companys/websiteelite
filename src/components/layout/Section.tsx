import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'primary' | 'secondary' | 'glass' | 'gradient';
  id?: string;
  minHeight?: 'auto' | 'screen' | 'partial';
  style?: React.CSSProperties;
}

const paddingStyles = {
  none: { padding: '0' },
  sm: { padding: 'var(--spacing-lg) 0' },
  md: { padding: 'var(--spacing-2xl) 0' },
  lg: { padding: 'var(--spacing-3xl) 0' },
  xl: { padding: 'var(--spacing-4xl) 0' },
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
  id,
  minHeight = 'auto',
  style,
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
    <section id={id} style={combinedStyle} className={combinedClassName}>
      <div 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'var(--spacing-md)',
          paddingRight: 'var(--spacing-md)',
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
