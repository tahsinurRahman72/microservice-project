import { AppSidebar } from "@/components/app-sidebar"
import { ClipboardPaste } from "lucide-react"
import { DataTableDemo } from "./datatable/render"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Visualize your Dataset
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Insert Data</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min flex items-center justify-center p-10">
          {/* <Button className="bg-inherit border-gray-600 flex flex-col items-center justify-center space-y-2 px-4 py-10" variant="outline">
            <span className="text-center italic">Enter your data here</span>
            <ClipboardPaste className="h-6 w-6" />
          </Button> */}
            <DataTableDemo />
        </div>
        {/* <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <div className="aspect-square rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
