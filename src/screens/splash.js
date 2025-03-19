import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getData } from '../lib/asynstorage'

export default function splash(navigation) {

  const chekToken = async ()=>{
    const token = await getData('token')
    if (!token) return navigation.replace('Login')
    navigation.replace('Home')
  }

  useEffect(()=>{
    chekToken()
  },[])

  return (
    <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
      <Text>splash</Text>
    </View>
  )
}

const styles = StyleSheet.create({})