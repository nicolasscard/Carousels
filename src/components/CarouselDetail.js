import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { VideoPlayer } from './VideoPlayer';

class CarouselDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      carousel: this.props.carousel,
      itemTitle: '',
      itemVideo: '',
      modalVisible: false
    };
    this.renderPostal = this.renderPostal.bind(this);
    this.renderThumb = this.renderThumb.bind(this);
  }

  renderPostal({ item, index }) {
    const { title, url } = item;
    const {
      itemTitleStyle,
      cardNotAvailable,
      imageStyle
    } = styles;

    return (
        <TouchableOpacity
          style={{ margin: 5 }}
          onPress={() => this.setState({
            itemTitle: item.title,
            itemVideo: item.video,
            modalVisible: true
          })}
        >
          {url
            ? <Image
                style={[imageStyle, { borderRadius: 5 }]}
                source={{ uri: `${url}&${index}` }}
              />
            : <View style={[imageStyle, cardNotAvailable, { borderRadius: 5 }]}>
                <Text style={itemTitleStyle}>{'Image not available'}</Text>
              </View>
          }
          <View style={{ position: 'absolute', bottom: 2, width: '100%' }}>
            <Text style={[itemTitleStyle, { color: url ? '#f2f2f2' : '#e6e6e6', fontWeight: 'bold' }]}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>
    );
  }

  renderThumb({ item, index }) {
    const { title, url } = item;
    const {
      itemTitleStyle,
      cardItemTitle,
      cardNotAvailable,
      imageStyle
    } = styles;

    return (
      <TouchableOpacity
        style={{ margin: 5 }}
        onPress={() => this.setState({
              itemTitle: item.title,
              itemVideo: item.video,
              modalVisible: true
            })}
      >
        {url
          ? <Image
              style={[imageStyle, { borderTopRightRadius: 3, borderTopLeftRadius: 3 }]}
              source={{ uri: `${url}&${index}` }}
            />
          : <View style={[imageStyle, cardNotAvailable, { borderTopRightRadius: 3, borderTopLeftRadius: 3 }]}>
              <Text style={[itemTitleStyle]}>{'Image not available'}</Text>
            </View>
        }
        <View style={cardItemTitle}>
          <Text
            style={[itemTitleStyle, { color: '#808080', fontWeight: 'bold' }]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  onDecline() {
    this.setState({ modalVisible: false });
  }

  render() {
    const { title, type, items } = this.state.carousel;
    const { itemTitle, itemVideo } = this.state;

    let renderItem = null;
    if (type === 'poster') renderItem = this.renderPostal;
    else renderItem = this.renderThumb;

    return (
      <Card>
        <CardSection>
          <Text
            style={[
              styles.carouselTitleStyle,
              { textTransform: type === 'poster' ? 'none' : 'uppercase' }]}
          >
            {title}
          </Text>
        </CardSection>

        <CardSection>
          <Carousel
            data={items}
            renderItem={renderItem}
            itemWidth={type === 'poster' ? 120 : 240}
            sliderWidth={type === 'poster' ? 120 : 240}
            itemHeight={180}
            sliderHeight={180}
            layout={'default'}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
          />
        </CardSection>

        <VideoPlayer
          visible={this.state.modalVisible}
          onDecline={this.onDecline.bind(this)}
          video={itemVideo}
        >
          {itemTitle}
        </VideoPlayer>
      </Card>
    );
  }
}

const styles = {
  carouselTitleStyle: {
    fontSize: 18,
    color: '#e65c00',
    fontWeight: 'bold'
  },
  itemTitleStyle: {
    fontSize: 13,
    color: '#808080',
    textAlign: 'center'
  },
  cardItemTitle: {
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    width: '100%',
    height: 25,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardNotAvailable: {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: '#f2f2f2'
  },
  imageStyle: {
    flex: 1,
    height: 180,
    width: null,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default CarouselDetail;
