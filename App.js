import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import uuid from "react-native-uuid";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState();
  const [value, setValue] = useState([]);

  const handlePress = () => {
    if (text !== "") {
      setText("");
      setValue([...value, text]);
    }
  };

  const handleDelete = (index) => {
    setValue((prevValue) => {
      const newValue = [...prevValue];
      newValue.splice(index, 1);
      return newValue;
    });
  };
  const handleEdit = (index) => {
    console.log(index);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
        }}
      >
        TODO app
      </Text>
      <View style={styles.outerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            placeholder="Enter todo "
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />
        </View>
        <TouchableOpacity onPress={handlePress} style={styles.addButton}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          gap: 10,
        }}
      >
        {value != [""] &&
          value.map((val, index) => {
            return (
              <View
                key={index}
                style={{
                  gap: 10,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",

                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ width: 150 }}>{val} </Text>
                  <TouchableOpacity>
                    <Text
                      onPress={() => handleEdit(index)}
                      style={{ width: 25 }}
                    >
                      Edit
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{ width: 50 }}
                      onPress={() => handleDelete(index)}
                    >
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.underline} />
              </View>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    padding: 10,

    marginTop: 20,
  },

  outerContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,

    justifyContent: "space-between",
  },
  addButton: {
    backgroundColor: "red",
    marginTop: 10,
    width: 100,
    height: 30,
    fontSize: 15,
    color: "#f44336",
    alignItems: "center",
    justifyContent: "center",
  },
  underline: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
