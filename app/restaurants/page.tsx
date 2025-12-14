"use client"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { filters } from "@/lib/mockData"
import MenuGrid from "@/components/menu-grid"

export default function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [topFilter, setTopFilter] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const handleClearFilter = () => {
    setTopFilter(null)
    setOpen(false)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* HEADER */}
      <section className="bg-linear-to-br from-primary/10 via-secondary/5 to-background border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Explore Restaurant
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover thousands of restaurants offering great deals and fast delivery
          </p>
        </div>
      </section>
      {/* SEARCH + FILTER BAR */}
      <section className="bg-background border-b border-border py-6 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search restaurants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-muted text-foreground border border-border focus:ring-2 focus:ring-primary"
              />
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="px-5 py-3 rounded-lg bg-muted text-foreground border border-border flex items-center gap-2 hover:bg-muted/70">
                  <Filter className="w-5 h-5" />
                  Filters
                </button>
              </DialogTrigger>
              <DialogContent
                className="max-w-md"
                aria-describedby="dialog-filter-description"
              >
                <DialogHeader>
                  <DialogTitle>Filters</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <p
                    id="dialog-filter-description"
                    className="text-sm text-muted-foreground"
                  >
                    Choose a filter below:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {filters.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setTopFilter(f.id)}
                        className={`px-4 py-2 rounded-lg border transition-all ${
                          topFilter === f.id
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted text-foreground border-border hover:bg-muted/70"
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                  {topFilter && (
                    <button
                      onClick={handleClearFilter}
                      className="w-full py-3 rounded-lg font-medium bg-red-500 text-white hover:bg-red-600 transition-all flex items-center justify-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Clear Filter
                    </button>
                  )}

                  <button
                    disabled={!topFilter}
                    onClick={() => setOpen(false)}
                    className={`w-full py-3 rounded-lg font-medium transition-all ${
                      topFilter
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    Apply Filter
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      <MenuGrid searchQuery={searchQuery} topFilter={topFilter} />
    </main>
  )
}
