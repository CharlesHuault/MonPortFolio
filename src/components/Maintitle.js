import React from 'react';
import '../styles/components/maintitle.scss'
import { useTranslation } from 'react-i18next';

const Maintitle = () => {
    // Appel de i18n pour la traduction des textes du composant
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('accueil.title')}</h1>
        </div>
    );
};

export default Maintitle;