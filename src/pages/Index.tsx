import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="ChefHat" size={32} className="text-pasta-orange" />
              <span className="text-2xl font-heading font-bold text-pasta-navy">
                Pasta Restaurant
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#menu"
                className="text-pasta-navy hover:text-pasta-orange transition-colors font-body"
              >
                Меню
              </a>
              <a
                href="#about"
                className="text-pasta-navy hover:text-pasta-orange transition-colors font-body"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-pasta-navy hover:text-pasta-orange transition-colors font-body"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-pasta-orange hover:bg-pasta-orange/90 text-white font-body">
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-pasta-cream py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-pasta-navy mb-6 animate-fade-in">
            Authentic Italian Pasta
          </h1>
          <p className="text-xl text-pasta-navy/80 mb-8 max-w-2xl mx-auto font-body animate-fade-in">
            Погрузитесь в мир настоящей итальянской кухни с нашими свежими
            пастами, приготовленными по традиционным рецептам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              size="lg"
              className="bg-pasta-orange hover:bg-pasta-orange/90 text-white font-body"
            >
              Посмотреть меню
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pasta-navy text-pasta-navy hover:bg-pasta-navy hover:text-white font-body"
            >
              Забронировать столик
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-pasta-navy mb-4">
              Наше меню
            </h2>
            <p className="text-lg text-pasta-navy/70 max-w-2xl mx-auto font-body">
              Выберите из нашей коллекции традиционных и современных блюд
              итальянской кухни
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-full h-48 bg-pasta-cream rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/img/280bcbec-8e44-4dbb-8eca-de90357d7cda.jpg"
                    alt="Carbonara Classica"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-heading text-pasta-navy">
                  Carbonara Classica
                </CardTitle>
                <CardDescription className="font-body">
                  Традиционная паста карбонара с беконом, яйцом и пармезаном
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-heading font-bold text-pasta-orange">
                    890₽
                  </span>
                  <Button
                    size="sm"
                    className="bg-pasta-orange hover:bg-pasta-orange/90 text-white font-body"
                  >
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Menu Item 2 */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-full h-48 bg-pasta-cream rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/img/07cbf0db-58fc-417b-aa8b-581c28dcbab3.jpg"
                    alt="Pesto Genovese"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-heading text-pasta-navy">
                  Pesto Genovese
                </CardTitle>
                <CardDescription className="font-body">
                  Спагетти с домашним соусом песто из базилика и кедровых орехов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-heading font-bold text-pasta-orange">
                    780₽
                  </span>
                  <Button
                    size="sm"
                    className="bg-pasta-orange hover:bg-pasta-orange/90 text-white font-body"
                  >
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Menu Item 3 */}
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-full h-48 bg-pasta-cream rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/img/649d5ca4-8423-4e52-b534-d0ef3b32918d.jpg"
                    alt="Arrabbiata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-heading text-pasta-navy">
                  Arrabbiata
                </CardTitle>
                <CardDescription className="font-body">
                  Острая паста с томатным соусом, чесноком и красным перцем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-heading font-bold text-pasta-orange">
                    720₽
                  </span>
                  <Button
                    size="sm"
                    className="bg-pasta-orange hover:bg-pasta-orange/90 text-white font-body"
                  >
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-pasta-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-pasta-navy mb-6">
                О нашем ресторане
              </h2>
              <p className="text-lg text-pasta-navy/80 mb-6 font-body">
                Уже более 20 лет мы создаем незабываемые вкусы настоящей Италии.
                Наши шеф-повара используют только самые свежие ингредиенты и
                традиционные рецепты, передающиеся из поколения в поколение.
              </p>
              <p className="text-lg text-pasta-navy/80 mb-8 font-body">
                Каждая паста готовится вручную, каждый соус - это произведение
                искусства. Добро пожаловать в мир итальянской кухни!
              </p>
              <div className="flex items-center space-x-4">
                <Icon
                  name="Star"
                  size={24}
                  className="text-pasta-gold fill-pasta-gold"
                />
                <span className="text-pasta-navy font-body">
                  4.9 звезд на основе 1,200+ отзывов
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-pasta-navy/10 rounded-lg flex items-center justify-center">
                <Icon name="ChefHat" size={96} className="text-pasta-orange" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pasta-navy text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="ChefHat" size={24} className="text-pasta-orange" />
                <span className="text-xl font-heading font-bold">
                  Pasta Restaurant
                </span>
              </div>
              <p className="text-white/80 font-body">
                Настоящая итальянская кухня в сердце города
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">
                Контакты
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-pasta-orange" />
                  <span className="text-white/80 font-body">
                    ул. Итальянская, 12
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-pasta-orange" />
                  <span className="text-white/80 font-body">
                    +7 (495) 123-45-67
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-pasta-orange" />
                  <span className="text-white/80 font-body">11:00 - 23:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">
                Следите за нами
              </h3>
              <div className="flex space-x-4">
                <Icon
                  name="Instagram"
                  size={24}
                  className="text-pasta-orange hover:text-pasta-orange/80 cursor-pointer"
                />
                <Icon
                  name="Facebook"
                  size={24}
                  className="text-pasta-orange hover:text-pasta-orange/80 cursor-pointer"
                />
                <Icon
                  name="Twitter"
                  size={24}
                  className="text-pasta-orange hover:text-pasta-orange/80 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 font-body">
              © 2024 Pasta Restaurant. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
