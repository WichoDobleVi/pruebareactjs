import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Formik, Form as Formi} from 'formik'

const generos = [ 'Hombre', 'Mujer', 'No identificado' ];
 

const initValues = {
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  cel: '',
  email: '',
  genero: '',
  tel: '',
  rfc: '',
  ine: '',
  no_empleado: '',
}


export const Formulario = () =>{
  const [selectedServidorJudicial, setSelectedServidorJudicial] = useState(false);
  const [searchTypeSelected, setSearchType] = useState('NIP');
  const [initialValues, setInitialValues] = useState(initValues);
  const [nipCurp, setNipCurp] = useState({nip: '', curp: ''});

  return (
    <>
        <div style={{
          padding: '15px',
          backgroundColor: '#f2f2f2',
          fontSize: '15px',
          fontWeight: 'bold',
        }}> 
          Si ya realizó anteriormente un registro, puede usar la opción de "Buscar Usuario", por NIP o por CURP
        </div>
        <div style={{color: 'darkred', padding: '15px'}}>Los campos marcados con (*) son obligatorios.</div>
        
        <div>
          <Form onSubmit={(e)=> {e.preventDefault()}}>
            <Row>
                <Col>
                  <Form.Check
                      inline
                      checked={searchTypeSelected === 'NIP'}
                      onChange={(e) => setSearchType(e.target.id)}
                      type="radio" 
                      name='group1'
                      label="Buscar por NIP"
                      id='NIP'
                  />
                <Form.Group className="mb-3 pt-3" controlId="formName">
                  <Form.Label>NIP</Form.Label>
                  <Form.Control 
                          type="text" 
                          placeholder="NIP" 
                          required={searchTypeSelected === 'NIP'}
                          value={nipCurp.nip}
                          onChange={(e) => setNipCurp({...nipCurp, nip: e.target.value})}
                          />
                </Form.Group>
                </Col>
                <Col>
                  <Form.Check 
                      inline
                      type="radio" 
                      name='group1'
                      label="Buscar por CURP"
                      id='CURP'
                      checked={searchTypeSelected === 'CURP'}
                      onChange={(e) => setSearchType(e.target.id)}
                    />
                  <Form.Group className="mb-3 pt-3" controlId="formName">
                    <Form.Label>CURP</Form.Label>
                    <Form.Control 
                            type="text" 
                            required={searchTypeSelected === 'CURP'}
                            value={nipCurp.curp}
                            onChange={(e) => setNipCurp({...nipCurp, curp: e.target.value})}
                            placeholder="CURP" />
                  </Form.Group>
                  <div className='d-flex justify-content-end'>
                    <Button variant="primary" type="submit">Buscar</Button>
                  </div>
                </Col>
            </Row>

          </Form>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors = {};
            if (!values.nombre) {
              errors.nombre = 'Requerido';
            }
            if (!values.apellidoPaterno) {
              errors.apellidoPaterno = 'Requerido';
            }
            if (!values.apellidoMaterno) {
              errors.apellidoMaterno = 'Requerido';
            }
            if (!values.cel) {
              errors.cel = 'Requerido';
            }
            if (!values.email) {
              errors.email = 'Requerido';
            }
            if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){{
              errors.email = 'Correo inválido';
            }
            if (!values.genero) {
              errors.genero = 'Requerido';
            }
            if (!values.tel) {
              errors.tel = 'Requerido';
            }
            if (!values.rfc) {
              errors.rfc = 'Requerido';
            }
            if (!values.ine) {
              errors.ine = 'Requerido';
            }
            if (!values.no_empleado) {
              errors.no_empleado = 'Requerido';
            }
            return errors;
           }}
          }
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {
            ({values, handleChange, handleSubmit, errors, resetForm, isSubmitting}) => (

              <Formi onChange={(e) => console.log(values)}>

                <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Nombre<span style={{color: 'darkred'}}>(*)</span></Form.Label>
                        <Form.Control type="text" required placeholder="Nombre" name='nombre' value={values.nombre} onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Apellido Materno<span style={{color: 'darkred'}}>(*)</span></Form.Label>
                        <Form.Control type="text" required placeholder="Apellido Materno" name='apellidoMaterno' value={values.apellidoMaterno} onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="number" placeholder="Celular" name='cel' value={values.cel} onChange={handleChange} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo Electrónico" name='email' value={values.email} onChange={handleChange} />
                      </Form.Group>

                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formName">
                          <Form.Label>Apellido Paterno<span style={{color: 'darkred'}}>(*)</span></Form.Label>
                          <Form.Control type="text" placeholder="Apellido Paterno" required name='apellidoPaterno' value={values.apellidoPaterno} onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formName">
                          <Form.Label>Genero<span style={{color: 'darkred'}}>(*)</span></Form.Label>
                          <Form.Select name='genero' required value={values.genero} onChange={handleChange}>
                            <option value=''>Seleccionar</option>
                            {generos.map((genero, index) => <option key={index} value={genero}>{genero}</option>)}

                          </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="number" placeholder="Telefono" name='tel' value={values.tel} onChange={handleChange}/>
                      </Form.Group>
                    </Col>
                </Row>
                <Row>
                  <Col> 
                    <Form.Group className="mb-3" controlId="formName">
                          <Form.Label>RFC</Form.Label>
                          <Form.Control type="text" placeholder="RFC" name='rfc' value={values.rfc} onChange={handleChange}/>
                    </Form.Group>
                  </Col>
                  <Col> 
                    <Form.Group className="mb-3" controlId="formName">
                          <Form.Label>Clave de Elector</Form.Label>
                          <Form.Control type="text" placeholder="Clave de Elector" name='ine' value={values.ine} onChange={handleChange}/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Check
                      value={selectedServidorJudicial}
                      onChange={() => setSelectedServidorJudicial(!selectedServidorJudicial)}
                      type='switch'
                      id='custom-switch'
                      label='Servidor Judicial'
                    />
                  </Col>
                </Row>
                {

                  selectedServidorJudicial && (
                    <Row>
                      <Col md={6}>
                          <Form.Group className="mb-3" controlId="formName">
                              <Form.Label>No. de Empleado<span style={{color: 'darkred'}}>(*)</span></Form.Label>
                              <Form.Control required={selectedServidorJudicial} type="text" placeholder="No. de Empleado" name='no_empleado' value={values.no_empleado} onChange={handleChange} />
                          </Form.Group>
                      </Col>

                    </Row>
                  )
                }

                <Row className="justify-content-end pt-2" >
                  <Col className="d-flex justify-content-end">
                  <Button variant="primary" className='m-2' type="submit" disabled={isSubmitting}>Siguiente</Button>
                  <Button variant="secondary" className='m-2' onClick={() => {
                    resetForm(initialValues);
                    setInitialValues(initValues);
                    setNipCurp({nip: '', curp: ''});
                  }}>Limpiar</Button>
                  </Col>
                </Row>
              </Formi>
            )
          }
        </Formik>

        </div>
    </>
  )
}
