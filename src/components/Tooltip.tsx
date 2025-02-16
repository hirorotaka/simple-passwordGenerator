import { useState } from 'react';

type TooltipProps = {
  title: string;
  content: string;
  children: React.ReactNode;
};

export const Tooltip = ({ title, content, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 z-10 mb-1 min-w-40 -translate-x-1/2 rounded bg-gray-700 p-2 text-sm text-white shadow-lg">
          {title}
          <br />
          {content}
        </div>
      )}
    </div>
  );
};
