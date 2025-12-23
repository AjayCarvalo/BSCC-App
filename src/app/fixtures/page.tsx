'use client';

import { useState } from 'react';
import FixturesSat1 from './FixturesSat1';
import FixturesSat2 from './FixturesSat2';
import FixturesSun1 from './FixturesSun1';
import FixturesSun2 from './FixturesSun2';
import FixturesSun3 from './FixturesSun3';

const tabs = [
  { label: 'Sat-First-XI', key: 'Sat-First-XI' },
  { label: 'Sat-Second-XI', key: 'Sat-Second-XI' },
  { label: 'Sun-First-XI', key: 'Sun-First-XI' },
  { label: 'Sun-Second-XI', key: 'Sun-Second-XI' },
  { label: 'Sun-Third-XI', key: 'Sun-Third-XI' },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Sat-First-XI');

  return (
    <main className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Braywood Stallions CC Fixtures
      </h1>

      {/* Responsive tab navigation */}
      <div
        className="flex flex-wrap sm:flex-nowrap sm:space-x-4 border-b mb-4 justify-center sm:justify-start"
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`panel-${tab.key}`}
            className={`px-4 py-2 text-sm sm:text-base font-medium border-b-2 transition-colors duration-300 ${
              activeTab === tab.key
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-blue-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div>
        <div
          id="panel-Sat-First-XI"
          role="tabpanel"
          hidden={activeTab !== 'Sat-First-XI'}
        >
          <FixturesSat1 />
        </div>
        <div
          id="panel-Sat-Second-XI"
          role="tabpanel"
          hidden={activeTab !== 'Sat-Second-XI'}
        >
          <FixturesSat2 />
        </div>
        <div
          id="panel-Sun-First-XI"
          role="tabpanel"
          hidden={activeTab !== 'Sun-First-XI'}
        >
          <FixturesSun1 />
        </div>
        <div
          id="panel-Sun-Second-XI"
          role="tabpanel"
          hidden={activeTab !== 'Sun-Second-XI'}
        >
          <FixturesSun2 />
        </div>
        <div
          id="panel-Sun-Third-XI"
          role="tabpanel"
          hidden={activeTab !== 'Sun-Third-XI'}
        >
          <FixturesSun3 />
        </div>
      </div>
    </main>
  );
}
