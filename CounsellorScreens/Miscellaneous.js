import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker'; // Document picker for resume
import * as ImagePicker from 'expo-image-picker'; // Image picker for profile pictures
import * as Clipboard from 'expo-clipboard'; // Clipboard for pasting links
import { useNavigation } from '@react-navigation/native';

const Miscellaneous = () => {
  const [resume, setResume] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [socialMediaLink, setSocialMediaLink] = useState('');
  const navigation = useNavigation();

  // Request media library permissions
  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Required',
        'Please grant permission to access your device storage.'
      );
      return false;
    }
    return true;
  };

  const handleResumeUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf', // Only allow PDF files
        copyToCacheDirectory: true,
      });
  
      console.log('Document Picker Result:', result);
  
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        setResume(file); // Save the first file in assets
        Alert.alert('Success', `Resume uploaded: ${file.name}`);
      } else if (result.canceled) {
        Alert.alert('Cancelled', 'No document was selected.');
      } else {
        Alert.alert('Error', 'No valid document found in the selection.');
      }
    } catch (error) {
      console.error('Error in handleResumeUpload:', error);
      Alert.alert('Error', 'An unexpected error occurred during file selection.');
    }
  };
  
  // Handle profile picture upload
  const handleProfilePictureUpload = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.assets[0]);
      Alert.alert('Success', 'Profile picture uploaded successfully!');
    }
  };

  // Handle pasting link from clipboard
  const handlePasteLink = async () => {
    const link = await Clipboard.getStringAsync();
    if (link) {
      setSocialMediaLink(link);
      Alert.alert('Success', 'Link pasted successfully!');
    } else {
      Alert.alert('Error', 'No link found in clipboard.');
    }
  };

  // Handle submit
  const handleSubmit = () => {
    if (!resume || !profilePicture || !socialMediaLink.trim()) {
      Alert.alert('Error', 'Please complete all fields before submitting.');
      return;
    }

    // Navigate to ProfessionalAchievement with the uploaded data
    navigation.navigate('', {
      resume,
      profilePicture,
      socialMediaLink,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Add your Profile</Text>

      {/* Upload Resume */}
      <Text style={styles.subHeading}>Upload Resume</Text>
      <TouchableOpacity style={styles.button} onPress={handleResumeUpload}>
        <Text style={styles.buttonText}>
          {resume ? `Uploaded: ${resume.name}` : 'Upload Resume'}
        </Text>
      </TouchableOpacity>

      {/* Profile Picture */}
      <Text style={styles.subHeading}>Profile Picture</Text>
      <TouchableOpacity style={styles.button} onPress={handleProfilePictureUpload}>
        <Text style={styles.buttonText}>
          {profilePicture
            ? `Uploaded: ${profilePicture.uri.split('/').pop()}`
            : 'Upload Profile Picture'}
        </Text>
      </TouchableOpacity>

      {/* Social Media Link */}
      <Text style={styles.subHeading}>Social Media Link</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter URL of your social media handle"
          placeholderTextColor="gray"
          value={socialMediaLink}
          onChangeText={setSocialMediaLink}
        />
        <TouchableOpacity style={styles.pasteButton} onPress={handlePasteLink}>
          <Text style={styles.pasteButtonText}>Paste</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'silver',
  },
  mainHeading: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: 'white',
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
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Miscellaneous;
