import { TreePalm } from "lucide-react";
import { LinkProfile } from "./components";


export default function HomePage() {

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
