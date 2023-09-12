import React from 'react';
import { useTranslation } from 'react-i18next';

const Liencompetences = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h3><a href="#competences">{t('bodytitles.skills')}</a></h3>
        </div>
    );
};

export default Liencompetences;