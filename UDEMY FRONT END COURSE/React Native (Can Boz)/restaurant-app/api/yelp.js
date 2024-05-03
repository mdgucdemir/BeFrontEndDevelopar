import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer iJ9U4LszYEn4Xaa8dkti2F42sDbXP2OZusSEi8AWhwjFABqsuhgUUqEdkGbrYQZH-PjBlgCVTUg-h7UQSL1RhC5ZaP9dHUZcyZynHUYrJKnTQeamAqfxZJjtEOY0ZnYx",
  },
});
