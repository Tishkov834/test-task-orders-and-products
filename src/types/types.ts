export type PriceType = {
  value: number
  symbol: string
  isDefault: boolean
};

export type ProductType = {
  id: number
  serialNumber: number
  isNew: boolean
  photo: string
  title: string
  type: string
  specification: string
  guarantee: {
    start: string
    end: string
  },
  price: PriceType[]
  orderId: number
  date: string
};

export type OrderType = {
  id: number
  title: string
  date: string
  description: string
  products: ProductType[]
};
