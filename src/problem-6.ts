{
  // 6 - return updated profile (interface)

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    profile: Profile,
    updateProfile: Partial<Profile>
  ): Profile => {
    return { ...profile, ...updateProfile };
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
