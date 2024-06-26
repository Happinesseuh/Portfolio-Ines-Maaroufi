
import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'

import { useTranslation } from 'react-i18next';
import { AnimationOnScroll } from 'react-animation-on-scroll';


import contact from '../assets/contact.png'


function Home() {

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <AnimationOnScroll animateIn="animate__fadeIn">

                <div className="pt-6 mt-0">
                    <div className="p-4 mb-6 mt-6 is-size-2 has-text-centered text-underlined-purple is-size-3-mobile is-size-1 is-relative">Me contacter <strong className="text-color-purple-light">.</strong></div>
                </div>

                <div className="mt-0">

                    <div className="columns m-6 mb-0 is-centered">
                        <div className="column">
                            <div className="card p-3 is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
                                <box-icon type='solid' name='phone' size='lg'></box-icon>
                                <div className="is-size-4">{t('tel')}</div>
                                <a href="tel:+33781594402">+33 7 81 59 44 02</a>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card p-3 is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
                                <box-icon name='envelope' type='solid' size='lg'></box-icon>
                                <div className="is-size-4">{t('mail')}</div>
                                <a href="mailto:ines.maaroufi@epitech.eu">ines.maaroufi@epitech.eu</a>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card div-3 is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
                                <box-icon name='linkedin-square' type='logo' size='lg'></box-icon>
                                <div className="is-size-4">{t('linkedin')}</div>
                                <a className="has-text-centered" href="https://www.linkedin.com/in/ines-maaroufi/">https://www.linkedin.com/in/ines-maaroufi/</a>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="mb-6 is-flex is-justify-content-center">
                    <img className="image" alt="contact" src={contact}></img>
                </div>
            </AnimationOnScroll>

            <Footer />
        </>
    )
}

export default Home;