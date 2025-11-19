export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: UserModel;
}

export interface UserModel {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  kyc_status: string;
  role: string;
  created_at: string;
  updated_at: string;
}