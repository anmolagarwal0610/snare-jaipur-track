
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, ExternalLink, AlertCircle, Copy, Check } from "lucide-react";
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
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const GOOGLE_SHEET_ID = "1qkBDMcHjtU9tMhBszFqedWpGwU7sBdYYHl6J6z_4_4Y";

  const scrollToContact = () => {
    window.location.href = "/#contact-section";
  };

  const handleTrack = async () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
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

  const copyTrackingId = async (trackingId: string) => {
    try {
      await navigator.clipboard.writeText(trackingId);
      setCopiedId(trackingId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
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

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Track Your Royal Order
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              Enter your mobile number to track your Snare Home Decor order
            </p>
          </div>

          <Card className="mb-6 sm:mb-8 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Search className="h-5 w-5 text-orange-600" />
                Order Tracking
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Enter the mobile number used during order placement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="mobile" className="text-sm sm:text-base">Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    maxLength={10}
                    className="mt-1 text-base"
                  />
                </div>
                <Button 
                  onClick={handleTrack}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-sm sm:text-base py-2.5"
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
            <Card className="mb-6 sm:mb-8 border-red-200 bg-red-50/80 backdrop-blur-sm">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  <p className="text-sm sm:text-base">{error}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tracking Results */}
          {trackingResults.length > 0 && (
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Package className="h-5 w-5 text-orange-600" />
                  Tracking Information
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Found {trackingResults.length} order(s) for mobile number {mobileNumber}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingResults.map((result, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-100">
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                                Tracking ID: {result.trackingId}
                              </h4>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyTrackingId(result.trackingId)}
                                className="h-8 w-8 p-0 border-orange-300 hover:bg-orange-100"
                              >
                                {copiedId === result.trackingId ? (
                                  <Check className="h-3 w-3 text-green-600" />
                                ) : (
                                  <Copy className="h-3 w-3 text-orange-600" />
                                )}
                              </Button>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">Company: {result.companyName}</p>
                          </div>
                        </div>
                        {result.websiteUrl && (
                          <a
                            href={result.websiteUrl.startsWith('http') ? result.websiteUrl : `https://${result.websiteUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 text-xs sm:text-sm font-medium"
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
