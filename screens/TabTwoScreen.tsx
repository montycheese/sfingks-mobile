import * as React from 'react';
import {StyleSheet, View, Text, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';

import BaseView from "../components/BaseView";
import PointsBadge from "../components/PointsBadge";
import {useEffect} from "react";
import {useState} from "react";
import CenteredLoadingSpinner from "../components/CenteredLoadingSpinner";
import API, {graphqlOperation} from "@aws-amplify/api";
import {getQuest, questsByCategory} from "../src/graphql/queries";
import {QuestCategory} from "../src/API";

export default function TabTwoScreen({ navigation }) {
    const [isLoading, setIsLoading] = useState(true);
    const [featuredQuests, setFeaturedQuests] = useState([]);
    const [hotQuests, setHotQuests] = useState([]);
    const [newQuests, setNewQuests] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const featuredQuests = await API.graphql(graphqlOperation(questsByCategory, { category : QuestCategory.FEATURED }));
          setFeaturedQuests(featuredQuests.data.questsByCategory.items);
          setIsLoading(false);

          const hotQuests = await API.graphql(graphqlOperation(questsByCategory, { category : QuestCategory.HOT }));
          setHotQuests(hotQuests.data.questsByCategory.items);

          const newQuests = await API.graphql(graphqlOperation(questsByCategory, { category : QuestCategory.NEW }));
          setNewQuests(newQuests.data.questsByCategory.items);
      }
      fetchData();
  }, []);

    if (isLoading) {
        return (
            <BaseView>
                <CenteredLoadingSpinner />
            </BaseView>
        );
    }

  return (
      <BaseView>
        <ScrollView style={styles.container}>
            {renderSideScrollList(QuestCategory.FEATURED, featuredQuests)}
            {renderSideScrollList(QuestCategory.HOT, hotQuests)}
            {renderSideScrollList(QuestCategory.NEW, newQuests)}
        </ScrollView>
      </BaseView>
  );

  function renderSideScrollList(title, items) {
      return (
          <View style={styles.rowContainer}>
              <View style={{flexDirection: "row", flex: 1, alignItems: 'center'}}>
                  <Text style={styles.rowHeaderTitle}>{title}</Text>
                  <TouchableOpacity onPress={() => handlePressSeeAll(title)} style={styles.rowSeeAllTitleContainer}>
                    <Text style={styles.rowSeeAllTitle}>See All</Text>
                  </TouchableOpacity>
              </View>
              <FlatList horizontal={true} data={items} renderItem={renderItem}
                        ItemSeparatorComponent={renderSeparator}
                        keyExtractor={(item, index) => item.questId}
              />
          </View>
      );
  }

  function renderItem({item, separators}) {
    return (
        <TouchableOpacity onPress={() => handlePressItem(item.questId)} key={item.questId}>
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

  function handlePressItem(id: string) {
      navigation.navigate('QuestDetailsScreen', { questId: id });
  }

  function handlePressSeeAll(sectionId: string) {
      navigation.navigate('QuestSectionListScreen', { sectionId });
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
        justifyContent: 'flex-end',
        fontFamily: 'ShareTechMono_400Regular'
    },
    rowSeeAllTitleContainer: {
        flex: 0.2
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
