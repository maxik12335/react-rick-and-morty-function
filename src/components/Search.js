import { Component } from "react"
import { SearchRadio } from "./SearchRadio"

class Search extends Component {
    state = {
        search: ''
    }

    onSearch = (e) => {
        const searchValue = e.target.value
        this.setState({ search: searchValue })
        this.props.getValueSearch(e.target.value)
    }

    render() {
        const { getStatus, getSpecies } = this.props
        return (
            <div className="search-container">
                <input type="text" placeholder="name" className="search" onChange={this.onSearch} />
                <SearchRadio getStatus={getStatus} getSpecies={getSpecies} />
            </div>
        )
    }
}

export { Search }