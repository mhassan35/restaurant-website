"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, Lock } from "lucide-react"

interface PaymentFormProps {
  onSuccess: () => void
}

export default function PaymentForm({ onSuccess }: PaymentFormProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      onSuccess()
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-foreground mb-8">Delivery & Payment</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Delivery Information */}
        <div>
          <h3 className="font-bold text-foreground mb-4">Delivery Address</h3>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment Method
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              maxLength={19}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
                maxLength={5}
                className="px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={formData.cvc}
                onChange={handleChange}
                required
                maxLength={3}
                className="px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg flex items-start gap-3">
          <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Your payment information is encrypted and secure. We never store your full card details.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${
            loading
              ? "bg-primary/50 text-primary-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
              Processing Payment...
            </>
          ) : (
            "Complete Order"
          )}
        </button>
      </form>
    </div>
  )
}
