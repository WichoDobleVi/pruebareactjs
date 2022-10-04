import React from 'react'
import Card from 'react-bootstrap/Card';
import { Formulario } from './Formulario';

export default function Form() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '25px'
    }}>

      <Card style={{borderRadius: '1px', boxShadow: '1px 2px 2px 1px rgba(0, 0, 0, 0.1)'}}>
          <Card.Title>
            <div className='d-flex justify-space-between'>
              <div>
              <h4>OPERAM</h4>
              
              Formulario de registro de solicitudes.
              </div>
              <div>
                Regresar al menú
              </div>

            </div>
          </Card.Title>
          <Card.Body>

            <Formulario/>

          </Card.Body>


      </Card>

    </div>
  )
}
