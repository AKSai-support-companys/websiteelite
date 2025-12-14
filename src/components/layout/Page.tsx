import React, { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'primary' | 'secondary' | 'gradient';
  id?: string;
}

const maxWidthStyles = {
  sm: { maxWidth: '640px' },
  md: { maxWidth: '768px' },
  lg: { maxWidth: '1024px' },
  xl: { maxWidth: '1280px' },
  '2xl': { maxWidth: '1536px' },
  full: { maxWidth: '100%' },
};

const paddingStyles = {
  none: { padding: '0' },
  sm: { padding: 'clamp(1rem, 3vw, 2rem) clamp(0.5rem, 5vw, 1rem)' },
  md: { padding: 'clamp(2rem, 4vw, 3rem) clamp(0.75rem, 5vw, 1.5rem)' },
  lg: { padding: 'clamp(3rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)' },
  xl: { padding: 'clamp(4rem, 6vw, 5rem) clamp(1.25rem, 5vw, 2.5rem)' },
};

const backgroundStyles = {
  primary: { backgroundColor: 'var(--color-midnight)' },
  secondary: { backgroundColor: 'var(--color-midnight-light)' },
  gradient: { 
    background: 'linear-gradient(135deg, var(--color-midnight) 0%, var(--color-midnight-dark) 100%)' 
  },
};

export const Page: React.FC<PageProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
  padding = 'md',
  background = 'primary',
  id,
}) => {
  const combinedStyle = {
    ...maxWidthStyles[maxWidth],
    ...paddingStyles[padding],
    ...backgroundStyles[background],
  } as React.CSSProperties;

  const combinedClassName = [
    'min-h-screen',
    'w-full',
    'mx-auto',
    'relative',
    className,
  ].join(' ');

  return (
    <main id={id} style={combinedStyle} className={combinedClassName}>
      {children}
    </main>
  );
};

export default Page;
