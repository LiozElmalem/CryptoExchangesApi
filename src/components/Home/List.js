import React from 'react';
import ReactDragListView from 'react-drag-listview';
import './Styles/List.css';

class List extends React.Component {

    constructor(props) {
        super(props);

        this.classes = [
            'List',
            'container',
            'list-group',
            'justify-content-center'
        ].join(' ');

        this.itemConfig = {
            classes:
                ['row-12',
                    'list-group-item']
                    .join(' '),
            style: {
                'fontSize': 'medium',
                ':img': {
                    size: 'large'
                },
                ':hover': {
                    backgroundColor: '#333',
                    color: '#1abc9c'
                }
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.items !== this.props.items ? true : false;
    }

    onClickHandler = async (websiteUrl) => {
        await window.open(websiteUrl)
    }

    render() {

        const that = this;
        const dragProps = {
            onDragEnd(fromIndex, toIndex) {
                const data = [...that.props.items];
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                that.props.callback(data);
            },
            nodeSelector: 'li',
            handleSelector: 'li'
        };

        return (
            <ReactDragListView {...dragProps}>
                <ol className={this.classes}>
                    {
                        this.props.items.map((item, index) => {
                            return (
                                <li
                                    style={this.itemConfig.style}
                                    onClick={() => this.onClickHandler(item.website)}
                                    key={index}
                                    className={this.itemConfig.classes}
                                >
                                    {
                                        <React.Fragment>
                                            <img src={item.icon} alt="Exchange" />
                                            <p alt={item.icon}>{item.name}</p>
                                        </React.Fragment>
                                    }
                                </li>
                            )
                        })
                    }
                </ol>
            </ReactDragListView>
        );
    }
}

export default List;