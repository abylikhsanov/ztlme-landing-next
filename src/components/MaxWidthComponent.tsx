import {ReactNode} from "react";

const MaxWidthComponent = ({children}: {children: ReactNode}) => {
    return (
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mb-12 mt-20 sm:mt-28 flex flex-col items-center justify-center text-center">
            {children}
        </div>
    )
}

export default MaxWidthComponent;