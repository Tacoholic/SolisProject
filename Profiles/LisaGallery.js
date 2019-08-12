import React, { Component } from 'react';

import { View, Button } from 'react-native';

import TimedSlideshow from 'react-native-timed-slideshow';

class LisaGallery extends React.Component{

    static navigationOptions = {
        title: "Lisa's Gallery",
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
				uri: "https://i.pinimg.com/474x/c9/be/ad/c9beadfa8f6d739c5b61695cfd490f28.jpg",
				title: "Senior Portrait",
                text: "Springfield, IL",
                duration: 3000
			},
			{
				uri: "https://i.pinimg.com/564x/39/a2/93/39a293f167c3336b04edd651438e311f.jpg",
				title: "My new hobby",
				text: "Springfield",
				duration: 3000
			},
			{
				uri: "https://i.pinimg.com/474x/4f/62/17/4f621710d6424668960c0a2faecc0202.jpg",
				title: "Senior Pictures",
                text: "Sprigfield, Il",
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

export default LisaGallery;

