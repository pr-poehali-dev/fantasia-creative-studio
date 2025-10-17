import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Фантазия
            </h3>
            <p className="text-gray-400">
              Студия творчества для всех возрастов. Развивайте свои таланты с профессиональными преподавателями.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#courses" className="hover:text-white transition-colors">Направления</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Расписание</a></li>
              <li><a href="#prices" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 918 035 21 39
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@fantazia-studio.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                г. Краснодар
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 Студия Фантазия. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
