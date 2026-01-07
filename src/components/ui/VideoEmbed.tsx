import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface VideoEmbedProps {
  videoId: string;
  title: string;
  description?: string;
  platform?: 'youtube' | 'vimeo';
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({
  videoId,
  title,
  description,
  platform = 'youtube'
}) => {
  const [hasError, setHasError] = useState(false);

  const getVideoUrl = () => {
    if (platform === 'youtube') {
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      return `https://player.vimeo.com/video/${videoId}`;
    }
  };

  if (hasError) {
    return (
      <div className="bg-[#F5F1EB] rounded-3xl p-8 text-center">
        <p className="text-lg text-[#6B6B6B] mb-4 font-semibold">Video konnte nicht geladen werden.</p>
        <p className="text-[#6B6B6B] mb-6">Hier sind alternative Ressourcen:</p>
        <div className="space-y-3">
          <Link to="/protection" className="block text-[#1A1A1A] hover:underline font-medium">
            Schutz & Prävention
          </Link>
          <Link to="/learning-area" className="block text-[#1A1A1A] hover:underline font-medium">
            Interaktive Lernumgebung
          </Link>
          <Link to="/get-help" className="block text-[#1A1A1A] hover:underline font-medium">
            Hilfe bekommen
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 rounded-3xl overflow-hidden shadow-lg bg-black">
      <div className="relative pb-[56.25%] h-0 overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={getVideoUrl()}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onError={() => setHasError(true)}
        />
      </div>
      {description && (
        <div className="bg-white p-6">
          <p className="text-[#6B6B6B] leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
};
