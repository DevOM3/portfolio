import React, { FormEvent, useState } from "react";
import { storage } from "../../services/firebase";
import adminAchievementStyles from "../../styles/pages/admin/AdminAchievements.module.css";

const Achievements = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadAchievement = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await storage.ref("/");
    setLoading(false);
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
          accept="images/"
          className={adminAchievementStyles.imageInput}
          placeholder="Click here or drag and drop an image to upload"
          required
        />
        <input
          type="text"
          placeholder="Title"
          className={adminAchievementStyles.titleInput}
          required
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
    </div>
  );
};

export default Achievements;
