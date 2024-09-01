import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Page = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    // @ts-ignore
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  // @ts-ignore
  return <Redirect href="/(auth)/welcome" />;
};

export default Page;
