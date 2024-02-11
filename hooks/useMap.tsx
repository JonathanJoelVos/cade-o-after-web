import { useQuery } from '@tanstack/react-query'

export function useMap() {
  return useQuery({
    queryKey: ['map'],
    queryFn: async () => {
      const response = await fetch('/api')
      const data = await response.json()
      return data
    }
  })
}
