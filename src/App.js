import './App.css';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form, FloatingLabel } from 'react-bootstrap';

let schema = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  idade: yup.number().required().positive().integer(),
  website: yup.string().url()
});

function App() {
  
  return (
    <div className="App d-flex align-items-center h-100">
      <Container>
        <Form className="w-25 m-auto text-center">
            <FloatingLabel controlId="floatingInput" label="Nome" className="mb-3">
                <Form.Control type="name" placeholder="Nome"/>
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingInput" label="Endereço" className="mb-3">
              <Form.Control type="adress" placeholder="Endereço" />
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingInput" label="Telefone" className="mb-3">
              <Form.Control type="tel" placeholder="Telefone" />
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingInput" label="E-mail" className="mb-3">
              <Form.Control type="email" placeholder="E-mail" />
            </FloatingLabel>
            
            <FloatingLabel controlId="floatingInput" label="Data de nascimento" className="mb-3">
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
