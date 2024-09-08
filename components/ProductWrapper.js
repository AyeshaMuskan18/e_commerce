import { View, Text, StyleSheet, SafeAreaView, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Product from './Product'


const ProductWrapper = ({navigation}) => {

    const products = [
        {
            name: 'Samsung Mobile',
            color: 'white',
            price: 30000,
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            name: 'Apple I phone',
            color: 'black',
            price: 130000,
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            name: 'Nokia Mobile',
            color: 'green',
            price: 20000,
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
    ]
    return (
        <SafeAreaView styles={styles.container}>
            <Button
                title='Go to User List'
                onPress={() => navigation.navigate('UserList')} />
            <Header />
            <ScrollView>
                {
                    products.map((item) => <Product item={item} />
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
    }
})

export default ProductWrapper