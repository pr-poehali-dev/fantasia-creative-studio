import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Свяжитесь с нами
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Запишитесь на бесплатное пробное занятие
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
              <CardDescription>Мы всегда на связи</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-primary" size={20} />
                <div className="flex-1">
                  <div className="font-semibold">Телефон</div>
                  <a href="tel:+79180352139" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 918 035 21 39
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" className="text-primary" size={20} />
                <div>
                  <div className="font-semibold">Адрес</div>
                  <div className="text-muted-foreground">г. Краснодар, ул. Душистая, 43</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-primary" size={20} />
                <div>
                  <div className="font-semibold">Время работы</div>
                  <div className="text-muted-foreground">Ежедневно 9:00 - 20:00</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-primary" size={20} />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">info@fantazia-studio.ru</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Оставьте заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Сообщение"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MapPin" className="text-primary" size={20} />
              Как нас найти
            </CardTitle>
            <CardDescription>г. Краснодар, ул. Душистая, 43</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[400px] rounded-lg overflow-hidden mb-4">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=38.990899%2C45.141716&z=17&mode=whatshere&whatshere%5Bpoint%5D=38.990899%2C45.141716&whatshere%5Bzoom%5D=17"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: 'relative' }}
              ></iframe>
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
              onClick={() => window.open('https://yandex.ru/maps/?rtext=~45.141716,38.990899', '_blank')}
            >
              <Icon name="Navigation" className="mr-2" size={16} />
              Построить маршрут
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}