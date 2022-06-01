import { useState } from "react"
import { SearchRadio } from "./SearchRadio"

function Search(props) {
    const [search, setSearch] = useState('')

    const onSearch = (e) => {
        const searchValue = e.target.value
        setSearch(searchValue)
        props.getValueSearch(e.target.value)
    }

    const { getStatus, getSpecies } = props
    return (
        <div className="search-container">
            <input type="text" placeholder="name" className="search" onChange={onSearch} />
            <SearchRadio getStatus={getStatus} getSpecies={getSpecies} />
        </div>
    )
}

export { Search }



// import { Component } from "react"
// import { SearchRadio } from "./SearchRadio"

// class Search extends Component {
//     state = {
//         search: ''
//     }

//     onSearch = (e) => {
//         const searchValue = e.target.value
//         this.setState({ search: searchValue })
//         this.props.getValueSearch(e.target.value)
//     }

//     render() {
//         const { getStatus, getSpecies } = this.props
//         return (
//             <div className="search-container">
//                 <input type="text" placeholder="name" className="search" onChange={this.onSearch} />
//                 <SearchRadio getStatus={getStatus} getSpecies={getSpecies} />
//             </div>
//         )
//     }
// }

// export { Search }