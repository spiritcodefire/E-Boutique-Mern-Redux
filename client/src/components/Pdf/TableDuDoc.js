import React from 'react'
import Table from 'react-bootstrap/Table'
import  './cssPdf.css'

const Input = () => {
    return (
        <>
            <input className="border-dark border-danger " type="text" style={{ background: "transparent", border: "none",width:"100%", height:"100% ",fontSize: "15px" }}/>
        </>
    )
}


const TableDuDoc = () => {
    return (
        <div className="px-4">
            <Table striped bordered hover className="">
                <thead className="" >
                    <tr style={{ height: '35px', lineHeight: '35px' }}>
                        <th >Désignation </th>
                        <th >Quantité</th>
                        <th >Prix unitaire €HT</th>
                        <th >Total €HT</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr className="" style={{ height: '35px', lineHeight: '35px' }}>
                        <td > 
                            <Input />
                        </td>
                        <td> 
                            <Input />
                        </td>
                        <td >
                            <Input />
                        </td>
                        <td >
                            <Input />
                        </td>
                    </tr>

                    <tr style={{ height: '35px', lineHeight: '35px' }}>
                        <td><Input /></td>
                        <td><Input /></td>
                        <td><Input /></td>
                        <td><Input /></td>
                    </tr>
                    
                    <tr style={{ height: '40px', lineHeight: '40px' }}> 
                        <td colSpan="4" className=" ">
                            <div className="row">
                                <div className="col-3 h4">Commentaire</div>
                                <div className="col-9"><Input /></div>
                            </div>
                        </td>
                    </tr>

                    <tr style={{ height: '35px', lineHeight: '35px' }}>
                        <td rowSpan="4" colSpan="2" width="80px"><p >S’il est déjà disponible, joindre sur document séparé le « contenu visuel » du(des) support(s) et de(s) (l’)galerie(s) virtuelle(s) et du(des) service(s) complémentaire(s) commandé(s).</p></td>
                        <td>Total €HT</td>
                        <td><Input /></td>
                    </tr>

                    <tr style={{ height: '35px', lineHeight: '35px' }}>

                        <td>TVA 20%</td>
                        <td><Input /></td>
                        
                    </tr>
                    <tr style={{ height: '35px', lineHeight: '35px' }}>

                        <td>Total €TTC</td>
                        <td><Input /></td>
                        
                    </tr>
                    <tr style={{ height: '35px', lineHeight: '35px' }}>

                        <td>Acompte à la commande</td>
                        <td><Input /></td>
                        
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}

export default TableDuDoc
