import React from 'react'
import ScrollableFeed from 'react-scrollable-feed';
import Post from '../components/feed/Post.js'

class Jobs extends React.Component{
    state = {
        isAtBottom: true,
        items: [
            'Item 1', 'Item 2','Big'
        ],
        interval: undefined,
      };
    addItem() {
        this.setState(prevState => ({
          items: [...prevState.items, 'bruh']
        }));
    }
    render() {
        const { isAtBottom, items, interval } = this.state;

        return (
            <div>
                <button onClick={() => this.addItem()} type>Add Stuff</button>
            
                <ScrollableFeed>
                {items.map((item, i) => <div key={i}>{<Post text={item}></Post>}</div>)}
                </ScrollableFeed>
            </div>
        );
    }
}

export default Jobs;