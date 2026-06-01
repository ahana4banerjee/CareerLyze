import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function DashboardCardSkeleton() {
  return (
    <Card className="w-full h-[140px] flex flex-col justify-between p-6">
      <CardHeader className="p-0 space-y-2">
        <div className="flex items-center justify-between w-full">
          {/* Mock Card Title */}
          <Skeleton className="h-4 w-[120px] rounded-md" />
          {/* Mock Top Right Icon */}
          <Skeleton className="h-5 w-5 rounded-full" />
        </div>
      </CardHeader>
      
      <CardContent className="p-0 space-y-2">
        {/* Mock Large Metrics Number */}
        <Skeleton className="h-8 w-[70px] rounded-md" />
        {/* Mock Description Subtext */}
        <Skeleton className="h-3 w-[160px] rounded-md" />
      </CardContent>
    </Card>
  )
}

export default function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Grid wrapper matching your responsive design settings */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <DashboardCardSkeleton key={`dashboard-card-skeleton-${index}`} />
        ))}
      </div>
      
      {/* Optional placeholder for any main body charts or table outlines below the cards */}
      <div className="w-full h-[350px]">
        <Skeleton className="w-full h-full rounded-xl" />
      </div>
    </div>
  )
}
