import React, { useContext } from 'react'
import { FlatList, View, Text } from 'react-native'
import CompetitionCard from './CompetitionCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import competitionContext from '../store/competitionContext';



const competitionList = [
 {
  id: '1',
  title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
  startDate: '2024-01-01',
  endDate: '2024-01-02',
  location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
 },
 {
  id: '2',
  title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
  startDate: '2024-02-01',
  endDate: '2024-02-02',
  location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
 },
 {
  id: '3',
  title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
  startDate: '2024-02-01',
  endDate: '2024-02-02',
  location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
 },
 {
  id: '4',
  title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
  startDate: '2024-02-01',
  endDate: '2024-02-02',
  location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
 },
 {
  id: '5',
  title: '20th Asian Game - Achi Nagoya 2026 (Winter)',
  startDate: '2024-02-01',
  endDate: '2024-02-02',
  location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name',
 },
];


const CompetitionList = () => {
 const {selectedCompetition, setSelectedComption} = useContext(competitionContext);
 
 return (
  <SafeAreaView style={tw`flex-1`}>
   <Text>{JSON.stringify(selectedCompetition)}</Text>
   <FlatList
    data={competitionList}
    keyExtractor={(competition) => competition.id}
    renderItem={(competition)=><CompetitionCard competition={competition.item} onPress={() => {setSelectedComption(competition.item) 

     
    }} />}
    contentContainerStyle={tw``}
    showsVerticalScrollIndicator={false} 
   />
  </SafeAreaView>
  // <View>
  //  {competitionList.map(competition => <CompetitionCard competition={competition}/>)}
  // </View>
 )
}

export default CompetitionList