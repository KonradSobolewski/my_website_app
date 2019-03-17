import React,  {Component}  from "react";
import {FormControl, InputLabel, Input, Button} from '@material-ui/core';
import debounce from 'lodash.debounce';
import * as searchActions from '../../redux/actions/searchMenu/searchActions'
import {connect} from 'react-redux';
import classes from './searchMenu.module.scss';
class SearchMenu extends Component{


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userInput !== this.props.userInput){
        }
    }

    userInputHandler = debounce(userInput => {
        this.props.onInputChange(userInput);
    }, 200);

    render() {
        return (
            <div className={classes.searchMenu}>
                <FormControl>
                    <InputLabel htmlFor='search-input'>
                        Repository search...
                    </InputLabel>
                    <Input id='search-input'
                           defaultValue={"KonradSobolewski"}
                           placeholder={"Give me github login"}
                           style={{width: '350px'}}
                           onChange={event => this.userInputHandler(event.target.value)}
                    />
                    <Button />
                </FormControl>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userInput: state.search.userInput
});

const mapDispatchToProps = dispatch => ({
    onInputChange: userInput => dispatch(searchActions.setUserInput(userInput)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);
