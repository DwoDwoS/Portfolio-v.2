'use client';
import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
};

const baseClasses =
  'inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

const getStyles = (variant: NonNullable<ButtonProps['variant']>): React.CSSProperties => {
  if (variant === 'outline') {
    return {
      backgroundColor: 'transparent',
      color: 'rgb(var(--text-primary))',
      borderColor: 'rgb(var(--border-color))',
    };
  }

  if (variant === 'secondary') {
    return {
      backgroundColor: 'rgb(var(--bg-secondary))',
      color: 'rgb(var(--text-primary))',
      borderColor: 'rgb(var(--border-color))',
    };
  }

  return {
    backgroundImage:
      'linear-gradient(to bottom right, var(--btn-grad-from), var(--btn-grad-via), var(--btn-grad-to))',
    color: 'var(--btn-text)',
    borderColor: 'var(--btn-border)',
  };
};

const getHoverStyles = (variant: NonNullable<ButtonProps['variant']>): React.CSSProperties => {
  if (variant === 'outline') {
    return {
      backgroundColor: 'rgba(var(--bg-secondary), 0.15)',
      borderColor: 'var(--btn-border)',
      boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.35)',
      transform: 'scale(1.05)',
    };
  }
  if (variant === 'secondary') {
    return {
      backgroundColor: 'rgb(var(--bg-tertiary))',
      borderColor: 'rgb(var(--border-color))',
      boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 0 0 3px rgba(37, 99, 235, 0.25)',
      transform: 'scale(1.03)',
    };
  }
  return {
    filter: 'brightness(1.1)',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.35)',
    borderColor: 'var(--btn-border)',
    transform: 'scale(1.03)',
  };
};

export default function Button({ children, href, onClick, variant = 'primary', className }: ButtonProps) {
  const [hover, setHover] = React.useState(false);
  const styles = {
    ...getStyles(variant),
    ...(hover ? getHoverStyles(variant) : {}),
  };

  const cls = `${baseClasses} ${className ?? ''}`;

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        style={styles}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      className={cls}
      style={styles}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
