import React from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcumb';
import ContactForm from './ContactFormSection';
import ContactMap from './ContactMapSecton';
const Brand = dynamic(() => import('../Home/BrandSection'), {
    ssr: false
})


const ContactMain = () => {
    return (
        <main>

	            {/* breadcrumb-area-start */}
	            <Breadcrumb pageTitle="Contact Us"/>
	            {/* breadcrumb-area-end */}

				{/* contact-area-start */}
                <ContactForm />
	            {/* contact-area-end */}

                {/* map-area-start */}
                <ContactMap />
	            {/* map-area-end */}

                {/* brand-area-start */}
                <Brand paddingclassName="ptt-120" />
                {/* brand-area-end */}

        	</main>
    );
};

export default ContactMain;