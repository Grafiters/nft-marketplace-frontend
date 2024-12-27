import React from 'react';
import './style.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`card-container ${className}`}>
      {children}
    </div>
  );
};

export default Card;
