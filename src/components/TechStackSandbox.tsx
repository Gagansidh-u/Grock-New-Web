import React, { useState } from 'react';
import { Terminal, Copy, Check, Code2, Smartphone, Database, BarChart3, FileCode } from 'lucide-react';

export const TechStackSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'react' | 'android' | 'backend' | 'data'>('react');
  const [copied, setCopied] = useState(false);

  const snippets = {
    react: {
      fileName: 'src/components/ClientDashboard.tsx',
      language: 'typescript',
      title: 'Modern Responsive Web Architecture (React 19 + Tailwind)',
      code: `import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export const ClientDashboard: React.FC = () => {
  const [filter, setFilter] = useState<'active' | 'archived'>('active');

  // Fully responsive, type-safe data view
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="md:col-span-2 glass-panel space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          Operational Analytics
        </h2>
        {/* Dynamic telemetry charts & real-time reactive state */}
      </div>
    </div>
  );
};`,
    },
    android: {
      fileName: 'app/src/main/java/com/grock/app/MainActivity.kt',
      language: 'kotlin',
      title: 'Android Native Wrapper & AAB Packaging (Kotlin)',
      code: `package com.grock.app

import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Native hardware back button navigation & pull-to-refresh
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (webView.canGoBack()) webView.goBack() else finish()
            }
        })
    }
}`,
    },
    backend: {
      fileName: 'server/routes/api.ts',
      language: 'typescript',
      title: 'Secure Full-Stack API & Database Architecture',
      code: `import express from 'express';
import { pool } from '../db/postgres';
import { verifyJwtSession } from '../middleware/auth';

const router = express.Router();

// Role-based authenticated database query with parameterized safety
router.get('/records', verifyJwtSession, async (req, res) => {
  const { tenantId } = req.user;
  const result = await pool.query(
    'SELECT id, title, status, created_at FROM projects WHERE tenant_id = $1 ORDER BY id DESC',
    [tenantId]
  );
  return res.json({ success: true, data: result.rows });
});

export default router;`,
    },
    data: {
      fileName: 'scripts/data_pipeline.py',
      language: 'python',
      title: 'Data Cleaning, Deduplication & Visual KPI Aggregation',
      code: `import pandas as pd
import numpy as np

def clean_and_aggregate(raw_csv_path: str):
    # Programmatic schema normalization & deduplication
    df = pd.read_csv(raw_csv_path)
    df.drop_duplicates(subset=['client_id', 'transaction_date'], inplace=True)
    df['normalized_revenue'] = pd.to_numeric(df['amount'], errors='coerce').fillna(0)
    
    kpi_summary = df.groupby('category').agg(
        total_volume=('id', 'count'),
        gross_value=('normalized_revenue', 'sum')
    ).reset_index()
    return kpi_summary`,
    },
  };

  const current = snippets[activeTab];

  const handleCopy = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(current.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-slate-950 text-slate-200 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
      {/* Top Header / Tab Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-400">
            ENGINEERING WORKBENCH
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('react')}
            className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'react'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Web (React)</span>
          </button>

          <button
            onClick={() => setActiveTab('android')}
            className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'android'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Android (Kotlin)</span>
          </button>

          <button
            onClick={() => setActiveTab('backend')}
            className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'backend'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>API &amp; DB</span>
          </button>

          <button
            onClick={() => setActiveTab('data')}
            className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'data'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Data Analytics</span>
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* File Path & Architecture Title */}
      <div className="bg-slate-900/40 px-6 py-2 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2 font-mono">
          <FileCode className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-cyan-300 font-bold">{current.fileName}</span>
        </div>
        <span className="hidden sm:inline text-[11px] text-slate-400">
          {current.title}
        </span>
      </div>

      {/* Code Editor Body */}
      <div className="p-6 font-mono text-xs overflow-x-auto bg-slate-950 leading-relaxed text-slate-300">
        <pre className="select-text">
          <code>
            {current.code.split('\n').map((line, idx) => (
              <div key={idx} className="table-row">
                <span className="table-cell pr-6 text-slate-600 select-none text-right font-mono text-[11px] w-8">
                  {idx + 1}
                </span>
                <span className="table-cell">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Footer Details */}
      <div className="bg-slate-900/80 px-6 py-3 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span>Clean Code Standard</span>
          <span>·</span>
          <span>Zero Framework Lock-in</span>
          <span>·</span>
          <span>Full Git Repository Handover</span>
        </div>
        <span className="text-cyan-400 font-semibold">
          Grock Technologies · Engineering Standard
        </span>
      </div>
    </div>
  );
};
