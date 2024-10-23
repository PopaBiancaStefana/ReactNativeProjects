import CustomHeader from "../layout/CustomHeader";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import Colors from "../constants/Colors";
import IconButton from "../components/Buttons/IconButton";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: "modal",
            headerTitle: "Filter",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => (
              <IconButton
                icon="close-outline"
                link="\"
                size={28}
                color={Colors.primary}
              />
            ),
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}
