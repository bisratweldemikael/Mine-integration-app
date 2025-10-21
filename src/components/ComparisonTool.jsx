import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Info } from 'lucide-react';

const ComparisonTool = () => {
  const [oreGrade, setOreGrade] = useState(2.5);
  const [blastingCost, setBlastingCost] = useState(5);
  const [processingEfficiency, setProcessingEfficiency] = useState(85);

  // Calculate outcomes for both approaches
  const calculateSiloed = () => {
    // Siloed: Each dept optimizes independently
    const miningCost = blastingCost * 0.8; // Engineers minimize mining cost
    const recovery = processingEfficiency * 0.75; // Poor ore quality hurts recovery
    const revenue = oreGrade * recovery * 1.2;
    const profit = revenue - miningCost - 15;
    return {
      miningCost: miningCost.toFixed(1),
      recovery: recovery.toFixed(1),
      revenue: revenue.toFixed(1),
      profit: Math.max(0, profit).toFixed(1)
    };
  };

  const calculateIntegrated = () => {
    // Integrated: Optimize for total value
    const miningCost = blastingCost * 1.1; // Spend more on blasting for better fragmentation
    const recovery = processingEfficiency * 0.95; // Better ore quality improves recovery
    const revenue = oreGrade * recovery * 1.2;
    const profit = revenue - miningCost - 12; // Lower processing costs
    return {
      miningCost: miningCost.toFixed(1),
      recovery: recovery.toFixed(1),
      revenue: revenue.toFixed(1),
      profit: Math.max(0, profit).toFixed(1)
    };
  };

  const siloedResults = calculateSiloed();
  const integratedResults = calculateIntegrated();
  const profitDifference = ((integratedResults.profit - siloedResults.profit) / siloedResults.profit * 100).toFixed(1);

  return (
    <div className="card bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-primary-600 p-3 rounded-lg">
          <Sliders className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-slate-800">
          Interactive Value Chain Calculator
        </h3>
      </div>

      <p className="text-slate-600 mb-8">
        Adjust the parameters below to see how integrated planning creates more value by optimizing 
        the entire value chain instead of individual components.
      </p>

      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Ore Grade (%)
          </label>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={oreGrade}
            onChange={(e) => setOreGrade(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-center mt-2">
            <span className="text-2xl font-bold text-primary-600">{oreGrade.toFixed(1)}%</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Blasting Cost ($/ton)
          </label>
          <input
            type="range"
            min="2"
            max="10"
            step="0.5"
            value={blastingCost}
            onChange={(e) => setBlastingCost(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-center mt-2">
            <span className="text-2xl font-bold text-primary-600">${blastingCost.toFixed(1)}</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Base Processing Efficiency (%)
          </label>
          <input
            type="range"
            min="60"
            max="95"
            step="1"
            value={processingEfficiency}
            onChange={(e) => setProcessingEfficiency(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-center mt-2">
            <span className="text-2xl font-bold text-primary-600">{processingEfficiency}%</span>
          </div>
        </div>
      </div>

      {/* Results Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Siloed Results */}
        <motion.div
          key={`siloed-${oreGrade}-${blastingCost}-${processingEfficiency}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-red-50 p-6 rounded-lg border-2 border-red-200"
        >
          <h4 className="text-xl font-bold text-red-700 mb-4">Siloed Approach</h4>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Mining Cost:</span>
              <span className="font-bold text-slate-800">${siloedResults.miningCost}/ton</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Actual Recovery:</span>
              <span className="font-bold text-slate-800">{siloedResults.recovery}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Revenue:</span>
              <span className="font-bold text-slate-800">${siloedResults.revenue}/ton</span>
            </div>
            <div className="border-t-2 border-red-300 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-slate-800">Profit:</span>
                <span className="text-2xl font-bold text-red-700">${siloedResults.profit}/ton</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white/70 rounded text-sm text-slate-700">
            <p className="font-semibold mb-1">What happened:</p>
            <p>Engineers minimized blasting costs, but poor fragmentation reduced processing efficiency by 25%.</p>
          </div>
        </motion.div>

        {/* Integrated Results */}
        <motion.div
          key={`integrated-${oreGrade}-${blastingCost}-${processingEfficiency}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-green-50 p-6 rounded-lg border-2 border-green-200"
        >
          <h4 className="text-xl font-bold text-green-700 mb-4">Integrated Approach</h4>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Mining Cost:</span>
              <span className="font-bold text-slate-800">${integratedResults.miningCost}/ton</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Actual Recovery:</span>
              <span className="font-bold text-slate-800">{integratedResults.recovery}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Revenue:</span>
              <span className="font-bold text-slate-800">${integratedResults.revenue}/ton</span>
            </div>
            <div className="border-t-2 border-green-300 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-slate-800">Profit:</span>
                <span className="text-2xl font-bold text-green-700">${integratedResults.profit}/ton</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white/70 rounded text-sm text-slate-700">
            <p className="font-semibold mb-1">What happened:</p>
            <p>Spent more on blasting for better fragmentation, improving processing efficiency by 95% and reducing processing costs.</p>
          </div>
        </motion.div>
      </div>

      {/* Value Difference Highlight */}
      <motion.div
        key={profitDifference}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mt-6 bg-gradient-to-r from-primary-600 to-primary-800 p-6 rounded-lg text-white text-center"
      >
        <p className="text-lg mb-2">Additional Value Created by Integration</p>
        <p className="text-5xl font-bold mb-2">
          {profitDifference > 0 ? '+' : ''}{profitDifference}%
        </p>
        <p className="text-primary-100">
          ${(integratedResults.profit - siloedResults.profit).toFixed(2)} more profit per ton
        </p>
      </motion.div>

      {/* Explanation */}
      <div className="mt-6 bg-white p-4 rounded-lg border-l-4 border-primary-500">
        <div className="flex items-start space-x-2">
          <Info className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
          <div className="text-sm text-slate-700">
            <p className="font-semibold mb-2">Value Chain Thinking in Action:</p>
            <p>
              This demonstrates the core principle: by spending slightly more on blasting (better fragmentation), 
              the integrated approach dramatically improves processing efficiency and reduces processing costs. 
              The siloed approach would never discover this opportunity because each department only optimizes 
              its own metrics. The integrated approach looks at the <strong>total system profit</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTool;
