
interface TrackingResult {
  mobileNumber: string;
  trackingId: string;
  companyName: string;
  websiteUrl: string;
}

const GOOGLE_API_KEY = "AIzaSyAqMrsZspMfajVy7L22zsGNnBIqYsPGZU8";
const PRIVATE_SHEET_ID = "1ZZ-UfnPjG58Tt1IMiJuxNLRJrmXmxYBfzl-pb3NkacM";

// Method 1: Using Google Sheets API (for private sheets)
const searchWithAPI = async (mobileNumber: string, sheetId: string): Promise<TrackingResult[]> => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:D?key=${GOOGLE_API_KEY}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }
  
  const data = await response.json();
  const rows = data.values || [];
  
  // Skip header row and filter by mobile number
  const results: TrackingResult[] = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length >= 4 && row[0] === mobileNumber) {
      results.push({
        mobileNumber: row[0],
        trackingId: row[1],
        companyName: row[2],
        websiteUrl: row[3]
      });
    }
  }
  
  return results;
};

// Method 2: Using CSV export (for public sheets)
const searchWithCSV = async (mobileNumber: string, sheetId: string): Promise<TrackingResult[]> => {
  const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
  
  const response = await fetch(csvUrl);
  const csvText = await response.text();
  
  // Parse CSV data
  const rows = csvText.split('\n').map(row => 
    row.split(',').map(cell => cell.replace(/"/g, '').trim())
  );
  
  // Skip header row and filter by mobile number
  const results: TrackingResult[] = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length >= 4 && row[0] === mobileNumber) {
      results.push({
        mobileNumber: row[0],
        trackingId: row[1],
        companyName: row[2],
        websiteUrl: row[3]
      });
    }
  }
  
  return results;
};

export const searchTrackingData = async (
  mobileNumber: string,
  sheetId: string
): Promise<TrackingResult[]> => {
  try {
    // Try private sheet first (with API), then fallback to public sheet (CSV)
    try {
      console.log('Searching in private sheet...');
      const privateResults = await searchWithAPI(mobileNumber, PRIVATE_SHEET_ID);
      if (privateResults.length > 0) {
        return privateResults;
      }
    } catch (apiError) {
      console.log('Private sheet search failed, trying public sheet...', apiError);
    }
    
    // Fallback to public sheet
    console.log('Searching in public sheet...');
    return await searchWithCSV(mobileNumber, sheetId);
    
  } catch (error) {
    console.error('Error fetching tracking data:', error);
    throw new Error('Failed to fetch tracking data');
  }
};
