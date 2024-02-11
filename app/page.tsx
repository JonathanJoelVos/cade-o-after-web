import Mapa from "@/components/mapa";
import { Button } from "@/components/ui/button";
import { PartyPopperIcon } from "lucide-react";

export default function IndexPage() {
  return (
    <section className="-mt-5 pb-8 md:py-10 md:pt-6">
      <Mapa />
      <footer className="fixed bottom-0 flex w-full justify-end rounded-t-lg bg-background p-4">
        <Button className="bg-purple-500 text-zinc-200 hover:bg-purple-600">
          <strong>
            Divulgar
          </strong>
          <PartyPopperIcon className="ml-2 w-5" />
        </Button>
      </footer>
    </section>
  )
}
