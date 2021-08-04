import React, { Component } from 'react';

const withPlaceHolderolder = WrappedComponent => (
    class HOC extends Component {
        render() {
            console.log('HOC');
            return (
                <WrappedComponent 
                    placeholder='Mon HOC'
                    {... this.props}
                />
            )
        }

    }
)

export default withPlaceHolderolder