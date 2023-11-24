// import React from "react";

// function Download() {
//   return <div>Download</div>;
// }

// export default Download;

import React from "react";
import { View, Image, Button, Alert } from "react-native";
import RNFetchBlob from "rn-fetch-blob"; // For file handling

export default function Download() {
  const imageUrl = "https://example.com/path/to/your/image.jpg";

  const downloadImage = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // Get the file extension from the URL
      const fileName = imageUrl.split("/").pop();
      const ext = fileName.split(".").pop();

      // Create a path for the downloaded image
      const path = `${RNFetchBlob.fs.dirs.DownloadDir}/downloaded_image.${ext}`;

      // Save the image to the device
      await RNFetchBlob.fs.writeFile(path, blob, "base64");

      Alert.alert("Download Complete", `Image saved at: ${path}`);
    } catch (error) {
      console.error("Error downloading image:", error);
      Alert.alert("Error", "Failed to download image");
    }
  };

  return (
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 200, height: 200, resizeMode: "cover" }}
      />
      <Button title="Download Image" onPress={downloadImage} />
    </View>
  );
}
