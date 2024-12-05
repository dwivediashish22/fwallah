import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker'; // Correct import for Expo
import { useNavigation } from '@react-navigation/native';

const Miscellaneous = () => {
  const [resume, setResume] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [socialMediaLink, setSocialMediaLink] = useState('');
  const [resumeSubmitted, setResumeSubmitted] = useState(false);
  const [profilePictureSubmitted, setProfilePictureSubmitted] = useState(false);
  const [socialMediaLinkSubmitted, setSocialMediaLinkSubmitted] = useState(false);
  const navigation = useNavigation();

  // Handle resume selection
  const handleResumeUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // This will allow all types of documents
      });
      if (result.type === 'success') {
        setResume(result);
        setResumeSubmitted(true); // Mark resume as submitted
        Alert.alert('Success', 'Resume uploaded successfully!');
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled', 'Resume upload canceled');
      } else {
        Alert.alert('Error', 'Unable to upload resume');
      }
    }
  };

  // Handle profile picture selection
  const handleProfilePictureUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'image/*', // This will allow only image files
      });
      if (result.type === 'success') {
        setProfilePicture(result);
        setProfilePictureSubmitted(true); // Mark profile picture as submitted
        Alert.alert('Success', 'Profile picture uploaded successfully!');
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled', 'Profile picture upload canceled');
      } else {
        Alert.alert('Error', 'Unable to upload profile picture');
      }
    }
  };

  const handleSubmit = () => {
    if (!resume || !profilePicture || !socialMediaLink.trim()) {
      Alert.alert('Error', 'Please complete all fields before submitting');
      return;
    }

    setSocialMediaLinkSubmitted(true); // Mark social media link as submitted
    // Navigate to Home screen
    navigation.navigate('Home');
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
      {resumeSubmitted && <Text style={styles.confirmationText}>Resume Submitted</Text>}

      {/* Profile Picture */}
      <Text style={styles.subHeading}>Profile Picture</Text>
      <TouchableOpacity style={styles.button} onPress={handleProfilePictureUpload}>
        <Text style={styles.buttonText}>
          {profilePicture
            ? `Uploaded: ${profilePicture.name}`
            : 'Upload Profile Picture'}
        </Text>
      </TouchableOpacity>
      {profilePictureSubmitted && <Text style={styles.confirmationText}>Profile Picture Submitted</Text>}

      {/* Social Media Link */}
      <Text style={styles.subHeading}>Social Media Link</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter URL of your social media handle"
        value={socialMediaLink}
        onChangeText={setSocialMediaLink}
      />
      {socialMediaLinkSubmitted && <Text style={styles.confirmationText}>Social Media Link Submitted</Text>}

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
    backgroundColor: '#ffe4b5',
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
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom:20 ,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    marginBottom:35 ,
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
