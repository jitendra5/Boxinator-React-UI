/**
 * Created by admin on 1/29/2017.
 */
import React from "react";
import reactCSS from 'reactcss';
import SketchPicker from 'react-color';
export default class AddBox extends React.Component{
    constructor() {
        super();
        this.msg = "View-A(AddBox)";
        this.boxName= "Name";
        this.boxWeight = "Weight";
        this.boxColor = "Box Color";
        this.boxCountry = "Destination Country";

        }
    state = {
        displayColorPicker: false,
        inputColor:"",
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1'
        }
    };
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb });
        this.setState({inputColor:color.hex});

    };
     static handleChange(e){
        const name=e.target.value;
        console.log(name);
    }
        render(){
            const styles = reactCSS({
                'default': {
                    color: {
                        width: '36px',
                        height: '14px',
                        borderRadius: '2px',
                        background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`
                    },
                    swatch: {
                        padding: '5px',
                        background: '#fff',
                        borderRadius: '1px',
                        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                          display: 'inline-block',
                        cursor: 'pointer'
                    },
                    popover: {
                        position: 'absolute',
                        zIndex: '2'
                    },
                    cover: {
                        position: 'fixed',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0px'
                    }
                }
            });
        return (
            <form>

                <h1>{this.msg}</h1>
                <h2>{this.boxName}</h2>
                <input onChange={AddBox.handleChange.bind(this)}/>
                <h2>{this.boxWeight}</h2>
                <input/>
                    <h2>{this.boxColor}</h2>
                        <div>
                                <input id="colorPicker" placeholder="click to show color picker" value ={ this.state.inputColor} onClick={ this.handleClick }/>

                                { this.state.displayColorPicker ? <div style={ styles.popover }>
                                    <div style={ styles.cover } onClick={ this.handleClose }/>
                                    <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
                                </div> : null }

                            </div>
                    <h2>{this.boxCountry}</h2>
                    <select>
                        <option value="Sweden" defaultValue>Sweden</option>
                        <option value="China">China</option>
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                    </select>
                <br/><br/>
                    <button type="button" class="btn btn-success">Add Box</button>
            </form>
        );
    }
}