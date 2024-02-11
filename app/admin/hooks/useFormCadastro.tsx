'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(3, 'Nome obrigatório'),
  lat: z.coerce.number().min(-90, 'Latitude inválida').max(90, 'Latitude inválida'),
  lng: z.coerce.number().min(-180, 'Longitude inválida').max(180, 'Longitude inválida'),
  urlLocation: z.string().min(3, 'URL inválida'),
  localDescription: z.string().min(3, 'Descrição do local obrigatória'),
  musicStyle: z.string().min(3, 'Estilo musical obrigatório'),
  description: z.string().min(3, 'Descrição obrigatória'),
})

export type CadastroFormValuesT = z.infer<typeof schema>

export function useFormCadastro() {
  const form = useForm<CadastroFormValuesT>({
    resolver: zodResolver(schema),
  })

  return form
}
