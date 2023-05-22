import Image from 'next/image'
import Link from "next/link";
import {post} from "@/data/post"
import TopBar from "@/components/TopBar";

export default function Home() {
    return (
        <>

            <div className="container flex justify-center mx-auto">
                <div className="grid sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4 xl:gap-16 ">
                    {
                        post.map((item) =>{
                            return (
                                <>
                                    <div className="w-80 bg-white my-2 rounded-lg py-2 shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                                        <div className="flex items-center mb-2 space-x-4">
                                            <img className="w-10 rounded-full ml-2"
                                                 src="/moon.png"
                                                 alt="Moon"/>
                                            <div>
                                                <h1 className="mb-1 text-xl font-bold text-gray-700 ">{item.title}</h1>
                                                <p className="text-sm font-normal text-gray-600 mr-14 hover:underline text-justify ">{item.description}</p>
                                            </div>

                                        </div>
                                        <div className="flex justify-between px-10 py-6">
                                            <span>

                                            </span>
                                            <Link href={`/${item.id}`}>
                                            <span
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                                  fill="currentColor">
                                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg
                                            >
                                            </span>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>

            </div>
        </>
    )
}
