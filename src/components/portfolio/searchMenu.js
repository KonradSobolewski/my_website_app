import React,  {Component}  from "react";
import {FormControl, InputLabel, Input, Fab} from '@material-ui/core';
import debounce from 'lodash.debounce';
import * as searchActions from '../../redux/actions/searchMenu/searchActions'
import {connect} from 'react-redux';
import classes from './searchMenu.module.scss';
import Search from '@material-ui/icons/Search';
import TextService from '../../config/text.service'

class SearchMenu extends Component{

    componentDidMount() {
      this.searchForRepos();
    }

    userInputHandler = debounce(userInput => {
        this.props.onInputChange(userInput);
    }, 200);

    searchForRepos = () => {
        this.props.searchRepos(this.props.userInput);
    };

    render() {
        return (
            <div className={classes.searchMenu}>
                <FormControl>
                    <InputLabel htmlFor='search-input'>
                        {TextService.text.searchRepo}
                    </InputLabel>
                    <Input id='search-input'
                           defaultValue={"KonradSobolewski"}
                           placeholder={TextService.text.searchPlaceholder}
                           className={classes.input}
                           onChange={event => this.userInputHandler(event.target.value)}
                    />
                </FormControl>
                <div className={classes.fab}>
                    <Fab
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="add"
                        onClick={() => this.searchForRepos()}
                    >
                        {TextService.text.search}
                        <Search className={classes.sendIcon} />
                    </Fab>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userInput: state.search.userInput
});

const mapDispatchToProps = dispatch => ({
    onInputChange: userInput => dispatch(searchActions.setUserInput(userInput)),
    searchRepos: userInput => dispatch(searchActions.searchRepos(userInput))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);
