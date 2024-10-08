export type userType = {
  "id": number,
  "username": string,
  "first_name": string,
  "last_name": string,
  "email": string,
}

export type trackType = {
  "_id": number,
  "name": string,
  "author": string,
  "release_date": string,
  "genre": string,
  "duration_in_seconds": number,
  "album": string,
  "logo": string | undefined,
  "track_file": string,
  "stared_user": []
}