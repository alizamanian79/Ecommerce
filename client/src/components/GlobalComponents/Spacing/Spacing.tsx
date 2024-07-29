import React from 'react';

interface SpacingProps {
  children: React.ReactNode;
}

const Spacing: React.FC<SpacingProps> = ({ children }) => {
  return (
    <div className="w-94 h-auto flex items-center flex-col">
      {children}
    </div>
  );
}

export default Spacing;
