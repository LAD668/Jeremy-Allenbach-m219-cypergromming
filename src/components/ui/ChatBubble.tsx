import React from 'react';

interface ChatBubbleProps {
  message: string;
  sender: 'user' | 'other';
  isWarning?: boolean;
  timestamp?: Date;
  className?: string;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  sender,
  isWarning = false,
  timestamp,
  className = ''
}) => {
  const isUser = sender === 'user';
  
  const baseStyles = 'rounded-3xl px-5 py-4 max-w-[80%] break-words shadow-sm';
  const senderStyles = isUser
    ? 'bg-[#1A1A1A] text-white ml-auto'
    : 'bg-[#F5F1EB] text-[#1A1A1A] mr-auto border border-gray-200';
  const warningStyles = isWarning
    ? 'border-2 border-[#EF4444] bg-red-50 text-red-900'
    : '';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 ${className}`}>
      <div className={`${baseStyles} ${senderStyles} ${warningStyles}`}>
        <p className="text-sm">{message}</p>
        {timestamp && (
          <p className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
    </div>
  );
};
