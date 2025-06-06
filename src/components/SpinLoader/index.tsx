
type SpinLoaderProps = {
    containerClasses?: string;
}

export default function SpinLoader({ containerClasses = "" }: SpinLoaderProps) {

    return (
        <div className={`flex items-center justify-center ${containerClasses}`}>
            <div className="
         w-10 h-10
         border-5
         border-t-transparent 
         bg-white
         rounded-full
         animate-spin
         ">
            </div>
        </div>
    )
}