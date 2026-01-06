import React from 'react';
import { Link } from 'react-router-dom';
import { HelpHotline } from '../ui/HelpHotline';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cyber-Schutz</h3>
            <p className="text-gray-400">Kinder online schützen, eine Lektion nach der anderen.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/cyber-grooming" className="hover:text-white">Was ist Cyber-Grooming?</Link></li>
              <li><Link to="/protection" className="hover:text-white">Schutz & Prävention</Link></li>
              <li><Link to="/get-help" className="hover:text-white">Hilfe bekommen</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ressourcen</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/learning-area" className="hover:text-white">Lernumgebung</Link></li>
              <li><Link to="/contact" className="hover:text-white">Kontakt</Link></li>
            </ul>
          </div>
        </div>
        {/* Help Hotline Section in Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <HelpHotline variant="compact" />
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Cyber-Schutz Initiative. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
