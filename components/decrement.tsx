const Decrement: React. FC<DecrementProps> = (( value, setValue }) =>{


type IncrementProps = { value: number; setValue: (value: number) => void };
                       
const handleDecrement: = () =>{
};
  return(
    <View style={styles.container}>
      <TouchalbeOpacity onPress={() => console.log("Decrement")}>
        <Text style-{styles.text}>Decrement </Text>
      <TouchableOpacity>
    </View>
  );
};

export default Decrement;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
        justifyContent: "center"
        alignItems: "center"
        BackgroundColor:"#fff",
        },
        text: {
          fontSize: 20,
          color: :black",
        }
        });
