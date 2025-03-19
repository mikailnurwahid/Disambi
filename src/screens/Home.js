import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '@react-native-vector-icons/octicons'

export default function Home(navigation) {
  return (
    <View style={styles.container}>
      <View style={{height:50 , justifyContent:'center', alignItems:'center',  backgroundColor:'#A0D1E6'}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Home</Text>
      </View>
      <ScrollView style={{backgroundColor:'#92CEE8',paddingHorizontal:12,}}>
        <View style={{marginTop:12, elevation:3, borderRadius:12, backgroundColor:'#7BC8E7', padding:8, flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
          <TouchableOpacity>
            <Icon name='person-fill' size={40} color='gray'/>
          </TouchableOpacity>
          <View style={{borderRadius:12, padding:8}}>
            <Text style={{fontSize:15, fontWeight:'400'}}>Disambi</Text>
            <Text style={{fontSize:15, fontWeight:'400'}}>Disambi</Text>
            <Text style={{fontSize:15, fontWeight:'400'}}>Disambi</Text>
          </View>
          <TouchableOpacity>
            <Icon name='trash' size={40} color='gray'/>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={{position:'absolute', right:15, bottom:15}} >
        <Icon name='plus-circle' size={50}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },

})