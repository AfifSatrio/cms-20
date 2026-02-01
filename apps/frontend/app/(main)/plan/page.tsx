"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const PlanAndBillingPage = () => {
  const [billingData, setBillingData] = useState({
    fullName: 'Gerald Bold Wood',
    billingEmail: 'GeralBold@Email.com',
    phoneNumber: '0871382748',
    city: 'Newhampshire',
    zip: '23',
    state: 'Westbourne',
    address: 'Address',
    company: 'HIMAN'
  });

  const handleInputChange = (field: string, value: string) => {
    setBillingData(prev => ({ ...prev, [field]: value }));
  };

  const billingHistory = [
    { plan: 'Professional', datePaid: '31 Jan 2025', nominal: '$120', status: 'Success', invoice: 'Download' },
    { plan: 'Professional', datePaid: '31 Dec 2024', nominal: '$120', status: 'Success', invoice: 'Download' }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Plan and Billing Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Plan and Billing</h1>
        </div>

        {/* Current Package & Storage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Package */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Current Package</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600">Plan</p>
                  <p className="text-lg font-semibold">Professional</p>
                </div>
                <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">Have discount from</p>
                <Input value="XXXXXXXX" className="bg-gray-50" disabled />
              </div>

              <div className="text-center py-4">
                <p className="text-4xl font-bold text-gray-900">$1XX</p>
                <p className="text-sm text-gray-600 mt-1">/ Month</p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 cursor-pointer">Change Plan</Button>
                <Link href={'/plan-and-bill'} >
                    <Button className="flex-1 bg-green-500 hover:bg-green-600 cursor-pointer">Upgrade Plan</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Storage Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Storage Usage Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#e5e7eb"
                      strokeWidth="20"
                      fill="none"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#10b981"
                      strokeWidth="20"
                      fill="none"
                      strokeDasharray="440"
                      strokeDashoffset="110"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">75%</span>
                  </div>
                </div>
                
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">API Usage</span>
                    <span className="font-semibold">347,140 GB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">API Calls</span>
                    <span className="font-semibold">2346 / 5000x</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Priority Access</span>
                    <span className="font-semibold">14321 QPA</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Billing Address */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Billing Address</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="fullName" className="text-sm text-gray-600">Full Name</Label>
                <Input
                  id="fullName"
                  value={billingData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="billingEmail" className="text-sm text-gray-600">Billing Email</Label>
                <Input
                  id="billingEmail"
                  type="email"
                  value={billingData.billingEmail}
                  onChange={(e) => handleInputChange('billingEmail', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phoneNumber" className="text-sm text-gray-600">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={billingData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="city" className="text-sm text-gray-600">City</Label>
                <Input
                  id="city"
                  value={billingData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="zip" className="text-sm text-gray-600">ZIP</Label>
                <Input
                  id="zip"
                  value={billingData.zip}
                  onChange={(e) => handleInputChange('zip', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="state" className="text-sm text-gray-600">State / Province</Label>
                <Input
                  id="state"
                  value={billingData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-sm text-gray-600">Address</Label>
                <Input
                  id="address"
                  value={billingData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="md:col-span-2 lg:col-span-1">
                <Label htmlFor="company" className="text-sm text-gray-600">Company (Optional)</Label>
                <Input
                  id="company"
                  value={billingData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Payment Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Credit Card</p>
                <p className="font-semibold">**** **** **** 4567</p>
              </div>
              <div className="flex gap-2">
                <Button variant="link" className="text-blue-600 cursor-pointer">Done</Button>
                <Button variant="link" className="text-blue-600 cursor-pointer">Change Credit Card</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">E-Wallet (Dana)</p>
                <p className="font-semibold">08127834639</p>
              </div>
              <div className="flex gap-2">
                <Button variant="link" className="text-blue-600 cursor-pointer">Done</Button>
                <Button variant="link" className="text-blue-600 cursor-pointer">Change E-Wallet</Button>
              </div>
            </div>

            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 cursor-pointer">
              Add payment method
            </Button>
          </CardContent>
        </Card>

        {/* Detail Project Usage */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Detail Project Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Projects */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Projects</h3>
                    <p className="text-sm text-gray-600">Included in the plan</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-gray-900">3 Active</p>
                    <p className="text-sm text-gray-600">3 / 3</p>
                  </div>
                </div>
              </div>

              {/* Roles */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Roles</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-gray-900">3 / Project Included</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">2 / 3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">2 / 3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Blank</span>
                    <span className="text-gray-700">2 / 3</span>
                  </div>
                </div>
              </div>

              {/* Collaborators */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Collaborators</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-gray-900">1 / Project Included</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">- / 1</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">- / 1</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Blank</span>
                    <span className="text-gray-700">- / 1</span>
                  </div>
                </div>
              </div>

              {/* Webhooks */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Webhooks</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-gray-900">5 / Project Included</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">- / 3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">- / 3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Blank</span>
                    <span className="text-gray-700">- / 3</span>
                  </div>
                </div>
              </div>

              {/* Models */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Models</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-gray-900">60 / Environment Included</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">13 / 60</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">11 / 60</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Blank</span>
                    <span className="text-gray-700">1 / 60</span>
                  </div>
                </div>
              </div>

              {/* Locales */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Locales</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-gray-900">10 / Environment Included</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">8 / 10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">8 / 10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Blank</span>
                    <span className="text-gray-700">1 / 10</span>
                  </div>
                </div>
              </div>

              {/* Records */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Records</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-gray-900">157 / 300</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">82</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Marketing Website</span>
                    <span className="text-gray-700">75</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Blank</span>
                    <span className="text-gray-700">-</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing History */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Plan</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date Paid</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Nominal</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {billingHistory.map((history, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm">{history.plan}</td>
                      <td className="py-3 px-4 text-sm">{history.datePaid}</td>
                      <td className="py-3 px-4 text-sm">{history.nominal}</td>
                      <td className="py-3 px-4">
                        <Badge className="bg-green-500 hover:bg-green-600">
                          {history.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="link" className="text-blue-600 p-0 cursor-pointer">
                          {history.invoice}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default PlanAndBillingPage;