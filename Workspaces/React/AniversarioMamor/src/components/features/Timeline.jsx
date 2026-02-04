import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../config/assets';

const TimelineEvent = ({ event }) => {
    return (
        <motion.div
            className="min-w-[80vw] md:min-w-[300px] h-[60vh] mx-4 relative rounded-3xl overflow-hidden snap-center bg-gray-100 shadow-lg"
            initial={{ filter: 'grayscale(100%)' }}
            whileInView={{ filter: 'grayscale(0%)' }}
            viewport={{ amount: 0.6 }} // Reveal color when 60% visible
            transition={{ duration: 0.8 }}
        >
            <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-2xl font-serif mb-1">{event.title}</h4>
                <p className="text-white/80 text-sm font-sans mb-1">{event.date}</p>
                <p className="text-white/70 text-xs line-clamp-2">{event.description}</p>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <section className="py-12 bg-soft-nude/30">
            <div className="pl-6 mb-6">
                <h3 className="text-2xl font-serif text-carbon-black">Nuestra Storia</h3>
                <p className="text-sm text-gray-500">Desliza para recordar</p>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory px-6 pb-8 scrollbar-hide">
                {ASSETS.timeline.events.map((event) => (
                    <TimelineEvent key={event.id} event={event} />
                ))}
            </div>
        </section>
    );
};

export default Timeline;
