import React from 'react';
import { Text, View, TouchableOpacity, Modal, WebView } from 'react-native';
import { CardSection } from './common/CardSection';

const VideoPlayer = ({ visible, onDecline, video }) => {
  const {
    containerStyle,
    containerButtonCloseStyle,
    buttonCloseStyle,
    textCloseIconStyle,
    videoCardSectionStyle
  } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={containerButtonCloseStyle}>
          <TouchableOpacity style={buttonCloseStyle} onPress={onDecline}>
            <Text style={textCloseIconStyle}>x</Text>
          </TouchableOpacity>
        </CardSection>

        <CardSection style={{ padding: 0 }}>
          <View style={videoCardSectionStyle}>
            {video
              ? <WebView source={{ uri: video }} />
              : <Text style={styles.itemTitleStyle}>{'Video not available'}</Text>
            }
          </View>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtonCloseStyle: {
    padding: 0,
    width: 260,
    backgroundColor: '#e65c00',
    justifyContent: 'flex-end'
  },
  buttonCloseStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: 15,
    height: 15
  },
  textCloseIconStyle: {
    lineHeight: 15,
    fontWeight: 'bold',
    fontSize: 15
  },
  itemTitleStyle: {
    fontSize: 13,
    color: '#808080',
    textAlign: 'center'
  },
  videoCardSectionStyle: {
    backgroundColor: 'black',
    width: 260,
    height: 145,
    justifyContent: 'center'
  }
};

export { VideoPlayer };
