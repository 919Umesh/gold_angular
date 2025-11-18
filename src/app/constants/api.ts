export const API_CONSTANTS = {
  TOKEN : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NjM3MDM3NTEsImlhdCI6MTc2MzQ0NDU1MX0.z3v7viUVuh6YgzTslmg-eZD6b9AprPM4GKjfOIN7vDA',
  BASE_URL: 'http://localhost:8080/api/v1',
  ENDPOINTS: {
    TRANSACTION: '/transaction',
    PROFILE: '/auth/profile', 
    WALLET: '/wallet',
    AUTH: '/auth'
  }
} as const;