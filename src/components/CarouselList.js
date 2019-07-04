import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CarouselDetail from './CarouselDetail';

const posterUrl = 'http://placeimg.com/320/480/any';
const thumbUrl = 'http://placeimg.com/640/480/any';
const videoUrl = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4';
class CarouselList extends Component {
  state = { carousels: [] };

  componentWillMount() {
    // creo un array de carousels
    const carousels = this.createCarousels();
    this.setState({ carousels });
  }

  createCarousels() {
    const carousels = [];

    // determino aletoriamente la cantidad de carousels
    const randomNumberCarousels = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < randomNumberCarousels; i++) {
      let type = '';
      let title = '';

      // determino aletoriamente el tipo de carousel
      const randomTypeCarousel = Math.floor(Math.random() * 2) + 1;
      if (randomTypeCarousel === 2) {
        type = 'poster';
        title = `Poster Carousel ${i}`
      }
      else {
        type = 'thumb';
        title = `Thumb Carousel ${i}`
      }

      // creo un array de items para el carousel
      const items = this.createItems(type);

      carousels.push({
        title,
        type,
        items
      });
    }
    console.log(carousels);
    return carousels;
  }

  createItems(type) {
    const items = [];

    // determino aletoriamente la cantidad de items
    const randomNumberItems = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < randomNumberItems; i++) {

      //creo un item para el array de items
      const item = this.createItem(type, i);
      items.push(item);
    }
    return items;
  }

  createItem(type, i) {
    // determino aleatoriamente si tendra imagen o video (20% probabilidad)
    const randomUrlImage = Math.floor(Math.random() * 5) + 1;
    const randomUrlVideo = Math.floor(Math.random() * 5) + 1;
    let url = '';
    let video = '';

    if (randomUrlImage !== 2) {
      if (type === 'poster') url = posterUrl;
      else url = thumbUrl;
    }
    else url = null;

    if (randomUrlVideo !== 2) {
      video = videoUrl;
    }
    else video = null;

    return { title: `Title ${i}`, url, video };
  }

  renderCarousels() {
    return this.state.carousels.map(carousel =>
      <CarouselDetail key={carousel.title} carousel={carousel} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderCarousels()}
      </ScrollView>
    );
  }
}

export default CarouselList;
