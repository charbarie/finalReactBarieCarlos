import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Login.css'

export const Login = () => {
    return (
        <>
            <form className= 'logueo' >
                <NavDropdown className='prueba'title="😎" id="nav-dropdown" >
                <div className='contenedor'>

                <Form.Group className="mb-3 email" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="user" placeholder="Usuario" />
                                <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 pass" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                    <NavDropdown.Divider />
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button variant="primary" type="submit">Entrar</Button>
                </div>
                </NavDropdown>
            </form>
        </>
    );
}


export default Login

