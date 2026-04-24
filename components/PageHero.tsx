import React from 'react';
import Image from 'next/image';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    eyebrow?: string;
}

export default function PageHero({ title, subtitle, backgroundImage, eyebrow = 'House of Elle' }: PageHeroProps) {
    return (
        <div className={`relative overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-[45vh] ${!backgroundImage ? 'bg-brand-black' : 'bg-brand-black'}`}>
            {backgroundImage ? (
                <div className="absolute inset-0">
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover opacity-80"
                        priority
                        sizes="100vw"
                        quality={84}
                    />
                    {/* Clean, luxury gradient overlay to ensure text pops without making the image muddy */}
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-brand-black/50 to-brand-black/90"></div>
                </div>
            ) : (
                <>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-brown to-brand-black"></div>
                    <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl"></div>
                </>
            )}

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 text-center z-10 flex flex-col items-center">
                <div className="mb-4 md:mb-5 overflow-hidden">
                    <span className="inline-flex items-center gap-2 md:gap-4 text-brand-gold text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold animate-in slide-in-from-bottom-3 duration-700">
                        <span className="w-4 md:w-8 h-[1px] bg-brand-gold/60"></span>
                        {eyebrow}
                        <span className="w-4 md:w-8 h-[1px] bg-brand-gold/60"></span>
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-4 md:mb-5 leading-[1.1] drop-shadow-lg animate-in slide-in-from-bottom-4 duration-700 delay-100 px-2">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-sm sm:text-base md:text-lg text-brand-ivory/80 max-w-2xl mx-auto leading-relaxed font-light drop-shadow animate-in slide-in-from-bottom-5 duration-700 delay-200 px-4">
                        {subtitle}
                    </p>
                )}
            </div>
            
            {/* Subtle bottom separator */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
        </div>
    );
}
