import { CadastroForm } from "@/components/cadastro-form";

interface AdminPageProps {

}
export default function AdminPage(props: AdminPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <CadastroForm />
    </main>
  )
}
