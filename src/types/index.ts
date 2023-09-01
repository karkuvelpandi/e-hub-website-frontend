/**
 * Redux action states.
 */
export enum ActionState {
  REQUEST = "request",
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

/**
 * When any async operations happens,
 * this can be used to mention the state of the operation.
 */
export enum AsyncState {
  IDLE = "idle",
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export enum CategoryState {
  HOME = "hone",
  KITCHEN = "kitchen",
  AUDIO_VIDEO = "audio-video",
  GADGETS = "gadgets",
  MOBILES = "mobiles",
  NEW_ARRIVAL = "new",
  TODAY_DEAL = "today-deal",
}
