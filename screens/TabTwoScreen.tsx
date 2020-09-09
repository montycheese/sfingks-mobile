import * as React from 'react';
import {StyleSheet, View, Text, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';

import BaseView from "../components/BaseView";
import PointsBadge from "../components/PointsBadge";

export default function TabTwoScreen({ navigation }) {

  // TODO: Fetch from backend.

  const carouselItems = [
      {
          title: 'Daily Challenge',
          imageUrl: 'https://picsum.photos/200/200',
          id: '123',
          totalPoints: 100
      }, {
          title: 'McDonalds October Quest',
          imageUrl: 'https://picsum.photos/200/200',
          id: '124',
          totalPoints: 200
      }, {
          title: 'September Showdown',
          imageUrl: 'https://picsum.photos/200/200',
          id: '126',
          totalPoints: 600
      },
      {
          title: 'Rock the Vote',
          imageUrl: 'https://picsum.photos/200/200',
          id: '127',
          totalPoints: 50
      },
      {
          title: 'Daily Challenge',
          imageUrl: 'https://picsum.photos/200/200',
          id: '128',
          totalPoints: 800
      }
  ];

  return (
      <BaseView>
        <ScrollView style={styles.container}>
            {renderSideScrollList('Featured', carouselItems)}
            {renderSideScrollList('Hot', carouselItems)}
            {renderSideScrollList('New', carouselItems)}
        </ScrollView>
      </BaseView>
  );

  function renderSideScrollList(title, items) {
      return (
          <View style={styles.rowContainer}>
              <View style={{flexDirection: "row", flex: 1, alignItems: 'center'}}>
                  <Text style={styles.rowHeaderTitle}>{title}</Text>
                  <Text style={styles.rowSeeAllTitle}>See All</Text>
              </View>
              <FlatList horizontal={true} data={items} renderItem={renderItem}
                        ItemSeparatorComponent={renderSeparator}
                        keyExtractor={(item, index) => item.id}
              />
          </View>
      );
  }

  function renderItem({item, separators}) {
    return (
        <TouchableOpacity onPress={() => handlePressItem(item.id)} key={item.id}>
            <View style={styles.carouselItemContainer}>
                <Image source={{uri : item.imageUrl}} style={styles.carouselItemBackground} />
                <Text style={styles.carouselItemTitle}>{item.title}</Text>
                <PointsBadge points={item.totalPoints}  style={{ marginTop: '5%' }}/>
            </View>
        </TouchableOpacity>
    );
  }

  function renderSeparator() {
      return (
          <View style={{width: '5%'}}/>
      );
  }

  function handlePressItem(id) {
      navigation.navigate('QuestDetailsScreen', { questId: id });
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '15%',
    },
    rowContainer: {
        marginHorizontal: '5%',
        marginVertical: '2.5%',
        //borderBottomWidth: 5
        //backgroundColor: 'red'
    },
    rowHeaderTitle: {
        fontSize: 32,
        color: '#fff',
        fontFamily: 'ShareTechMono_400Regular',
        flex: 0.8
    },
    rowSeeAllTitle: {
        fontSize: 12,
        color: '#fff',
        flex: 0.2,
        justifyContent: 'flex-end',
        fontFamily: 'ShareTechMono_400Regular'
    },
    carouselItemContainer: {
        height: 160,
        width: 100,
        alignItems: 'center'
    },
    carouselItemBackground: {
        height: '55%',
        width: '100%'
    },
    carouselItemTitle: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'ShareTechMono_400Regular',
        marginTop: '5%'
    }
});
