import React, {useEffect} from 'react';
import '../styles/components/formulaire.scss'
import { useTranslation } from 'react-i18next';

const Formulaire = () => {
    const { t } = useTranslation();    
    useEffect(() => {
        // Sélectionnez tous les textarea avec la classe "auto-expand"
        const textareas = document.querySelectorAll('textarea.auto-expand');

        // Ajoutez un gestionnaire d'événements "input" à chaque textarea
        textareas.forEach((textarea) => {
            textarea.addEventListener('input', function () {
                this.style.height = 'auto'; // Réinitialisez la hauteur à "auto" pour recalculer la hauteur réelle
                this.style.height = this.scrollHeight + 'px'; // Ajustez la hauteur en fonction du contenu
            });
        });

        // Nettoyez les gestionnaires d'événements lorsque le composant est démonté
        return () => {
            textareas.forEach((textarea) => {
                textarea.removeEventListener('input', function () {
                    this.style.height = 'auto';
                    this.style.height = this.scrollHeight + 'px';
                });
            });
        };
    }, []);

    return (
        <div className='form-container'>
            <h4>FORMULAIRE</h4>
            <form action="" method="post">
                <input type="text" name="Nom" id="Nom" placeholder={t('form.name')} />
                <input type="email" name="email" id="email" placeholder='Email' />              
                <textarea className='auto-expand' rows="4" placeholder={t('form.text')} />            
            </form>
        </div>
    );
};

export default Formulaire;