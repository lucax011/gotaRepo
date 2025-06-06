import React from "react";

interface HeaderProps {
  lastUpdate: string;
}

const Header: React.FC<HeaderProps> = ({ lastUpdate }) => (
  <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
    <h1 className="text-2xl font-bold text-blue-900">Gota Alert SP</h1>
    <span className="text-sm text-gray-600">Última atualização: {lastUpdate}</span>
  </header>
);

export default Header;