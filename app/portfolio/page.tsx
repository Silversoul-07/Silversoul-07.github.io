import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio of Praveen Kumar",
    keywords: "portfolio, Praveen Kumar, Silversoul07",
}

export default function Portfolio() {
    // website under construction
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat transition-all duration-1000 bg-gradient-to-r from-blue-500 to-green-500">
        <h2 className="text-2xl text-center text-white">Website under construction...</h2>
    </div>
    )
}