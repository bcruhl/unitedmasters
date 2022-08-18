let locale = 'en';
const strings = {};

// TODO: move to json files
strings.en = {
  mainHeaderMessage: 'UnitedMasters: Coding Challenge',
  logoAltText: 'Logo for UnitedMasters',
  selectedNodeId: 'Selected Node ID: {nodeId}',
  noNodeSelected: 'None',
  entryItem: '{left}: {right}',
  favoriteColor: 'Favorite Color',
  hairColor: 'Hair Color',
  age: 'Age',
  hobbies: 'Hobbies',
};

// Convert a message like "Hello, {name}" to "Hello, Chad"
// given the interpolations object {name: "Chad"}
const interpolate = (message, interpolations) => {
  return Object.keys(interpolations).reduce(
    (interpolated, key) => interpolated.replace(
      new RegExp(`{\s*${key}\s*}`, "g"),
      interpolations[key],
    ),
    message,
  );
}

export default {
  /**
   * Returns the localized string for the given key
   * @param key
   * @param args
   *     locale: String - two-letter locale code
   * @returns {(String|Object)}
   */
  str: function(key, options = {}, args) {
    let myLocale = locale;
    if (args) {
      myLocale = args.locale || locale;
    }
    if (Object.prototype.hasOwnProperty.call(strings, myLocale)) {
      if (Object.prototype.hasOwnProperty.call(strings[locale], key)) {
        return interpolate(strings[myLocale][key], options);
      } else {
        throw new Error(`Unknown string key: ${key} for locale: ${myLocale}`);
      }
    } else {
      throw new Error(`Unknown string locale: ${myLocale}`);
    }
  },

  setLocale: function(loc) {
    locale = loc;
  },
};
