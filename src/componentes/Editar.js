import React, { Component } from 'react';

class Editar extends Component {

    // crear los refs
    tituloRef = React.createRef();
    entradaRef = React.createRef();

    editarPost = (e) => {
        e.preventDefault();

        // leer los refs
        const post = {
            title   : this.tituloRef.current.value,
            body    : this.entradaRef.current.value,
            userId  : 1,
            id      : this.props.post.id
        }

        // enviar por props o petición de axios
        this.props.editarPost(post);
    }

    cargarFormulario = () => {

        if(!this.props.post) return null;

        const {title, body} = this.props.post;

        return(
            <form onSubmit={this.editarPost} className="col-8">
                <legend className="text-center">Editar Post</legend>
                <div className="form-group">
                    <label>Titulo del Post</label>
                    <input defaultValue={title} type="text" ref={this.tituloRef} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea className="form-control" ref={this.entradaRef}
                    defaultValue={body}/>
                </div>
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        )
    }

    render() { 

        return ( 
            <React.Fragment>
                {this.cargarFormulario()}
            </React.Fragment>
         );
    }
}
 
export default Editar;