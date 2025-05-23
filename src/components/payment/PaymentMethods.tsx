import React from 'react';
import Button from '../common/Button';

interface PaymentMethodsProps {
  amount: number;
  onSuccess: (response: any) => void;
  onError: (error: any) => void;
}

declare global {
  interface Window {
    KhaltiCheckout: any;
  }
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ amount, onSuccess, onError }) => {
  const handleKhaltiPayment = () => {
    const config = {
      publicKey: "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
      productIdentity: "booking-1234",
      productName: "Hotel Booking",
      productUrl: "http://localhost:5173",
      eventHandler: {
        onSuccess: onSuccess,
        onError: onError,
      },
      amount: amount * 100 // Convert to paisa
    };

    const checkout = new window.KhaltiCheckout(config);
    checkout.show({ amount });
  };

  const handleEsewaPayment = () => {
    const path = "https://uat.esewa.com.np/epay/main";
    const params = {
      amt: amount,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: amount,
      pid: "booking-" + Date.now(),
      scd: "EPAYTEST",
      su: "http://localhost:5173/success",
      fu: "http://localhost:5173/failure"
    };

    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in params) {
      const hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key as keyof typeof params].toString());
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="space-y-4">
      <Button
        variant="secondary"
        fullWidth
        onClick={handleKhaltiPayment}
        className="bg-[#5C2D91] hover:bg-[#4A2275]"
      >
        Pay with Khalti
      </Button>

      <Button
        variant="secondary"
        fullWidth
        onClick={handleEsewaPayment}
        className="bg-[#60BB46] hover:bg-[#4D9939]"
      >
        Pay with eSewa
      </Button>
    </div>
  );
};

export default PaymentMethods;