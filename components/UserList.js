import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from './redux/action'


const UserList = () => {
    const dispatch = useDispatch();
    const UserList = useSelector((state) => state.reducer)
    console.log(UserList)
    useEffect(() => {
        dispatch(getUserList())
    }, [])
    return (
        <View styles={styles.container}>
          {
            UserList.length ?
            UserList.map((item)=>
                <Text style={styles.text}>{item.name}</Text>
            )
            :
            null
          }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 30,
        textAlign: 'right',
        padding: 10,
        backgroundColor: 'orange'
    }
})

export default UserList