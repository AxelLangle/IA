import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../../config/assets';

const PhotoGallery = () => {
    return (
        <section className="py-12 px-4 bg-white">
            <h3 className="text-2xl font-serif text-center text-carbon-black mb-8">
                Nuestros Momentos
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {ASSETS.gallery.map((src, index) => {
                    // Generate a stable random rotation based on index
                    const rotation = (index % 2 === 0 ? -3 : 3) + (index % 3);

                    return (
                        <motion.div
                            key={index}
                            className="bg-white p-2 shadow-lg rounded-sm" // Minimal rounded for polaroid feel
                            initial={{ rotate: rotation }}
                            whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                            whileTap={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                                <img
                                    src={src}
                                    alt={`Memory ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default PhotoGallery;
