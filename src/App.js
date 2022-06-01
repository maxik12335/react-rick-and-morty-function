import { useEffect, useState } from "react";
import Posts from "./components/Posts";
import { Search } from "./components/Search";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";



function App() {
  const [characters, setCharacters] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(json => setCharacters(json.results))
  }, [])

  const getValueSearch = (searchValue) => {
    setSearchValue(searchValue)
  }

  const getStatus = (status) => {
    setStatus(status)
  }

  const getSpecies = (species) => {
    setSpecies(species)
  }

  const filterSearch = (value, filter) => {
    return filter.filter(item => (
      item.name.indexOf(value) > -1
    ))
  }

  const filterStatus = (value, filter) => {
    if (value === 'Alive') {
      return filter.filter(item => (
        item.status === value
      ))
    } else if (value === 'Dead') {
      return filter.filter(item => (
        item.status === value
      ))
    } else if (value === 'unknown') {
      return filter.filter(item => (
        item.status === value
      ))
    } else {
      return filter
    }
  }

  const filterSpecies = (value, filter) => {
    if (value === 'Human') {
      return filter.filter(item => (
        item.species === value
      ))
    } else if (value === 'Alien') {
      return filter.filter(item => (
        item.species === value
      ))
    } else {
      return filter
    }
  }


  const posts = filterSpecies(species, filterStatus(status, filterSearch(searchValue, characters)))
  return (
    <div className="App" >
      <Header />
      <Search getValueSearch={getValueSearch} getStatus={getStatus} getSpecies={getSpecies} />
      {posts ? <Posts posts={posts} /> : <h1>No</h1>}
      <Footer />
    </div>
  );

}

export default App;

// import { Component } from "react";
// import Posts from "./components/Posts";
// import { Search } from "./components/Search";
// import { Footer } from "./layouts/Footer";
// import { Header } from "./layouts/Header";



// class App extends Component {
//   state = {
//     characters: [],
//     searchValue: '',
//     status: '',
//     species: ''
//   }

//   componentDidMount() {
//     fetch('https://rickandmortyapi.com/api/character')
//       .then(response => response.json())
//       .then(json => this.setState({ characters: json.results }))
//   }

//   getValueSearch = (searchValue) => {
//     this.setState({ searchValue })
//   }

//   getStatus = (status) => {
//     this.setState({ status })
//   }

//   getSpecies = (species) => {
//     this.setState({ species })
//   }

//   filterSearch = (value, filter) => {
//     return filter.filter(item => (
//       item.name.indexOf(value) > -1
//     ))
//   }

//   filterStatus = (value, filter) => {
//     if (value === 'Alive') {
//       return filter.filter(item => (
//         item.status === value
//       ))
//     } else if (value === 'Dead') {
//       return filter.filter(item => (
//         item.status === value
//       ))
//     } else if (value === 'unknown') {
//       return filter.filter(item => (
//         item.status === value
//       ))
//     } else {
//       return filter
//     }
//   }

//   filterSpecies = (value, filter) => {
//     if (value === 'Human') {
//       return filter.filter(item => (
//         item.species === value
//       ))
//     } else if (value === 'Alien') {
//       return filter.filter(item => (
//         item.species === value
//       ))
//     } else {
//       return filter
//     }
//   }


//   render() {
//     const { characters, searchValue, status, species } = this.state
//     const posts = this.filterSpecies(species, this.filterStatus(status, this.filterSearch(searchValue, characters)))
//     return (
//       <div className="App" >
//         <Header />
//         <Search getValueSearch={this.getValueSearch} getStatus={this.getStatus} getSpecies={this.getSpecies} />
//         {posts ? <Posts posts={posts} /> : <h1>No</h1>}
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;

