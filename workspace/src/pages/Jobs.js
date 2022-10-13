import React from 'react'
import Post from '../components/feed/Post.js'
import Button from '../components/Button.js';
class Jobs extends React.Component{
    state = {
        items: [
            'Item 1', 'Item 2','Big'
        ],
      };
    addItem() {
        this.setState(prevState => ({
          items: [...prevState.items, 'bruh']
        }));
    }
    render() {
        const { items } = this.state;

        return (
            <div>
                <Button onClick={() => this.addItem()} type>Add Stuff</Button>
            
                {items.map((item, i) => <div key={i}>{<Post text={item}></Post>}</div>)}
            </div>
        );
    }
}

export default Jobs;