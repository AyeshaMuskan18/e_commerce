import { View, StyleSheet, Text, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addTocart, removeFromCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleaddTocart = (item) => {
    dispatch(addTocart(item))
  }
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name));
  }
  useEffect(() => {
    let result = cartItems.filter((element)=>{
        return element.name === item.name
    });
    if(result.length){
      setIsAdded(true);
    }else{
      setIsAdded(false);
    }
  }, [cartItems])
  return (
    <View style={styles.product}>
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: item.image }} />
      {
        isAdded ?
          <Button title='Remove from cart' onPress={() => handleRemoveFromCart(item)} />
          :
          <Button title='Add to cart' onPress={() => handleaddTocart(item)} />
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  product: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomcolor: 'orange',
    borderBottonWidth: 8,
    padding: 10,
  }
})

export default Product