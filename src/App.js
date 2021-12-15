import './App.css';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form, FloatingLabel } from 'react-bootstrap';

import {formSchema} from './Validations/formValidation';


function App() {
  
  const createForm = async (event) =>{
    event.preventDefault();
    
    let formData = {
      name: event.target[0].value,
      adress: event.target[1].value,
      tel: event.target[2].value,
      email: event.target[3].value,
      date: event.target[4].value
    };

    const isValid = await formSchema.isValid(formData);

    if(isValid){
      alert('Mensagem Enviada');
    }else{
      alert('Erro');
    }
  }

  return (
    <div className="App d-flex align-items-center h-100">
      <Container>
        <Form className="w-25 m-auto text-center" onSubmit={createForm}>
            <FloatingLabel controlId="" label="Nome" className="mb-3">
              <Form.Control type="name" placeholder="Nome"/>
            </FloatingLabel>
            
            <FloatingLabel controlId="" label="Endereço" className="mb-3">
              <Form.Control type="adress" placeholder="Endereço"/>
            </FloatingLabel>
            
            <FloatingLabel controlId="" label="Telefone" className="mb-3">
              <Form.Control type="tel" placeholder="Telefone" />
            </FloatingLabel>
            
            <FloatingLabel controlId="" label="E-mail" className="mb-3">
              <Form.Control type="email" placeholder="E-mail" />
            </FloatingLabel>
            
            <FloatingLabel controlId="" label="Data de nascimento" className="mb-3">
              <Form.Control type="date" placeholder="Data de nascimento" />
            </FloatingLabel>

            <Button variant="dark" size="lg" type="submit" className="w-100">
              Enviar
            </Button>
          </Form>
      </Container>
    </div>
  );
}

export default App;
