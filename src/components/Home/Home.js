import React from 'react';
import './Styles/Home.css'
import { fetchData, sortBy } from '../../utils/Utils';
import List from './List';
import Header from './Header/Header';

class Home extends React.Component {

    state = {
        items: [],
        showItems: []
    }

    componentDidMount = async () => {

        const itemsQuery = '/v1/exchanges';

        await fetchData(itemsQuery)
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    items: result
                })
            });

        const iconsQuery = '/v1/exchanges/icons/32';

        await fetchData(iconsQuery)
            .then((response) => response.json())
            .then((result) => {
                const items = this.state.items.map((item, index) => {
                    const icon = result.find((r) => r.exchange_id === item.exchange_id);
                    item.icon = icon ? icon.url : null;
                    return item;
                })
                this.setState({
                    items: sortBy(items, 'volume_1mth_usd')
                })
            });

        this.setState({
            showItems: this.state.items
        });

    }

    searchItems = (event) => {
        if (
            !event.target.value ||
            event.target.value === " " ||
            event.target.value === "" ||
            event.target.value === (null || undefined)
        )
            this.setState({ items: [...this.state.items] });
        else {
            let items = [];
            items = this.state.items.filter(
                item =>
                    item["name"]
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase())
            );
            this.setState({ showItems: items });
        }
    }

    render() {
        return (
            <div className={this.props.className + " Home"}>
                <Header />
                <input
                    id="search"
                    placeholder="Search..."
                    onChange={this.searchItems}
                    type="text" />
                <button
                    id="search-button"
                    className="btn btn-success"
                    style={{
                        ':hover': {
                            backgroundColor: '#333'
                        }
                    }}>
                    GO
                </button>
                <List
                    items={this.state.showItems}
                    callback={(items) => {
                        this.setState({ showItems: items })
                    }} />
            </div>
        );
    }
}

export default Home;