export interface Association {
  id: string
  name: string
  description: string
  category: string
  schools: {
    id: string
    name: string
  }[]
  linkedin: string
  instagram: string
  website: string
  years: string[]
}
