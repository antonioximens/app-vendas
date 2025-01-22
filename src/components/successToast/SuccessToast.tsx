// src/components/SuccessToast.tsx

import { Toast, ToastBody, Button, Fade } from 'react-bootstrap';

// src/components/SuccessToast.tsx
const SuccessToast = (props: {
  toastIsOpen: boolean
  setToastIsOpen: (isOpen: boolean) => void
}) => {
  return (
    <Toast
      className="bg-success text-white fixed-bottom ms-auto me-4 mb-4"
      show={props.toastIsOpen}
      onClose={() => props.setToastIsOpen(false)} // Gerencia o fechamento
      transition={Fade} // Mantém a animação de fade
    >
      <ToastBody className="d-flex justify-content-between">
        Produto adicionado ao carrinho.
        <Button
          variant="close" // Usando o variant para o botão de fechar
          className="btn-close-white"
          onClick={() => props.setToastIsOpen(false)} // Fecha o Toast
        />
      </ToastBody>
    </Toast>
  )
}

export default SuccessToast
