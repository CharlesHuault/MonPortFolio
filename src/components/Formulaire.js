import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/components/formulaire.scss';
import { useTranslation } from 'react-i18next';


  // Composant du formulaire de contact
const Formulaire = () => {
  // Appel de i18n pour la traduction des textes du composant
  const { t } = useTranslation();

  const form = useRef();
  const [errors, setErrors] = useState({
    Nom: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    // Valider le champ Nom avec au moins 5 caractères, sinon renvoyer une erreur
    if (form.current.Nom.value.length < 5) {
      setErrors({ ...errors, Nom: t('form.errorname') });
      return;
    } else {
      setErrors({ ...errors, Nom: '' });
    }

    // Valider le champ email avec une adresse valide sinon renvoyer une erreur
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(form.current.email.value)) {
      setErrors({ ...errors, email: t('form.erroremail') });
      return;
    } else {
      setErrors({ ...errors, email: '' });
    }

    // Valider le champ message avec au moins 50 caractères, sinon renvoyer une erreur
    if (form.current.message.value.length < 50) {
      setErrors({ ...errors, message: t('form.errormessage') });
      return;
    } else {
      setErrors({ ...errors, message: '' });
    }

    // Envoyer le formulaire si tout est valide
    emailjs
      .sendForm('service_fvkt5rt', 'template_dsdkp3o', form.current, '32n-A75WksH7DtL_P')
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true); // Marquer le formulaire comme soumis avec succès
          form.current.reset(); // Réinitialiser le contenu du formulaire
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    // Sélection de tous les textarea avec la classe "auto-expand"
    const textareas = document.querySelectorAll('textarea.auto-expand');

    // Ajout d'un gestionnaire d'événements "input" à chaque textarea
    textareas.forEach((textarea) => {
      textarea.addEventListener('input', function () {
        this.style.height = 'auto'; // Réinitialisation de la hauteur à "auto" pour recalculer la hauteur réelle
        this.style.height = this.scrollHeight + 'px'; // Ajustement de la hauteur en fonction du contenu
      });
    });

    // Nettoyage des gestionnaires d'événements lorsque le composant est démonté
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

    // Corps du formulaire appellant les éléments créés plus haut
    <div className='form-container'>
      <h4>FORMULAIRE</h4>
      {isFormSubmitted ? (
        <div className='success-message'>{t('form.successmessage')}</div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='Nom' id='Nom' placeholder={t('form.name')} />
          {errors.Nom && <div className='error'>{errors.Nom}</div>}
          <input type='email' name='email' id='email' placeholder='Email' />
          {errors.email && <div className='error'>{errors.email}</div>}
          <textarea className='auto-expand' name='message' rows='4' placeholder={t('form.text')} />
          {errors.message && <div className='error'>{errors.message}</div>}
          <input type='submit' value={t('form.send')} className='sendbutton' />
        </form>
      )}
    </div>
  );
};

export default Formulaire;