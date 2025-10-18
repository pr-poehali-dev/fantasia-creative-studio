import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-orange-50 to-pink-50">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Откройте мир музыки <br />и искусства! 🎶
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Студия творчества для всех возрастов. Развивайте свои таланты с профессиональными преподавателями
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Пробное занятие бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 918 035 21 39
            </Button>
          </div>
        </div>
        <div className="mt-16 flex justify-center gap-8 text-center flex-wrap">
          <div className="animate-scale-in">
            <div className="text-4xl font-bold text-primary">6</div>
            <div className="text-muted-foreground">Направлений</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-secondary">800+</div>
            <div className="text-muted-foreground">Учеников</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-accent">20</div>
            <div className="text-muted-foreground">Лет опыта</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold flex items-center justify-center gap-1">
              <Icon name="Star" size={32} className="text-yellow-500 fill-yellow-500" />
              <span className="text-yellow-600">4.9</span>
            </div>
            <div className="text-muted-foreground">Рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  );
}