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

  const PUBLIC_SHEET_ID = "1qkBDMcHjtU9tMhBszFqedWpGwU7sBdYYHl6J6z_4_4Y";

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
      const results = await searchTrackingData(mobileNumber, PUBLIC_SHEET_ID);
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
              <p className="text-sm text-muted-foreground font-serif italic">an artful excellence</p>
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

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-script font-bold mb-4 text-foreground">
              Track Your Royal Order
            </h2>
            <div className="lotus-divider"></div>
            <p className="text-lg text-muted-foreground font-display">
              Enter your mobile number to track your Snaré order
            </p>
          </div>

          <Card className="mb-8 border-0 shadow-elegant bg-card rounded-3xl hover-lift">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl font-display text-foreground">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Search className="h-5 w-5 text-primary-foreground" />
                </div>
                Order Tracking
              </CardTitle>
              <CardDescription className="text-muted-foreground font-display">
                Enter the mobile number used during order placement
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="mobile" className="text-base font-display text-foreground">Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    maxLength={10}
                    className="mt-2 text-base rounded-xl border-border focus:border-primary focus:ring-primary"
                  />
                </div>
                <Button 
                  onClick={handleTrack}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-base py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      Track Order
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Error Message */}
          {error && (
            <Card className="mb-8 border-destructive/20 bg-destructive/10 rounded-3xl animate-slide-up">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  <p className="text-base font-display">{error}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tracking Results */}
          {trackingResults.length > 0 && (
            <Card className="border-0 shadow-elegant bg-card rounded-3xl animate-slide-up">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-display text-foreground">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Package className="h-5 w-5 text-primary-foreground" />
                  </div>
                  Tracking Information
                </CardTitle>
                <CardDescription className="text-muted-foreground font-display">
                  Found {trackingResults.length} order(s) for mobile number {mobileNumber}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {trackingResults.map((result, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-muted/50 to-secondary/30 rounded-2xl border border-border/50 hover-lift">
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 flex-wrap">
                              <h4 className="font-display font-semibold text-foreground text-base">
                                Tracking ID: {result.trackingId}
                              </h4>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => copyTrackingId(result.trackingId)}
                                className="h-8 w-8 p-0 border-primary/30 hover:bg-primary/10 rounded-lg transition-all duration-200"
                              >
                                {copiedId === result.trackingId ? (
                                  <Check className="h-3 w-3 text-green-600" />
                                ) : (
                                  <Copy className="h-3 w-3 text-primary" />
                                )}
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground font-display mt-2">
                              Company: {result.companyName}
                            </p>
                          </div>
                        </div>
                        {result.websiteUrl && (
                          <a
                            href={result.websiteUrl.startsWith('http') ? result.websiteUrl : `https://${result.websiteUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-accent text-sm font-display font-medium transition-colors duration-200"
                          >
                            Track on {result.companyName} website
                            <ExternalLink className="h-4 w-4" />
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