import React, { useState } from 'react';

interface AssetImageProps {
  src?: string;
  alt: string;
  fallback: string;
  className: string;
  fallbackClassName?: string;
}

export const AssetImage: React.FC<AssetImageProps> = ({
  src,
  alt,
  fallback,
  className,
  fallbackClassName,
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className={`${className} ${fallbackClassName || ''}`}>
        {fallback}
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />;
};
