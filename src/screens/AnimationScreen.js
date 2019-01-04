import React, { Component } from 'react';
import {
  Image,
  Easing,
} from 'react-native';

import FadeInView from '../animations/FadeInView';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

export default class AnimationScreen extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Image source={require('../../assets/NY1.jpg')} />
            </FadeInView>
        )
    }
}