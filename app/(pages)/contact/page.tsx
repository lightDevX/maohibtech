
import ContactForm from '@/components/ContactForm/ContactForm';
import { EnvelopeIcon, HomeIcon, PhoneIcon } from '@heroicons/react/16/solid';


const contact = () => {


    return (
        <div className=' bg-white px-6 py-24 sm:py-8 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between '>
                <div className=' text-center md:text-left' >
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Get in touch</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
                    <p className="mt-2  text-lg/8 text-gray-600 flex items-center gap-4"><span className='w-5 h-5'><HomeIcon /></span>
                        545 Mavis Island
                        Chicago, IL 99191</p>
                    <p className="mt-2 text-lg/8 text-gray-600 flex items-center gap-4"><span className='w-5 h-5'><PhoneIcon /></span>+1 (555) 234-5678</p>
                    <p className="mt-2 text-lg/8 text-gray-600 flex items-center gap-4"><span className='w-5 h-5'><EnvelopeIcon /></span>hello@example.com</p>
                </div>
                <div className="contact-form">
                    <div >
                        <ContactForm />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default contact;