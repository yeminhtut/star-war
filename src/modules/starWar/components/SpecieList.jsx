import React, { useState, useEffect } from 'react'
import { array, bool, func } from 'prop-types'
import { Chart } from 'react-google-charts'
import AsyncPaginate from 'react-select-async-paginate'
import loadOptions from './loadOptions'
import { Spin } from 'components'

const SpecieList = props => {
    const { isLoadingGetSpecies, peopleList, getSpecie } = props
    const [specie, onChange] = useState(null)

    useEffect(() => {
        if (specie) {
            getSpecie({ people: specie.people })
        }
    }, [specie])

    const modData = [
        ['height', 'mass', { role: 'tooltip', type: 'string', p: { html: true } }],
        ...peopleList.map(quest => [
            quest.mass,
            quest.height,
            `<div class="species-tooltip"><span>${quest.name}<span><br/><span>${quest.gender}</span></div>`
        ])
    ]
    return (
        <div className='container'>
            <div className='species-title'>Star War Universe</div>
            <div className='species-content'>
                <div className='species-selector'>
                    <AsyncPaginate
                        defaultOptions
                        loadOptions={loadOptions}
                        onChange={onChange}
                        placeholder='Pick a species'
                        value={specie}
                    />
                </div>
                <div className='species-graph'>
                    <div className='species-spinner'>{isLoadingGetSpecies && <Spin spinning />}</div>
                    {peopleList.length > 0 && (
                        <Chart
                            chartType='ScatterChart'
                            data={modData}
                            height={'400px'}
                            loader={<Spin spinning />}
                            options={{
                                title: 'Mass vs. Height comparison',
                                hAxis: { title: 'Height', minValue: 0 },
                                vAxis: { title: 'Mass', minValue: 0 },
                                legend: 'none',
                                colors: ['#4285f4'],
                                pointSize: 10,
                                tooltip: { isHtml: true, trigger: 'visible' }
                            }}
                            rootProps={{ 'data-testid': '1' }}
                            width={'100%'}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

SpecieList.propTypes = {
    getSpecie: func,
    isLoadingGetSpecies: bool,
    peopleList: array
}

export default SpecieList
