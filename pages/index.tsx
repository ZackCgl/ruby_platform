import { getSession } from "next-auth/react";
import { useRouter } from "next/router";


/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
const router = useRouter()

    const handleSign = () => {
       router.push("/login")
    }
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:grid-cols-1 lg:grid-cols-2">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
               Maak je administratie gemakkelijk
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              Maak je facturen in slechts een paar stappen, en dat ook nog eens helemaal kosteloos.
              </p>
            </div>
            <div className="ml-32">
                 <div className="flex items-center justify-center px-16 ml-36">
                    <div className="relative w-full max-w-lg">
                      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
                      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                      <div className="m-8 relative space-y-4">
                        
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div>
              <div className="">
                {/* Decorative image grid */}
                
  
                <a
                onClick={handleSign}
                  href="#"
                  className="buttonLanding"
                >
                  Aanmelden
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  