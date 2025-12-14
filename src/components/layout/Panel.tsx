import React, { ReactNode } from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'glow' | 'solid';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  border?: boolean;
  shadow?: boolean;
}

const variantStyles = {
  default: { 
    backgroundColor: 'var(--color-midnight-light)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  glass: { 
    backgroundColor: 'rgba(26, 26, 46, 0.6)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  glow: { 
    backgroundColor: 'rgba(0, 217, 255, 0.05)',
    border: '1px solid rgba(0, 217, 255, 0.2)',
    boxShadow: '0 0 40px rgba(0, 217, 255, 0.1)',
  },
  solid: { 
    backgroundColor: 'var(--color-midnight-lighter)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
};

const paddingStyles = {
  none: { padding: '0' },
  sm: { padding: 'var(--spacing-sm) var(--spacing-md)' },
  md: { padding: 'var(--spacing-md) var(--spacing-lg)' },
  lg: { padding: 'var(--spacing-lg) var(--spacing-xl)' },
  xl: { padding: 'var(--spacing-xl) var(--spacing-2xl)' },
};

const borderRadiusStyles = {
  sm: { borderRadius: 'var(--radius-sm)' },
  md: { borderRadius: 'var(--radius-md)' },
  lg: { borderRadius: 'var(--radius-lg)' },
  xl: { borderRadius: 'var(--radius-xl)' },
  full: { borderRadius: 'var(--radius-full)' },
};

export const Panel: React.FC<PanelProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  borderRadius = 'lg',
  border = true,
  shadow = true,
  style,
  ...rest
}) => {
  const combinedStyle = {
    ...variantStyles[variant],
    ...paddingStyles[padding],
    ...borderRadiusStyles[borderRadius],
    ...(border && { border: variantStyles[variant].border }),
    ...(shadow && {
      boxShadow: variant === 'glow' ? variantStyles[variant].boxShadow : 'var(--shadow-lg)',
    }),
    ...style,
  } as React.CSSProperties;

  const combinedClassName = [
    'w-full',
    'relative',
    'transition-all',
    'duration-300',
    'ease-out',
    className,
  ].join(' ');

  return (
    <div {...rest} style={combinedStyle} className={combinedClassName}>
      {children}
    </div>
  );
};

export default Panel;
