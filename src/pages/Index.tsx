
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Heart, MapPin, Phone, MessageCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-red-50 to-orange-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6ccacee4-dc8b-42a5-8b67-d3ec0dcd5ad8.png" 
              alt="Snare Home Decor Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Snare Home Decor
              </h1>
              <p className="text-xs text-orange-600 font-medium">an artful excellence</p>
            </div>
          </div>
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors text-sm sm:text-base">Home</Link>
            <Link to="/tracking" className="text-gray-700 hover:text-orange-600 transition-colors text-sm sm:text-base">Track Order</Link>
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-sm sm:text-base px-3 py-2 sm:px-4"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent leading-tight">
              Royal Rajasthani Heritage for Your Home
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed px-4">
              Experience the magnificence of Jaipur's royal craftsmanship with our exquisite handcrafted decor, 
              premium bedsheets, and elegant pillowcovers. Each piece tells a story of tradition and artistry.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-orange-300 text-orange-600 hover:bg-orange-50 text-base sm:text-lg px-6 py-3"
              >
                <Link to="/tracking" className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Track Your Order
                </Link>
              </Button>
            </div>
            
            {/* Delivering Worldwide - Subtle placement */}
            <div className="mt-8">
              <div className="inline-flex items-center justify-center text-sm text-orange-700 bg-orange-100/50 px-4 py-2 rounded-full border border-orange-200">
                <Globe className="h-4 w-4 mr-2" />
                <span className="font-medium">Delivering Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 px-4 bg-white/60">
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Our Royal Heritage Collection</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <Package className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Premium Bedsheets</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Luxurious cotton bedsheets with traditional Rajasthani prints and royal motifs that transform your bedroom into a maharaja's palace.
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-orange-500 group-hover:text-white transition-colors text-sm"
                  onClick={() => window.open('https://www.instagram.com/snarehomedecor?utm_source=ig_web_button_share_sheet&igsh=MTBoYzYxejJlN2x3MA==', '_blank')}
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-orange-50">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Elegant Pillowcovers</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Handcrafted pillowcovers featuring intricate Rajasthani embroidery and mirror work that reflect the grandeur of royal palaces.
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-red-500 group-hover:text-white transition-colors text-sm"
                  onClick={() => window.open('https://www.instagram.com/snarehomedecor?utm_source=ig_web_button_share_sheet&igsh=MTBoYzYxejJlN2x3MA==', '_blank')}
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-50 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <Package className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">Royal Handcrafted Decor</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Authentic Rajasthani artifacts including brass items, wooden carvings, and traditional wall hangings that showcase royal heritage.
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-orange-500 group-hover:text-white transition-colors text-sm"
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
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">The Royal Jaipur Experience</h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 px-4">
              Step into the world of Rajasthani royalty with Snare Home Decor. Our artisans, carrying centuries-old 
              traditions, create each piece with the same dedication that once adorned the palaces of maharajas. 
              From the vibrant hues of Jaipur's bazaars to the intricate craftsmanship of royal courts, 
              we bring you authentic pieces that transform your home into a sanctuary of elegance and heritage.
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 sm:p-6 rounded-lg">
              <p className="text-orange-700 font-semibold text-base sm:text-lg">
                "Where tradition meets excellence, and every thread tells a royal story"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-12 sm:py-16 px-4 bg-white/60">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Connect with Royal Heritage</h3>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                    Visit Our Office
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    A-84 Singh Bhoomi, Khatipura<br />
                    Jaipur, Rajasthan 302012<br />
                    India 🇮🇳
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-orange-50">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-semibold mb-4">Get in Touch</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-orange-600 mr-3" />
                      <a href="tel:9887238849" className="text-sm sm:text-base text-gray-600 hover:text-orange-600 transition-colors">
                        +91 98872 38849
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-orange-600 mr-3" />
                      <a 
                        href="https://chat.whatsapp.com/GaDDKHi3OxFKGziFz0XXXE" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-gray-600 hover:text-orange-600 transition-colors"
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
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/6ccacee4-dc8b-42a5-8b67-d3ec0dcd5ad8.png" 
                  alt="Snare Home Decor Logo" 
                  className="h-6 w-6 sm:h-8 sm:w-8 object-contain filter brightness-0 invert"
                />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">Snare Home Decor</h4>
                  <p className="text-xs sm:text-sm text-orange-100">an artful excellence</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-orange-100">
                Bringing the royal essence of Rajasthan to homes worldwide with authentic handcrafted decor and premium textiles.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h5>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm sm:text-base text-orange-100 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/tracking" className="text-sm sm:text-base text-orange-100 hover:text-white transition-colors">Track Order</Link></li>
                <li><a href="tel:9887238849" className="text-sm sm:text-base text-orange-100 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-base sm:text-lg">Our Royal Heritage</h5>
              <ul className="space-y-2">
                <li><span className="text-sm sm:text-base text-orange-100">Premium Bedsheets</span></li>
                <li><span className="text-sm sm:text-base text-orange-100">Elegant Pillowcovers</span></li>
                <li><span className="text-sm sm:text-base text-orange-100">Royal Handcrafted Decor</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-400 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-orange-100">&copy; 2025 Snare Home Decor. All rights reserved. | Delivering Royal Heritage Worldwide 🌍</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
