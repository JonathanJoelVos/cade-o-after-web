'use client'

declare const google: any;
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Marker as MarkerGoogle } from '@react-google-maps/api';
import { ChevronRight, DollarSign, Headphones, Map, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface MarkerProps {
  lat: number
  lng: number
  name: string
  urlLocation: string
  localDescription: string
  musicStyle: string
}
export function Marker({
  lat,
  lng,
  name,
  urlLocation,
  localDescription,
  musicStyle
}: MarkerProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="relative">
        <MarkerGoogle
          position={{
            lat: lat,
            lng: lng,
          }}
          icon={{
            url: "/rounded-logo-purple.svg",
            scaledSize: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
          }}
          onClick={() => setOpen(!open)}
        >
        </MarkerGoogle>
        <SheetContent side="bottom" className="h-[300px] rounded-lg sm:h-[400px]">
          <SheetHeader>
            <SheetTitle>{name}</SheetTitle>
            <SheetDescription className="text-start">
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-2 pt-5 ">
            <div className="flex-1">
              <div className="flex items-center gap-1 text-zinc-200">
                <DollarSign className="h-4 w-4 " />
                <span className="text-xs md:text-base">100</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-200">
                <MapPin className="h-4 w-4" />
                <span className="text-xs md:text-base">
                  {localDescription}
                </span>
              </div>
              <div className="flex items-center gap-1 text-zinc-200">
                <Headphones className="h-4 w-4" />
                <span className="text-xs md:text-base">
                  {musicStyle}
                </span>
              </div>
            </div>
            <Button size="sm" className="mt-2 w-full max-w-xs self-center bg-purple-500 text-zinc-200 hover:bg-purple-600 md:self-end" onClick={() => {
              window.open(urlLocation, "_blank")
            }}>
              <span className="flex-1">Ver como chegar</span>
              <ChevronRight className="ml-2 w-4" />
            </Button>
          </div>
        </SheetContent>
      </div>
    </Sheet>
  )
}
