import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            Javascript Project Ideas
            </h2>
            <p className='text-gray-500 my-2'>
            Project ideas with source code
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-tr-none rounded-bl-none'>
                <a href="https://www.geeksforgeeks.org/top-javascript-projects/" target='_blank' rel='noopener noreferrer'>
                    Projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://images.surferseo.art/9602bc4b-cfc4-410e-b291-611d478c9d6a.png" />
        </div>
    </div>
  )
}