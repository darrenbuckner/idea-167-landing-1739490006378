import React, { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const SpreadsheetMVP = () => {
  const [files, setFiles] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState(null);

  // Mock data for demonstration
  const mockPreview = {
    totalRecords: 1250,
    duplicates: 45,
    standardizationIssues: 89,
    missingData: 23
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      {/* Simple Header */}
      <h1 className="text-2xl font-bold">Clean & Merge Spreadsheets</h1>

      {/* Upload Zone */}
      <Card className="border-2 border-dashed hover:border-blue-400 transition-colors cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center py-8">
          <Upload size={32} className="text-gray-400 mb-2" />
          <p className="text-sm text-gray-600">Drop CSV or Excel files here</p>
        </CardContent>
      </Card>

      {/* Basic File List */}
      {files.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="font-medium mb-2">Uploaded Files</h2>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="text-sm text-gray-600">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Preview of Issues */}
      {mockPreview && (
        <div className="space-y-2">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Found {mockPreview.duplicates} duplicate entries
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {mockPreview.standardizationIssues} fields need standardization
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {mockPreview.missingData} records have missing data
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Action Button */}
      <div className="flex justify-end">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
          disabled={!files.length || processing}
        >
          {processing ? 'Processing...' : 'Clean & Merge Files'}
        </button>
      </div>

      {/* Results Preview */}
      {results && (
        <Card>
          <CardContent className="py-4">
            <h2 className="font-medium mb-2">Results Preview</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Email</th>
                    <th className="pb-2">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-600">
                    <td className="py-1">John Doe</td>
                    <td className="py-1">john@example.com</td>
                    <td className="py-1">(555) 123-4567</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SpreadsheetMVP;
