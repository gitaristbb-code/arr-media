import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col justify-center bg-[#2B2B2B] overflow-hidden pt-32 pb-24"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -left-20 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#00B4B4] rounded-full blur-[140px] opacity-20 animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 -right-20 w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-[#FF6B61] rounded-full blur-[120px] opacity-15 animate-[pulse_10s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(43,43,43,0)_0%,rgba(43,43,43,0.8)_80%)] z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6B61] animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">
              Премиальное event-агентство
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tighter leading-[1.05] mb-8"
          >
            Мы создаем незабываемые события <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4B4] to-[#FF6B61]">
              любого масштаба
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-medium leading-relaxed"
          >
            Мы объединяем стратегию, креатив и безупречный менеджмент для
            создания впечатлений, которые вдохновляют и решают задачи вашего
            бизнеса.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#events"
              className="w-full sm:w-auto px-8 py-4 bg-[#FF6B61] hover:bg-[#ff7a72] text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,107,97,0.4)] hover:-translate-y-1 group"
            >
              Смотреть события
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </div>

        {/* Team Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl mx-auto mt-8 relative rounded-[24px] overflow-hidden group shadow-2xl border border-white/10"
        >
          {/* This is a placeholder for the beautiful team photo */}
          <div className="aspect-[21/9] w-full relative bg-gradient-to-tr from-[#333333] to-[#222222] flex items-center justify-center">
            <ImageWithFallback
              src="./images/geran.jpg"
              alt="Team photo placeholder"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            />
            {/* Overlay gradient for text legibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-transparent to-transparent opacity-80" />

            {/* Helper text block to show where the photo goes
            <div className="relative z-10 flex flex-col items-center text-white/70 bg-black/40 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/10 group-hover:bg-black/20 transition-all duration-500">
              <ImageIcon size={48} className="mb-4 text-[#00B4B4] opacity-80" />
              <p className="text-xl font-bold tracking-wide">Фото вашей команды</p>
              <p className="text-sm mt-2 max-w-xs text-center">Здесь будет располагаться красивая фотография вашей команды и отдела.</p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
