import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

class Post extends Component {

    confirmarEliminacion = () => {

        const {id} = this.props.info;

        Swal.fire({
            title: 'Estás seguro?',
            text: "Esta acción no se puede deshacer!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                this.props.borrarPost(id)
              Swal.fire(
                'Eliminado!',
                'El post ha sido eliminado.',
                'success'
              )
            }
          })
    }

    render() { 
        
        const {id, title} = this.props.info;

        return ( 
            <tr>
                <td className="text-center col-2 col-sm-1">{id}</td>
                <td className="col-6 col-sm-6">{title}</td>                
                <td className="text-center col-6 col-sm-5">
                    <Link to={`/post/${id}`} className="btn btn-primary col-3 col-sm-3 offset-lg-1 offset-sm-1">Ver</Link>
                    <Link to={`/editar/${id}`} className="btn btn-warning col-3 col-sm-3 offset-lg-1 offset-sm-1">Editar</Link>
                    <button onClick={ this.confirmarEliminacion } type="button" className="col-3 col-sm-3 offset-lg-1 offset-sm-1 btn btn-danger">Borrar</button>
                </td>
            </tr>
         );
    }
}
 
export default Post;