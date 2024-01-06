import { useContext, useEffect, useState } from 'react'
import { Button, FloatingLabel } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { CartContext } from '../../context'

export function BuyerForm() {

    const { buyer, setBuyerData, sendOrder } = useContext(CartContext)

    const [email1, setEmail1] = useState(buyer.email)
    const [email2, setEmail2] = useState(buyer.email)
    const [emailsInvalid, setEmailsInvalid] = useState(email1 !== email2)

    const handleChangeName = (e) => {
        setBuyerData({ name: e.target.value })
    }

    const handleChangeEmail1 = (e) => {
        setEmail1(e.target.value)
    }

    const handleChangeEmail2 = (e) => {
        setEmail2(e.target.value)
    }

    const handleChangePhone = (e) => {
        setBuyerData({ phone: e.target.value })
    }

    useEffect(() => {
        setEmailsInvalid(email1 !== email2)
        if (email1 === email2) {
            setBuyerData({ email: email1 })
        }
    }, [email1, email2])

    const submit = () => {
        if (!emailsInvalid) {
            sendOrder()
        }
    }

    return (
        <Form>
            <FloatingLabel
                controlId="floatingName"
                label="Nombre y apellido"
                className='mb-3'
            >
                <Form.Control type="text" placeholder="Nombre y apellido" onChange={handleChangeName} required value={buyer.name} />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Correo electrónico"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="usuario@ejemplo.com" onChange={handleChangeEmail1} required isInvalid={emailsInvalid} value={email1} />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Mismo correo electrónico"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="usuario@ejemplo.com" onChange={handleChangeEmail2} required isInvalid={emailsInvalid} value={email2} />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Teléfono"
                className="mb-3"
            >
                <Form.Control type="phone" placeholder="" onChange={handleChangePhone} required value={buyer.phone} />
            </FloatingLabel>

            <Button variant="primary" type="button" onClick={submit}>
                Realizar compra
            </Button>
        </Form>
    )
}