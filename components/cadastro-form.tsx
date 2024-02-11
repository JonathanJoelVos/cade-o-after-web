'use client'

import { CadastroFormValuesT, useFormCadastro } from "@/app/admin/hooks/useFormCadastro"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useToast } from "@/components/ui/use-toast"

interface CadastroFormProps {

}

export function CadastroForm(props: CadastroFormProps) {
  const { register, handleSubmit, formState: { errors } } = useFormCadastro()
  const { toast } = useToast()

  async function onSubmit(data: CadastroFormValuesT) {
    try {
      await fetch('/api', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      toast({
        title: 'Sucesso',
        description: 'Cadastro realizado com sucesso',
        variant: "default"
      })
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Erro ao cadastrar o role, tente novamente mais tarde',
        variant: "destructive"
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-3">
        <h1 className="text-center text-2xl font-bold">
          Cadastro do Role
        </h1>
        <Input placeholder="Nome" {...register('name')} />
        {
          errors.name && (
            <p className="text-xs text-red-500">
              {errors.name.message}
            </p>
          )
        }
        <Input placeholder="Descrição do role" {...register('description')} />
        {
          errors.description && (
            <p className="text-xs text-red-500">
              {errors.description.message}
            </p>
          )
        }
        <Input placeholder="Latitude" {...register('lat')} />
        {
          errors.lat && (
            <p className="text-xs text-red-500">
              {errors.lat.message}
            </p>
          )
        }
        <Input placeholder="Longitude" {...register('lng')} />
        {
          errors.lng && (
            <p className="text-xs text-red-500">
              {errors.lng.message}
            </p>
          )
        }
        <Input placeholder="URL do Maps" {...register('urlLocation')} />
        {
          errors.urlLocation && (
            <p className="text-xs text-red-500">
              {errors.urlLocation.message}
            </p>
          )
        }
        <Input placeholder="Rua" {...register('localDescription')} />
        {
          errors.localDescription && (
            <p className="text-xs text-red-500">
              {errors.localDescription.message}
            </p>
          )
        }
        <Input placeholder="Estilo Musical" {...register('musicStyle')} />
        {
          errors.musicStyle && (
            <p className="text-xs text-red-500">
              {errors.musicStyle.message}
            </p>
          )
        }
        <Button>
          Cadastrar
        </Button>
      </form>
    </>
  )
}
