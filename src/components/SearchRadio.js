import { Component } from "react"

class SearchRadio extends Component {

    getStatus = (e) => {
        this.props.getStatus(e.target.value)
    }

    getSpecies = (e) => {
        this.props.getSpecies(e.target.value)
    }


    render() {
        return (
            <div className="search-radio">
                <div className="search-radio__inputs">
                    <label>
                        <input type="radio" name="status" value='Alive' onClick={this.getStatus} /> Жив
                    </label>
                    <label>
                        <input type="radio" name="status" value='Dead' onClick={this.getStatus} /> Мертв
                    </label>
                    <label>
                        <input type="radio" name="status" value='unknown' onClick={this.getStatus} /> Неизвестно
                    </label>
                </div>

                <div className="search-radio__inputs">
                    <label>
                        <input type="radio" name='species' value='Human' onClick={this.getSpecies} /> Человек
                    </label>
                    <label>
                        <input type="radio" name='species' value='Alien' onClick={this.getSpecies} /> Инопланетянин
                    </label>
                </div>
            </div>
        )
    }
}

export { SearchRadio }