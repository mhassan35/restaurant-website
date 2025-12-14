"use client"

import { useState } from "react"
import { Star, Plus, Minus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { MenuItemProps } from "@/lib/types"

export default function MenuItem({ item }: MenuItemProps) {
  const [quantity, setQuantity] = useState(0)
  const { addItem } = useCart()

  const handleAdd = () => {
    if (quantity > 0) {
      addItem({
        id: `-${item.id}`,
        name: item.name,
        price: item.price,
        quantity: quantity,
        image: item.image,
      })
      setQuantity(0)
    }
  }

  return (
    <div className="group h-full rounded-xl sm:rounded-2xl overflow-hidden bg-card border border-border hover:border-primary transition-smooth hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer">
      <div className="relative h-48 sm:h-64 overflow-hidden bg-muted">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-linear-to-r from-primary to-accent text-primary-foreground px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 z-20 shadow-lg">
          <Star className="w-3 h-3 fill-accent text-accent" />
          <span className="text-xs font-bold">{item.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-foreground text-sm mb-1 line-clamp-1">{item.name}</h4>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-primary text-lg">${item.price.toFixed(2)}</p>
        </div>

        {/* Quantity Control */}
        {quantity === 0 ? (
          <button
            onClick={() => setQuantity(1)}
            className="w-full mt-3 py-2 px-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-between gap-2 mt-3">
            <button
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              className="flex-1 py-2 px-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors flex items-center justify-center"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-foreground w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="flex-1 py-2 px-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={handleAdd}
              className="flex-1 py-2 px-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium text-sm"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
