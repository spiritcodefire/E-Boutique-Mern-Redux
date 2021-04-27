import React from 'react'
import Pdf from "react-to-pdf";
import ColonneRaisonSocial from './ColonneRaisonSociel'
import Header from './Header'
import TableDuDoc from './TableDuDoc'
import CachetSignature from './CachetSignature'

const ref = React.createRef();

const PdfIndex = () => {
    
return (
    <div className="section-content padding-y " style={{ marginTop:'100px'}}>

        <div className="row justify-content-center">
            <Pdf targetRef={ref} className=""  filename="code-example.pdf">
                {({ toPdf }) => <button className="text-center mb-3 btn btn-warning btn-lg" onClick={toPdf}>Generate Pdf</button>}
            </Pdf>  
        </div>
         
        <div className="row justify-content-md-center">
            <div className="col-6"> 
                <div className="px-1" style={{width:"21cm", height:"29cm"}} ref={ref}>

                    <Header />
                    <ColonneRaisonSocial />
                    <p className="text-danger px-2 text-bolder text-center"> IMPORTANT : les dates de commande et de remise des éléments techniques peuvent varier selon le support publicitaire ou le service choisi. Pour plus de détails, contactez-nous. </p>
                    <p className="text-center mx-1"> Désignation du(des) support(s) et de(s) (l’) galerie (s) virtuelle(s) et du(des) service(s) complémentaire(s) commandé(s).  </p>
                    <TableDuDoc />
                    <p className="text-center px-3" style={{fontSize: "10px"}}>En signant le présent bon de commande, le client déclare avoir pris connaissance et accepter l’intégralité des termes des Conditions Générales de Mise à Disposition du(des) support(s) et de(s) (l’)espace(s) publicitaire(s) et du(des) service(s) complémentaire(s) commandé(s). </p>
                    <CachetSignature />
                    <p className=" text-center mx-3 my-n1" style={{fontSize: "10px"}}>SEAJ SAS - 25 Avenue du 8 Mai 1945, Sarcelles </p>
                    <p className="text-center " style={{fontSize: "8px"}}>CONDITIONS GÉNÉRALES DE VENTE : </p> 
                    <p className="mt-n1 px-3" style={{fontSize: "8px"}}>  Les frais d’exécution de maquette, films ou clichés sont à la charge de l’annonceur. Aucune annulation ne peut être acceptée après signature de cet ordre qui est ferme et non révisable. La date de parution est donnée à titre indicatif et ne peut être garantie avec précision. Le retard ne constitue donc pas un motif d’annulation ou de diminution de prix. Aucune exclusivité ne peut être accordée. En cas de réalisation de l’annonce par nos soins, un bon à tirer vous sera adressé et devra nous être retourné dans les 72 heures par fax ou par mail. En cas de non retour dans ces délais, le bon à tirer sera considéré comme validé. A défaut de l’envoi du texte par l’annonceur dans les délais prévus, le comité de rédaction se réserve le droit de composer lui-même les textes à partir des éléments en sa possession. 
                        Le rédactionnel gratuit étant une prestation offerte, celui-ci ne pourra donner lieu à aucune réclamation de quelque nature que ce soit, une annulation ou à un non paiement. Clause de pénalités de retard : conformément à l’article L 441-6 du code du commerce, des pénalités de retard sont dues à défaut de règlement le jour suivant la date de paiement figurant sur la facture. Le taux d’intérêt de ces pénalités de retard sera celui du taux d’intérêt légal en vigueur majoré de 7 points. Il sera également appliqué une majoration forfaitaire de 50 € pour frais de dossier. Article 700 du NCPC : au titre des frais engagés pour faire valoir ce droit, la société se réserve le droit de réclamer au débiteur une somme sur le fondement de l’article 700 du code de procédure civile. Le soussigné certifie avoir reçu copie du présent ordre d’insertion. Tout litige entre l’annonceur et la Société SEAJ SAS sera soumis à la compétence du Tribunal de commerce de Paris. La présente est soumise au droit français. 
                    </p>

                </div>
            </div>
        </div>
        
    </div>
    )
}

    
export default PdfIndex

