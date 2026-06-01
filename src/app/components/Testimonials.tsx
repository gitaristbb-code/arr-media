import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Огромное спасибо команде. Очень облегчили работу — сняли с нас всю головную боль по координации подрядчиков. Всё прозрачно и по плану.",
      author: "Елена М.",
      role: "HR Директор",
      avatar: "bg-[#00B4B4]/20 text-[#00B4B4]"
    },
    {
      quote: "Впервые работали с агентством, где вся отчетность предоставляется день в день. Никаких скрытых платежей, всё четко и понятно.",
      author: "Марк Ю.",
      role: "CEO IT-компании",
      avatar: "bg-[#FF6B61]/20 text-[#FF6B61]"
    },
    {
      quote: "Надежный партнер для организации масштабных конференций. Они продумали каждую мелочь, так что мы могли просто заниматься своими задачами.",
      author: "Анна К.",
      role: "Директор по маркетингу",
      avatar: "bg-gray-200 text-gray-600"
    }
  ];

  return (
    <section id="about" className="bg-[#F8F9FA] py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold text-[#FF6B61] tracking-widest uppercase mb-4 block">
            Отзывы
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] tracking-tight">
            Нам доверяют лидеры рынка.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white p-10 rounded-xl shadow-sm relative"
            >
              <Quote size={40} className="text-[#00B4B4] opacity-20 absolute top-8 right-8" />
              <p className="text-xl md:text-2xl text-[#2B2B2B] font-medium leading-[1.4] mb-10 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ${testimonial.avatar}`}>
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#2B2B2B]">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
