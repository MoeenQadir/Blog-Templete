'use client'
import React from 'react';
import {blog} from "@/data/blog"


const MyComponent = ({params}) => {
    const id = params.slug;
    return (
        <>
            {/* component */}
            <div className="max-w-screen-xl mx-auto">
                <main className="mt-10">
                    <div
                        className="relative w-full max-w-screen-md mx-auto mt-32 mb-4 md:mb-0"
                    >
                        <div className="absolute bottom-0 z-20 p-4 mt-20 text-center sleft-0">

                            <h2 className="w-full mx-auto mt-20 text-4xl font-semibold ">
                                {blog[id-1].title}
                            </h2>
                            <div className="flex mt-3">
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-md px-4 mx-auto mt-12 text-lg leading-relaxed text-gray-700 lg:px-0">
                        <h4 className={"text-2xl bold"}>{blog[id-1].heading1}</h4><br></br>
                        <div className={"mt-60"}>
                        <div dangerouslySetInnerHTML={{ __html: blog[id-1].html }}></div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default MyComponent;
