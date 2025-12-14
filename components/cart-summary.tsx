"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface CartSummaryProps {
  total: number
  itemsCount: number
}

export default function CartSummary({ total, itemsCount }: CartSummaryProps) {
  const deliveryFee = 3.99
  const tax = total * 0.08
  const finalTotal = total + deliveryFee + tax

  return (
    <div className="sticky top-24 bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 h-fit mx-4 sm:mx-0 transition-smooth">
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Order Summary</h2>
      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
        <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
          <span>Subtotal ({itemsCount} items)</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between mb-4 sm:mb-6 text-base sm:text-lg">
        <span className="font-bold text-foreground">Total</span>
        <span className="font-bold text-primary text-lg sm:text-2xl">${finalTotal.toFixed(2)}</span>
      </div>
      <Link href="/checkout">
        <button className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-primary text-primary-foreground rounded-lg font-semibold text-sm sm:text-base hover:bg-primary/90 transition-smooth flex items-center justify-center gap-2 active:scale-95">
          Proceed to Checkout
          <ChevronRight className="w-4 h-4" />
        </button>
      </Link>
      <button className="w-full mt-2 sm:mt-3 py-2.5 sm:py-3 px-3 sm:px-4 bg-muted text-muted-foreground rounded-lg font-semibold text-sm sm:text-base hover:bg-muted/80 transition-smooth active:scale-95">
        Continue Shopping
      </button>
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/5 rounded-lg border border-primary/10">
        <p className="text-[10px] sm:text-xs text-muted-foreground">
          ✓ Fast & Fresh Delivery • ✓ Quality Guaranteed • ✓ Live Tracking
        </p>
      </div>
    </div>
  )
}
