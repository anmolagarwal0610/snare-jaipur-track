
interface TrackingResult {
  mobileNumber: string;
  trackingId: string;
  companyName: string;
  websiteUrl: string;
}

export const searchTrackingData = async (
  mobileNumber: string,
  sheetId: string
): Promise<TrackingResult[]> => {
  try {
    // Google Sheets API endpoint for reading public sheets
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:D?key=YOUR_API_KEY`;
    
    // For now, we'll use a direct CSV export URL which works for public sheets
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
  } catch (error) {
    console.error('Error fetching tracking data:', error);
    throw new Error('Failed to fetch tracking data');
  }
};
