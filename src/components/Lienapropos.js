import React from 'react';
import { useTranslation } from 'react-i18next';

const Lienapropos = () => {
    const { t } = useTranslation(); 
    return (
        <div>
            <h3><a href="#a-propos">{t('bodytitles.about')}</a></h3>
        </div>
    );
};

export default Lienapropos;