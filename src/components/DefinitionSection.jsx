import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Layers } from 'lucide-react';

const DefinitionSection = () => {
  const features = [
    {
      icon: Layers,
      title: 'Holistic Process',
      description: 'All technical and financial components considered together'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Every department works as one unified team'
    },
    {
      icon: Target,
      title: 'Single Goal',
      description: 'Maximize value for the entire project, not individual departments'
    },
    {
      icon: TrendingUp,
      title: 'Value-Driven',
      description: 'From rock in the ground to final product on the market'
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
          What is Integrated Mine Planning?
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Understanding the solution: A holistic approach to mining success
        </p>

        {/* Main Definition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white mb-16 max-w-5xl mx-auto"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-white/20 p-4 rounded-lg flex-shrink-0">
              <Target className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">The Central Definition</h3>
              <p className="text-xl leading-relaxed text-primary-50">
                Integrated mine planning is a <strong>holistic process</strong> where all technical 
                and financial components of a mining operation are considered <strong>together, simultaneously</strong>, 
                to create a single plan that <strong>maximizes value for the entire project</strong>.
              </p>
              <div className="mt-6 p-4 bg-white/10 rounded-lg border-l-4 border-yellow-300">
                <p className="text-lg text-primary-50">
                  Instead of each department making the "best" decision for itself, the entire team 
                  works together to find the best decision for the business as a whole, from the rock 
                  in the ground to the final product sold on the market.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features Grid */}
        <div className="mb-16">
          <h3 className="subsection-title text-center mb-8">
            Core Characteristics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center hover:shadow-2xl transition-shadow"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Visual Representation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card bg-slate-50 max-w-4xl mx-auto"
        >
          <h3 className="subsection-title text-center mb-8">
            The Integrated Approach Visualized
          </h3>
          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Center circle - Shared Goal */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-48 h-48 rounded-full flex items-center justify-center shadow-2xl z-10 relative"
                >
                  <div className="text-center">
                    <Target className="w-12 h-12 text-white mx-auto mb-2" />
                    <p className="text-white font-bold text-lg">Maximize</p>
                    <p className="text-white font-bold text-lg">Project Value</p>
                  </div>
                </motion.div>

                {/* Surrounding circles - Departments */}
                {[
                  { label: 'Geology', color: 'from-blue-500 to-blue-700', angle: 0 },
                  { label: 'Engineering', color: 'from-orange-500 to-orange-700', angle: 90 },
                  { label: 'Metallurgy', color: 'from-green-500 to-green-700', angle: 180 },
                  { label: 'Finance', color: 'from-purple-500 to-purple-700', angle: 270 }
                ].map((dept, index) => {
                  const radius = 180;
                  const angleRad = (dept.angle * Math.PI) / 180;
                  const x = Math.cos(angleRad) * radius;
                  const y = Math.sin(angleRad) * radius;

                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      whileInView={{ scale: 1, x: x, y: y }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br ${dept.color} w-32 h-32 rounded-full flex items-center justify-center shadow-xl`}
                    >
                      <p className="text-white font-bold text-center">{dept.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <p className="text-center text-slate-600 mt-8 text-lg">
              All departments orbit around and contribute to the shared goal
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DefinitionSection;
