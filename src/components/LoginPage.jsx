import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building, Shield, User } from 'lucide-react';
import logo from '../images/Krity_logo.png';
import { Link } from 'react-router-dom';

export function LoginPage({ onLogin }) {
  const [credentials, setCredentials] = useState({
    dealerId: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication - in real app, validate against backend
    if (credentials.dealerId && credentials.password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <Building className="w-8 h-8 text-primary-foreground" />
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900  ">Dealer Management System</h1>
          <p className="text-gray-600 mt-2">Professional Portal Access</p>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Enter your dealer credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="block">Dealer ID</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Enter your dealer ID"
                    className="pl-10"
                    value={credentials.dealerId}
                    onChange={(e) => setCredentials({ ...credentials, dealerId: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block">Password</label>
                <div className="relative">
                  <Shield className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                <Link to="/">Sign In to Dashboard</Link>

              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center text-sm text-blue-700">
                <Shield className="w-4 h-4 mr-2" />
                <span>Secure dealer portal with encrypted data transmission</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-500">
          <p>© 2025 Dealer Management System. All rights reserved .</p>

        </div>
      </div>
    </div>
  );
}