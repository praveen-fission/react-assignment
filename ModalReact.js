import react, { useState } from "react"
import Modal from "react-modal"

Modal.setAppElement('#root')

function ModalReact() {

    const [isModalOpen, setisModalOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setisModalOpen(true)}>Open modal</button>
            <Modal isOpen={isModalOpen} onRequestClose={() => setisModalOpen(false)} shouldCloseOnOverlayClick={false}
                style={
                    {
                        overlay:{
                            backgroundColor: 'greenyellow'
                        },
                        content:{
                            color : 'red'
                        }
                    }
                }
                >
                <h2>Modal title</h2>
                <p>Modal body</p>
                <div>
                    <button onClick={() => setisModalOpen(false)}>Close modal</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalReact