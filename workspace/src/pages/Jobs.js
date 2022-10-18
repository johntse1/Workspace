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
                <Button text='Create Post' onClick={() => this.addItem()} type></Button>
            
            </div>
        );
    }
}

export default Jobs;