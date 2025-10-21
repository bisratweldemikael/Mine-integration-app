import React from 'react';
import { motion } from 'framer-motion';
import { Target, RefreshCw, Link2, Lightbulb } from 'lucide-react';

const PrinciplesSection = () => {
  const principles = [
    {
      icon: Target,
      title: 'A Single, Shared Goal',
      subtitle: 'Maximizing Value',
      description: 'In an integrated system, everyone is working toward one common objective. This is typically a financial metric like Net Present Value (NPV)—which calculates the total lifetime profit of the project in today\'s money.',
      example: 'When the mine engineer, geologist, and metallurgist are all trying to maximize NPV instead of their own departmental metrics, their decisions become naturally aligned.',
      color: 'from-yellow-500 to-yellow-700',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: RefreshCw,
      title: 'Constant Communication',
      subtitle: 'Feedback Loops',
      description: 'Information doesn\'t just flow in one direction. In an integrated process, there is a constant feedback loop between teams.',
      example: 'If metallurgists discover that a certain type of ore is difficult to process, they immediately communicate that back to the engineers, who can then adjust the mine plan to avoid or blend that material.',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Link2,
      title: 'Full Value Chain Thinking',
      subtitle: 'End-to-End Optimization',
      description: 'Decisions are evaluated based on their impact on the entire system, from the mine face to the final customer.',
      example: 'A planner might ask: "If we spend slightly more on blasting in the pit, can we create finer rock that makes the processing plant so much more efficient that the company makes more money overall?"',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50'
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
          The Guiding Principles
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Integration isn't just about putting everyone in the same room; it's about following 
          core principles that guide decision-making.
        </p>

        {/* Principles Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`card ${principle.bgColor} border-l-8 border-${principle.color.split('-')[1]}-500`}
              >
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className={`bg-gradient-to-br ${principle.color} p-4 rounded-xl flex-shrink-0`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-slate-800">
                          {index + 1}. {principle.title}
                        </h3>
                      </div>
                      <p className="text-lg font-semibold text-slate-600">
                        {principle.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      {principle.description}
                    </p>
                    
                    <div className="bg-white/70 p-4 rounded-lg border-l-4 border-primary-500">
                      <div className="flex items-start space-x-2">
                        <Lightbulb className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-primary-700 mb-1">Example in Practice</p>
                          <p className="text-slate-700 italic">
                            {principle.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-br from-slate-800 to-slate-900 text-white mt-16 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            The Integration Engine
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Shared Goal</h4>
              <p className="text-slate-300 text-sm">Everyone aligned to maximize project value</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Feedback Loops</h4>
              <p className="text-slate-300 text-sm">Continuous communication and adjustment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Link2 className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Value Chain</h4>
              <p className="text-slate-300 text-sm">End-to-end system optimization</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 rounded-lg text-center">
            <p className="text-lg font-semibold text-primary-300">
              These principles are the engine of integration, producing tangible, value-driven results
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrinciplesSection;
