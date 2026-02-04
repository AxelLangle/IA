import React, { useState, useEffect } from 'react';
import { intervalToDuration } from 'date-fns';

const LoveCounter = () => {
    const [duration, setDuration] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const startDate = new Date(2024, 0, 4); // Jan 4, 2024 (Month is 0-indexed)

        const timer = setInterval(() => {
            const now = new Date();
            const diff = intervalToDuration({
                start: startDate,
                end: now,
            });
            setDuration(diff);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center mx-2">
            <div className="text-4xl font-serif text-elegant-gold font-bold tabular-nums">
                {String(value || 0).padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                {label}
            </div>
        </div>
    );

    return (
        <section className="py-12 bg-white flex flex-col items-center justify-center">
            <h3 className="text-lg text-gray-400 font-sans mb-6 tracking-wide">
                Tiempo compartiendo magia
            </h3>
            <div className="flex flex-wrap justify-center items-center">
                <TimeUnit value={duration.years > 0 ? (duration.days + duration.years * 365) : duration.days} label="Días" />
                <div className="text-2xl text-gray-300 pb-4">:</div>
                <TimeUnit value={duration.hours} label="Horas" />
                <div className="text-2xl text-gray-300 pb-4">:</div>
                <TimeUnit value={duration.minutes} label="Min" />
                <div className="text-2xl text-gray-300 pb-4">:</div>
                <TimeUnit value={duration.seconds} label="Seg" />
            </div>
        </section>
    );
};

export default LoveCounter;
