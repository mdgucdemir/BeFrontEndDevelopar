import { useSession } from "next-auth/react";

import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className={classes.profile}>Loading...</p>;
  }

  if (status === "authenticated") {
    return (
      <section className={classes.profile}>
        <h1>Your User Profile</h1>
        <ProfileForm />
      </section>
    );
  }
}

export default UserProfile;
