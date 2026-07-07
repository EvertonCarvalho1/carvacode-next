'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  // Handlers
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de agendar uma consultoria gratuita para meu projeto.'
    );
    window.open(`https://wa.me/5511959766136?text=${message}`, '_blank');
  };

  const handleServicesClick = () => {
    const element = document.querySelector('#services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center min-h-screen py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 max-w-2xl mx-auto text-center"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-blue-10 border border-primary-blue rounded-full text-primary-blue text-sm font-medium mb-6">
                Desenvolvimento web &amp; mobile
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
            >
              <div className="leading-tight">
                <span className="text-white">Sites, </span>
                <span className="text-primary-blue">sistemas</span>
                <span className="text-white"> e </span>
                <span className="text-accent-coral">apps</span>
                <br />
                <span className="text-white">sob medida</span>
              </div>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              Do frontend ao deploy: interfaces modernas, APIs bem estruturadas
              e sistemas prontos para crescer.
            </motion.p>

            {/* Feature list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 text-white/70"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: 'var(--color-primary-blue)' }}
                />
                <span>Frontend &amp; Backend</span>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: 'var(--color-accent-coral)' }}
                />
                <span>Web &amp; Mobile</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-warm-orange rounded-full animate-pulse" />
                <span>Deploy &amp; Manutenção</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
            >
              <Button
                variant="cta"
                size="xl"
                onClick={handleWhatsAppClick}
                className="group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Iniciar um projeto
              </Button>

              <Button
                variant="glass"
                size="xl"
                onClick={handleServicesClick}
                className="group"
              >
                Ver serviços
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-sm text-white/50 pt-6"
            >
              React · Next.js · Node.js · React Native · PostgreSQL · Docker
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group cursor-pointer"
          >
            <span className="text-sm">Explore mais</span>
            <ArrowDown className="w-6 h-6 animate-bounce group-hover:text-primary-blue transition-colors" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
