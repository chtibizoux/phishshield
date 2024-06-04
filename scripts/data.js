const data = [
  {
    content: {
      object: "Explications du jeu",
      email: "contact@phishshield.info",
      name: "PhishShield",
      date: Date(),
      sendby: "phishshield.info",
      signedby: "phishshield.info",
      security: "TLS",
      content: `Bienvenue sur PhishShield, le jeu qui va vous faire devenir un expert en cybersécurité !

Le but du jeu est de supprimer de votre boîte mail tout les e-mails de phishing en les déplaçant dans la poubelle.
Si vous pensez que vous avez reçu un e-mail frauduleux, faites-le glisser dans la poubelle, à gauche de l'écran. Sinon, vous pouvez l'accepter en le déposant à droite, sur le "check".

Bonne Chance !

L'équipe PhishShield`,
    },
    good: true,
    explanation:
      "Au cours de la partie, tu verras apparaître ici des explications et des conseils.\n\n Il s'agit d'un mail qui explique comment joueur, rien de suspect ici. Détends-toi !",
  },
  {
    content: {
      object: "Félicitations ! Vous avez gagné un voyage de luxe !",
      email: "contact@azersdfade.com",
      name: "Azer.com",
      date: "2023-10-25T20:15:38.657Z",
      sendby: "azersdfade.com",
      signedby: "azersdfade.com",
      security: "TLS",
      content:
        "Bravo !\nVous êtes notre heureux gagnant !\nPour réclamer votre prix, veuillez fournir vos informations personnelles (identité, adresse, numéro de téléphone & coordonnées bancaires) en répondant à ce courriel afin que nous puissions vous transmettre votre lot.\n\nSigné Azer.",
    },
    good: false,
    explanation:
      "Ne transmettez JAMAIS vos coordonnées à un inconnu (surtout pas bancaires !). Sachez que les banques ne vous demanderont pas de leur communiquer vos informations bancaires par mail. Si vous revecez ce genre d'e-mail, c'est du phishing. Prenez garde !",
  },
  {
    content: {
      object: "informations remise du TP site 21 dec",
      email: "1a.info@iut-valence.fr",
      replyto: "annabelle.mercier@univ-grenoble-alpes.fr",
      name: "ANNABELLE MERCIER",
      date: "2023-12-13T14:54:38.657Z",
      sendby: "univ-grenoble-alpes.fr",
      signedby: "univ-grenoble-alpes.fr",
      security: "TLS",
      content: `Bonjour à tous,

Le tp Site sera à remettre pour le 21 décembre (date décalée) .
Je vous demande d'envoyer en plus des consignes (faire un compte rendu et liens par mail), votre site sur mon casier numérique dans un fichier zip intitulé grptpNom1Nom2 dans le répertoire que je nommerait TpSiteBut1Info sur mon casier numérique.
 
J'attire votre attention sur la réalisation du compte rendu pour ce tp, y donner les explications sur le CSS et la structure HTML concernant les menus déroulants, et de même pour CSS et HTML des formulaires. Un compte rendu peut être écrit avec des captures d'écran et de code que vous commentez. N'hésitez pas à poser des questions si besoin.

Bien cordialement,

Annabelle MERCIER

Maitre de conférences en informatique
Université Grenoble Alpes`,
    },
    good: true,
    explanation:
      "Ici, rien d'anormal. Il s'agit simplement d'informations provenant d'une professeure et transmises grâce à une liste de diffusion. Assurez-vous, tout de même, que l'expéditeur correspond bien à votre professeure.",
  },
  {
    content: {
      object: "Please confirm your registration.",
      email: "no-reply@v-tools.fr",
      name: "V-Tools",
      date: "2023-09-15T23:23:23.657Z",
      sendby: "v-tools.fr",
      signedby: "v-tools.fr",
      security: "TLS",
      contentHtml: `<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Email Confirmation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
        @media screen {
            @font-face {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
            }
            @font-face {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 700;
                src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
            }
        }
        body, table, td, a {
            -ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
        }
        table, td {
            mso-table-rspace: 0pt;
            mso-table-lspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
        }
        a[x-apple-data-detectors] {
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            color: inherit !important;
            text-decoration: none !important;
        }
        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
        body {
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
        }
        table {
            border-collapse: collapse !important;
        }
        a {
            color: #1a82e2;
        }
        img {
            height: auto;
            line-height: 100%;
            text-decoration: none;
            border: 0;
            outline: none;
        }
    </style>
</head>
<body style="background-color: #e9ecef;">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td align="center" bgcolor="#e9ecef">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td align="center" valign="top" style="padding: 36px 24px;">
                        <a href="https://v-tools.fr" onclick="parent.postMessage('warning', '*');return false" target="_blank" style="display: inline-block;">
                            <img src="https://media.discordapp.net/attachments/1083877487177629826/1105877725366992907/v-tools_1.png?ex=65426d63&amp;is=652ff863&amp;hm=d3bd56fc09a19a63fd8368375abc59050732417f19ce6b13a15c14b964f7656e&amp;=" alt="Logo" border="0" width="48" style="display: block; width: 48px; max-width: 48px; min-width: 48px;">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" bgcolor="#e9ecef">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                        <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Confirm Your Email Address</h1>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" bgcolor="#e9ecef">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                        <p style="margin: 0;">Tap the button below to confirm your email address. If you didn't create an account with <a onclick="parent.postMessage('warning', '*');return false" href="https://v-tools.fr" style="text-decoration: none;">V - Tools</a>, you can safely delete this email.</p>
                    </td>
                </tr>
                <tr>
                    <td align="left" bgcolor="#ffffff">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td align="center" bgcolor="#82ecdb" style="border-radius: 6px;">
                                                <a onclick="parent.postMessage('warning', '*');return false" href="https://api.v-tools.fr/oauth/validate?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDMwOTM0NjYsImlhdCI6MTcwMjgzNDI2Niwic3ViIjoiNjU3ZjMwNWE3OTNjNjM0MjY1MjE1MTQzIiwidHlwIjoiYWNjZXNzIn0.qRzboBK1gx2QVk15HUHVcZQ0JZGrGPTSyr63OAEHGwc" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #000; text-decoration: none; border-radius: 6px;">Confirm my email</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                        <p style="margin: 0;">If that doesn't work, copy and paste the following link in your browser:</p>
                        <p style="margin: 0;"><a onclick="parent.postMessage('warning', '*');return false" href="https://api.v-tools.fr/oauth/validate?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDMwOTM0NjYsImlhdCI6MTcwMjgzNDI2Niwic3ViIjoiNjU3ZjMwNWE3OTNjNjM0MjY1MjE1MTQzIiwidHlwIjoiYWNjZXNzIn0.qRzboBK1gx2QVk15HUHVcZQ0JZGrGPTSyr63OAEHGwc" target="_blank">https://api.v-tools.fr/oauth/validate?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDMwOTM0NjYsImlhdCI6MTcwMjgzNDI2Niwic3ViIjoiNjU3ZjMwNWE3OTNjNjM0MjY1MjE1MTQzIiwidHlwIjoiYWNjZXNzIn0.qRzboBK1gx2QVk15HUHVcZQ0JZGrGPTSyr63OAEHGwc</a></p>
                    </td>
                </tr>
                <tr>
                    <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                        <p style="margin: 0;">Cheers,<br> V - Tools</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                        <p style="margin: 0;">You received this email because we received a request for an account creation for you. If you didn't request it you can safely delete this email.</p>
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                        <p style="margin: 0;">Powered by Venture Inc.</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>`,
    },
    good: true,
    explanation:
      "Ici, tout va bien. Il s'agit simplement d'un e-mail pour confirmer l'inscription sur un site.",
  },
  {
    content: {
      object: "Message important de votre responsable des ressources humaines",
      email: "killian.lebouc23@gmail.com",
      name: "Killian Le Bouc",
      date: "2023-11-03T10:41:18.657Z",
      sendby: "gmail.com",
      signedby: "gmail.com",
      security: "TLS",
      content:
        "Bonjour,\nIl me manque certaines informations importantes pour finaliser les dossiers annuels de l'entreprise. Veuillez me transmettre, par retour de mail, les devis et factures des projets que vous avez coordonné cette année ainsi que la dernière mise à jour sur les politiques de confidentialité de l'entreprise.\nMerci de me répondre dès que possible.\n\nCordialement,\nKillian Le Bouc.\nResponsable Ressources Humaines",
    },
    good: false,
    explanation:
      "Attention, vérifiez toujours l'adresse de l'expéditeur avant de transmettre quoi que ce soit par mail. Ici, il s'agit d'une demande de documents confidentiels à l'entreprise dans laquelle vous travaillez. Sauf indication contraire de votre hiérarchie, il n'est pas conseillé de transmettre ce genre d'informations. Et, encore moins, par mail à une adresse personnelle.",
  },
  {
    content: {
      object: "Livré : Votre commande Amazon.fr n° 404-3418566-5241108",
      email: "no-reply@amazon.fr",
      name: "Amazon.fr",
      date: "2023-12-19T12:22",
      sendby: "bounces.amazon.fr",
      signedby: "amazon.fr",
      security: "TLS",
      contentHtml: `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0; user-scalable=no;"
    />
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />
    <style>
      body {
        width: 100% !important;
        height: 100% !important;
        margin: 0;
        padding: 0;
      }
      table,
      table td {
        border-collapse: collapse !important;
      }
      table th {
        margin: 0 !important;
        padding: 0 !important;
        font-weight: normal;
      }

      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      .ReadMsgBody {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }

      td {
        font-family: Arial, sans-serif;
      }

      .appleBody a {
        color: #68440a;
        text-decoration: none;
      }
      .appleFooter a {
        color: #999999;
        text-decoration: none;
      }

      .emailBody {
        width: 375px;
        background-color: #fafafa;
      }

      .emailBodyTD {
        width: 100%;
        padding-left: 17px;
        padding-right: 18px;
        padding-top: 23px;
        padding-bottom: 21px;
      }

      .brandTable {
        margin-bottom: 20px;
        width: 100%;
        min-width: 338px;
      }

      .brandImage {
        width: 130px;
      }

      .emailContainer {
        background-color: #ffffff;
        border-left: 1px solid #d6d6d6;
        border-right: 1px solid #d6d6d6;
        border-bottom: 1px solid #d6d6d6;
        border-top: 2px solid #cecece;
        width: 100%;
      }

      .emailContainerTD {
        padding-top: 25px;
        padding-bottom: 33px;
      }

      .topCard {
        background-color: #ffffff;
        padding-left: 23px;
        padding-right: 23px;
        padding-top: 25px;
        padding-bottom: 33px;
        border-left: 1px solid #d6d6d6;
        border-right: 1px solid #d6d6d6;
        border-bottom: 1px solid #d6d6d6;
        border-top: 2px solid #cecece;
      }

      .centered {
        text-align: center !important;
      }

      .leftAlign {
        text-align: left !important;
      }

      .card {
        background-color: #ffffff;
        width: 100%;
        padding-left: 20px;
        padding-right: 21px;
        padding-top: 30px;
        padding-bottom: 30px;
        border: 0;
        margin-bottom: 5px;
      }

      .cardTD {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 30px;
        padding-bottom: 30px;
      }

      .orderIdLink {
        text-decoration: none;
        color: #868686;
      }

      .grayTopBorder {
        border-top: 2px solid #d5dbdb;
      }

      hr {
        color: #cfcfcf;
        border-color: #cfcfcf;
        background-color: #cfcfcf;
        border: 1px solid #cfcfcf;
        margin-top: 15px;
        margin-bottom: 15px;
      }

      .infoIcon {
        height: 15px;
      }

      .addressLink {
        text-decoration: none;
      }

      .arrivalTime {
        font-size: 22px;
        color: #008577;
        padding-left: 10px;
        padding-right: 20px;
      }

      .greetingTable {
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
        color: #002e36;
        margin-bottom: 4px;
        width: 100%;
      }

      .informationTable {
        font-size: 18px;
        line-height: 24px;
        color: #002e36;
        width: 100%;
      }

      .informationTable td {
        padding-bottom: 6px;
      }

      .informationTable a {
        color: #002e36;
        text-decoration: none;
      }

      .informationTableReducedPadding {
        font-size: 18px;
        line-height: 24px;
        color: #002e36;
      }

      .informationTableReducedPadding td {
        padding-bottom: 2px;
      }

      .informationTableReducedPadding a {
        color: #002e36;
        text-decoration: none;
      }

      .textWithUnderlinedLink {
        color: #868686;
        text-decoration: none;
        border-bottom: 2px solid #00dffc;
      }

      .textWithUnderlinedColorLink {
        color: #0066c0;
        text-decoration: none;
        border-bottom: 2px solid #0066c0;
      }

      .msoInformationTable {
        font-size: 18px;
        line-height: 24px;
        color: #002e36;
      }

      .msoInformationTable td {
        padding-bottom: 6px;
      }

      .msoInformationTable a {
        color: #002e36;
        text-decoration: underline;
        text-decoration-color: #00dffc;
      }

      .msoInformationTableReducedPadding {
        font-size: 18px;
        line-height: 24px;
        color: #002e36;
      }

      .msoInformationTableReducedPadding td {
        padding-bottom: 2px;
      }

      .msoInformationTableReducedPadding a {
        color: #002e36;
        text-decoration: underline;
        text-decoration-color: #00dffc;
      }

      .orderDetailsTable {
        font-size: 18px;
        line-height: 20px;
        margin: 0 auto;
      }

      .orderDetailsTableLink {
        text-decoration: none;
        color: #008296;
      }

      .orderDetailsTable td {
        padding-bottom: 20px;
      }

      .itemImage img {
        max-height: 84px;
        max-width: 84px;
      }

      .itemTitle {
        padding-left: 26px;
        padding-right: 22px;
      }

      .orderIdTable {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
        margin-bottom: 18px;
      }

      .orderIdTable a {
        text-decoration: none;
        color: #879596;
      }

      .instructionTable {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .instructionTable td {
        padding-bottom: 18px;
      }

      .instructionTableReducedPadding {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .instructionTableReducedPadding td {
        padding-bottom: 2px;
      }

      .instructionTableTopPadding {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .instructionTableTopPadding td {
        padding-top: 10px;
      }

      .msoInstructionTable {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .msoInstructionTable td {
        padding-bottom: 18px;
      }

      .msoInstructionTable a {
        color: #002e36;
        text-decoration: underline;
        text-decoration-color: #00dffc;
      }

      .msoInstructionTableReducedPadding {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .msoInstructionTableReducedPadding td {
        padding-bottom: 2px;
      }

      .msoInstructionTableReducedPadding a {
        color: #002e36;
        text-decoration: underline;
        text-decoration-color: #00dffc;
      }

      .msoInstructionTableTopPadding {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .msoInstructionTableTopPadding td {
        padding-top: 10px;
      }

      .msoInstructionTableTopPadding a {
        color: #002e36;
        text-decoration: underline;
        text-decoration-color: #00dffc;
      }

      .surveyLink {
        text-decoration: none;
        color: #008296;
        font-size: 13px;
        line-height: 16px;
      }

      .emailClosing {
        font-size: 9px;
        line-height: 15px;
        color: #868686;
      }

      .trackPackageButtonContainer {
        width: 100%;
      }

      .trackPackageButtonContainer a {
        color: #002e36;
        text-decoration: none;
      }

      .trackPackageButtonTable {
        height: 45px !important;
        width: 100%;
      }

      .trackPackageButtonText {
        line-height: 18px;
        color: #111111;
        font-size: 16px;
        text-decoration: none;
        vertical-align: middle;
        box-shadow: 0 2px 0 0 rgba(84, 84, 84, 0.3);
        width: 100%;
      }

      .trackPackageButtonTextForOutlook {
        color: #111111;
        font-size: 16px;
        text-decoration: none;
        vertical-align: middle;
        box-shadow: 0 2px 0 0 rgba(84, 84, 84, 0.3);
        width: 100%;
      }

      .trackPackageLinkForOutlook {
        color: #111111;
        text-decoration: none;
      }

      .paddingT10 {
        padding-top: 10px !important;
      }

      .paddingT30 {
        padding-top: 30px !important;
      }

      .largeImageContainer {
        width: 100%;
        text-align: center;
      }

      .largeImage {
        border: 0;
      }

      .photoOnDeliveryContainer {
        width: 100%;
      }

      .deliveryFeedbackContainer {
        width: 100%;
        line-height: 1.5;
        border-collapse: collapse;
      }

      .deliveryFeedbackButtonTd {
        width: 48%;
        display: table-cell;
        background: #edefef;
        text-align: center;
        vertical-align: top;
        border-right: 4px solid #fff;
        padding: 0;
      }

      .deliveryFeedback-link {
        width: 100%;
        text-decoration: none;
        color: #002f36;
      }

      .deliveryFeedback-options-button {
        display: inline-block;
        background: #edefef;
        text-align: center;
        vertical-align: top;
        border-radius: 8px 8px 0 0;
      }

      .deliveryFeedback-options-button .deliveryFeedback-icon {
        width: 30px;
        height: 40px;
        display: inline-block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        vertical-align: middle;
        margin-top: 16px;
      }

      .deliveryFeedback-options-button:hover,
      .deliveryFeedback-options-button:focus,
      .deliveryFeedback-options-button:active {
        background: #232f3e;
        color: #eceeee;
        border-radius: 8px 8px 0 0;
      }

      .deliveryFeedback-options-button #deliveryFeedback-unhappy-icon {
        background-image: url("https://m.media-amazon.com/images/G/01/x-locale/cs/ship-track/pt2/delivery-feedback/thumbs_down_unpressed.png");
        position: relative;
        top: -8px;
      }

      .deliveryFeedback-label {
        padding-bottom: 10px;
      }

      .deliveryFeedbackButtonTd.Text {
        border-radius: 0 0 8px 8px;
        height: 35px;
      }

      .deliveryFeedbackButtonTd.Image {
        border-radius: 8px 8px 0 0;
      }

      .deliveryFeedback-options-button .deliveryFeedback-label {
        display: inline-block;
        color: #002f36;
        font-size: 18px;
        line-height: 16px;
        margin-top: 10px;
        padding: 5px 0;
      }

      .deliveryFeedbackButtonTd.Image:hover {
        background: #232f3e;
        border-radius: 8px 8px 0 0;
        color: #eceeee;
      }

      .deliveryFeedback-options-button:hover #deliveryFeedback-happy-icon,
      .deliveryFeedback-options-button:focus #deliveryFeedback-happy-icon,
      .deliveryFeedback-options-button:active #deliveryFeedback-happy-icon {
        background-image: url("https://m.media-amazon.com/images/G/01/x-locale/cs/ship-track/pt2/delivery-feedback/thumbs_up_pressed.png");
      }

      .deliveryFeedback-options-button:hover #deliveryFeedback-unhappy-icon,
      .deliveryFeedback-options-button:focus #deliveryFeedback-unhappy-icon,
      .deliveryFeedback-options-button:active #deliveryFeedback-unhappy-icon {
        background-image: url("https://m.media-amazon.com/images/G/01/x-locale/cs/ship-track/pt2/delivery-feedback/thumbs_down_pressed.png");
      }

      .deliveryFeedback-options-button #deliveryFeedback-happy-icon {
        background-image: url("https://m.media-amazon.com/images/G/01/x-locale/cs/ship-track/pt2/delivery-feedback/thumbs_up_unpressed.png");
      }

      .deliveryFeedbackImage {
        display: block;
        width: 100%;
        height: auto;
      }

      .deliveryFeedbackImageMSO9 {
        width: 220px;
      }

      .productSupportInstructions {
        color: #007185;
        text-decoration: none;
      }

      .productSupportIcon {
        width: 20px;
        height: 20px;
      }

      .alexaContentContainer {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (min-width: 651px) {
        .brandTable {
          margin-bottom: 20px !important;
          width: 100%;
          min-width: 532px;
        }

        .card {
          background-color: #ffffff;
          width: 100%;
          padding-left: 20px;
          padding-right: 21px;
          padding-top: 30px;
          padding-bottom: 30px;
          border: 0;
          margin-bottom: 5px;
        }

        .cardTD {
          width: 100% !important;
          padding-left: 45px !important;
          padding-right: 45px !important;
          padding-top: 30px !important;
          padding-bottom: 30px !important;
        }

        .emailBody {
          width: 640px !important;
          background-color: #fafafa;
        }

        .emailBodyTD {
          width: 100%;
          padding-left: 51px !important;
          padding-right: 57px !important;
          padding-top: 28px !important;
          padding-bottom: 31px !important;
        }

        .emailContainerTD {
          padding-top: 36px !important;
          padding-bottom: 20px !important;
        }

        .greetingTable {
          font-size: 16px !important;
          font-weight: bold;
          line-height: 18px !important;
          color: #002e36;
          margin-bottom: 6px !important;
        }

        .informationTable {
          font-size: 16px !important;
          line-height: 20px !important;
          color: #002e36;
          width: 100%;
        }

        .informationTable td {
          padding-bottom: 8px !important;
        }

        .informationTableReducedPadding {
          font-size: 16px !important;
          line-height: 20px !important;
          color: #002e36;
        }

        .informationTableReducedPadding td {
          padding-bottom: 2px !important;
        }

        .orderDetailsTable {
          font-size: 16px !important;
          line-height: 20px !important;
        }

        .itemTitle {
          padding-right: 24px !important;
          padding-left: 26px !important;
        }

        .orderIdTable {
          font-size: 16px !important;
          line-height: 16px !important;
          color: #879596;
          margin-bottom: 18px !important;
        }

        .instructionTable {
          font-size: 16px !important;
          line-height: 16px !important;
          color: #879596;
        }

        .instructionTable td {
          padding-bottom: 17px !important;
        }

        .instructionTableReducedPadding {
          font-size: 16px !important;
          line-height: 16px !important;
          color: #879596;
        }

        .instructionTableReducedPadding td {
          padding-bottom: 1px !important;
        }

        .instructionTableTopPadding {
          font-size: 16px !important;
          line-height: 16px !important;
          color: #879596;
        }

        .instructionTableTopPadding td {
          padding-top: 10px !important;
        }

        .surveyLink {
          text-decoration: none;
          color: #008296;
          font-size: 11px !important;
          line-height: 16px !important;
        }

        .separatorLine {
          border-left: 0;
          border-right: 0;
          border-top: 0;
          border-bottom: 0;
        }

        .separatorLeft,
        .separatorRight {
          width: 1px !important;
          font-size: 1px;
        }

        .separatorMiddle {
          width: 397px !important;
          min-width: 397px !important;
          background: none;
          border-top: 0px;
          border-right: 0px;
          border-left: 0px;
          border-bottom: 1px solid #879596;
          height: 1px;
          width: 100%;
          margin: 0px 0px 0px 0px;
          font-size: 1px;
        }

        .emailClosing {
          font-size: 9px !important;
          line-height: 15px !important;
          color: #868686;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100% !important;
      height: 100% !important;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    "
  >
    <img
      width="1"
      height="1"
      src="https://www.amazon.fr/gp/r.html?C=1KHUJ191ORD17&K=1K05HTWL0FGR3&M=urn:rtn:msg:20231219112254467fc46d6f08441292a01d129f40p0eu&R=2AOSM42FUYTJM&T=O&U=https%3A%2F%2Fimages-eu.ssl-images-amazon.com%2Fimages%2FG%2F01%2Fnav%2Ftransp.gif&H=FUDU6R4FKAABWPY0YAIKPTBQ3VIA&ref_=pe_27091421_487056201_opens"
    />
    <table
      id="OutlookWrapper"
      style="
        width: 100%;
        border-collapse: collapse !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      "
    >
      <tbody>
        <tr>
          <td
            align="center"
            style="
              border-collapse: collapse !important;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
              font-family: Arial, sans-serif;
            "
          >
            <table
              id="EmailWrapper"
              style="
                width: 100% !important;
                border-collapse: collapse !important;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
              "
              dir="ltr"
            >
              <tbody>
                <tr>
                  <td
                    align="center"
                    style="
                      border-collapse: collapse !important;
                      -webkit-text-size-adjust: 100%;
                      -ms-text-size-adjust: 100%;
                      font-family: Arial, sans-serif;
                    "
                  >
                    <table
                      class="emailBody"
                      style="
                        width: 375px;
                        background-color: rgb(250, 250, 250);
                        border-collapse: collapse !important;
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                      "
                    >
                      <tbody>
                        <tr>
                          <td
                            class="emailBodyTD"
                            style="
                              width: 100%;
                              padding-left: 17px;
                              padding-right: 18px;
                              padding-top: 23px;
                              padding-bottom: 21px;
                              border-collapse: collapse !important;
                              -webkit-text-size-adjust: 100%;
                              -ms-text-size-adjust: 100%;
                              font-family: Arial, sans-serif;
                            "
                          >
                            <a
                              href="https://www.amazon.fr/gp/r.html?C=1KHUJ191ORD17&K=1K05HTWL0FGR3&M=urn:rtn:msg:20231219112254467fc46d6f08441292a01d129f40p0eu&R=2C9GRRS3ONG16&T=C&U=https%3A%2F%2Fwww.amazon.fr%3Fref_%3Dpe_27091421_487056201&H=6LCI9I6ACOWPTZMLNHARRYAA8TSA&ref_=pe_27091421_487056201"
                              style="
                                -webkit-text-size-adjust: 100%;
                                -ms-text-size-adjust: 100%;
                              "
                              onclick="parent.postMessage('warning', '*');return false"
                            >
                              <table
                                class="brandTable"
                                style="
                                  margin-bottom: 20px;
                                  width: 100%;
                                  min-width: 338px;
                                  border-collapse: collapse !important;
                                  -webkit-text-size-adjust: 100%;
                                  -ms-text-size-adjust: 100%;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                        font-family: Arial, sans-serif;
                                      "
                                    >
                                      <img
                                        src="https://images-na.ssl-images-amazon.com/images/G/01/reading/images/amazon.png"
                                        alt="Amazon"
                                        title="Amazon"
                                        class="brandImage"
                                        border="0"
                                        width="130"
                                        style="width: 130px"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </a>
                            <table
                              class="card grayTopBorder"
                              style="
                                background-color: rgb(255, 255, 255);
                                width: 100%;
                                padding-left: 20px;
                                padding-right: 21px;
                                padding-top: 30px;
                                padding-bottom: 30px;
                                border: 0;
                                margin-bottom: 5px;
                                border-top: 2px solid rgb(213, 219, 219);
                                border-collapse: collapse !important;
                                -webkit-text-size-adjust: 100%;
                                -ms-text-size-adjust: 100%;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="cardTD grayTopBorderTD"
                                    align="left"
                                    style="
                                      width: 100%;
                                      padding-left: 20px;
                                      padding-right: 20px;
                                      padding-top: 30px;
                                      padding-bottom: 30px;
                                      border-collapse: collapse !important;
                                      -webkit-text-size-adjust: 100%;
                                      -ms-text-size-adjust: 100%;
                                      font-family: Arial, sans-serif;
                                    "
                                  >
                                    <table
                                      class="greetingTable"
                                      style="
                                        font-size: 18px;
                                        font-weight: bold;
                                        line-height: 24px;
                                        color: rgb(0, 46, 54);
                                        margin-bottom: 4px;
                                        width: 100%;
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <span>Bonjour Cl&eacute;ment,</span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]>
                                      <table class="msoInformationTable">
                                        <tr>
                                          <td>
                                            <span
                                              >Votre colis a été livré !</span
                                            >
                                          </td>
                                        </tr>
                                      </table>
                                    <![endif]-->
                                    <!--[if !mso & !IE]><!-- -->
                                    <table
                                      class="informationTable"
                                      style="
                                        font-size: 18px;
                                        line-height: 24px;
                                        color: rgb(0, 46, 54);
                                        width: 100%;
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              padding-bottom: 6px;
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <span
                                              >Votre colis a &eacute;t&eacute;
                                              livr&eacute; !</span
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--<![endif]--> <br />
                                    <table
                                      class="greetingTable"
                                      style="
                                        font-size: 18px;
                                        font-weight: bold;
                                        line-height: 24px;
                                        color: rgb(0, 46, 54);
                                        margin-bottom: 4px;
                                        width: 100%;
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <span
                                              >Comment s'est
                                              d&eacute;roul&eacute;e la
                                              livraison&nbsp;?</span
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table
                                      class="deliveryFeedbackContainer"
                                      style="
                                        width: 100%;
                                        line-height: 1.5;
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            class="deliveryFeedbackButtonTd Image"
                                            style="
                                              border-radius: 8px 8px 0 0;
                                              width: 48%;
                                              display: table-cell;
                                              background: rgb(237, 239, 239);
                                              text-align: center;
                                              vertical-align: top;
                                              border-right: 4px solid
                                                rgb(255, 255, 255);
                                              padding: 0;
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <a
                                              href="https://www.amazon.fr/gp/r.html?C=1KHUJ191ORD17&K=1K05HTWL0FGR3&M=urn:rtn:msg:20231219112254467fc46d6f08441292a01d129f40p0eu&R=1M9S7K750CTL0&T=C&U=https%3A%2F%2Fwww.amazon.fr%2Fprogress-tracker%2Fpackage%3F_encoding%3DUTF8%26itemId%3Dlkkorwloqoovoo%26orderId%3D404-3418566-5241108%26packageIndex%3D0%26shipmentId%3D69068633957302%26ingress%3Demail%26intent%3Dfeedback_happy%26ref_%3Dpe_27091421_487056201_pdc_f_h&H=STTLYG61XUQFJ35NCSLTXBAJCAAA&ref_=pe_27091421_487056201_pdc_f_h"
                                              class="deliveryFeedback-link"
                                              style="
                                                width: 100%;
                                                text-decoration: none;
                                                color: rgb(0, 47, 54);
                                                -webkit-text-size-adjust: 100%;
                                                -ms-text-size-adjust: 100%;
                                              "
                                              onclick="parent.postMessage('warning', '*');return false"
                                            >
                                              <span
                                                class="deliveryFeedback-options-button deliveryFeedbackImage"
                                                style="
                                                  display: inline-block;
                                                  background: rgb(
                                                    237,
                                                    239,
                                                    239
                                                  );
                                                  text-align: center;
                                                  vertical-align: top;
                                                  border-radius: 8px 8px 0 0;
                                                  width: 100%;
                                                  height: auto;
                                                "
                                              >
                                                <div
                                                  id="deliveryFeedback-happy-icon"
                                                  class="deliveryFeedback-icon"
                                                  style="
                                                    background-image: url(https://m.media-amazon.com/images/G/01/x-locale/cs/ship-track/pt2/delivery-feedback/thumbs_up_unpressed.png);
                                                    width: 30px;
                                                    height: 40px;
                                                    display: inline-block;
                                                    background-size: cover;
                                                    background-repeat: no-repeat;
                                                    background-position: center;
                                                    vertical-align: middle;
                                                    margin-top: 16px;
                                                  "
                                                ></div>
                                              </span>
                                            </a>
                                          </td>
                                          <td
                                            class="deliveryFeedbackButtonTd Image"
                                            style="
                                              border-radius: 8px 8px 0 0;
                                              width: 48%;
                                              display: table-cell;
                                              background: rgb(237, 239, 239);
                                              text-align: center;
                                              vertical-align: top;
                                              border-right: 4px solid
                                                rgb(255, 255, 255);
                                              padding: 0;
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <a
                                              href="https://www.amazon.fr/gp/r.html?C=1KHUJ191ORD17&K=1K05HTWL0FGR3&M=urn:rtn:msg:20231219112254467fc46d6f08441292a01d129f40p0eu&R=3974S8PDEZ40X&T=C&U=https%3A%2F%2Fwww.amazon.fr%2Fprogress-tracker%2Fpackage%3F_encoding%3DUTF8%26itemId%3Dlkkorwloqoovoo%26orderId%3D404-3418566-5241108%26packageIndex%3D0%26shipmentId%3D69068633957302%26ingress%3Demail%26intent%3Dfeedback_unhappy%26ref_%3Dpe_27091421_487056201_pdc_f_s&H=BPZO72ABZLI9JAH4K4KPLXYKEXUA&ref_=pe_27091421_487056201_pdc_f_s"
                                              class="deliveryFeedback-link"
                                              style="
                                                width: 100%;
                                                text-decoration: none;
                                                color: rgb(0, 47, 54);
                                                -webkit-text-size-adjust: 100%;
                                                -ms-text-size-adjust: 100%;
                                              "
                                              onclick="parent.postMessage('warning', '*');return false"
                                            >
                                              <span
                                                class="deliveryFeedback-options-button deliveryFeedbackImage"
                                                style="
                                                  display: inline-block;
                                                  background: rgb(
                                                    237,
                                                    239,
                                                    239
                                                  );
                                                  text-align: center;
                                                  vertical-align: top;
                                                  border-radius: 8px 8px 0 0;
                                                  width: 100%;
                                                  height: auto;
                                                "
                                              >
                                                <div
                                                  id="deliveryFeedback-unhappy-icon"
                                                  class="deliveryFeedback-icon"
                                                  style="
                                                    background-image: url(https://m.media-amazon.com/images/G/01/x-locale/cs/ship-track/pt2/delivery-feedback/thumbs_down_unpressed.png);
                                                    position: relative;
                                                    top: -8px;
                                                    width: 30px;
                                                    height: 40px;
                                                    display: inline-block;
                                                    background-size: cover;
                                                    background-repeat: no-repeat;
                                                    background-position: center;
                                                    vertical-align: middle;
                                                    margin-top: 16px;
                                                  "
                                                ></div>
                                              </span>
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            class="deliveryFeedbackButtonTd Text"
                                            style="
                                              border-radius: 0 0 8px 8px;
                                              height: 35px;
                                              width: 48%;
                                              display: table-cell;
                                              background: rgb(237, 239, 239);
                                              text-align: center;
                                              vertical-align: top;
                                              border-right: 4px solid
                                                rgb(255, 255, 255);
                                              padding: 0;
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <a
                                              href="https://www.amazon.fr/gp/r.html?C=1KHUJ191ORD17&K=1K05HTWL0FGR3&M=urn:rtn:msg:20231219112254467fc46d6f08441292a01d129f40p0eu&R=2ESRPCPBVCZTB&T=C&U=https%3A%2F%2Fwww.amazon.fr%2Fprogress-tracker%2Fpackage%3F_encoding%3DUTF8%26itemId%3Dlkkorwloqoovoo%26orderId%3D404-3418566-5241108%26packageIndex%3D0%26shipmentId%3D69068633957302%26ingress%3Demail%26intent%3Dfeedback_happy%26ref_%3Dpe_27091421_487056201_pdc_f_h&H=MWXOO1Y1BE4VTQXP5XTDXZ3MXXWA&ref_=pe_27091421_487056201_pdc_f_h"
                                              class="deliveryFeedback-link"
                                              style="
                                                width: 100%;
                                                text-decoration: none;
                                                color: rgb(0, 47, 54);
                                                -webkit-text-size-adjust: 100%;
                                                -ms-text-size-adjust: 100%;
                                              "
                                              onclick="parent.postMessage('warning', '*');return false"
                                            >
                                              <div
                                                class="deliveryFeedback-label"
                                                style="padding-bottom: 10px"
                                              >
                                                Excellent
                                              </div>
                                            </a>
                                          </td>
                                          <td
                                            class="deliveryFeedbackButtonTd Text"
                                            style="
                                              border-radius: 0 0 8px 8px;
                                              height: 35px;
                                              width: 48%;
                                              display: table-cell;
                                              background: rgb(237, 239, 239);
                                              text-align: center;
                                              vertical-align: top;
                                              border-right: 4px solid
                                                rgb(255, 255, 255);
                                              padding: 0;
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <a
                                              href="https://www.amazon.fr/gp/r.html?C=1KHUJ191ORD17&K=1K05HTWL0FGR3&M=urn:rtn:msg:20231219112254467fc46d6f08441292a01d129f40p0eu&R=YLGGPJTKXTEW&T=C&U=https%3A%2F%2Fwww.amazon.fr%2Fprogress-tracker%2Fpackage%3F_encoding%3DUTF8%26itemId%3Dlkkorwloqoovoo%26orderId%3D404-3418566-5241108%26packageIndex%3D0%26shipmentId%3D69068633957302%26ingress%3Demail%26intent%3Dfeedback_unhappy%26ref_%3Dpe_27091421_487056201_pdc_f_s&H=AS0YVGINQRTU9ISTKSG4WWGTEDQA&ref_=pe_27091421_487056201_pdc_f_s"
                                              class="deliveryFeedback-link"
                                              style="
                                                width: 100%;
                                                text-decoration: none;
                                                color: rgb(0, 47, 54);
                                                -webkit-text-size-adjust: 100%;
                                                -ms-text-size-adjust: 100%;
                                              "
                                              onclick="parent.postMessage('warning', '*');return false"
                                            >
                                              <div
                                                class="deliveryFeedback-label"
                                                style="padding-bottom: 10px"
                                              >
                                                M&eacute;diocre
                                              </div>
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            class="paddingT10"
                                            style="
                                              padding-top: 10px !important;
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          ></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table
                                      class="trackPackageButtonContainer"
                                      style="
                                        width: 100%;
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <a
                                              href="https://www.amazon.fr/gp/r.html?C=1KHUJ191ORD17&K=1K05HTWL0FGR3&M=urn:rtn:msg:20231219112254467fc46d6f08441292a01d129f40p0eu&R=21HXLIIVN5NEN&T=C&U=https%3A%2F%2Fwww.amazon.fr%2Fgp%2Fcss%2Fshiptrack%2Fview.html%3Fie%3DUTF8%26orderID%3D404-3418566-5241108%26orderingShipmentId%3D69068633957302%26packageId%3D1%26ref_%3Dpe_27091421_487056201_pdc_pt_track&H=MZ6LA4ZYHVHJFMJZBWAAHT4BLIAA&ref_=pe_27091421_487056201_pdc_pt_track"
                                              style="
                                                color: rgb(0, 46, 54);
                                                text-decoration: none;
                                                -webkit-text-size-adjust: 100%;
                                                -ms-text-size-adjust: 100%;
                                              "
                                              onclick="parent.postMessage('warning', '*');return false"
                                            >
                                              <table
                                                class="trackPackageButtonTable"
                                                style="
                                                  height: 45px !important;
                                                  width: 100%;
                                                  border-collapse: collapse !important;
                                                  -webkit-text-size-adjust: 100%;
                                                  -ms-text-size-adjust: 100%;
                                                "
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align="center"
                                                      valign="middle"
                                                      class="trackPackageButtonText"
                                                      height="45"
                                                      bgcolor="ffa723"
                                                      style="
                                                        line-height: 18px;
                                                        color: rgb(17, 17, 17);
                                                        font-size: 16px;
                                                        text-decoration: none;
                                                        vertical-align: middle;
                                                        box-shadow: 0 2px 0 0
                                                          rgba(84, 84, 84, 0.3);
                                                        width: 100%;
                                                        border-collapse: collapse !important;
                                                        -webkit-text-size-adjust: 100%;
                                                        -ms-text-size-adjust: 100%;
                                                        font-family: Arial,
                                                          sans-serif;
                                                      "
                                                    >
                                                      Suivre votre colis
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--<![endif]-->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              class="card orderSummaryModule"
                              style="
                                background-color: rgb(255, 255, 255);
                                width: 100%;
                                padding-left: 20px;
                                padding-right: 21px;
                                padding-top: 30px;
                                padding-bottom: 30px;
                                border: 0;
                                margin-bottom: 5px;
                                border-collapse: collapse !important;
                                -webkit-text-size-adjust: 100%;
                                -ms-text-size-adjust: 100%;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="cardTD orderSummaryModuleTD"
                                    align="left"
                                    style="
                                      width: 100%;
                                      padding-left: 20px;
                                      padding-right: 20px;
                                      padding-top: 30px;
                                      padding-bottom: 30px;
                                      border-collapse: collapse !important;
                                      -webkit-text-size-adjust: 100%;
                                      -ms-text-size-adjust: 100%;
                                      font-family: Arial, sans-serif;
                                    "
                                  >
                                    <table
                                      class="greetingTable"
                                      style="
                                        font-size: 18px;
                                        font-weight: bold;
                                        line-height: 24px;
                                        color: rgb(0, 46, 54);
                                        margin-bottom: 4px;
                                        width: 100%;
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <span
                                              >Informations sur la
                                              commande</span
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table
                                      class="informationTable"
                                      style="
                                        font-size: 18px;
                                        line-height: 24px;
                                        color: rgb(0, 46, 54);
                                        width: 100%;
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              padding-bottom: 6px;
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <span>1&nbsp;article</span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table
                                      class="instructionTable"
                                      style="
                                        font-size: 18px;
                                        line-height: 18px;
                                        color: rgb(135, 149, 150);
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              padding-bottom: 18px;
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <span
                                              >Commande n&deg;
                                              404-3418566-5241108</span
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table
                                      class="instructionTableReducedPadding"
                                      style="
                                        font-size: 18px;
                                        line-height: 18px;
                                        color: rgb(135, 149, 150);
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              padding-bottom: 2px;
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <span
                                              >Retourner ou faire remplacer des
                                              articles dans
                                              <a
                                                class="returnOrReplaceInstructionLink"
                                                style="
                                                  -webkit-text-size-adjust: 100%;
                                                  -ms-text-size-adjust: 100%;
                                                "
                                                onclick="parent.postMessage('warning', '*');return false"
                                                href="https://www.amazon.fr/gp/r.html?C=1KHUJ191ORD17&K=1K05HTWL0FGR3&M=urn:rtn:msg:20231219112254467fc46d6f08441292a01d129f40p0eu&R=178JQTYKDZ2QG&T=C&U=https%3A%2F%2Fwww.amazon.fr%2Fgp%2Fcss%2Forder-history%3Fie%3DUTF8%26ref_%3Dpe_27091421_487056201_pdc_yo&H=NGVCFM9CMHDSW7NADRAML6MTX1YA&ref_=pe_27091421_487056201_pdc_yo"
                                                >Vos commandes</a
                                              >.</span
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--<![endif]-->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              class="card footer"
                              style="
                                background-color: rgb(255, 255, 255);
                                width: 100%;
                                padding-left: 20px;
                                padding-right: 21px;
                                padding-top: 30px;
                                padding-bottom: 30px;
                                border: 0;
                                margin-bottom: 5px;
                                border-collapse: collapse !important;
                                -webkit-text-size-adjust: 100%;
                                -ms-text-size-adjust: 100%;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="cardTD footerTD"
                                    align="left"
                                    style="
                                      width: 100%;
                                      padding-left: 20px;
                                      padding-right: 20px;
                                      padding-top: 30px;
                                      padding-bottom: 30px;
                                      border-collapse: collapse !important;
                                      -webkit-text-size-adjust: 100%;
                                      -ms-text-size-adjust: 100%;
                                      font-family: Arial, sans-serif;
                                    "
                                  >
                                    <table
                                      class="emailClosing"
                                      style="
                                        font-size: 9px;
                                        line-height: 15px;
                                        color: rgb(134, 134, 134);
                                        border-collapse: collapse !important;
                                        -webkit-text-size-adjust: 100%;
                                        -ms-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style="
                                              border-collapse: collapse !important;
                                              -webkit-text-size-adjust: 100%;
                                              -ms-text-size-adjust: 100%;
                                              font-family: Arial, sans-serif;
                                            "
                                          >
                                            <span
                                              class="emailClosing"
                                              style="
                                                font-size: 9px;
                                                line-height: 15px;
                                                color: rgb(134, 134, 134);
                                              "
                                              >Ce message vous a
                                              &eacute;t&eacute; envoy&eacute;
                                              depuis une adresse e-mail ne
                                              pouvant pas recevoir d'e-mails.
                                              Merci de ne pas y r&eacute;pondre.
                                              <br />
                                              <br />
                                              &copy; 2020 Amazon.com, Inc. ou
                                              ses soci&eacute;t&eacute;s
                                              affili&eacute;es. Tous droits
                                              r&eacute;serv&eacute;s. Amazon,
                                              Amazon.com et le logo Amazon.com
                                              sont des marques
                                              d&eacute;pos&eacute;es
                                              d'Amazon.com, Inc. ou de ses
                                              soci&eacute;t&eacute;s
                                              affili&eacute;es. Amazon.com, 410
                                              Terry Avenue N., Seattle, WA
                                              98109-5210</span
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <style>
      body {
        width: 100% !important;
        height: 100% !important;
        margin: 0;
        padding: 0;
      }
      table,
      table td {
        border-collapse: collapse !important;
      }
      table th {
        margin: 0 !important;
        padding: 0 !important;
        font-weight: normal;
      }

      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      .ReadMsgBody {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }

      td {
        font-family: Arial, sans-serif;
      }

      .appleBody a {
        color: #68440a;
        text-decoration: none;
      }
      .appleFooter a {
        color: #999999;
        text-decoration: none;
      }

      .emailBody {
        width: 375px;
        background-color: #fafafa;
      }

      .emailBodyTD {
        width: 100%;
        padding-left: 17px;
        padding-right: 18px;
        padding-top: 23px;
        padding-bottom: 21px;
      }

      .brandTable {
        margin-bottom: 20px;
        width: 100%;
        min-width: 338px;
      }

      .brandImage {
        width: 130px;
      }

      .emailContainer {
        background-color: #ffffff;
        border-left: 1px solid #d6d6d6;
        border-right: 1px solid #d6d6d6;
        border-bottom: 1px solid #d6d6d6;
        border-top: 2px solid #cecece;
        width: 100%;
      }

      .emailContainerTD {
        padding-top: 25px;
        padding-bottom: 33px;
      }

      .topCard {
        background-color: #ffffff;
        padding-left: 23px;
        padding-right: 23px;
        padding-top: 25px;
        padding-bottom: 33px;
        border-left: 1px solid #d6d6d6;
        border-right: 1px solid #d6d6d6;
        border-bottom: 1px solid #d6d6d6;
        border-top: 2px solid #cecece;
      }

      .centered {
        text-align: center !important;
      }

      .leftAlign {
        text-align: left !important;
      }

      .card {
        background-color: #ffffff;
        width: 100%;
        padding-left: 20px;
        padding-right: 21px;
        padding-top: 30px;
        padding-bottom: 30px;
        border: 0;
        margin-bottom: 5px;
      }

      .cardTD {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 30px;
        padding-bottom: 30px;
      }

      .orderIdLink {
        text-decoration: none;
        color: #868686;
      }

      .grayTopBorder {
        border-top: 2px solid #d5dbdb;
      }

      hr {
        color: #cfcfcf;
        border-color: #cfcfcf;
        background-color: #cfcfcf;
        border: 1px solid #cfcfcf;
        margin-top: 15px;
        margin-bottom: 15px;
      }

      .infoIcon {
        height: 15px;
      }

      .addressLink {
        text-decoration: none;
      }

      .arrivalTime {
        font-size: 22px;
        color: #008577;
        padding-left: 10px;
        padding-right: 20px;
      }

      .greetingTable {
        font-size: 18px;
        font-weight: bold;
        line-height: 24px;
        color: #002e36;
        margin-bottom: 4px;
        width: 100%;
      }

      .informationTable {
        font-size: 18px;
        line-height: 24px;
        color: #002e36;
        width: 100%;
      }

      .informationTable td {
        padding-bottom: 6px;
      }

      .informationTable a {
        color: #002e36;
        text-decoration: none;
      }

      .informationTableReducedPadding {
        font-size: 18px;
        line-height: 24px;
        color: #002e36;
      }

      .informationTableReducedPadding td {
        padding-bottom: 2px;
      }

      .informationTableReducedPadding a {
        color: #002e36;
        text-decoration: none;
      }

      .textWithUnderlinedLink {
        color: #868686;
        text-decoration: none;
        border-bottom: 2px solid #00dffc;
      }

      .textWithUnderlinedColorLink {
        color: #0066c0;
        text-decoration: none;
        border-bottom: 2px solid #0066c0;
      }

      .msoInformationTable {
        font-size: 18px;
        line-height: 24px;
        color: #002e36;
      }

      .msoInformationTable td {
        padding-bottom: 6px;
      }

      .msoInformationTable a {
        color: #002e36;
        text-decoration: underline;
        text-decoration-color: #00dffc;
      }

      .msoInformationTableReducedPadding {
        font-size: 18px;
        line-height: 24px;
        color: #002e36;
      }

      .msoInformationTableReducedPadding td {
        padding-bottom: 2px;
      }

      .msoInformationTableReducedPadding a {
        color: #002e36;
        text-decoration: underline;
        text-decoration-color: #00dffc;
      }

      .orderDetailsTable {
        font-size: 18px;
        line-height: 20px;
        margin: 0 auto;
      }

      .orderDetailsTableLink {
        text-decoration: none;
        color: #008296;
      }

      .orderDetailsTable td {
        padding-bottom: 20px;
      }

      .itemImage img {
        max-height: 84px;
        max-width: 84px;
      }

      .itemTitle {
        padding-left: 26px;
        padding-right: 22px;
      }

      .orderIdTable {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
        margin-bottom: 18px;
      }

      .orderIdTable a {
        text-decoration: none;
        color: #879596;
      }

      .instructionTable {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .instructionTable td {
        padding-bottom: 18px;
      }

      .instructionTableReducedPadding {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .instructionTableReducedPadding td {
        padding-bottom: 2px;
      }

      .instructionTableTopPadding {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .instructionTableTopPadding td {
        padding-top: 10px;
      }

      .msoInstructionTable {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .msoInstructionTable td {
        padding-bottom: 18px;
      }

      .msoInstructionTable a {
        color: #002e36;
        text-decoration: underline;
        text-decoration-color: #00dffc;
      }

      .msoInstructionTableReducedPadding {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .msoInstructionTableReducedPadding td {
        padding-bottom: 2px;
      }

      .msoInstructionTableReducedPadding a {
        color: #002e36;
        text-decoration: underline;
        text-decoration-color: #00dffc;
      }

      .msoInstructionTableTopPadding {
        font-size: 18px;
        line-height: 18px;
        color: #879596;
      }

      .msoInstructionTableTopPadding td {
        padding-top: 10px;
      }

      .msoInstructionTableTopPadding a {
        color: #002e36;
        text-decoration: underline;
        text-decoration-color: #00dffc;
      }

      .surveyLink {
        text-decoration: none;
        color: #008296;
        font-size: 13px;
        line-height: 16px;
      }

      .emailClosing {
        font-size: 9px;
        line-height: 15px;
        color: #868686;
      }

      .trackPackageButtonContainer {
        width: 100%;
      }

      .trackPackageButtonContainer a {
        color: #002e36;
        text-decoration: none;
      }

      .trackPackageButtonTable {
        height: 45px !important;
        width: 100%;
      }

      .trackPackageButtonText {
        line-height: 18px;
        color: #111111;
        font-size: 16px;
        text-decoration: none;
        vertical-align: middle;
        box-shadow: 0 2px 0 0 rgba(84, 84, 84, 0.3);
        width: 100%;
      }

      .trackPackageButtonTextForOutlook {
        color: #111111;
        font-size: 16px;
        text-decoration: none;
        vertical-align: middle;
        box-shadow: 0 2px 0 0 rgba(84, 84, 84, 0.3);
        width: 100%;
      }

      .trackPackageLinkForOutlook {
        color: #111111;
        text-decoration: none;
      }

      .paddingT10 {
        padding-top: 10px !important;
      }

      .paddingT30 {
        padding-top: 30px !important;
      }

      .largeImageContainer {
        width: 100%;
        text-align: center;
      }

      .largeImage {
        border: 0;
      }

      .photoOnDeliveryContainer {
        width: 100%;
      }

      .deliveryFeedbackContainer {
        width: 100%;
        line-height: 1.5;
        border-collapse: collapse;
      }

      .deliveryFeedbackButtonTd {
        width: 48%;
        display: table-cell;
        background: #edefef;
        text-align: center;
        vertical-align: top;
        border-right: 4px solid #fff;
        padding: 0;
      }

      .deliveryFeedback-link {
        width: 100%;
        text-decoration: none;
        color: #002f36;
      }

      .deliveryFeedback-options-button {
        display: inline-block;
        background: #edefef;
        text-align: center;
        vertical-align: top;
        border-radius: 8px 8px 0 0;
      }

      .deliveryFeedback-options-button .deliveryFeedback-icon {
        width: 30px;
        height: 40px;
        display: inline-block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        vertical-align: middle;
        margin-top: 16px;
      }

      .deliveryFeedback-options-button:hover,
      .deliveryFeedback-options-button:focus,
      .deliveryFeedback-options-button:active {
        background: #232f3e;
        color: #eceeee;
        border-radius: 8px 8px 0 0;
      }

      .deliveryFeedback-options-button #deliveryFeedback-unhappy-icon {
        background-image: url("https://m.media-amazon.com/images/G/01/x-locale/cs/ship-track/pt2/delivery-feedback/thumbs_down_unpressed.png");
        position: relative;
        top: -8px;
      }

      .deliveryFeedback-label {
        padding-bottom: 10px;
      }

      .deliveryFeedbackButtonTd.Text {
        border-radius: 0 0 8px 8px;
        height: 35px;
      }

      .deliveryFeedbackButtonTd.Image {
        border-radius: 8px 8px 0 0;
      }

      .deliveryFeedback-options-button .deliveryFeedback-label {
        display: inline-block;
        color: #002f36;
        font-size: 18px;
        line-height: 16px;
        margin-top: 10px;
        padding: 5px 0;
      }

      .deliveryFeedbackButtonTd.Image:hover {
        background: #232f3e;
        border-radius: 8px 8px 0 0;
        color: #eceeee;
      }

      .deliveryFeedback-options-button:hover #deliveryFeedback-happy-icon,
      .deliveryFeedback-options-button:focus #deliveryFeedback-happy-icon,
      .deliveryFeedback-options-button:active #deliveryFeedback-happy-icon {
        background-image: url("https://m.media-amazon.com/images/G/01/x-locale/cs/ship-track/pt2/delivery-feedback/thumbs_up_pressed.png");
      }

      .deliveryFeedback-options-button:hover #deliveryFeedback-unhappy-icon,
      .deliveryFeedback-options-button:focus #deliveryFeedback-unhappy-icon,
      .deliveryFeedback-options-button:active #deliveryFeedback-unhappy-icon {
        background-image: url("https://m.media-amazon.com/images/G/01/x-locale/cs/ship-track/pt2/delivery-feedback/thumbs_down_pressed.png");
      }

      .deliveryFeedback-options-button #deliveryFeedback-happy-icon {
        background-image: url("https://m.media-amazon.com/images/G/01/x-locale/cs/ship-track/pt2/delivery-feedback/thumbs_up_unpressed.png");
      }

      .deliveryFeedbackImage {
        display: block;
        width: 100%;
        height: auto;
      }

      .deliveryFeedbackImageMSO9 {
        width: 220px;
      }

      .productSupportInstructions {
        color: #007185;
        text-decoration: none;
      }

      .productSupportIcon {
        width: 20px;
        height: 20px;
      }

      .alexaContentContainer {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (min-width: 651px) {
        .brandTable {
          margin-bottom: 20px !important;
          width: 100%;
          min-width: 532px;
        }

        .card {
          background-color: #ffffff;
          width: 100%;
          padding-left: 20px;
          padding-right: 21px;
          padding-top: 30px;
          padding-bottom: 30px;
          border: 0;
          margin-bottom: 5px;
        }

        .cardTD {
          width: 100% !important;
          padding-left: 45px !important;
          padding-right: 45px !important;
          padding-top: 30px !important;
          padding-bottom: 30px !important;
        }

        .emailBody {
          width: 640px !important;
          background-color: #fafafa;
        }

        .emailBodyTD {
          width: 100%;
          padding-left: 51px !important;
          padding-right: 57px !important;
          padding-top: 28px !important;
          padding-bottom: 31px !important;
        }

        .emailContainerTD {
          padding-top: 36px !important;
          padding-bottom: 20px !important;
        }

        .greetingTable {
          font-size: 16px !important;
          font-weight: bold;
          line-height: 18px !important;
          color: #002e36;
          margin-bottom: 6px !important;
        }

        .informationTable {
          font-size: 16px !important;
          line-height: 20px !important;
          color: #002e36;
          width: 100%;
        }

        .informationTable td {
          padding-bottom: 8px !important;
        }

        .informationTableReducedPadding {
          font-size: 16px !important;
          line-height: 20px !important;
          color: #002e36;
        }

        .informationTableReducedPadding td {
          padding-bottom: 2px !important;
        }

        .orderDetailsTable {
          font-size: 16px !important;
          line-height: 20px !important;
        }

        .itemTitle {
          padding-right: 24px !important;
          padding-left: 26px !important;
        }

        .orderIdTable {
          font-size: 16px !important;
          line-height: 16px !important;
          color: #879596;
          margin-bottom: 18px !important;
        }

        .instructionTable {
          font-size: 16px !important;
          line-height: 16px !important;
          color: #879596;
        }

        .instructionTable td {
          padding-bottom: 17px !important;
        }

        .instructionTableReducedPadding {
          font-size: 16px !important;
          line-height: 16px !important;
          color: #879596;
        }

        .instructionTableReducedPadding td {
          padding-bottom: 1px !important;
        }

        .instructionTableTopPadding {
          font-size: 16px !important;
          line-height: 16px !important;
          color: #879596;
        }

        .instructionTableTopPadding td {
          padding-top: 10px !important;
        }

        .surveyLink {
          text-decoration: none;
          color: #008296;
          font-size: 11px !important;
          line-height: 16px !important;
        }

        .separatorLine {
          border-left: 0;
          border-right: 0;
          border-top: 0;
          border-bottom: 0;
        }

        .separatorLeft,
        .separatorRight {
          width: 1px !important;
          font-size: 1px;
        }

        .separatorMiddle {
          width: 397px !important;
          min-width: 397px !important;
          background: none;
          border-top: 0px;
          border-right: 0px;
          border-left: 0px;
          border-bottom: 1px solid #879596;
          height: 1px;
          width: 100%;
          margin: 0px 0px 0px 0px;
          font-size: 1px;
        }

        .emailClosing {
          font-size: 9px !important;
          line-height: 15px !important;
          color: #868686;
        }
      }
    </style>
    <img
      width="1"
      height="1"
      src="https://www.amazon.fr/gp/r.html?C=1KHUJ191ORD17&K=1K05HTWL0FGR3&M=urn:rtn:msg:20231219112254467fc46d6f08441292a01d129f40p0eu&R=R3PJZX9AH0D&T=E&U=https%3A%2F%2Fimages-eu.ssl-images-amazon.com%2Fimages%2FG%2F01%2Fnav%2Ftransp.gif&H=TFAFPOKJXRCWPASSPY4B0KFQ4SAA&ref_=pe_27091421_487056201_open"
    />
  </body>
</html>`,
    },
    good: true,
    explanation:
      "C'est une bonne idée de ne pas faire confiance à ce genre de mails, mais il ne faut pas, non plus, pensez qu'ils sont tous illégitimes. Ici, tout va bien, mais pour être certain de ne pas se faire avoir, nous te conseillons de te rendre directement sur les sites marchands pour suivre tes colis et laisser des avis.",
  },
  {
    content: {
      object:
        "Urgent : Problème de sécurité, changez votre mot de passe maintenant !",
      email: "no-reply@instagram.com",
      name: "Instagram",
      date: "2024-01-14T20:15:38.657Z",
      sendby: "instagram-logina.tk",
      signedby: "instagram-logina.tk",
      security: "TLS",
      contentHtml: `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Instagram</title>
    <style>
      :root {
        font-family: Arial;
      }
    </style>
  </head>
  <body>
    <p>
      Cher utilisateur, nous avons détecté une activité suspecte sur votre
      compte. <br />
      Veuillez cliquer sur le lien ci-dessous pour changer votre mot de passe
      immédiatement.
    </p>
    <a href="https://instagram-logina.tk/suspicious-activity/" onclick="parent.postMessage('badLink', '*');return false">https://www.instagram.com/suspicious-activity/</a>
    <p>
      Cordialement,<br />
      L'équipe Instagram
    </p>
  </body>
</html>`,
    },
    good: false,
    explanation:
      "Attention n'entre jamais tes informations de connexion sur un site avec un nom de domaine bizarre. Instagram n'utilise pas instagram-logina.tk mais instagram.com.",
  },
  {
    content: {
      object: "Facture impayée : Action requise immédiatement !",
      email: "no-reply@aws.amazon.com",
      name: "AWS",
      date: "2023-11-30T07:32:47.657Z",
      sendby: "amazonhasfqgdfaere.com",
      signedby: "amazonhasfqgdfaere.com",
      security: "TLS",
      contentHtml: `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Facture impayée</title>
    <style>
      :root {
        font-family: Arial;
      }
    </style>
  </head>
  <body>
    <p>
      Bonjour,<br />
      Votre facture mensuelle est en retard.<br />
      Veuillez cliquer sur le lien ci-dessous pour effectuer le paiement maintenant sous peine de clôture de votre compte et de vos services.<br />
      <a href="https://amazonhasfqgdfaere.com/billing/" onclick="parent.postMessage('badLink', '*');return false">https://aws.amazon.com/billing/</a><br />
      <br />
      Cordialement,<br />
      Les équipes AWS
    </p>
  </body>
</html>`,
    },
    good: false,
    explanation:
      "Attention, ce genre de mail peut être envoyé par certains services, mais prenez garde, le lien contenu dans ce mail ne renvoie pas vers aws.amazon.com mais vers amazonhasfqgdfaere.com. On comprend donc facilement qu'il s'agit de phishing.\nDe plus, si vous vérifiez le détail d'expédition, vous remarquerez que le mail est envoyé depuis amazonhasfqgdfaere.com.\nUne nouvelle fois, nous vous recommandons de vous rendre directement sur le site de vos prestataires de services pour vérifier les potentiels problèmes de facturation.",
  },
  {
    content: {
      object: "Activité suspecte sur votre compte bancaire",
      email: "no-reply@boursobank.fr",
      name: "BoursoBank",
      date: "2023-12-03T15:35:02.657Z",
      sendby: "boursobank-abcder.fr",
      signedby: "boursobank-abcder.fr",
      security: "TLS",
      contentHtml: `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Activité suspecte</title>
    <style>
      :root {
        font-family: Arial;
      }
    </style>
  </head>
  <body>
    <p>
      Bonjour,<br />
      Nous avons remarqué une activité inhabituelle sur votre compte bancaire. Connectez-vous à votre compte en cliquant sur <a href="https://bit.ly/4aW5LY3" onclick="parent.postMessage('badLink', '*');return false">ce lien</a> pour résoudre le problème. Si vous reconnaisez cette activité, validez-la, sinon, changez immédiatement votre mot de passe.
      <br />
      Si vous ne parvenez pas à ouvrir le lien, copiez-coller cela dans votre naviguateur : https://bit.ly/4aW5LY3.
      <br /><br />
      Cordialement,<br />
      L'équipe de BoursoBank reste à votre disposition.
    </p>
  </body>
</html>`,
    },
    good: false,
    explanation:
      "Attention, certains pirates utilisent des liens raccourcis comme Bitly, TinyURL ou des services similaires pour rediriger vers des sites de phishing. Prends garde !",
  },
  {
    content: {
      object: "Votre manifestation se réalisera",
      email: "genie@realdollar.xyz",
      name: "Margaret Z. Cole",
      date: "2023-11-28T21:52:07.657Z",
      sendby: "realdollar.xyz",
      signedby: "realdollar.xyz",
      security: "TLS",
      contentHtml: `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Votre manifestation se réalisera</title>
    <style>
      :root {
        font-family: Arial;
      }
    </style>
  </head>
  <body>
    <p>
      Porter une attention particulière…<br />
      Très bientôt, vous manifesterez une bénédiction financière…<br />
      …d’une manière complètement inattendue.<br />
      Il vous suffit de prononcer cette prière de 20 mots tirée de la Bible.<br />
      Et vous pouvez l'obtenir en allant sur ce lien : <a href="https://www.realdollar.xyz/genie" onclick="parent.postMessage('warning', '*');return false">https://www.realdollar.xyz/genie</a><br />
      <br />
      Meilleurs vœux,<br />
      Margaret Z. Cole<br />
      <br />
      DÉSABONNEMENT : <a href="https://www.realdollar.xyz/unsubscribe/" onclick="parent.postMessage('warning', '*');return false">https://www.realdollar.xyz/unsubscribe/</a><br />
      <br />
      102 SW Emigrant Ave, Pendleton, OR 97801<br />
    </p>
  </body>
</html>`,
    },
    good: true,
    explanation:
      "Tout va bien, il s'agit simplement d'un mail un peu étrange. Votre adresse e-mail a sûrement fuité et été revendue.\nSur des sites qui n'ont pas grande importance pour vous, utilisez une adresse mail \"poubelle\" et conservez votre adresse classique pour les services importants (FAI, électricité, banque...).",
  },
];
/* onclick="parent.postMessage('warning', '*');return false" */
/* <script>for(const a of Array.from(document.querySelectorAll("a"))) a.onclick=(e)=>{e.preventDefault();parent.postMessage("badLink","*")});</script> */
