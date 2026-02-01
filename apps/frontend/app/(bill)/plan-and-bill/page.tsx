import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { plan } from "@/constants"
import { CircleCheck } from "lucide-react"
import Link from "next/link"

const page = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {/* Responsive Title Section */}
      <div className="title flex flex-col text-center pt-8 md:pt-12 lg:pt-16 xl:pt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Choose Plan</h1>
        <span className="text-base sm:text-lg md:text-xl font-semibold mt-2">
          Choose a plan that suits your project
        </span>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-10">
        {plan.map((planItem) => (
          <Card 
            className="w-full h-auto min-h-[450px] md:min-h-[500px] flex flex-col" 
            key={planItem.id}
          >
            <CardHeader className="flex-grow-0">
              <CardTitle className="text-lg md:text-xl">
                {planItem.plan}
              </CardTitle>
              <div className="flex flex-row items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-black">
                  {planItem.price}
                </span>
                <p className={`text-xs md:text-sm font-normal ${planItem.price ? "opacity-50" : "opacity-0"}`}>
                  /month
                </p>
              </div>
              <CardDescription>
                <span className="text-xs md:text-sm">
                  {planItem.desc}
                </span>
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow flex flex-col">
              {/* Button with responsive padding */}
              <Link href={planItem.price ? "/checkout" : "/"}>
                <button 
                  className={`
                    transition-all mb-4 md:mb-5 rounded-md w-full 
                    py-1 cursor-pointer font-medium
                    ${planItem.price 
                      ? "bg-blueAzure text-white hover:bg-blue-950" 
                      : "bg-topaz text-black hover:bg-amber-200"
                    }
                  `}
                >
                  {planItem.price ? "Get Started" : "Contact Us"}
                </button>
              </Link>
              
              <span className="font-semibold text-sm md:text-base mb-2">
                Included Features
              </span>
              
              {/* Features List with responsive spacing */}
              <div className="space-y-1 md:space-y-1.5 flex-grow">
                {planItem.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CircleCheck className="mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default page