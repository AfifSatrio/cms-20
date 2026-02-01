"use client"

import { useState } from 'react';
import { X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: 'Karina',
    email: 'cmfaizr@gmail.com',
    country: 'Indonesia',
    city: 'Malang',
    zip: '126345',
    state: 'East Java',
    address: 'Bunta V streets no. 1A',
    company: 'CHILAJAS'
  });

  const [selectedPayment, setSelectedPayment] = useState('');

  const paymentMethods = [
    { id: 'credit-card', label: 'Credit Card' },
    { id: 'virtual-account', label: 'Virtual Account' },
    { id: 'e-wallet', label: 'E-Wallet' },
    { id: 'retail', label: 'Retail' },
    { id: 'paylater', label: 'Paylater' },
    { id: 'qris', label: 'QRIS' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePurchase = () => {
    console.log('Processing purchase...', { formData, selectedPayment });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Checkout</h1>
            <p className="text-sm text-gray-600 mt-1">Complete your checkout to activate plan</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Billing Address Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Billing Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP</Label>
                    <Input
                      id="zip"
                      value={formData.zip}
                      onChange={(e) => handleInputChange('zip', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="state">State / Province</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                      selectedPayment === method.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded flex items-center justify-center ${
                        selectedPayment === method.id ? 'bg-green-500' : 'bg-green-100'
                      }`}>
                        <div className="w-3 h-3 bg-white rounded-sm"></div>
                      </div>
                      <span className="font-medium text-gray-700">{method.label}</span>
                    </div>
                    <span className="text-gray-400">›</span>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pro Plan</span>
                    <span className="font-medium">Rp. 320,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rp. 140,000 /month</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Month</span>
                    <div className="flex items-center gap-2 border rounded px-2 py-1">
                      <button className="text-gray-600 hover:text-gray-800">-</button>
                      <span className="font-medium">2</span>
                      <button className="text-gray-600 hover:text-gray-800">+</button>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">Rp. 320,000</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between mb-4">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-xl">Rp. 320,000</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    *Next Charge on November 2025
                  </p>
                  
                  <div className="flex items-start gap-2 mb-4">
                    <Checkbox id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer">
                      I agree the Terms of Use and I understand the Subscription Terms.
                    </label>
                  </div>

                  <Button 
                    onClick={handlePurchase}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
                  >
                    Purchase
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;