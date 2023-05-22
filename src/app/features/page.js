import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Comprehensive Coverage',
        description:
            'We cover a wide range of tech topics, from software and cybersecurity to emerging technologies and the latest gadgets. No matter what you\'re interested in, you\'re sure to find something that piques your interest on TECH STORM.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Expert Analysis',
        description:
            'Our team of writers and contributors are experts in their respective fields, bringing you accurate and up-to-date information. We go beyond just reporting the news, offering our expert analysis and insights to help you understand the latest trends and developments.',
        icon: LockClosedIcon,
    },
    {
        name: 'Hands-On Reviews',
        description:
            'We don\'t just tell you about the latest tech products - we put them to the test. Our hands-on reviews provide you with in-depth analysis and real-world testing to help you make informed purchasing decisions.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Engaging Content',
        description:
            ' We strive to create engaging content that keeps you coming back for more. From informative articles to eye-catching videos, we use a variety of formats to bring you the latest tech news and trends.',
        icon: FingerPrintIcon,
    },
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to know about Technologies
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        At TECH STORM, we pride ourselves on providing you with the latest and greatest tech content. Here are just a few of the key features that make our website stand out:
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}