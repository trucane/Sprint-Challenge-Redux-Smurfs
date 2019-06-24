import React from "react";
import {connect} from 'react-redux';
import {getSmurfs, updateSmurf} from '../actions';
import {Route, Link} from 'react-router-dom';
import UpdateSmurf from './UpdateSmurf';

class Smurf extends React.Component {

    componentDidMount(){
        this.props.getSmurfs()
    }
    

    render(){
        const id = this.props.match.params.id;
        const smurf = this.props.smurfs.find((item) => `${item.id}` === id)

        if(!smurf){
          return <h2> We dont have this smurf</h2>
        }
        return(

            <div>
                <Route path="/smurfs/:id/edit" render={props => <UpdateSmurf props={props} update={this.props.updateSmurf} smurf={smurf}/>} />
                <Link to={`/smurfs/${id}/edit`} ><h4>Edit</h4> </Link>
                <div>{smurf.name}</div>
                <div>{smurf.age}</div>
                <div>{smurf.height}</div>
            </div>
        ) 
    }
};

const mapStateToProps = ({smurfs}) =>({
    smurfs
});

export default connect(
    mapStateToProps, {getSmurfs, updateSmurf}
)(Smurf);