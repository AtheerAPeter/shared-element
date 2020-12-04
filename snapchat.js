import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const Snapchat = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      '__cfduid=dd4722f9e72aef8221504c92b620424f51606993928',
    );
    fetch('https://picsum.photos/v2/list', {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <View style={{backgroundColor: '#ededed'}}>
        <ScrollView
          contentContainerStyle={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {data.map((item) => (
            <TouchableOpacity
              style={{
                height: 300,
                borderRadius: 20,
                marginVertical: 5,
              }}
              key={item.id}
              onPress={() => navigation.push('Story', item)}>
              <SharedElement id={`item.${item.id}.photo`}>
                <Image
                  style={{
                    height: 300,
                    width: 170,
                    resizeMode: 'cover',

                    borderRadius: 20,
                  }}
                  source={{uri: item.download_url}}
                />
              </SharedElement>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Snapchat;
