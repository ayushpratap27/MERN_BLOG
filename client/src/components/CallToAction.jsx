import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            React Interview Questions and Answers
            </h2>
            <p className='text-gray-500 my-2'>
            Top 50+ React Interview Questions and Answers
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-tr-none rounded-bl-none'>
                <a href="https://www.geeksforgeeks.org/react-interview-questions/" target='_blank' rel='noopener noreferrer'>
                    50+ React Interview Questions
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.brainvire.com/blog/wp-content/uploads/2019/04/How-ReactJS-can-fuel-your-business-for-success.jpg" />
        </div>
    </div>
  )
}