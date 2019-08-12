import React, { Component } from 'react';

import { View, Button } from 'react-native';

import TimedSlideshow from 'react-native-timed-slideshow';

class BarneysGallery extends React.Component{

    static navigationOptions = {
        title: "Bart's Gallery",
        headerStyle: {
          backgroundColor: "#53b4e6"
        },
        headerTintColor: "#f6c945",
        headerTitleStyle: {
          fontWeight: "bold"
        },
       
      };

	render() {
		const items = [
			{
				uri: "https://i.pinimg.com/564x/ae/15/49/ae15492ef58a3769dbca57eec06589a9.jpg",
				title: "In my element",
                text: "Springfield, IL",
                duration: 3000
			},
			{
				uri: "https://i.pinimg.com/564x/00/b8/72/00b872af4f9ebde9a6f3eae250e8873c.jpg",
				title: "Me again.",
                text: "Bedroom",
                duration: 3000,
				fullWidth: false
            }
		]

		return (
           
			<TimedSlideshow
				items={items}
			/>

		);
    }
}

export default BarneysGallery;
