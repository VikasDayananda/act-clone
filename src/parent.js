import React from 'react';
import Main from './main'
import Modal from 'react-modal';
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
class parent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            modalIsOpen: false,
            child:{}
        }
        this.rehook = this.rehook.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onchange = this.onchange.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    rehook(state) {
        let jasper = {...state};
        this.setState({modalIsOpen:true,child:jasper})
       // localStorage.setItem('child', JSON.stringify(state));
        //window.open('/child', '_blank');

    }
    redirect() {
        console.log(this.state)
        //this.setState({modalIsOpen:true,child:state})
        localStorage.setItem('child', JSON.stringify(this.state.child));
        window.open('/child', '_blank');

    }


    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {

    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }
    onchange(e){
        let child = {...this.state.child};
        child.one=e.target.value;
        this.setState({child:child})
    }
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >


                    <div>
                        <input name={"one"} type={"text"} value={this.state.child.one} onChange={this.onchange}/> <br/>

                        <button onClick={this.redirect}>Rehook</button>
                    </div>
                </Modal>
            <Main rehook={this.rehook} />
            </div>
        );
    }
}


export default parent;
