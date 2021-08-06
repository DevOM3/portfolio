import { IconButton } from "@material-ui/core";
import { DeleteRounded, EditRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { db, storage } from "../../services/firebase";
import Image from "next/image";
import existingAchievementStyles from "../../styles/components/admin/ExistingAchievements.module.css";

interface ExistingAchievementsProps {
  id: string;
  imageURL: string;
  title: string;
  getExistingAchievements: Function;
}

const ExistingAchievements = ({
  id,
  imageURL,
  title,
  getExistingAchievements,
}: ExistingAchievementsProps) => {
  const [loading, setLoading] = useState(false);

  const editAchievement = () => {
    if (prompt("Enter your password") === "Bhargavi@2012") {
      const promptAnswer = prompt("Enter new title");
      if (promptAnswer && promptAnswer?.length > 2) {
        setLoading(true);
        db.collection("Achievements")
          .doc(id)
          .update({
            title: promptAnswer,
          })
          .then(() => {
            setLoading(false);
            getExistingAchievements();
          });
      }
    } else {
      alert("Wanna be Hacker? Go and learn HTML 🤣🤣🤣");
    }
  };

  const deleteAchievement = () => {
    if (prompt("Enter your password") === "Bhargavi@2012") {
      if (confirm("Are you sure you want to delete this achievement?")) {
        setLoading(true);
        storage
          .refFromURL(imageURL)
          .delete()
          .then(() =>
            db
              .collection("Achievements")
              .doc(id)
              .delete()
              .then(() => {
                setLoading(false);
                getExistingAchievements();
              })
          );
      }
    } else {
      alert("Wanna be Hacker? Go and learn HTML 🤣🤣🤣");
    }
  };

  return (
    <div className={existingAchievementStyles.existingAchievement}>
      {loading ? (
        <progress style={{ margin: "auto" }} />
      ) : (
        <>
          <div className={existingAchievementStyles.imageDiv}>
            <Image
              src={imageURL}
              alt={imageURL}
              height={215}
              width={250}
              layout="responsive"
              className={existingAchievementStyles.image}
            />
          </div>
          <p className={existingAchievementStyles.title}>{title}</p>
          <div className={existingAchievementStyles.buttons}>
            <IconButton
              onClick={editAchievement}
              style={{ color: "white" }}
              size="small"
            >
              <EditRounded />
            </IconButton>
            <IconButton
              onClick={deleteAchievement}
              style={{ color: "white" }}
              size="small"
            >
              <DeleteRounded />
            </IconButton>
          </div>
        </>
      )}
    </div>
  );
};

export default ExistingAchievements;
