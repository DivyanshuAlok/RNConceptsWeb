import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Card = ({item}) => {
  const [author, setAuthor] = useState("")

  useEffect(()=>{
    //set author string 
    if(item.authors.length>1){
     setAuthor( item.authors.map((author)=>author.name).join(", "))
    }
    else{
      setAuthor(item.authors[0].name)
    }
  },[])

  return (
    <View>
      <Text>Title : {item.title}</Text>
      <Text>Author(s) : {author}</Text>
      <Text>Genre : {item.title}</Text>
      <Text>Publication : {item.first_publish_year}</Text> 
      <Text>Description : {item.first_publish_year}</Text>
      <Text>    </Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})