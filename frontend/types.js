export default {};

/** @typedef {'upcoming' | 'past'} ActivityTabs */

/** @typedef {'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'} DayKeys */

/** @typedef {'Cafe' | 'WiFi' | 'Water' | 'Shower' | 'Shirts' | 'Boots'} FacilityNames */

/**
 * @typedef {object} MyNavigationProp
 * @property {(screen: Navigations) => void} navigate
 */

/** @typedef {RootNavigations | StadiumsNavigations | ProfileNavigations} Navigations */
/** @typedef {'Home' | 'Matches' | 'Stadiums' | 'Activity'} RootNavigations */
/** @typedef {'Stadiums' | 'Stadium View' | 'Booking' | 'Payment'} StadiumsNavigations */
/** @typedef {'Home' | 'Profile' | 'Login' | 'Registration'} ProfileNavigations */

/**
 * @typedef {object} LFGData
 * @property {string} name
 * @property {string} address
 * @property {number} price
 * @property {number} player_count
 * @property {number} duration
 * @property {Date} start_datetime
 */

/**
 * @typedef {object} User
 * @property {string} user_id
 * @property {string} name MAX(50)
 * @property {string} email MAX(100)
 * @property {string} password MAX(100)
 * @property {string} phone MAX(15)
 * @property {'player' | 'vendor'} user_role MAX(10), DEFAULT 'player'
 * @property {string} created_at
 * @property {string} updated_at
 */

/** @typedef {RatedField & {vendor: User, facilities: FacilityNames[]}} FullField */
/** @typedef {Field & {rating: number}} RatedField */

/**
 * @typedef {object} Field
 * @property {string} field_id
 * @property {string} vendor_id
 * @property {string} field_name
 * @property {string} address
 * @property {number} capacity
 * @property {number} price
 * @property {'available' | 'unavailable' | 'maintenance'} status
 * @property {string} [maps_id]
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {object} Review
 * @property {string} review_id
 * @property {0 | 1 | 2 | 3 | 4 | 5} rating
 * @property {string} user_id
 * @property {string} field_id
 * @property {string} [review_text]
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {object} Amenity
 * @property {string} amenity_id
 * @property {string} amenity_name
 */

/**
 * @typedef {object} FieldAmenity
 * @property {string} field_id
 * @property {string} amenity_id
 */

/**
 * @typedef {Match & {field: Field, booking: Booking}} FullMatch
 */

/**
 * @typedef {object} Match
 * @property {string} lfg_id
 * @property {'open' | 'closed'} status
 * @property {number} required_players
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @typedef {object} Booking
 * @property {string} booking_id
 * @property {string} user_id
 * @property {string} field_id
 * @property {string} start_datetime
 * @property {60 | 120} duration
 * @property {string} [lfg_id]
 * @property {number} current_players
 * @property {'pending' | 'confirmed' | 'cancelled'} status
 * @property {string} created_at
 * @property {string} updated_at
 */
