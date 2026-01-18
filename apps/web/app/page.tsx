import Link from "next/link"
import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-background p-8">
      <div className="max-w-4xl w-full flex flex-col items-center gap-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            Labs
          </h1>
          <p className="text-muted-foreground text-xl">
            Experimental components and interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Link href="/alphabet-wall" className="group relative block overflow-hidden rounded-xl border bg-card p-8 transition-all hover:shadow-md hover:border-primary/50 text-card-foreground">
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="font-bold text-2xl group-hover:text-primary transition-colors">Stranger Things Wall</h3>
              <p className="text-muted-foreground">Interactive 3D alphabet wall with Demogorgon mode.</p>
            </div>
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
           {/* Placeholder for more */}
           <div className="rounded-xl border border-dashed p-8 flex flex-col items-center justify-center text-muted-foreground/50 bg-muted/20 min-h-[160px]">
              <span className="text-sm font-medium">More coming soon</span>
           </div>
        </div>
      </div>
    </div>
  )
}
