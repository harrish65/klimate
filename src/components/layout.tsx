import type {PropsWithChildren} from "react"
import Header from "./ui/header"
const Layout : React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="bg-linear-to-br from-background to-muted min-h-screen">
       <Header />
        <main className="min-h-screen container mx-auto px-4 py-8">
            {children}
        </main>
        <footer className="border-t backdrop-blur supports-backdrop-filter:bg-background/60">  
          <div className="container mx-auto px-4 py-12 text-center text-gray-200">
            <p>Copyright 2025 Weather Dashboard</p>
          </div>
        </footer>
    </div> 
  )
}

export default Layout