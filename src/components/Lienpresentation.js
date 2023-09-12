import React from 'react';
import { useTranslation } from 'react-i18next';

const Lienpresentation = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h3><a href="#presentation">{t('bodytitles.presentation')}</a></h3>
        </div>
    );
};

export default Lienpresentation;