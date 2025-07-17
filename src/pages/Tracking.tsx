
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, Sparkles, ExternalLink, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { searchTrackingData } from "@/utils/googleSheets";

interface TrackingResult {
  mobileNumber: string;
  trackingId: string;
  companyName: string;
  websiteUrl: string;
}

const Tracking = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [trackingResults, setTrackingResults] = useState<TrackingResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // TODO: Replace with your actual Google Sheet ID
  const GOOGLE_SHEET_ID = "1qkBDMcHjtU9tMhBszFqedWpGwU7sBdYYHl6J6z_4_4Y";

  const handleTrack = async () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    if (GOOGLE_SHEET_ID === "YOUR_GOOGLE_SHEET_ID") {
      setError("Google Sheet ID not configured. Please update the GOOGLE_SHEET_ID in the code.");
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const results = await searchTrackingData(mobileNumber, GOOGLE_SHEET_ID);
      setTrackingResults(results);
      
      if (results.length === 0) {
        setError("No tracking information found for this mobile number.");
      }
    } catch (err) {
      setError("Failed to fetch tracking data. Please try again.");
      console.error('Tracking error:', err);
    } finally {
      setIsLoading(false);
    }
  };

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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Track Your Royal Order
            </h2>
            <p className="text-gray-600">
              Enter your mobile number to track your Snare Home Decor order
            </p>
          </div>

          <Card className="mb-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-purple-600" />
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
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Searching...
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

          {/* Error Message */}
          {error && (
            <Card className="mb-8 border-red-200 bg-red-50/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  <p>{error}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tracking Results */}
          {trackingResults.length > 0 && (
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-purple-600" />
                  Tracking Information
                </CardTitle>
                <CardDescription>
                  Found {trackingResults.length} order(s) for mobile number {mobileNumber}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingResults.map((result, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-900">Tracking ID: {result.trackingId}</h4>
                            <p className="text-sm text-gray-600">Company: {result.companyName}</p>
                          </div>
                        </div>
                        {result.websiteUrl && (
                          <a
                            href={result.websiteUrl.startsWith('http') ? result.websiteUrl : `https://${result.websiteUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium"
                          >
                            Track on {result.companyName} website
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
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
