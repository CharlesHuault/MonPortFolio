import React from 'react';
import { useTranslation } from 'react-i18next';

const Lienprojets = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h3><a href="#projets">{t('bodytitles.projects')}</a></h3>
        </div>
    );
};

export default Lienprojets;