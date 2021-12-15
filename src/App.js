import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FloatingLabel, Row, Col} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { formSchema } from './Validations/formValidation';


function App() {

  const{register , handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(formSchema)
  });

  const createForm = infos => console.log(infos);

  return (
    <div className="App d-flex align-items-center h-100">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xl={3} sm={6}>
            <Form className="m-auto text-center" onSubmit={handleSubmit(createForm)}>
              <FloatingLabel controlId="" label="Nome" className="mb-3">
                <Form.Control type="text" name="nome" placeholder="(Nome)" {...register("nome")} />
                  <p className='error-message'>{errors.nome?.message}</p>
              </FloatingLabel>

              <FloatingLabel controlId="" label="Endereço" className="mb-3">
                <Form.Control type="endereco" name="endereco" placeholder="Endereço" {...register("endereco")}/>
                  <p className='error-message'>{errors.endereco?.message}</p>
              </FloatingLabel>

              <FloatingLabel controlId="" label="Telefone" className="mb-3">
                <Form.Control className="inputNumber" type="number" name="numero" placeholder="Telefone" {...register("numero")}/>
                  <p className='error-message'>{errors.numero?.message}</p>
              </FloatingLabel>

              <FloatingLabel controlId="" label="E-mail" className="mb-3">
                <Form.Control name="email" placeholder="E-mail" {...register("email")}/>
                  <p className='error-message'>{errors.email?.message}</p>
              </FloatingLabel>

              <FloatingLabel controlId="" label="Data de nascimento" className="mb-3">
                <Form.Control type='date' data-date-format="DD MMMM YYYY" name="data" placeholder="Data de nascimento" {...register("data")}/>
                  <p className='error-message'>{errors.data?.message}</p>
              </FloatingLabel>

              <Button variant="dark" size="lg" type="submit" className="w-100">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
