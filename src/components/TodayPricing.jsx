import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MapPin, Search, Download, RefreshCw } from 'lucide-react';

const pricingData = {
  Dewas: [
    { sku: 'SKU001', productName: 'SBO 5 Ltr Sq Jar', category: 'SBO', mrp: 1250, dealerPrice: 1125, margin: 10, stock: 'In Stock' },
    { sku: 'SKU002', productName: 'GNO 5 Ltr Sq Jar', category: 'GNO', mrp: 980, dealerPrice: 882, margin: 10, stock: 'In Stock' },
    { sku: 'SKU003', productName: 'KGMO 15 KG JAR', category: 'KGMO', mrp: 750, dealerPrice: 675, margin: 10, stock: 'Low Stock' },
    { sku: 'SKU004', productName: 'Soya Refined Oil 15Ltr Tin', category: 'SBO', mrp: 1850, dealerPrice: 1665, margin: 10, stock: 'In Stock' },
    { sku: 'SKU005', productName: 'SFO 5 Ltr Jerry', category: 'Category SFO', mrp: 2200, dealerPrice: 1980, margin: 10, stock: 'Out of Stock' },
  ],
  Jabalpur: [
    { sku: 'SKU001', productName: 'SBO 5 Ltr Sq Jar', category: 'SBO', mrp: 1275, dealerPrice: 1147, margin: 10, stock: 'In Stock' },
    { sku: 'SKU002', productName: 'GNO 5 Ltr Sq Jar', category: 'GNO', mrp: 995, dealerPrice: 895, margin: 10, stock: 'In Stock' },
    { sku: 'SKU003', productName: 'KGMO 15 KG JAR', category: 'KGMO', mrp: 765, dealerPrice: 688, margin: 10, stock: 'In Stock' },
    { sku: 'SKU004', productName: 'Soya Refined Oil 15Ltr Tin', category: 'Category 2', mrp: 1875, dealerPrice: 1687, margin: 10, stock: 'Low Stock' },
    { sku: 'SKU005', productName: 'SFO 5 Ltr Jerry', category: 'Category SFO', mrp: 2250, dealerPrice: 2025, margin: 10, stock: 'In Stock' },
  ]
};

export function TodayPricing() {
  const [selectedLocation, setSelectedLocation] = useState('Dewas');
  const [searchTerm, setSearchTerm] = useState('');
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());
  const [dealerCategory, setDealerCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  // const currentData = pricingData;
  const currentData = pricingData[selectedLocation];

  
  const filteredData = currentData.filter(item => 
    item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStockBadgeVariant = (stock) => {
    switch (stock) {
      case 'In Stock': return 'default';
      case 'Low Stock': return 'secondary';
      case 'Out of Stock': return 'destructive';
      default: return 'default';
    }
  };

  const handleRefresh = () => {
    setLastUpdated(new Date().toLocaleString());
    // In real app, this would fetch fresh data from API
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Today's Pricing</h1>
        <p className="text-muted-foreground">Current SKU pricing by location</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Location-based Pricing
              </CardTitle>
              <CardDescription>
                Select a location to view current pricing for all SKUs
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handleRefresh}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Select Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dewas">Dewas Plant</SelectItem>
                  <SelectItem value="Jabalpur">Depot</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Search SKUs</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by SKU, product name, or category..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

            <div className='flex-1'>
              <label className="block text-sm font-medium mb-2">Product Category</label>
              <Select value={dealerCategory} onValueChange={(value) => {
                setDealerCategory(value);
                setSubCategory(''); // Reset subcategory when Product category changes
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Product category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SFO">SFO </SelectItem>
                  <SelectItem value="SBO">SBO </SelectItem>
                  <SelectItem value="GNO">GNO </SelectItem>
                  <SelectItem value="KGMO">KGMO </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='flex-1'>
              <label className="block text-sm font-medium mb-2">Product Subcategory</label>
              <Select value={subCategory} onValueChange={setSubCategory} disabled={!dealerCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subcategory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CP">CP </SelectItem>
                  <SelectItem value="BP">BP </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

         

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Showing {filteredData.length} SKUs for {selectedLocation}</span>
            <span>Last updated: {lastUpdated}</span>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SKU Code</TableHead>
                  <TableHead>Product Name</TableHead>
                  {/* <TableHead>Category</TableHead> */}
                  <TableHead className="">Price (₹)</TableHead>
                  {/* <TableHead className="text-right">Margin (%)</TableHead> */}
                  {/* <TableHead>Stock Status</TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{item.sku}</TableCell>
                    <TableCell>{item.productName}</TableCell>
                    {/* <TableCell>{item.category}</TableCell> */}
                    <TableCell className="font-medium">₹{item.dealerPrice.toLocaleString()}</TableCell>
                    
                    {/* <TableCell>
                      <Badge variant={getStockBadgeVariant(item.stock)}>
                        {item.stock}
                      </Badge>
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No SKUs found matching your search criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Pricing Summary</CardTitle>
          <CardDescription>Key insights for {selectedLocation}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{currentData.length}</div>
              <div className="text-sm text-blue-600">Total SKUs</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {currentData.filter(item => item.stock === 'In Stock').length}
              </div>
              <div className="text-sm text-green-600">In Stock</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {currentData.filter(item => item.stock === 'Low Stock').length}
              </div>
              <div className="text-sm text-yellow-600">Low Stock</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">
                {currentData.filter(item => item.stock === 'Out of Stock').length}
              </div>
              <div className="text-sm text-red-600">Out of Stock</div>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}