import React, { Component } from 'react';

import { View, Button } from 'react-native';

import TimedSlideshow from 'react-native-timed-slideshow';

class BartGallery extends React.Component{

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
				uri: "https://i.pinimg.com/564x/fe/18/af/fe18af309234936e231fa107c6d2b4c7.jpg",
				title: "Happy Hour",
                text: "Springfield, IL",
                duration: 3000
			},
			{
				uri: "https://i.pinimg.com/564x/20/59/7a/20597ab32ab0f7ec8a5484fa384e0bb4.jpg",
				title: "Bored at home",
				text: "Springfield",
				duration: 3000
			},
			{
				uri: "https://i.pinimg.com/474x/46/d8/93/46d893909c8a49061c11116ff7cb7a4c.jpg",
				title: "Me being silly",
                text: "Bedroom",
                duration: 3000,
				fullWidth: false
            },
            {
				uri: "https://i.pinimg.com/564x/9f/a3/4c/9fa34ceafa2a961818aec2d7a7d42d1d.jpg",
                title: "Headshot",
                text: "Springfield, IL",
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

export default BartGallery;

