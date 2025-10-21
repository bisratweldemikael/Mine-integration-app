import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mountain, BookOpen, TrendingUp, Users, Target, Zap } from 'lucide-react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ProblemSection from './components/ProblemSection';
import DefinitionSection from './components/DefinitionSection';
import PrinciplesSection from './components/PrinciplesSection';
import BenefitsSection from './components/BenefitsSection';
import InteractiveSimulation from './components/InteractiveSimulation';
import ComparisonTool from './components/ComparisonTool';
import KeyPlayers from './components/KeyPlayers';
import Conclusion from './components/Conclusion';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home', icon: Mountain },
    { id: 'problem', label: 'The Problem', icon: BookOpen },
    { id: 'definition', label: 'What is IMP?', icon: Target },
    { id: 'players', label: 'Key Players', icon: Users },
    { id: 'principles', label: 'Principles', icon: Zap },
    { id: 'benefits', label: 'Benefits', icon: TrendingUp },
    { id: 'simulation', label: 'Interactive Demo', icon: Mountain },
  ];

  return (
    <div className="min-h-screen">
      <Navigation 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <main className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section id="hero" className="min-h-screen">
            <Hero />
          </section>

          <section id="problem" className="min-h-screen py-20">
            <ProblemSection />
          </section>

          <section id="definition" className="min-h-screen py-20">
            <DefinitionSection />
          </section>

          <section id="players" className="min-h-screen py-20">
            <KeyPlayers />
          </section>

          <section id="principles" className="min-h-screen py-20">
            <PrinciplesSection />
          </section>

          <section id="benefits" className="min-h-screen py-20">
            <BenefitsSection />
          </section>

          <section id="simulation" className="min-h-screen py-20">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-center mb-12">Interactive Demonstrations</h2>
              <InteractiveSimulation />
              <div className="mt-16">
                <ComparisonTool />
              </div>
            </div>
          </section>

          <section id="conclusion" className="py-20 bg-gradient-to-br from-primary-900 to-slate-900 text-white">
            <Conclusion />
          </section>
        </motion.div>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 Integrated Mine Planning Educational Platform
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Unlocking Value Through Collaboration
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
