import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, XCircle, Building2, FlaskConical, Hammer } from 'lucide-react';

const ProblemSection = () => {
  const siloSteps = [
    {
      icon: FlaskConical,
      title: 'Geologists',
      description: 'Define the orebody in isolation',
      color: 'bg-blue-500'
    },
    {
      icon: Hammer,
      title: 'Mine Engineers',
      description: 'Design extraction without full context',
      color: 'bg-orange-500'
    },
    {
      icon: Building2,
      title: 'Metallurgists',
      description: 'Process whatever they receive',
      color: 'bg-green-500'
    }
  ];

  const problems = [
    {
      icon: XCircle,
      title: 'Misaligned Goals',
      description: 'Each department optimizes for itself, not the whole project'
    },
    {
      icon: AlertTriangle,
      title: 'Hidden Risks',
      description: 'Decisions in one area create unforeseen problems elsewhere'
    },
    {
      icon: XCircle,
      title: 'Lost Value',
      description: 'Sub-optimal overall results despite local optimization'
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
          The Core Problem
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Why do we need "integrated" planning? Let's explore the traditional approach and its limitations.
        </p>

        {/* Analogy Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-br from-primary-50 to-blue-50 mb-16 max-w-4xl mx-auto"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                Think About It: Building a House vs. Building a City
              </h3>
              <div className="space-y-3 text-slate-700">
                <p>
                  <strong>Building a house:</strong> You can hire a plumber, then an electrician, 
                  then a painter—each working in sequence.
                </p>
                <p>
                  <strong>Building a city:</strong> Architects, civil engineers, transportation experts, 
                  and utility planners must all work together from the beginning. Road placement affects 
                  building locations, which affects utility layouts.
                </p>
                <p className="text-primary-700 font-semibold text-lg mt-4">
                  Integrated mine planning is like designing that city—every decision affects everything else.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Siloed Approach */}
        <div className="mb-16">
          <h3 className="subsection-title text-center mb-8">
            The Traditional "Silo" Approach
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            {siloSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="card flex-1 max-w-xs"
                  >
                    <div className={`${step.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 text-center mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-center">
                      {step.description}
                    </p>
                  </motion.div>
                  
                  {index < siloSteps.length - 1 && (
                    <ArrowRight className="hidden md:block w-8 h-8 text-slate-400 flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-red-50 border-2 border-red-200 max-w-4xl mx-auto"
          >
            <div className="flex items-start space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-red-900 mb-2">The Primary Drawback</h4>
                <p className="text-red-800">
                  A decision made in one "silo" can create significant, unforeseen problems for another. 
                  For example, engineers might design a mine plan that's cheap to dig but sends low-quality 
                  ore to the processing plant, causing poor recovery and slashing overall profitability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Problems Grid */}
        <div className="mb-16">
          <h3 className="subsection-title text-center mb-8">
            What Goes Wrong?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card hover:border-red-300 border-2 border-transparent transition-all"
                >
                  <Icon className="w-12 h-12 text-red-500 mb-4" />
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-slate-600">
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card max-w-5xl mx-auto overflow-x-auto"
        >
          <h3 className="subsection-title text-center mb-6">
            A Simple Comparison
          </h3>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left py-4 px-4 font-bold text-slate-800">Planning Focus</th>
                <th className="text-left py-4 px-4 font-bold text-red-700">Siloed Approach</th>
                <th className="text-left py-4 px-4 font-bold text-green-700">Integrated Approach</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-4 px-4 font-semibold text-slate-700">Goal Alignment</td>
                <td className="py-4 px-4 text-slate-600">Each department optimizes its own performance</td>
                <td className="py-4 px-4 text-slate-600">All departments work toward a single, shared goal</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-4 px-4 font-semibold text-slate-700">Information Flow</td>
                <td className="py-4 px-4 text-slate-600">Linear and one-way (Geology → Engineering)</td>
                <td className="py-4 px-4 text-slate-600">Collaborative and multi-directional (feedback loop)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-4 px-4 font-semibold text-slate-700">Decision Making</td>
                <td className="py-4 px-4 text-slate-600">Sequential and isolated within each department</td>
                <td className="py-4 px-4 text-slate-600">Holistic, considering impact across the project</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-slate-700">Outcome</td>
                <td className="py-4 px-4 text-red-600 font-semibold">Sub-optimal, with hidden risks and lost value</td>
                <td className="py-4 px-4 text-green-600 font-semibold">Maximizes overall project value and reliability</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProblemSection;
