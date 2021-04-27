import React from 'react';
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
import ButtonAddCart from '../ButtonAddCart/ButtonAddCart'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function FooModalEtreRappele(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4 className="m-4">Vous souhaitez être rappelé ?</h4>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Your Name</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Votre Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Your Phone Number</span>
                </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

            <button type="button" class="my-3 btn btn-outline-success btn-lg btn-block" >Send</button>

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function FooModalProposePrice(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4 className="m-4">Proposez un prix ?</h4>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Your Name</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Votre Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Your Phone Number</span>
                </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

            <button type="button" class="my-3 btn btn-outline-success btn-lg btn-block" >Send</button>

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function FooPosezQuestion(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4 className="m-4">Posez une question ?</h4>
            
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Your Name</span>
                </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Votre Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Your Phone Number</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Your question</span>
                </div>
                <textarea className="form-control" aria-label="With textarea"></textarea>

                <button type="button" class="my-3 btn btn-outline-success btn-lg btn-block" >Send</button>

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function ProductScreen(props) {

    const [modalShopRappel, setmodalShopRappel] = React.useState(false); // relatif à mon modal
    const [modalProposePrice, setmodalProposePrice] = React.useState(false); // relatif à mon modal
    const [modalPosezQuestion, setmodalPosezQuestion] = React.useState(false); // relatif à mon modal
    
    const product = props.match.params.id;
    const state = useSelector((state) => ({ ...state.products }));
    const { items, pageIndex } = state
    const mySelection = items[pageIndex].find(x => x.id == product)

    return (
    <div className='section-content padding-y' style={{ marginTop:'100px'}}> 

        <div className="container">
            <div className="row justify-content-center">

                <div className ='col-8 p-4'>
                    <img src={mySelection.image} className="img-fluid" alt="" />
                </div>

                <div className='col-4 border mt-4'> 
 
                    <h3>
                            {mySelection.name}{" "}{mySelection.prenomArtist}
                    </h3>
                    
                    <h6>
                            {mySelection.descriptionCourteDeLoeuvre}
                    </h6>
                    
                    <h2> 
                    {mySelection.price} €
                    </h2>

                    <div>
                        Catégorie :  {mySelection.category}
                    </div>
                    
                    <div>
                        <ButtonAddCart {...mySelection} />
                    </div>
                    <button type="button" class="my-3 btn btn-bordeau btn-lg btn-block" onClick={() => setmodalProposePrice(true)}>PROPOSER UN PRIX</button>
                    <FooModalProposePrice show={modalProposePrice} onHide={() => setmodalProposePrice(false)}/>

                    <button type="button" class="my-3 mr-4 btn btn-outline-bordeau" onClick={() => setmodalShopRappel(true)}><p className="h6">ÊTRE RAPPELE</p></button>
                    <FooModalEtreRappele show={modalShopRappel} onHide={() => setmodalShopRappel(false)}/>

                    <button type="button" class="my-3 btn btn-outline-bordeau" onClick={() => setmodalPosezQuestion(true)}><p className="h6">POSER UNE QUESTION ?</p></button>
                    <FooPosezQuestion show={modalPosezQuestion} onHide={() => setmodalPosezQuestion(false)}/>
                    
                    <div>
                        <p>Frais de livraison offerts (Europe).</p>
                        <p className="mt-n3">Retour gratuit 14 jours</p>
                    </div>

                    <div className="container-fluid mt-4">

                        <div className="row">

                            <div className="col-6 ">

                                <div className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                                        <path d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                                    </svg>
                                    <p style={{fontSize: "0.9rem"}}>Oeuvre original avec certificat</p>
                                </div>
                               
                            </div>

                            <div className="col-6 ">
                                <div className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                    </svg>
                                    <p style={{fontSize: "0.9rem"}}>Livraison sécurisée sous 7 jours en moyenne</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <h5 className="mt-4">FICHE TECHNIQUE</h5>
                    <hr />
                    <div className="clearfix">
                        <div className="float-left">Technique</div>
                        <div className="float-right">{mySelection.techniqueOeuvre}</div>
                    </div>
                    <hr />
                    <div className="clearfix">
                        <div className="float-left">Support</div>
                        <div className="float-right">{mySelection.supportOeuvre}</div>
                    </div>
                    <hr />
                    <div className="clearfix">
                        <div className="float-left">Dimension</div>
                        <div className="float-right">{mySelection.dimension}</div>
                    </div>
                    <hr />
                    <div className="clearfix">
                        <div className="float-left">Encadrement</div>
                        <div className="float-right">{mySelection.encadrementOeuvre}</div>
                    </div>
                    <hr />
                    <div className="mb-4">
                        <div className="">{mySelection.descriptionCourteDeLoeuvre}</div>
                    </div>
                   

                </div>

            </div>
        </div>

    </div>
    )
}


export default ProductScreen;