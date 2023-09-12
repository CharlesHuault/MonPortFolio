import React from 'react';
import { useTranslation } from 'react-i18next';

const Liencontact = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h3><a href="#contact">{t('bodytitles.contact')}</a></h3>
        </div>
    );
};

export default Liencontact;