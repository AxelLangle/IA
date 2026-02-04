import React from 'react';
import { ASSETS } from '../../config/assets';

const MusicPlayer = () => {
    return (
        <section className="px-6 py-8 pb-12 bg-white">
            <h3 className="text-xl font-serif text-center text-carbon-black mb-6">
                Nuestra Playlist
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    style={{ borderRadius: '12px' }}
                    src={`https://open.spotify.com/embed/playlist/${ASSETS.music.spotifyEmbedId}?utm_source=generator`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default MusicPlayer;
