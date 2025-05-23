import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/common/Card';
import PaymentMethods from '../components/payment/PaymentMethods';
import toast from 'react-hot-toast';

const CheckoutPage: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const booking = location.state?.booking;

  if (!booking) {
    navigate('/');
    return null;
  }

  const handlePaymentSuccess = async (response: any) => {
    setIsProcessing(true);
    try {
      // Save booking to database
      toast.success('Payment successful! Booking confirmed.');
      navigate('/bookings');
    } catch (error) {
      toast.error('Failed to process booking');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentError = (error: any) => {
    toast.error('Payment failed. Please try again.');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Checkout
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Property</span>
                  <span className="font-medium">{booking.propertyName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Check-in</span>
                  <span className="font-medium">{booking.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Check-out</span>
                  <span className="font-medium">{booking.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Guests</span>
                  <span className="font-medium">{booking.guests}</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Amount</span>
                    <span>${booking.totalAmount}</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
              <PaymentMethods
                amount={booking.totalAmount}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;