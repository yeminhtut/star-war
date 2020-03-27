import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'appActions'
import SpecieList from '../components/SpecieList'

class SpecieListContainer extends Component {
    render() {
        return <SpecieList {...this.props} />
    }
}

const mapStateToProps = state => ({
    isLoadingGetSpecies: state.species.isLoadingGetSpecies,
    peopleList: state.species.speciesList
})

const mapDispatchToProps = dispatch => ({
    getSpecie: params => {
        dispatch(actions.SPECIES.SPECIES_GET_REQUEST(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SpecieListContainer)
