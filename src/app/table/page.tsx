'use client';

import { useState } from 'react';
import TableSat1 from './TableSat1';
import TableSat2 from './TableSat2';
import TableSun1 from './TableSun1';
import TableSun2 from './TableSun2';
import TableSun3 from './TableSun3';

const tabs = [
  { label: 'Sat-First-XI', key: 'Sat-First-XI' },
  { label: 'Sat-Second-XI', key: 'Sat-Second-XI' },
  { label: 'Sun-First-XI', key: 'Sun-First-XI' },
  { label: 'Sun-Second-XI', key: 'Sun-Second-XI' },
  { label: 'Sun-Third-XI', key: 'Sun-Third-XI' },
];

export default function Fixtures() {
  const [activeTab, setActiveTab] = useState('Sat-First-XI'); // default tab

  return (
    <main className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Braywood Stallions CC Tables
      </h1>

      {/* Tabs */}
      <div className="overflow-x-auto mb-4">
        <div className="inline-flex space-x-2 sm:space-x-4 border-b w-full min-w-max px-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-2 px-3 sm:px-4 whitespace-nowrap font-medium border-b-2 transition-all duration-200 ease-in-out focus:outline-none ${
                activeTab === tab.key
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content - Render all, show one */}
      <div className="space-y-4">
        <div className={activeTab === 'Sat-First-XI' ? '' : 'hidden'}>
          <TableSat1 />
        </div>
        <div className={activeTab === 'Sat-Second-XI' ? '' : 'hidden'}>
          <TableSat2 />
        </div>
        <div className={activeTab === 'Sun-First-XI' ? '' : 'hidden'}>
          <TableSun1 />
        </div>
        <div className={activeTab === 'Sun-Second-XI' ? '' : 'hidden'}>
          <TableSun2 />
        </div>
        <div className={activeTab === 'Sun-Third-XI' ? '' : 'hidden'}>
          <TableSun3 />
        </div>
      </div>
    </main>
  );
}
