// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  scrollContainer: {
   backgroundColor:'silver',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"silver"
  },
  background: {
       flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  pickerContainer: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#f0f8ff',
        padding: 0,
        marginBottom: 20,
        height: 55,
        color: "",
        placeholderTextColor:"#333" 
      },
      pickerContainer1: {
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 15,
            backgroundColor: 'white',
            marginBottom: 20,
            padding: 15,
          },
  text1: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 19,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
     backgroundColor:"white",
    marginBottom: 15,
  },
  picker: {
    height: 55,
    marginBottom: 15,
     backgroundColor:"white",
     borderColor:"black"
  },
  dobInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'silver',
     backgroundColor:"silver",
    borderRadius: 15,
    marginBottom: 5,
    padding: 10,
  },
  calendarIcon: {
    marginLeft: -35,
    marginTop: -14,
    marginRight: 14,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f0f8ff',
    marginBottom: 20,
  },
  datePickerText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 40,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#1e90ff',
//     padding: 15,
    marginVertical: 5,
    marginBottom: 40,
    elevation: 5, // Adds shadow to the button
  },
  pasteButton: {
    marginLeft: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pasteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});






export default styles;
