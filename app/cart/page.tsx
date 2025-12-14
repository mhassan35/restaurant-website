"use client"
import { useState, useEffect } from "react"
import CartSummary from "@/components/cart-summary"
import { useCart } from "@/context/cart-context"
import { Trash2, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isEmpty = items.length === 0

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12">Shopping Cart</h1>
        {!mounted ? null : isEmpty ? (
          <div className="flex flex-col items-center justify-center py-16 sm:py-24">
            <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mb-4 opacity-50" />
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">Add some delicious items to get started!</p>
            <Link href="/">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-smooth active:scale-95 text-sm sm:text-base">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 sm:gap-4 bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-primary transition-smooth"
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm sm:text-base">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded hover:bg-muted/80 transition-smooth text-sm font-medium"
                      >
                        −
                      </button>
                      <span className="font-bold text-foreground w-6 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded hover:bg-muted/80 transition-smooth text-sm font-medium"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end justify-between">
                    <p className="text-foreground font-bold text-sm sm:text-base">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive/80 transition-smooth mt-2"
                    >
                      <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <CartSummary total={total} itemsCount={items.length} />
          </div>
        )}
      </div>
    </main>
  )
}
