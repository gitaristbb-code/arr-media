import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, MapPin, Users, Settings } from 'lucide-react';

export function Services() {
  const servicesData = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#00B4B4]" />,
      title: (
        <>
          Полный продакшн:
          <br />
          от идеи
          <br />
          до финала
        </>
      ),
      description: 'Мы берем на себя креатив, техническую реализацию и координацию в день события.',
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#00B4B4]" />,
      title: 'Локации и логистика без сюрпризов',
      description: 'Поиск площадки, разрешения, маршруты, размещение и подрядчики — всё под контролем с детальным планом.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#00B4B4]" />,
      title: 'Работа с аудиторией и гостями',
      description: 'Интерактивные зоны, пригласительные кампании и полное сопровождение гостей на площадке.',
    },
    {
      icon: <Settings className="w-8 h-8 text-[#00B4B4]" />,
      title: 'Техническое обеспечение',
      description: 'Свет, звук, мультимедиа, декорации и застройка площадок любой сложности под ключ.',
    },
  ];

  return (
    <section id="services" className="bg-[#F8F9FA] py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] tracking-tight mb-6 leading-[1.1]">
              Всё необходимое <br />
              <span className="text-[#00B4B4]">для идеального мероприятия.</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Мы берем на себя всю организацию, от идеи до финального аккорда, превращая сложный процесс в безупречный проект.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white p-8 rounded-xl shadow-sm border-2 border-transparent hover:border-[#FF6B61] transition-all duration-300 group hover:-translate-y-2 cursor-pointer flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00B4B4]/10 flex items-center justify-center mb-8 group-hover:bg-[#FF6B61]/10 group-hover:scale-110 transition-all duration-300">
                {React.cloneElement(service.icon, {
                  className: 'w-8 h-8 text-[#00B4B4] group-hover:text-[#FF6B61] transition-colors',
                })}
              </div>
              <h3 className="text-2xl font-bold text-[#2B2B2B] mb-4 group-hover:text-[#FF6B61] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 font-medium flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
