import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, MapPin, Image as ImageIcon, ArrowRight } from 'lucide-react';

export function FeaturedEvents() {
  const events = [
    {
      id: 1,
      title: 'Финал ОХЛ 2026',
      date: '25 апр, 2026',
      location: 'Нижний Новгород, Нагорный',
      tag: 'Спорт',
      image: '/images/OHL_1.jpg',
      // placeholderColor: 'bg-gradient-to-tr from-[#00B4B4]/20 to-[#00B4B4]/40',
    },
    {
      id: 2,
      title: 'Открытие Учебного центра Технониколь',
      date: '27 Март, 2026',
      location: 'Нижний Новгород, ННГАСУ',
      tag: 'Корпоратив',
      image: "/images/technonikol_1.jpg",
      // placeholderColor: 'bg-gradient-to-tr from-[#FF6B61]/20 to-[#FF6B61]/40',
    },
    {
      id: 3,
      title: 'Нижегородский лыжный марафон 2026',
      date: '21 Февр., 2026',
      location: 'Нижний Новгород, Лыжная база',
      tag: 'Спорт',
      image: "/images/ski_marafon_1.jpg",
      // placeholderColor: 'bg-gradient-to-tr from-gray-600 to-gray-500',
    },
  ];

  return (
    <section id="events" className="bg-[#2B2B2B] py-32 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00B4B4]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Наши проекты
            </h2>
            <p className="text-gray-400 text-lg font-medium">
              Почувствуйте атмосферу и масштаб наших проектов. Ознакомьтесь с мероприятиями, которые мы успешно реализовали.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#00B4B4] text-[#00B4B4] font-semibold hover:bg-[#00B4B4] hover:text-white transition-all duration-300 group"
          >
            Смотреть все
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#333333] rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-[#FF6B61]/50 flex flex-col cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className={`h-64 relative flex items-center justify-center overflow-hidden`}>
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                
                {/* <div className="flex flex-col items-center justify-center text-white/50 z-20 group-hover:scale-110 transition-transform duration-500">
                  <ImageIcon size={48} strokeWidth={1} className="mb-3 opacity-60" />
                  <span className="text-sm font-medium tracking-wide uppercase">Место для фото</span>
                </div> */}

                <div className="absolute top-4 left-4 z-30">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold text-white">
                    {evt.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative bg-gradient-to-b from-[#333333] to-[#2B2B2B]">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FF6B61] transition-colors duration-300">
                  {evt.title}
                </h3>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <div className="flex items-center gap-3 text-gray-400">
                    <CalendarDays size={18} className="text-[#00B4B4]" />
                    <span className="font-medium text-[15px]">{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin size={18} className="text-[#00B4B4]" />
                    <span className="font-medium text-[15px]">{evt.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
