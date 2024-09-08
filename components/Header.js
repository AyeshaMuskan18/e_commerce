import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const Header = () => {
    const cartData = useSelector((state)=>state.reducer)
    const [cartItems, setCartItems] = useState(0);
    console.log(cartData);
    useEffect(()=>{
      setCartItems(cartData.length);
    },[cartData])

    return (
        <View styles={styles.container}>
            <Text style={styles.text}>{cartItems}</Text>
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

export default Header