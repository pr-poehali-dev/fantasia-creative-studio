import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Фантазия
            </h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#courses" className="hover:text-primary transition-colors">Направления</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            Записаться
          </Button>
        </div>
      </div>
    </nav>
  );
}