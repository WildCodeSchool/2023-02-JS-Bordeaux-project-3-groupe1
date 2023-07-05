function LegalNotice() {
  const nomEntreprise = "Ligne Bleue";
  const adresse = "Rue du Paradis 33000 Bordeaux";
  const email = "contact@lignebleue.fr";
  const numeroTelephone = "05.99.98.97.96";
  const numeroSIRET = "4X3 801 981";

  const mentionsLegales = `
Hébergeur :
Ce site web est hébergé par Wild Services.

Conditions d'utilisation :
En utilisant ce site, vous acceptez de vous conformer aux conditions générales d'utilisation. Veuillez consulter les conditions générales d'utilisation pour obtenir plus d'informations sur les règles régissant l'utilisation de ce site.

Politique de confidentialité :
Nous accordons une grande importance à la confidentialité de vos données personnelles. Notre politique de confidentialité décrit comment nous collectons, utilisons et protégeons les informations que vous nous fournissez. Veuillez consulter notre politique de confidentialité pour en savoir plus sur nos pratiques en matière de confidentialité.

Cookies :
Ce site web utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte qui sont stockés sur votre appareil lorsque vous visitez le site. Veuillez consulter notre politique en matière de cookies pour en savoir plus sur l'utilisation des cookies sur ce site et comment vous pouvez les gérer.

Propriété intellectuelle :
Tous les droits de propriété intellectuelle liés au contenu de ce site, y compris les textes, les images, les vidéos, les logos et les marques de commerce, sont la propriété du Groupe La Poste ou de ses concédants de licence. Toute reproduction, distribution, modification ou utilisation non autorisée du contenu est strictement interdite.

Responsabilité :
Malgré tous les efforts déployés pour fournir des informations précises et à jour, nous déclinons toute responsabilité quant à l'exactitude, la pertinence ou l'exhaustivité des informations fournies sur ce site. Nous ne sommes pas responsables du contenu des sites externes vers lesquels des liens peuvent être fournis.

Si vous avez des questions concernant ces mentions légales, veuillez nous contacter à l'adresse email indiquée ci-dessus.

Dernière mise à jour : [20/06/2023]`;

  return (
    <div className="containerLegalNotice">
      <h2 className="subtitleInfoLegalNotice">Informations sur l'entreprise</h2>
      <div className="content">
        <p className="label">Nom de l'entreprise :</p>
        <p>{nomEntreprise}</p>

        <p className="label">Adresse :</p>
        <p>{adresse}</p>

        <p className="label">Email :</p>
        <p>{email}</p>

        <p className="label">Téléphone :</p>
        <p>{numeroTelephone}</p>

        <p className="label">Numéro SIRET :</p>
        <p>{numeroSIRET}</p>
      </div>
      <div className="section">
        <h2 className="subtitleLegalNotice">Mentions Légales</h2>
        <div className="content">
          <p>{mentionsLegales}</p>
        </div>
      </div>
    </div>
  );
}

export default LegalNotice;
