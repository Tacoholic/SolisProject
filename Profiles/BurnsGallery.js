import React, { Component } from 'react';

import { View, Button } from 'react-native';

import TimedSlideshow from 'react-native-timed-slideshow';

class BurnsGallery extends React.Component{

    static navigationOptions = {
        title: "Mr. Burns' Gallery",
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
				uri: "https://static-media.fxx.com/img/FX_Networks_-_FXX/111/463/Simpsons_10_21.jpg",
				title: "Happy Hour",
                text: "Springfield, IL",
                duration: 3000
			},
			{
				uri: "https://assets.fxnetworks.com/cms/prod/2016/12/simpsonsworld_social_og_burns_1200x1200.jpg",
				title: "Bored at home",
				text: "Springfield",
				duration: 3000
			}
		]

		return (
           
			<TimedSlideshow
				items={items}
			/>

		);
    }
}

export default BurnsGallery;

