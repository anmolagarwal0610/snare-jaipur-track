
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Sparkles, Heart, MapPin, Phone, MessageCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6ccacee4-dc8b-42a5-8b67-d3ec0dcd5ad8.png" 
              alt="Snare Home Decor Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Snare Home Decor
              </h1>
              <p className="text-xs text-purple-600 font-medium">an artful excellence</p>
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
            <Link to="/tracking" className="text-gray-700 hover:text-purple-600 transition-colors">Track Order</Link>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Contact Us
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-purple-600 mr-2" />
              <span className="text-lg font-semibold text-purple-700 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                Delivering Worldwide
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
              Royal Rajasthani Heritage for Your Home
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the magnificence of Jaipur's royal craftsmanship with our exquisite handcrafted decor, 
              premium bedsheets, and elegant pillowcovers. Each piece tells a story of tradition and artistry.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => window.open('https://www.instagram.com/snarehomedecor?utm_source=ig_web_button_share_sheet&igsh=MTBoYzYxejJlN2x3MA==', '_blank')}
              >
                Explore Royal Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                <Link to="/tracking" className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Track Your Order
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white/60">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Royal Heritage Collection</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Premium Bedsheets</h4>
                <p className="text-gray-600 mb-4">
                  Luxurious cotton bedsheets with traditional Rajasthani prints and royal motifs that transform your bedroom into a maharaja's palace.
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-purple-500 group-hover:text-white transition-colors"
                  onClick={() => window.open('https://www.instagram.com/snarehomedecor?utm_source=ig_web_button_share_sheet&igsh=MTBoYzYxejJlN2x3MA==', '_blank')}
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-purple-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Elegant Pillowcovers</h4>
                <p className="text-gray-600 mb-4">
                  Handcrafted pillowcovers featuring intricate Rajasthani embroidery and mirror work that reflect the grandeur of royal palaces.
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-pink-500 group-hover:text-white transition-colors"
                  onClick={() => window.open('https://www.instagram.com/snarehomedecor?utm_source=ig_web_button_share_sheet&igsh=MTBoYzYxejJlN2x3MA==', '_blank')}
                >
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Royal Handcrafted Decor</h4>
                <p className="text-gray-600 mb-4">
                  Authentic Rajasthani artifacts including brass items, wooden carvings, and traditional wall hangings that showcase royal heritage.
                </p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-purple-500 group-hover:text-white transition-colors"
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">The Royal Jaipur Experience</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Step into the world of Rajasthani royalty with Snare Home Decor. Our artisans, carrying centuries-old 
              traditions, create each piece with the same dedication that once adorned the palaces of maharajas. 
              From the vibrant hues of Jaipur's bazaars to the intricate craftsmanship of royal courts, 
              we bring you authentic pieces that transform your home into a sanctuary of elegance and heritage.
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
              <p className="text-purple-700 font-semibold text-lg">
                "Where tradition meets excellence, and every thread tells a royal story"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white/60">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Connect with Royal Heritage</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                    Visit Our Royal Workshop
                  </h4>
                  <p className="text-gray-600 mb-4">
                    A-84 Singh Bhoomi Khatipura<br />
                    Jaipur, Rajasthan 302012<br />
                    India
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-purple-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-purple-600 mr-3" />
                      <a href="tel:9887238849" className="text-gray-600 hover:text-purple-600 transition-colors">
                        +91 98872 38849
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-purple-600 mr-3" />
                      <a 
                        href="https://chat.whatsapp.com/GaDDKHi3OxFKGziFz0XXXE" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
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
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/6ccacee4-dc8b-42a5-8b67-d3ec0dcd5ad8.png" 
                  alt="Snare Home Decor Logo" 
                  className="h-8 w-8 object-contain filter brightness-0 invert"
                />
                <div>
                  <h4 className="text-xl font-bold">Snare Home Decor</h4>
                  <p className="text-sm text-purple-100">an artful excellence</p>
                </div>
              </div>
              <p className="text-purple-100">
                Bringing the royal essence of Rajasthan to homes worldwide with authentic handcrafted decor and premium textiles.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><Link to="/" className="text-purple-100 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/tracking" className="text-purple-100 hover:text-white transition-colors">Track Order</Link></li>
                <li><a href="tel:9887238849" className="text-purple-100 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Our Royal Heritage</h5>
              <ul className="space-y-2">
                <li><span className="text-purple-100">Premium Bedsheets</span></li>
                <li><span className="text-purple-100">Elegant Pillowcovers</span></li>
                <li><span className="text-purple-100">Royal Handcrafted Decor</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-400 mt-8 pt-8 text-center">
            <p className="text-purple-100">&copy; 2024 Snare Home Decor. All rights reserved. | Delivering Royal Heritage Worldwide 🌍</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
