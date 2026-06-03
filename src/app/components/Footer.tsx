import React from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

const links = [
  {
    label: "ВКонтакте",
    href: "https://vk.com/arrmedia",
    src: `images/icons/vk_logo.svg`,
  },
  {
    label: "MAX",
    href: "https://vk.com/arrmedia",
    src: `images/icons/max_logo.svg`,
  },
  {
    label: "Mail",
    href: "https://vk.com/arrmedia",
    Icon: Mail,
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1A1A1A] text-white py-24 border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF6B61]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            {/*<a
              href="#"
              className="flex items-center gap-2 mb-6 group inline-flex"
            >
              <div className="bg-[#00B4B4] text-white p-2 rounded-xl group-hover:bg-[#FF6B61] transition-colors duration-300">
                <Activity size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white leading-none">
                  ARR
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#00B4B4] mt-1 font-semibold opacity-90">
                  media event production
                </span>
              </div>
            </a>*/}

            <a href="#hero" className="flex items-center group">
              <img
                src={`${import.meta.env.BASE_URL}/images/arr_logo.svg`}
                alt="АРР Медиа - креатив, дизайн, ивент"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>

            <p className="text-gray-400 font-medium max-w-sm mb-8 leading-relaxed">
              Организуем мероприятия любого масштаба под ключ: от корпоративных
              конференций до масштабных фестивалей, обеспечивая безупречный
              продакшн.
            </p>

            <div className="flex gap-4">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("https") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("https")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={item.label}
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#00B4B4] hover:text-white transition-all duration-300"
                >
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.label}
                      className="h-5 w-5 object-contain"
                    />
                  ) : (
                    "Icon" in item && item.Icon && <item.Icon size={20} />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Компания</h4>
            <ul className="flex flex-col gap-4 font-medium">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#00B4B4] transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#00B4B4] transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-gray-400 hover:text-[#00B4B4] transition-colors"
                >
                  Проекты
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#00B4B4] transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/*<div>
            <h4 className="text-lg font-bold mb-6 text-white">Рассылка</h4>
            <p className="text-gray-400 font-medium mb-4 text-sm">
              Получайте обновления о наших новых проектах и мероприятиях.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="bg-[#2B2B2B] text-white px-5 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#00B4B4] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#FF6B61] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#ff7a72] transition-colors duration-300 w-full"
              >
                Подписаться
              </button>
            </form>
          </div>*/}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm font-medium">
          <p>
            &copy; {new Date().getFullYear()} ARR Media Event Production. Все
            права защищены.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
