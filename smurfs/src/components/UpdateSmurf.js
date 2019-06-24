import React from 'react';






class UpdateSmurf extends React.Component{
    state = {
        name:this.props.smurf.name,
        age:this.props.smurf.age,
        height:this.props.smurf.height
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value.trim()
        });
    }

    editSmurf = (e) =>{
        e.preventDefault();
        const id = this.props.smurf.id;
        if(this.state.name !== '' || this.state.age !== '' || this.state.height !== '' ){
            this.props.update(id, this.state);
            this.props.props.history.push(`/smurfs/${id}`);
        }
    }


    render(){
        return (
    

            <div>

                <form onSubmit={this.editSmurf}>
                    <input 
                        type="text"
                        placeholder={this.props.smurf.name}
                        name="name"
                        onChange={this.changeHandler}
                        value={this.state.name}
                    />

                    <input 
                        type="text"
                        placeholder={this.props.smurf.age}
                        name="age"
                        onChange={this.changeHandler}
                        value={this.state.age}
                    />

                    <input 
                        type="text"
                        placeholder={this.props.smurf.height}
                        name="height"
                        onChange={this.changeHandler}
                        value={this.state.height}
                    />
                    <button>Update</button>
                </form>
            </div>
        )
    }
}


export default UpdateSmurf;