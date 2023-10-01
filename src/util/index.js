export const util = {
  getGreeting: () => {
    //using hour to display correct greeting and image
    const today = new Date();
    const hour = today.getHours();
    // if morning return morning and so on
    if (hour >= 0 && hour <= 11) {
      return "Morning";
    } else if (hour >= 12 && hour <= 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  },
};
