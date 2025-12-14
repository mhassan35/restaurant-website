"use client"

import { ShoppingCart } from "lucide-react"

interface CheckoutSummaryProps {
  total: number
  deliveryFee: number
  tax: number
  finalTotal: number
}

export default function CheckoutSummary({ total, deliveryFee, tax, finalTotal }: CheckoutSummaryProps) {
  return (
    <div className="sticky top-24 bg-card border border-border rounded-2xl p-6 h-fit">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <ShoppingCart className="w-5 h-5" />
        Order Total
      </h2>
      <div className="space-y-3 mb-6 pb-6 border-b border-border">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between mb-6">
        <span className="font-bold text-foreground text-lg">Total Amount</span>
        <span className="font-bold text-primary text-2xl">${finalTotal.toFixed(2)}</span>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted-foreground">Quality guaranteed or your money back</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted-foreground">Real-time order tracking</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span className="text-muted-foreground">24/7 customer support</span>
        </div>
      </div>
      <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/10">
        <p className="text-xs text-accent-foreground font-semibold">Estimated Delivery: 30-45 minutes</p>
      </div>
    </div>
  )
}
