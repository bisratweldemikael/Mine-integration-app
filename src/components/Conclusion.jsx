import React from 'react';
import { motion } from 'framer-motion';
import { Music, Users, Lightbulb, ArrowRight, BookOpen } from 'lucide-react';

const Conclusion = () => {
  const keyTakeaways = [
    {
      icon: Users,
      title: 'Collaboration Over Isolation',
      description: 'The best solutions are found at the intersection of different disciplines working together.'
    },
    {
      icon: Lightbulb,
      title: 'Holistic Thinking',
      description: 'Consider the entire value chain, from rock in the ground to product on the market.'
    },
    {
      icon: Music,
      title: 'Orchestrated Success',
      description: 'Like a finely tuned orchestra, all parts must work in harmony to create maximum value.'
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Seeing the Whole Picture
        </h2>
        <p className="text-xl text-primary-100 text-center mb-16 max-w-3xl mx-auto">
          A fundamental shift in mindset that defines modern mining success
        </p>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-16 max-w-5xl mx-auto border border-white/20"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-primary-500 p-4 rounded-lg flex-shrink-0">
              <Music className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">The Orchestra Analogy</h3>
              <p className="text-xl text-primary-50 leading-relaxed mb-4">
                Integrated mine planning represents a fundamental shift in mindset: it moves away from 
                a linear sequence of isolated tasks and toward a single, collaborative strategy.
              </p>
              <p className="text-2xl font-bold text-yellow-300">
                It is the difference between a collection of solo performances and a finely tuned orchestra.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Takeaways */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {keyTakeaways.map((takeaway, index) => {
            const Icon = takeaway.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-3">
                  {takeaway.title}
                </h4>
                <p className="text-primary-100 text-center">
                  {takeaway.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Career Perspective */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-yellow-500 to-orange-600 p-8 rounded-2xl max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-white/20 p-4 rounded-lg flex-shrink-0">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                For Your Mining Career
              </h3>
              <p className="text-xl text-white/90 leading-relaxed mb-4">
                For anyone starting a career in the mining industry, understanding this holistic 
                perspective is essential. It teaches you that the best solutions are found not in 
                isolation, but at the intersection of different disciplines, working together to 
                unlock the maximum possible value from a natural resource.
              </p>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-white font-semibold text-lg">
                  Integrated mine planning isn't just a methodology—it's a mindset that will define 
                  your success in the modern mining industry.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Apply These Principles?</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start thinking holistically, collaborate across disciplines, and always consider the 
            entire value chain in your mining projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-primary-900 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-xl flex items-center space-x-2"
            >
              <ArrowRight className="w-5 h-5" />
              <span>Review the Guide</span>
            </button>
            <button
              onClick={() => document.getElementById('simulation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-bold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-white/30 flex items-center space-x-2"
            >
              <Music className="w-5 h-5" />
              <span>Try the Simulator Again</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Conclusion;
