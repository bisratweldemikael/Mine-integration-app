import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Hammer, Building2, DollarSign, ArrowRightLeft } from 'lucide-react';

const KeyPlayers = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(0);

  const players = [
    {
      icon: FlaskConical,
      title: 'Geology',
      color: 'from-blue-500 to-blue-700',
      role: 'Defines the orebody—where it is, how much is there, and its mineral quality.',
      contribution: 'Their model directly informs the engineers\' mine design and provides the block-by-block data the metallurgists need to predict plant performance.',
      keyActivities: [
        'Map and model the orebody in 3D',
        'Determine ore grades and quality',
        'Identify geological risks and opportunities',
        'Provide resource estimates'
      ]
    },
    {
      icon: Hammer,
      title: 'Mine Engineering',
      color: 'from-orange-500 to-orange-700',
      role: 'Designs the physical mine, including the shape of the pit, the sequence of extraction, and the haulage networks.',
      contribution: 'They must constantly work with geologists to manage ore quality and with metallurgists to ensure the material they deliver can be processed efficiently.',
      keyActivities: [
        'Design pit layouts and underground tunnels',
        'Plan extraction sequences',
        'Optimize haulage and logistics',
        'Balance mining costs with ore quality'
      ]
    },
    {
      icon: Building2,
      title: 'Metallurgy (Processing)',
      color: 'from-green-500 to-green-700',
      role: 'Determines how to best extract the valuable metals from the mined rock.',
      contribution: 'Their feedback is a crucial loop back to the engineers, often dictating which parts of the orebody are profitable to mine and which should be avoided.',
      keyActivities: [
        'Design processing flowsheets',
        'Predict metal recovery rates',
        'Optimize crushing and grinding',
        'Provide ore blending requirements'
      ]
    },
    {
      icon: DollarSign,
      title: 'Finance & Marketing',
      color: 'from-purple-500 to-purple-700',
      role: 'Analyzes all the costs, forecasts commodity prices, and calculates the project\'s overall profitability.',
      contribution: 'They provide the economic framework that guides all technical decisions, ensuring the final plan is not just feasible but value-accretive.',
      keyActivities: [
        'Calculate Net Present Value (NPV)',
        'Forecast commodity prices',
        'Analyze capital and operating costs',
        'Assess financial risks and returns'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-center mb-4">
          The Key Players at the Table
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Successful integration requires bringing experts from every critical discipline to the 
          planning table from the very beginning.
        </p>

        {/* Interactive Player Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {players.map((player, index) => {
            const Icon = player.icon;
            const isSelected = selectedPlayer === index;
            
            return (
              <motion.button
                key={index}
                onClick={() => setSelectedPlayer(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`card cursor-pointer transition-all ${
                  isSelected 
                    ? 'ring-4 ring-primary-500 shadow-2xl' 
                    : 'hover:shadow-xl'
                }`}
              >
                <div className={`bg-gradient-to-br ${player.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 text-center">
                  {player.title}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Player Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPlayer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="card bg-gradient-to-br from-slate-50 to-white max-w-5xl mx-auto"
          >
            <div className="flex items-start space-x-6">
              <div className={`bg-gradient-to-br ${players[selectedPlayer].color} p-6 rounded-xl flex-shrink-0`}>
                {React.createElement(players[selectedPlayer].icon, { className: "w-12 h-12 text-white" })}
              </div>
              
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {players[selectedPlayer].title}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-700 mb-2">Primary Role</h4>
                    <p className="text-slate-600">
                      {players[selectedPlayer].role}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-700 mb-2">Contribution to Integration</h4>
                    <p className="text-slate-600">
                      {players[selectedPlayer].contribution}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-700 mb-2">Key Activities</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {players[selectedPlayer].keyActivities.map((activity, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary-600 mt-1">•</span>
                          <span className="text-slate-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Collaboration Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-br from-primary-50 to-blue-50 mt-12 max-w-4xl mx-auto"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
              <ArrowRightLeft className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                Collaboration, Not Just Cooperation
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                These key players must <strong>collaborate</strong>, not just cooperate. This means 
                moving beyond their individual roles to contribute to a unified strategy. When geology 
                discovers a challenging ore zone, engineering and metallurgy immediately adjust their 
                plans. When finance identifies a cost constraint, all technical teams work together to 
                find creative solutions that maintain value.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default KeyPlayers;
