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
import styles from '../styles.js';

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
      <Text style={styles.text1}>Upload your Profile</Text>

      {/* Upload Resume */}
      <Text style={styles.label}>Upload Your Resume</Text>
      <TouchableOpacity style={styles.pasteButton} onPress={handleResumeUpload}>
        <Text style={styles.buttonText}>
          {resume ? `Uploaded: ${resume.name}` : 'Upload Resume'}
        </Text>
      </TouchableOpacity>

      {/* Profile Picture */}
      <Text style={styles.label}>Upload your Profile Picture</Text>
      <TouchableOpacity style={styles.pasteButton} onPress={handleProfilePictureUpload}>
        <Text style={styles.buttonText}>
          {profilePicture
            ? `Uploaded: ${profilePicture.uri.split('/').pop()}`
            : 'Upload Profile Picture'}
        </Text>
      </TouchableOpacity>

      {/* Social Media Link */}
      <Text style={styles.label}>Paste your Social Media Link</Text>
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
export default Miscellaneous;
