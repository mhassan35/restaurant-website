export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
}

export interface MenuItemProps {
  item: {
    id: string
    name: string
    description: string
    price: number
    image: string
    rating: number
  }
}