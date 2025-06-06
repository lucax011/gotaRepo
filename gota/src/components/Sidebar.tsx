import React from "react";

const Sidebar: React.FC<{ onRefresh: () => void }> = ({ onRefresh }) => (
  <aside className="w-72 bg-white shadow h-full flex flex-col p-6">
    <h2 className="text-lg font-semibold mb-4">Legenda dos alertas</h2>
    <ul className="mb-6">
      <li className="flex items-center mb-2">
        <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2"></span>
        Alagamento crítico
      </li>
      <li className="flex items-center mb-2">
        <span className="inline-block w-4 h-4 bg-yellow-400 rounded-full mr-2"></span>
        Trânsito comprometido
      </li>
      <li className="flex items-center mb-2">
        <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
        Região monitorada sem problemas
      </li>
    </ul>
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
      onClick={onRefresh}
    >
      Atualizar Dados
    </button>
    <p className="text-xs text-gray-600">
      Este mapa mostra áreas afetadas por enchentes na cidade de São Paulo, com dados interpretados por IA a partir de alertas da GCM, sensores e câmeras urbanas.
    </p>
  </aside>
);

export default Sidebar;