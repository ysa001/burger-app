import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/auxiliary';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        constructor(props){
            super(props);
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null})
                return request;
            })

            this.resInterceptor = axios.interceptors.response.use(req  => req, error => {
                console.log(error)
                this.setState({error: error})
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        componentDidMount() {
            
        }
        

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            
            
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                         {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );

        }
    }

}

export default withErrorHandler;