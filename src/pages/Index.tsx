
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-orange-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Snare Home Decor
            </h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/tracking" className="text-gray-700 hover:text-orange-600 transition-colors">Track Order</Link>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
              Contact Us
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your Home with Jaipur's Finest
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover exquisite handcrafted decor, premium bedsheets, and beautiful pillowcovers 
              that bring the royal essence of Jaipur to your home.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
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
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Signature Collection</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Premium Bedsheets</h4>
                <p className="text-gray-600 mb-4">
                  Luxurious cotton bedsheets with traditional Jaipur prints and vibrant colors that transform your bedroom into a royal retreat.
                </p>
                <Button variant="outline" className="group-hover:bg-orange-500 group-hover:text-white transition-colors">
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
                  Handcrafted pillowcovers featuring intricate embroidery and authentic Rajasthani designs that add elegance to any space.
                </p>
                <Button variant="outline" className="group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-orange-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Handcrafted Decor</h4>
                <p className="text-gray-600 mb-4">
                  Unique handcrafted decor items including wall hangings, ornaments, and artifacts that showcase the rich heritage of Jaipur.
                </p>
                <Button variant="outline" className="group-hover:bg-purple-500 group-hover:text-white transition-colors">
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
            <h3 className="text-3xl font-bold mb-6 text-gray-800">The Jaipur Experience</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Snare Home Decor, we bring you the authentic essence of Jaipur's rich cultural heritage. 
              Each product is carefully selected and crafted to reflect the vibrant colors, intricate patterns, 
              and timeless beauty that makes Jaipur the Pink City. From our premium bedsheets to our handcrafted 
              decor items, every piece tells a story of tradition, craftsmanship, and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6" />
                <h4 className="text-xl font-bold">Snare Home Decor</h4>
              </div>
              <p className="text-orange-100">
                Bringing the royal essence of Jaipur to your home with authentic handcrafted decor and premium home textiles.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><Link to="/" className="text-orange-100 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/tracking" className="text-orange-100 hover:text-white transition-colors">Track Order</Link></li>
                <li><a href="#" className="text-orange-100 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Our Products</h5>
              <ul className="space-y-2">
                <li><span className="text-orange-100">Premium Bedsheets</span></li>
                <li><span className="text-orange-100">Elegant Pillowcovers</span></li>
                <li><span className="text-orange-100">Handcrafted Decor Items</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-400 mt-8 pt-8 text-center">
            <p className="text-orange-100">&copy; 2024 Snare Home Decor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
