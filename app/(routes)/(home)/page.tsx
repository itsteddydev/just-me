"use client";
import { TreePalm } from "lucide-react";
import { HandlerSteps, LinkProfile } from "./components";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Link, User } from "@prisma/client";
import { LoaderProfile } from "@/components/shared";
import { StepConfigUserProvider } from "@/contexts";


export default function HomePage() {
  const { user } = useUser()
  const [isFirstVisit, setIsFirstVisit] = useState(false)
  const [reload, setReload] = useState(false)
  const [infoUser, setInfoUser] = useState<(User & { links: Link[] }) | null>(
    null
  )

  useEffect(() => {
    const CheckFirstLogin = async () => {
      const response = await fetch("/api/info-user")
      const data = await response.json()
      setInfoUser(data)
      setIsFirstVisit(data.firstLogin)
      console.log({ data })
    }

    CheckFirstLogin()

    if (reload) {
      CheckFirstLogin();
      setReload(false)
    }

  }, [user?.id, reload, user])

  if (!user || !infoUser) {
    return <LoaderProfile />
  }

  if (isFirstVisit) {
    return (
      <StepConfigUserProvider>
        <HandlerSteps onReload={setReload} />
      </StepConfigUserProvider>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4">
        <div>
          {/* Link profile ... */}
          <LinkProfile />
          <div>
            <p>Profile ifo...</p>
          </div>

          <div className="mt-20 flex flex-col items-center">
            <div className="py-10 flex flex-col items-center text-center justify-center  text-gray-400 font-semibold">
              <TreePalm className="size-20" strokeWidth={1} />
              <p>Show the world who you are.</p>
              <p>Add a link to get started.</p>
            </div>
          </div>
        </div>

        <div>
          <p>profile Preview...</p>
        </div>
      </div>
    </div>

  )
}
