
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, Truck, CheckCircle, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Tracking = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock tracking data
      const mockData = {
        orderNumber: `SNR${mobileNumber.slice(-4)}${Math.floor(Math.random() * 1000)}`,
        customerName: "Customer",
        items: [
          { name: "Premium Bedsheet Set", quantity: 1, status: "Delivered" },
          { name: "Handcrafted Pillow Covers", quantity: 2, status: "In Transit" }
        ],
        status: "In Transit",
        orderDate: "2024-01-15",
        estimatedDelivery: "2024-01-20",
        trackingSteps: [
          { step: "Order Placed", completed: true, date: "2024-01-15" },
          { step: "Processing", completed: true, date: "2024-01-16" },
          { step: "Shipped", completed: true, date: "2024-01-17" },
          { step: "In Transit", completed: true, date: "2024-01-18" },
          { step: "Out for Delivery", completed: false, date: "2024-01-19" },
          { step: "Delivered", completed: false, date: "2024-01-20" }
        ]
      };
      
      setTrackingResult(mockData);
      setIsLoading(false);
    }, 1500);
  };

  const getStatusIcon = (step: string, completed: boolean) => {
    if (completed) return <CheckCircle className="h-5 w-5 text-green-500" />;
    
    switch (step) {
      case "In Transit":
        return <Truck className="h-5 w-5 text-orange-500" />;
      case "Out for Delivery":
        return <Package className="h-5 w-5 text-blue-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Track Your Order
            </h2>
            <p className="text-gray-600">
              Enter your mobile number to track your Snare Home Decor order
            </p>
          </div>

          <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-orange-600" />
                Order Tracking
              </CardTitle>
              <CardDescription>
                Enter the mobile number used during order placement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    maxLength={10}
                    className="mt-1"
                  />
                </div>
                <Button 
                  onClick={handleTrack}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Tracking...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Track Order
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {trackingResult && (
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-orange-600" />
                  Order Details
                </CardTitle>
                <CardDescription>
                  Order #{trackingResult.orderNumber} • Placed on {trackingResult.orderDate}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Order Items */}
                <div>
                  <h4 className="font-semibold mb-3">Items Ordered:</h4>
                  <div className="space-y-2">
                    {trackingResult.items.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                          item.status === 'In Transit' ? 'bg-orange-100 text-orange-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div>
                  <h4 className="font-semibold mb-3">Tracking Timeline:</h4>
                  <div className="space-y-3">
                    {trackingResult.trackingSteps.map((step: any, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        {getStatusIcon(step.step, step.completed)}
                        <div className="flex-1">
                          <p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {step.step}
                          </p>
                          <p className="text-sm text-gray-600">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Estimated Delivery:</strong> {trackingResult.estimatedDelivery}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
