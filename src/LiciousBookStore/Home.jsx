import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { FlatList } from 'react-native-web'
import Card from './Card'

const Home = () => {

  const [bookList, setBookList] = useState([])

  const fetchBook = async()=>{
    let response = await fetch("https://openlibrary.org/subjects/sci-fi.json?details=true")
    let data = await response.json()
    setBookList(data.works)
  }

  useEffect(()=>{
    fetchBook();
  },[])


  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={bookList}
        renderItem={({item})=><Card item={item}/>}
        keyExtractor={item=>item.key}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})