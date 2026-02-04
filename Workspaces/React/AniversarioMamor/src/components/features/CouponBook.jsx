import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, CheckCircle } from 'lucide-react'; // Assuming lucide-react is installed
import { ASSETS } from '../../config/assets';

const CouponCard = ({ coupon }) => {
    const [redeemed, setRedeemed] = useState(false);

    const handleRedeem = () => {
        if (redeemed) return;

        // Construct WhatsApp message
        const phone = '5582594361';
        const message = encodeURIComponent(`¡Hola! Quiero canjear mi vale por: ${coupon.title} ❤️`);
        const url = `https://wa.me/${phone}?text=${message}`;

        // Open in new tab
        window.open(url, '_blank');
        setRedeemed(true);
    };

    return (
        <motion.div
            className={`p-6 rounded-3xl mb-4 text-center border-2 transition-colors duration-300 ${redeemed
                    ? 'bg-gray-100 border-gray-200 text-gray-400'
                    : 'bg-white border-soft-nude shadow-sm'
                }`}
            whileTap={!redeemed ? { scale: 0.98 } : {}}
        >
            <div className="flex justify-center mb-4">
                {redeemed ? (
                    <CheckCircle className="w-8 h-8 text-gray-300" />
                ) : (
                    <Ticket className="w-8 h-8 text-elegant-gold" />
                )}
            </div>

            <h4 className={`text-lg font-serif mb-2 ${redeemed ? 'line-through' : 'text-carbon-black'}`}>
                {coupon.title}
            </h4>
            <p className="text-sm text-gray-500 mb-6 font-sans">
                {coupon.description}
            </p>

            <motion.button
                onClick={handleRedeem}
                disabled={redeemed}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide w-full ${redeemed
                        ? 'bg-gray-200 text-gray-500 cursor-default'
                        : 'bg-carbon-black text-white'
                    }`}
                animate={!redeemed ? { scale: [1, 1.05, 1] } : {}}
                transition={!redeemed ? {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                } : {}}
            >
                {redeemed ? 'Canjeado' : 'Canjear Vale'}
            </motion.button>
        </motion.div>
    );
};

const CouponBook = () => {
    return (
        <section className="py-12 px-6 bg-soft-nude/20">
            <h3 className="text-2xl font-serif text-center text-carbon-black mb-2">
                Cuponera de Amor
            </h3>
            <p className="text-center text-gray-500 text-sm mb-8">
                Válidos para siempre
            </p>

            <div>
                {ASSETS.couponBook.map((coupon) => (
                    <CouponCard key={coupon.id} coupon={coupon} />
                ))}
            </div>
        </section>
    );
};

export default CouponBook;
