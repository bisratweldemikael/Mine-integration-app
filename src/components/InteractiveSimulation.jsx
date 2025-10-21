import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const InteractiveSimulation = () => {
  const [approach, setApproach] = useState('siloed');
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState(null);

  const runSimulation = () => {
    setIsRunning(true);
    
    setTimeout(() => {
      const siloedResults = {
        npv: 245,
        recovery: 78,
        costs: 125,
        risks: 8,
        timeline: [
          { month: 'M1', value: 50 },
          { month: 'M2', value: 55 },
          { month: 'M3', value: 52 },
          { month: 'M4', value: 58 },
          { month: 'M5', value: 54 },
          { month: 'M6', value: 60 }
        ]
      };

      const integratedResults = {
        npv: 385,
        recovery: 92,
        costs: 98,
        risks: 2,
        timeline: [
          { month: 'M1', value: 60 },
          { month: 'M2', value: 68 },
          { month: 'M3', value: 72 },
          { month: 'M4', value: 78 },
          { month: 'M5', value: 82 },
          { month: 'M6', value: 88 }
        ]
      };

      setResults(approach === 'siloed' ? siloedResults : integratedResults);
      setIsRunning(false);
    }, 1500);
  };

  const reset = () => {
    setResults(null);
    setIsRunning(false);
  };

  const comparisonData = [
    {
      metric: 'NPV ($M)',
      Siloed: 245,
      Integrated: 385
    },
    {
      metric: 'Recovery (%)',
      Siloed: 78,
      Integrated: 92
    },
    {
      metric: 'Costs ($M)',
      Siloed: 125,
      Integrated: 98
    },
    {
      metric: 'Risk Events',
      Siloed: 8,
      Integrated: 2
    }
  ];

  return (
    <div className="card bg-gradient-to-br from-slate-50 to-white">
      <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">
        Mine Planning Simulator
      </h3>
      <p className="text-slate-600 text-center mb-8">
        See the difference between siloed and integrated approaches in action
      </p>

      {/* Approach Selection */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => { setApproach('siloed'); reset(); }}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            approach === 'siloed'
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Siloed Approach
        </button>
        <button
          onClick={() => { setApproach('integrated'); reset(); }}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            approach === 'integrated'
              ? 'bg-green-500 text-white shadow-lg'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Integrated Approach
        </button>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={runSimulation}
          disabled={isRunning}
          className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Play className="w-5 h-5" />
          <span>{isRunning ? 'Running...' : 'Run Simulation'}</span>
        </button>
        <button
          onClick={reset}
          className="btn-secondary flex items-center space-x-2"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Results */}
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`p-4 rounded-lg ${approach === 'integrated' ? 'bg-green-50' : 'bg-red-50'}`}>
              <p className="text-sm text-slate-600 mb-1">Net Present Value</p>
              <p className="text-3xl font-bold text-slate-800">${results.npv}M</p>
              {approach === 'integrated' && (
                <div className="flex items-center space-x-1 text-green-600 text-sm mt-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>+57% vs siloed</span>
                </div>
              )}
            </div>
            
            <div className={`p-4 rounded-lg ${approach === 'integrated' ? 'bg-green-50' : 'bg-red-50'}`}>
              <p className="text-sm text-slate-600 mb-1">Metal Recovery</p>
              <p className="text-3xl font-bold text-slate-800">{results.recovery}%</p>
              {approach === 'integrated' && (
                <div className="flex items-center space-x-1 text-green-600 text-sm mt-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>+18% vs siloed</span>
                </div>
              )}
            </div>
            
            <div className={`p-4 rounded-lg ${approach === 'integrated' ? 'bg-green-50' : 'bg-red-50'}`}>
              <p className="text-sm text-slate-600 mb-1">Operating Costs</p>
              <p className="text-3xl font-bold text-slate-800">${results.costs}M</p>
              {approach === 'integrated' && (
                <div className="flex items-center space-x-1 text-green-600 text-sm mt-1">
                  <TrendingDown className="w-4 h-4" />
                  <span>-22% vs siloed</span>
                </div>
              )}
            </div>
            
            <div className={`p-4 rounded-lg ${approach === 'integrated' ? 'bg-green-50' : 'bg-red-50'}`}>
              <p className="text-sm text-slate-600 mb-1">Risk Events</p>
              <p className="text-3xl font-bold text-slate-800">{results.risks}</p>
              {approach === 'integrated' && (
                <div className="flex items-center space-x-1 text-green-600 text-sm mt-1">
                  <TrendingDown className="w-4 h-4" />
                  <span>-75% vs siloed</span>
                </div>
              )}
            </div>
          </div>

          {/* Timeline Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold text-slate-800 mb-4">Value Creation Over Time</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={results.timeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={approach === 'integrated' ? '#22c55e' : '#ef4444'} 
                  strokeWidth={3}
                  name="Value ($M)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Insights */}
          <div className={`p-6 rounded-lg ${approach === 'integrated' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border-2`}>
            <h4 className="text-xl font-bold text-slate-800 mb-3">
              {approach === 'integrated' ? '✓ Key Success Factors' : '⚠ Key Challenges'}
            </h4>
            <ul className="space-y-2">
              {approach === 'integrated' ? (
                <>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-slate-700">All departments aligned on maximizing NPV</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-slate-700">Continuous feedback loops prevented costly mistakes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-slate-700">Value chain optimization unlocked hidden opportunities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-slate-700">Proactive risk identification and mitigation</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-slate-700">Departments optimized locally, not globally</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-slate-700">Poor ore quality sent to plant reduced recovery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-slate-700">Unexpected geological issues caused delays</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-slate-700">Value opportunities missed due to lack of coordination</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Comparison Chart (always visible) */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow">
        <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">
          Side-by-Side Comparison
        </h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Siloed" fill="#ef4444" />
            <Bar dataKey="Integrated" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InteractiveSimulation;
