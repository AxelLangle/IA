import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../../config/assets';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={ASSETS.hero.background}
                    alt="Romantic Background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-soft-nude/90" />
            </div>

            {/* Falling Text Animation */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 mt-16">
                <motion.div
                    initial={{ y: -600, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        duration: 1.5
                    }}
                >
                    <h1 className="text-5xl md:text-6xl text-white font-serif drop-shadow-md mb-2">
                        2 Años
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ y: -600, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2, // Staggered delay
                        duration: 1.5
                    }}
                >
                    <h2 className="text-3xl text-white/90 font-serif mb-6">
                        y 1 Mes a tu lado
                    </h2>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-6 h-10 border-2 border-carbon-black/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-carbon-black/50 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
