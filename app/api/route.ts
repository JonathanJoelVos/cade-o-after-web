import { NextRequest, NextResponse } from "next/server"
import { z } from 'zod'
import { prismaClient } from '../../infra/lib/prisma'

export async function POST(req: NextRequest) {
  const partyBody = z.object({
    name: z.string().min(3, 'Nome obrigatório'),
    lat: z.coerce.number().min(-90, 'Latitude inválida').max(90, 'Latitude inválida'),
    lng: z.coerce.number().min(-180, 'Longitude inválida').max(180, 'Longitude inválida'),
    urlLocation: z.string().min(3, 'URL inválida'),
    localDescription: z.string().min(3, 'Descrição do local obrigatória'),
    musicStyle: z.string().min(3, 'Estilo musical obrigatório'),
    description: z.string().min(3, 'Descrição obrigatória'),
  })

  const request = await req.json()

  const {
    description,
    lat,
    lng,
    localDescription,
    musicStyle,
    name,
    urlLocation
  } = await partyBody.parse(request)

  await prismaClient.festa.create({
    data: {
      description,
      lat,
      lng,
      localDescription,
      musicStyle,
      name,
      urlLocation
    }
  })

  return NextResponse.json({ message: 'Festa criada com sucesso' })
}

export async function GET() {
  const parties = await prismaClient.festa.findMany()

  return NextResponse.json(parties)
}
