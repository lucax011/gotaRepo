"use client";

import dynamic from "next/dynamic";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Map = dynamic(() => import("../components/map"), { ssr: false });

export default function Home() {
  const [lastUpdate, setLastUpdate] = useState("04/06/2025 - 17h32");

  const handleRefresh = () => {
    setLastUpdate(new Date().toLocaleString("pt-BR"));
  };

  return (
    <div className="flex flex-col h-screen">
      <Header lastUpdate={lastUpdate} />
      <div className="layout-content">
        <Sidebar onRefresh={handleRefresh} />
        <main>
          <Map />
        </main>
      </div>
    </div>
  );
}