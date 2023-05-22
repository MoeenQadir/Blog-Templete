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
                        className="mb-4 md:mb-0 w-full max-w-screen-md mt-32 mx-auto relative"
                    >
                        <div className="p-4 absolute bottom-0 mt-20 text-center sleft-0 z-20">

                            <h2 className="text-4xl font-semibold mx-auto w-full mt-20 ">
                                {blog[id-1].title}
                            </h2>
                            <div className="flex mt-3">
                            </div>
                        </div>
                    </div>
                    <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                        <h4 className={"text-2xl bold"}>{blog[id-1].heading1}</h4><br></br>
                        <p className="pb6">
                            {blog[id-1].detail1}
                        </p>
                        <br/>
                        <h4 className={"text-2xl bold"}>{blog[id-1].heading2}</h4><br></br>
                        <p className="pb6">
                            {blog[id-1].detail2}
                        </p>
                        <br/>
                        <h4 className={"text-2xl bold"}>{blog[id-1].heading3}</h4><br></br>
                        <p className="pb6">
                            {blog[id-1].detail3}
                        </p>
                        <br/>
                        <h4 className={"text-2xl bold"}>{blog[id-1].heading4}</h4><br></br>
                        <p className="pb6">
                            {blog[id-1].detail4}
                        </p>
                        <br/>
                    </div>
                </main>
            </div>
        </>
    )
}
export default MyComponent;
