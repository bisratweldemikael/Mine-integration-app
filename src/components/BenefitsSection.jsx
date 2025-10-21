import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, CheckCircle, Sparkles, DollarSign, AlertTriangle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Project Value',
      description: 'By seeing the big picture, teams can identify opportunities that would be invisible in a siloed system.',
      details: 'Small, strategic trade-offs—like mining a slightly lower-grade area to improve blend quality for the plant—can unlock millions of dollars in value that would otherwise have been missed.',
      impact: 'Millions in additional value',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      stats: [
        { label: 'Value Increase', value: '15-30%' },
        { label: 'Hidden Opportunities', value: 'Discovered' }
      ]
    },
    {
      icon: Shield,
      title: 'Reduced Operational Risk',
      description: 'When all experts have reviewed and contributed to a plan, the chances of costly surprises during operations are significantly lower.',
      details: 'The plan is pressure-tested from every angle, ensuring that geological risks, engineering challenges, and processing issues are identified and mitigated before mining begins, not after.',
      impact: 'Fewer costly surprises',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      stats: [
        { label: 'Risk Reduction', value: '40-60%' },
        { label: 'Surprises Avoided', value: 'Major' }
      ]
    },
    {
      icon: CheckCircle,
      title: 'More Reliable Plans',
      description: 'An integrated plan is a realistic plan. Because it has been checked and balanced by all the relevant experts, the forecasts are far more accurate.',
      details: 'Production forecasts, cost estimates, and revenue projections are far more accurate and achievable. This gives the company and its investors much greater confidence in the project\'s future performance.',
      impact: 'Greater investor confidence',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      stats: [
        { label: 'Forecast Accuracy', value: '+25%' },
        { label: 'Plan Reliability', value: 'High' }
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
          The Payoff: Major Benefits
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
          Adopting an integrated approach requires more collaboration and sophisticated tools, 
          but the benefits are immense and directly impact the success and sustainability of a mining operation.
        </p>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`card ${benefit.bgColor} hover:shadow-2xl transition-all`}
              >
                <div className={`bg-gradient-to-br ${benefit.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-700 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="bg-white/70 p-4 rounded-lg mb-4">
                  <p className="text-slate-700 text-sm italic">
                    {benefit.details}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-slate-800">{benefit.impact}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {benefit.stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-primary-600">{stat.value}</p>
                      <p className="text-xs text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-br from-slate-50 to-white max-w-5xl mx-auto"
        >
          <h3 className="subsection-title text-center mb-8">
            The Impact: Before vs. After Integration
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before - Siloed */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-red-500 w-12 h-12 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-red-700">Siloed Approach</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <p className="text-slate-700">Sub-optimal project value</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <p className="text-slate-700">High operational risks</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <p className="text-slate-700">Unreliable forecasts</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <p className="text-slate-700">Costly surprises</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <p className="text-slate-700">Missed opportunities</p>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mt-4">
                <p className="text-sm font-semibold text-red-800">
                  Result: Lower profitability, higher risk, less confidence
                </p>
              </div>
            </div>
            
            {/* After - Integrated */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-green-700">Integrated Approach</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-slate-700">Maximized project value</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-slate-700">Reduced operational risks</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-slate-700">Accurate, reliable forecasts</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-slate-700">Proactive risk mitigation</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-slate-700">Value opportunities captured</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-4">
                <p className="text-sm font-semibold text-green-800">
                  Result: Higher profitability, lower risk, greater confidence
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROI Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-br from-primary-600 to-primary-800 text-white mt-12 max-w-4xl mx-auto"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-white/20 p-4 rounded-lg flex-shrink-0">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">The Bottom Line</h3>
              <p className="text-xl text-primary-50 leading-relaxed">
                The investment in integrated planning—better tools, more collaboration time, 
                sophisticated analysis—pays for itself many times over through increased value, 
                reduced risk, and more reliable execution. It's not just a better way to plan; 
                it's a competitive advantage in the modern mining industry.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BenefitsSection;
