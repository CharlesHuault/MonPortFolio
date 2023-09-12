import React from 'react';
import '../styles/components/monotext.scss'
import { useTranslation } from 'react-i18next';

const Monotext = () => {
    const { t } = useTranslation();
    return (
        <div className='texte-presentation'>
            <div>
                <p>Charles Huault</p>
                <p>{t('monotext.age')}</p>
            </div>
            <div>
                <p>{t('monotext.text1')}<br /> {t('monotext.text2')}</p>
                <p >{t('monotext.text3')}<br />{t('monotext.text4')}<br />{t('monotext.text5')}</p>
            </div>
            <div id="competences"></div>
        </div>
    );
};

export default Monotext;