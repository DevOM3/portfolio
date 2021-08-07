import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import ExistingAchievements from "../../components/admin/ExistingAchievements";
import { storage } from "../../services/firebase";
import adminAchievementStyles from "../../styles/pages/admin/AdminAchievements.module.css";

interface AchievementsInterface {
  id: string;
  imageURL: string;
  title: string;
}

const Achievements = () => {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingAchievements, setLoadingAchievements] = useState(true);
  const [existingAchievements, setExistingAchievements] = useState<
    AchievementsInterface[]
  >([]);

  const getExistingAchievements = () => {
    !loadingAchievements && setLoadingAchievements(true);
    axios.get("/api/achievements").then((response) => {
      setExistingAchievements(response.data);
      setLoadingAchievements(false);
    });
  };

  useEffect(() => {
    getExistingAchievements();
  }, []);

  const uploadAchievement = async (e: FormEvent) => {
    e.preventDefault();

    if (prompt("Enter your password") === "Bhargavi@2012") {
      if (image) {
        setLoading(true);
        try {
          const storageRef = await storage.ref(
            `/achievements/${image?.name}-${new Date()}`
          );
          await storageRef.put(image);
          const imageURL = await storageRef.getDownloadURL();

          await axios.post("/api/achievements", { imageURL, title });
          setImage(null);
          setTitle("");
          getExistingAchievements();
        } catch (error) {
          alert(error);
        }
        setLoading(false);
      }
    } else {
      alert("Wanna be Hacker? Go and learn HTML 🤣🤣🤣");
    }
  };

  return (
    <div className={adminAchievementStyles.adminAchievements}>
      <form
        className={adminAchievementStyles.form}
        onSubmit={(e: FormEvent) => uploadAchievement(e)}
      >
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          className={adminAchievementStyles.imageInput}
          placeholder="Click here or drag and drop an image to upload"
          required
          onChange={(e) => setImage(e.target.files?.item(0)!)}
        />
        <input
          type="text"
          placeholder="Title"
          className={adminAchievementStyles.titleInput}
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {loading ? (
          <progress className={adminAchievementStyles.progress} />
        ) : (
          <input
            type="submit"
            value="Add achievement"
            className={adminAchievementStyles.submitButton}
          />
        )}
      </form>
      <div className={adminAchievementStyles.container}>
        {loadingAchievements ? (
          <CircularProgress />
        ) : (
          existingAchievements.map((existingAchievement) => (
            <ExistingAchievements
              key={existingAchievement?.id}
              id={existingAchievement?.id}
              imageURL={existingAchievement?.imageURL}
              title={existingAchievement?.title}
              getExistingAchievements={getExistingAchievements}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Achievements;
