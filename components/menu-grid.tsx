"use client"

import { useState, useMemo, useEffect } from "react"
import MenuItemComponent from "./menu-item"
import { mockItems } from "@/lib/mockData"

interface MenuGridProps {
  searchQuery: string
  topFilter: string | null
}

export default function MenuGrid({ searchQuery, topFilter }: MenuGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "appetizer", "pasta", "rice", "seafood", "meat", "dessert"]

  // Base filtering: search + top filter
  const baseFilteredItems = useMemo(() => {
  return mockItems.filter((item) => {
    const itemName = item.name ?? "" // fallback if name is undefined
    const query = searchQuery ?? "" // fallback if searchQuery is undefined
    const matchSearch = itemName.toLowerCase().includes(query.toLowerCase())
    const matchTopFilter = topFilter ? item.category === topFilter : true
    return matchSearch && matchTopFilter
  })
}, [searchQuery, topFilter])


  // Apply category filter
  const finalItems =
    selectedCategory === "all"
      ? baseFilteredItems
      : baseFilteredItems.filter((item) => item.category === selectedCategory)

  // Reset category if current selection blocks all items
  useEffect(() => {
    if (selectedCategory !== "all") {
      const hasItems = baseFilteredItems.some(
        (item) => item.category === selectedCategory
      )
      if (!hasItems) setSelectedCategory("all")
    }
  }, [baseFilteredItems, selectedCategory])

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Our Menu</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {finalItems.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No items found for your selection.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalItems.map((item) => (
            <MenuItemComponent key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}
