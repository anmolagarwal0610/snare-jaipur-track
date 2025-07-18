import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Heart, MapPin, Phone, MessageCircle, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/6ccacee4-dc8b-42a5-8b67-d3ec0dcd5ad8.png" 
              alt="Snaré Logo" 
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-script font-bold text-foreground">
                Snaré
              </h1>
            </div>
          </div>
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base font-display">Home</Link>
            <Link to="/tracking" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base font-display">Track Order</Link>
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-accent transition-all duration-300 text-sm sm:text-base px-4 py-2 rounded-full shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-secondary/30"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-script font-bold mb-6 text-foreground leading-tight">
              Snaré: an artful excellence
            </h2>
            <div className="lotus-divider"></div>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed px-4 font-display">
              Experience the magnificence of Jaipur's royal craftsmanship with our exquisite handcrafted decor, 
              premium bedsheets, and elegant pillowcovers. Each piece tells a story of tradition and artistry.
            </p>
            <div className="flex justify-center mb-8">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover-lift"
              >
                <Link to="/tracking" className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Track Your Order
                </Link>
              </Button>
            </div>
            
            {/* Delivering Worldwide - Elegant placement */}
            <div className="inline-flex items-center justify-center text-sm text-primary bg-primary/10 px-6 py-3 rounded-full border border-primary/20 shadow-soft">
              <Globe className="h-4 w-4 mr-2" />
              <span className="font-display font-medium">Delivering Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-card to-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-3xl sm:text-4xl font-script font-bold mb-4 text-foreground">Our Royal Heritage Collection</h3>
            <div className="lotus-divider"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover-lift border-0 bg-card shadow-soft hover:shadow-elegant transition-all duration-500 rounded-3xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <Package className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-display font-semibold mb-4 text-foreground">Premium Bedsheets</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Luxurious cotton bedsheets with traditional Rajasthani prints and royal motifs that transform your bedroom into a maharaja's palace.
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full px-6"
                  onClick={() => window.open('https://www.instagram.com/snarehomedecor?utm_source=ig_web_button_share_sheet&igsh=MTBoYzYxejJlN2x3MA==', '_blank')}
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-lift border-0 bg-card shadow-soft hover:shadow-elegant transition-all duration-500 rounded-3xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-display font-semibold mb-4 text-foreground">Elegant Pillowcovers</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Handcrafted pillowcovers featuring intricate Rajasthani embroidery and mirror work that reflect the grandeur of royal palaces.
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full px-6"
                  onClick={() => window.open('https://www.instagram.com/snarehomedecor?utm_source=ig_web_button_share_sheet&igsh=MTBoYzYxejJlN2x3MA==', '_blank')}
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-lift border-0 bg-card shadow-soft hover:shadow-elegant transition-all duration-500 rounded-3xl overflow-hidden sm:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-display font-semibold mb-4 text-foreground">Royal Handcrafted Decor</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Authentic Rajasthani artifacts including brass items, wooden carvings, and traditional wall hangings that showcase royal heritage.
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full px-6"
                  onClick={() => window.open('https://www.instagram.com/snarehomedecor?utm_source=ig_web_button_share_sheet&igsh=MTBoYzYxejJlN2x3MA==', '_blank')}
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-secondary/20 to-muted/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h3 className="text-3xl sm:text-4xl font-script font-bold mb-6 text-foreground">The Royal Jaipur Experience</h3>
            <div className="lotus-divider"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 px-4 font-display">
              Step into the world of Rajasthani royalty with Snaré. Our artisans, carrying centuries-old 
              traditions, create each piece with the same dedication that once adorned the palaces of maharajas. 
              From the vibrant hues of Jaipur's bazaars to the intricate craftsmanship of royal courts, 
              we bring you authentic pieces that transform your home into a sanctuary of elegance and heritage.
            </p>
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl shadow-soft">
              <CardContent className="p-8">
                <p className="text-primary font-script text-xl font-semibold italic leading-relaxed">
                  "Where tradition meets excellence, and every thread tells a royal story"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 sm:py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h3 className="text-3xl sm:text-4xl font-script font-bold mb-4 text-foreground">Connect with Royal Heritage</h3>
              <div className="lotus-divider"></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <Card className="border-0 shadow-elegant bg-gradient-to-br from-card to-muted rounded-3xl hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-xl font-display font-semibold mb-6 flex items-center text-foreground">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    Visit Our Office
                  </h4>
                  <div className="text-muted-foreground leading-relaxed space-y-2">
                    <p className="font-display">A-84 Singh Bhoomi, Khatipura</p>
                    <p className="font-display">Jaipur, Rajasthan 302012</p>
                    <p className="font-display">India 🇮🇳</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant bg-gradient-to-br from-card to-muted rounded-3xl hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-xl font-display font-semibold mb-6 text-foreground">Get in Touch</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-primary mr-4" />
                      <a href="tel:9887238849" className="text-muted-foreground hover:text-primary transition-colors font-display">
                        +91 98872 38849
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-6 w-6 text-primary mr-4" />
                      <a 
                        href="https://chat.whatsapp.com/GaDDKHi3OxFKGziFz0XXXE" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors font-display"
                      >
                        WhatsApp Group
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/lovable-uploads/6ccacee4-dc8b-42a5-8b67-d3ec0dcd5ad8.png" 
                  alt="Snaré Logo" 
                  className="h-10 w-10 object-contain filter brightness-0 invert"
                />
                <div>
                  <h4 className="text-xl font-script font-bold">Snaré</h4>
                  <p className="text-sm text-primary-foreground/80 font-serif italic">an artful excellence</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed font-display">
                Bringing the royal essence of Rajasthan to homes worldwide with authentic handcrafted decor and premium textiles.
              </p>
            </div>
            <div>
              <h5 className="font-display font-semibold mb-6 text-lg">Quick Links</h5>
              <ul className="space-y-3">
                <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-display">Home</Link></li>
                <li><Link to="/tracking" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-display">Track Order</Link></li>
                <li><button onClick={scrollToContact} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-display text-left">Contact Us</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-display font-semibold mb-6 text-lg">Our Royal Heritage</h5>
              <ul className="space-y-3">
                <li><span className="text-primary-foreground/80 font-display">Premium Bedsheets</span></li>
                <li><span className="text-primary-foreground/80 font-display">Elegant Pillowcovers</span></li>
                <li><span className="text-primary-foreground/80 font-display">Royal Handcrafted Decor</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-10 pt-8 text-center">
            <p className="text-sm text-primary-foreground/80 font-display">
              &copy; 2025 Snaré: an artful excellence. All rights reserved. | Delivering Royal Heritage Worldwide 🌍
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
