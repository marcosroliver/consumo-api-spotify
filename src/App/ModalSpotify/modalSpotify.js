import React,{useState} from'react'
import Modal from 'react-modal'

class ModalSpotify extends React.Component{
 //   const [modalIsOpen, setModalisOpen] = useState(false)
    render(){
        return(
            <div className='ModalSpotify'>

                <Modal isOpen={modalisOpen} onRequestClose>
                    <iframe src="http://localhost:8888"></iframe>
                </Modal>
            </div>
        )
    }
}

export default ModalSpotify