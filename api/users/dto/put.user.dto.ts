export interface PutUserDto {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  permissionFlags: number;
  profile_img: string;
  cloudinary_id: string;
  userImages: string[];
}
