import React from 'react'

const CachetSignature = () => {
    return (
        <div className="container-fluid mb-1">
            <div className="row px-3">

                <div className="col-6 border">
                    Cachet de la société obligatoire
                </div>

                <div className="col-6 border">
                    <div className="row">
                        <div className="col-3">
                            <div className="" style={{fontSize: "12px"}}>Code Postal</div>
                        </div>
                        <div className="col-3">
                            <input className="border-dark border-bottom " type="text" style={{ background: "transparent", border: "none",width:"100%", height:"20px",fontSize: "12px" }}/>
                        </div>
                        <div className="col-2">
                            <div className="" style={{fontSize: "15px"}}>Ville</div>
                        </div>
                        <div className="col-4">
                            <input className="border-dark border-bottom " type="text" style={{ background: "transparent", border: "none",width:"100%", height:"20px",fontSize: "12px" }}/>
                        </div>
                    </div>
                    <p>Nom, prénom et signature de la personne habilitée, précédés de la mention « lu et approuvé »</p>
                    
                </div>
            </div>
            
        </div>
    )
}

export default CachetSignature
